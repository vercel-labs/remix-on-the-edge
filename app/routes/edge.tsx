import type { LoaderArgs } from '@vercel/remix';
import { useLoaderData } from '@remix-run/react';

import { Footer } from '~/components/footer';
import { Illustration } from '~/components/illustration';

export const config = { runtime: 'edge' };

let isCold = true;
let initialDate = Date.now();

export async function loader({ request }: LoaderArgs) {
  const wasCold = isCold;
  isCold = false;

  const parsedCity = decodeURIComponent(request.headers.get('x-vercel-ip-city') ?? 'null');
  // from vercel we get the string `null` when it can't decode the IP
  const city = parsedCity === 'null' ? null : parsedCity;
  const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

  return {
    isCold: wasCold,
    city,
    ip,
    date: new Date().toISOString(),
  };
}

export function headers() {
  return {
    'x-edge-age': Date.now() - initialDate,
  };
}

export default function App() {
  const { city, ip, isCold, date } = useLoaderData();
  return (
    <>
      <main>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Your city</span>
            <strong title={city === null ? 'GeoIP information could not be derived from your IP' : ''}>
              {city === null ? 'N/A' : city}
            </strong>
          </div>
          <div className="info">
            <span>Your IP</span>
            <strong>{ip}</strong>
          </div>
        </div>
      </main>

      <Footer>
        <p>
          Generated at {date} <span data-break /> ({isCold ? 'cold' : 'hot'}) by{' '}
          <a href="https://vercel.com/docs/concepts/functions/edge-functions" target="_blank" rel="noreferrer">
            Vercel Edge Runtime
          </a>
        </p>
      </Footer>
    </>
  );
}
