import type { MetaFunction, LinksFunction } from '@remix-run/server-runtime';

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix on Vercel Edge Functions',
  description: 'HTML, dynamically rendered in a city near you',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@vercel',
  'twitter:creator': '@vercel',
  'twitter:title': 'Remix on Vercel Edge Functions',
  'twitter:description': 'HTML, dynamically rendered in a city near you',
  'twitter:image': '/og-card.png',
  'twitter:image:alt': 'The Vercel and Remix logos',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: '/app.css',
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <Link to="/">Edge SSR (streaming)</Link>
            </li>
            <li>
              <Link to="/edge">Edge SSR</Link>
            </li>
            <li>
              <Link to="/node-streaming">Node.js SSR (streaming)</Link>
            </li>
            <li>
              <Link to="/node">Node.js SSR</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
