import type { MetaFunction, LinksFunction } from '@vercel/remix';

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import NavigationSwitcher from '~/nav';

import mainCss from '~/styles/main.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix on Vercel Edge Functions',
  description: 'HTML, dynamically rendered in a city near you',
  'twitter:card': 'summary_large_image',
  'twitter:site': '@vercel',
  'twitter:creator': '@vercel',
  'twitter:title': 'Remix on Vercel Edge Functions',
  'twitter:description': 'HTML, dynamically rendered in a city near you',
  'twitter:image': 'https://remix-on-the-edge.vercel.app/og-card.png',
  'twitter:image:alt': 'The Vercel and Remix logos',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: mainCss,
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
        <NavigationSwitcher />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
