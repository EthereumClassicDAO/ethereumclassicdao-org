// @ts-check
/**
 * Writes public/sitemap.xml after `next build`, dating each entry by its own page.
 *
 * Google uses `<lastmod>` only "if it's consistently and verifiably (for example by comparing to the
 * last modification of the page) accurate", and counts as significant an update to the main content,
 * the structured data or the links on the page. So an entry keeps its date for as long as those have
 * not changed, and moves when they do.
 *
 * Each build compares every page it prerendered with the same page live on the site, which the
 * previous deploy built. Unchanged, the entry keeps the date the live sitemap gives it. Changed, new,
 * or with the live copy unreadable, it takes this build's time: a failure here can make a date too
 * new, and never hides a change.
 *
 * A live figure (hashrate, prices, chain statistics) changes on every revalidation without anyone
 * editing the page, so an element marked `data-live` is left out of the comparison along with
 * everything inside it.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import { pathToFileURL } from "node:url";

const SITE = "https://ethereumclassicdao.org";
const APP_DIR = ".next/server/app";
const OUT = "public/sitemap.xml";

/** Every lastmod this script writes, so a value read back from the live sitemap can be trusted. */
const STAMP = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/;

/** Elements that never have a closing tag. */
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"]);

/**
 * The attributes of one start tag. React escapes `>` inside attribute values, so a tag ends at the
 * first `>`.
 *
 * @param {string} tag
 * @returns {Record<string, string>}
 */
