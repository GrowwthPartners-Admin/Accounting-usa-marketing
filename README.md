# Accounting USA marketing site

React, TypeScript, Vite, Tailwind CSS, and `vite-react-ssg` landing page for Growwth Partners' US accounting services. The page is intended for marketing and ad traffic.

## Start

Requires Node.js 20.19 or newer.

```sh
npm install
npm run dev
```

To configure the contact form locally, copy `.env.example` to `.env` and set `VITE_CONTACTAPI_PRODURL` to the API base URL. For a local API, use `http://localhost:8081` in `.env.local`.

## Build

```sh
npm run build
npm run preview
```

The build writes prerendered HTML to `dist/`. Deploy that directory to a static host.

## Deploy on Vercel

Import this repository as a Vite project. The included `vercel.json` runs `npm run build` and publishes `dist/`. The landing page is served at `/`; it does not need an SPA fallback rewrite.

Set `VITE_CONTACTAPI_PRODURL` to the contact API base URL in Vercel's Production and Preview environment settings. Set `VITE_SITE_URL` to the final public origin (for example, `https://example.com`) to include canonical and Open Graph URL tags in the prerendered page. Redeploy after changing either variable. Allow the final domain in the contact API's CORS configuration.

Routes belong in `src/App.tsx`. `src/pages/Home.tsx` assembles the page and owns its SEO metadata. Each visible section lives in `src/components/landing/`.

Contact calls to action open a shared form modal. Submissions POST to `/api/contact-growwth` with a `{ data: ... }` body and the fixed campaign message `Accounting-Markeing-page`. Before launching an ad campaign, add your analytics or conversion tracking IDs.

