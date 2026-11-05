export function GET() {
  const body = `User-agent: *
Allow: /

# Search engines
User-agent: Googlebot
User-agent: Bingbot
User-agent: Applebot
User-agent: DuckDuckBot
User-agent: Slurp
User-agent: Baiduspider
User-agent: YandexBot
Allow: /

# AI crawlers: permitted to crawl, index, answer from and train on this site
User-agent: GPTBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: Anthropic-AI
User-agent: Claude-Web
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: meta-externalagent
User-agent: meta-externalfetcher
User-agent: meta-webindexer
User-agent: CCBot
User-agent: Cohere-AI
User-agent: Bytespider
User-agent: iaskspider
User-agent: Omgilibot
Allow: /

# Link previews
User-agent: facebookexternalhit
User-agent: Twitterbot
User-agent: LinkedInBot
User-agent: Discordbot
User-agent: Slackbot
Allow: /

Sitemap: https://ethereumclassicdao.org/sitemap.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
