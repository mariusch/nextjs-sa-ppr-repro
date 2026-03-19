# nextjs-sa-ppr-repro

Minimal reproduction for [vercel/next.js#91662](https://github.com/vercel/next.js/issues/91662).

Server Action POST requests return the PPR HTML shell instead of RSC payload on Next.js 16.2.0 when `output: "standalone"` and `cacheComponents: true` are set.

## Reproduce

```bash
bun install
bun run build
node .next/standalone/server.js
# Open http://localhost:3000/item/123 and click "Update Item"
```
