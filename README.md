# Remix on Vercel Edge Functions

This is a demo of Remix running on Vercel Edge Functions (https://remix-on-the-edge.vercel.app/).

Notably, it's truly zero-config and very lightweight:

- No custom `remix.config.js`
- No `@vercel/node` or `@remix/vercel` dependenciesa at all
- No custom `vercel.json` configuration is needed

Note: temporarily we have to set `VERCEL_CLI_VERSION` inside `build.env` in `vercel.json`.
This need will go away once a Vercel CLI release is made.