function attributes(tag) {
  /** @type {Record<string, string>} */
  const found = {};
  for (const m of tag.matchAll(/([^\s=/<>"']+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)) {
    found[(m[1] ?? "").toLowerCase()] = m[2] ?? m[3] ?? "";
  }
  return found;
}

/**
 * Removes every element that carries a `data-live` attribute, with everything inside it.
 *
 * @param {string} html
 * @returns {string}
 */
export function stripLive(html) {
  const start = /<([a-zA-Z][\w-]*)\b[^>]*\sdata-live(?:\s*=\s*(?:"[^"]*"|'[^']*'))?(?=[\s/>])[^>]*>/;
  let out = html;
  for (let m = start.exec(out); m; m = start.exec(out)) {
    const name = (m[1] ?? "").toLowerCase();
    const from = m.index;
    const after = from + m[0].length;
    if (VOID.has(name) || m[0].endsWith("/>")) {
      out = out.slice(0, from) + out.slice(after);
      continue;
    }
    const tags = new RegExp(`<(/?)${name}\\b[^>]*>`, "gi");
    tags.lastIndex = after;
    let depth = 1;
    let to = -1;
    for (let t = tags.exec(out); t; t = tags.exec(out)) {
      if (t[1] === "/") {
        depth -= 1;
        if (depth === 0) {
          to = t.index + t[0].length;
          break;
        }
      } else if (!t[0].endsWith("/>")) {
        depth += 1;
      }
    }
    if (to === -1) throw new Error(`a data-live <${name}> is never closed`);
    out = out.slice(0, from) + out.slice(to);
  }
  return out;
}

/**
 * What a search engine counts as a significant change, as one string: the title, description,
 * canonical and robots rules, every block of structured data, and the main content's text and links.
 * Markup, classes, styles, scripts, live figures and the shared header and footer are left out, so a
 * change to them alone leaves a page's date where it was.
 *
 * @param {string} html
 * @returns {string}
 */
export function significant(html) {
  const head = [`title=${html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? ""}`];
  for (const [tag] of html.matchAll(/<meta\b[^>]*>/gi)) {
    const a = attributes(tag);
    if (a.name === "description" || a.name === "robots") head.push(`${a.name}=${a.content ?? ""}`);
  }
  for (const [tag] of html.matchAll(/<link\b[^>]*>/gi)) {
    const a = attributes(tag);
    if (a.rel === "canonical") head.push(`canonical=${a.href ?? ""}`);
  }
  const data = [
    ...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
  ].map((m) => m[1] ?? "");
  const main = stripLive(
    (html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ""),
  );
  const links = [];
  for (const [tag] of main.matchAll(/<[a-z][^>]*>/gi)) {
    const href = attributes(tag).href;
    if (href !== undefined) links.push(href);
  }
  const text = main
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return JSON.stringify({ head, data, links, text });
}

/**
 * Each `<loc>` in a sitemap, with its `<lastmod>` where it has one.
 *
 * @param {string} xml
 * @returns {Map<string, string | undefined>}
 */
export function parseSitemap(xml) {
  /** @type {Map<string, string | undefined>} */
  const entries = new Map();
  for (const [, body = ""] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = body.match(/<loc>\s*([^<]*?)\s*<\/loc>/)?.[1];
    if (loc) entries.set(loc, body.match(/<lastmod>\s*([^<]*?)\s*<\/lastmod>/)?.[1]);
  }
  return entries;
}

/**
 * The date one entry gets, and why.
 *
 * @param {object} p
 * @param {string} p.built The page this build prerendered.
 * @param {Map<string, string | undefined> | undefined} p.live The live sitemap, or undefined if unreadable.
 * @param {string} p.loc
 * @param {() => Promise<string>} p.readLive Reads the live page.
 * @param {Date} p.now
 * @returns {Promise<{ lastmod: string, reason: string }>}
 */
export async function dateFor({ built, live, loc, readLive, now }) {
  const buildTime = now.toISOString();
  if (!live) return { lastmod: buildTime, reason: "the live sitemap is unreadable" };
  if (!live.has(loc)) return { lastmod: buildTime, reason: "new" };
  const previous = live.get(loc);
  if (!previous || !STAMP.test(previous) || Date.parse(previous) > now.getTime()) {
    return { lastmod: buildTime, reason: `the live date is missing or invalid (${previous})` };
  }
  try {
    if (significant(await readLive()) === significant(built)) {
      return { lastmod: previous, reason: `unchanged, keeps ${previous}` };
    }
    return { lastmod: buildTime, reason: "changed" };
  } catch (error) {
    return { lastmod: buildTime, reason: `${error}` };
  }
}

/**
 * @param {string} s
 * @returns {string}
 */
function xmlEscape(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * Every prerendered page under `dir`, as its route and file, except the 404, the error page and any
 * page that asks not to be indexed.
 *
 * @param {string} dir
 * @returns {Promise<{ route: string, file: string, html: string }[]>}
 */
async function builtPages(dir) {
  /** @type {string[]} */
  const files = [];
  /** @param {string} d */
  const walk = async (d) => {
    for (const entry of await readdir(d, { withFileTypes: true })) {
      const p = join(d, entry.name);
      if (entry.isDirectory()) await walk(p);
      else if (entry.name.endsWith(".html")) files.push(p);
    }
  };
  await walk(dir);
  const pages = [];
  for (const file of files) {
    const rel = relative(dir, file).split(sep).join("/").replace(/\.html$/, "");
    if (/(^|\/)_(not-found|global-error)$/.test(rel)) continue;
    const html = await readFile(file, "utf8");
    const robots = [...html.matchAll(/<meta\b[^>]*>/gi)]
      .map(([tag]) => attributes(tag))
      .find((a) => a.name === "robots")?.content;
    if (robots && /noindex/i.test(robots)) continue;
    pages.push({ route: rel === "index" ? "/" : `/${rel}`, file, html });
  }
  return pages.sort((a, b) => (a.route === "/" ? -1 : b.route === "/" ? 1 : a.route.localeCompare(b.route)));
}

async function main() {
  const now = new Date();
  // A query the CDN has not seen, so each build reads the deployed pages rather than a cached copy.
  const fresh = `page-dates=${now.getTime()}`;
  /** @param {string} url */
  const read = async (url) => {
    const response = await fetch(`${url}?${fresh}`, { signal: AbortSignal.timeout(15_000) });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.text();
  };

  const pages = await builtPages(APP_DIR);
  if (pages.length === 0) throw new Error(`no prerendered pages under ${APP_DIR}`);

  /** @type {Map<string, string | undefined> | undefined} */
  let live;
  try {
    live = parseSitemap(await read(`${SITE}/sitemap.xml`));
    if (live.size === 0) throw new Error("it lists no URL");
  } catch (error) {
    console.warn(`sitemap: the live sitemap is unreadable (${error}); every entry takes this build's time`);
    live = undefined;
  }

  const entries = await Promise.all(
    pages.map(async ({ route, html }) => {
      const canonical = [...html.matchAll(/<link\b[^>]*>/gi)]
        .map(([tag]) => attributes(tag))
        .find((a) => a.rel === "canonical")?.href;
      const loc = canonical ?? (route === "/" ? SITE : `${SITE}${route}`);
      const { lastmod, reason } = await dateFor({ built: html, live, loc, readLive: () => read(loc), now });
      console.log(`sitemap: ${route} ${reason}`);
      return { loc, lastmod };
    }),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(({ loc, lastmod }) => `<url><loc>${xmlEscape(loc)}</loc><lastmod>${lastmod}</lastmod></url>`),
    "</urlset>",
    "",
  ].join("\n");
  await writeFile(OUT, xml);
  console.log(`sitemap: wrote ${OUT} with ${entries.length} URLs`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(`sitemap: ${error instanceof Error ? error.message : error}`);
    process.exitCode = 1;
  });
}
