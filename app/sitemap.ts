import type { MetadataRoute } from "next";
import { execSync } from "child_process";

function gitDate(filePath: string): Date {
  try {
    const iso = execSync(`git log -1 --format="%cI" -- "${filePath}"`, {
      encoding: "utf8",
      cwd: process.cwd(),
    }).trim();
    return iso ? new Date(iso) : new Date();
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ethereumclassicdao.org";

  return [
    {
      url: base,
      lastModified: gitDate("app/page.tsx"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: gitDate("app/about/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/governance`,
      lastModified: gitDate("app/governance/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/ecosystem`,
      lastModified: gitDate("app/ecosystem/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/transparency`,
      lastModified: gitDate("app/transparency/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/clients`,
      lastModified: gitDate("app/clients/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/olympia`,
      lastModified: gitDate("app/olympia/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/core-development`,
      lastModified: gitDate("app/core-development/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: gitDate("app/contact/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/privacy`,
      lastModified: gitDate("app/privacy/page.tsx"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/regulation`,
      lastModified: gitDate("app/regulation/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/environmental-impact`,
      lastModified: gitDate("app/environmental-impact/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/investment-products`,
      lastModified: gitDate("app/investment-products/page.tsx"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];
}
