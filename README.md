# Accounting USA marketing site

React, TypeScript, Vite, Tailwind CSS, and `vite-react-ssg` landing page for Growwth Partners' US accounting services. The page is intended for marketing and ad traffic.

## Start

Requires Node.js 20.19 or newer.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The build writes prerendered HTML to `dist/`. Deploy that directory to a static host.

Routes belong in `src/App.tsx`. `src/pages/Home.tsx` assembles the page and owns its SEO metadata. Each visible section lives in `src/components/landing/`.

Contact calls to action open a shared form modal. Set `VITE_CONTACTAPI_PRODURL` to the API base URL; submissions POST to `/api/contact-growwth` with a `{ data: ... }` body and the fixed campaign message `Accounting-Markeing-page`. Before launching an ad campaign, add your analytics or conversion tracking IDs. Add the final domain's canonical URL to the page's `<Head>` once hosting is decided.

