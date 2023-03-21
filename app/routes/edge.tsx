import type { LoaderArgs } from '@vercel/remix';
import { useLoaderData } from '@remix-run/react';

import { Footer } from '~/components/footer';
import { Region } from '~/components/region';
import { Illustration } from '~/components/illustration';
import { parseVercelId } from '~/parse-vercel-id';

export const config = { runtime: 'edge' };

let isCold = true;
let initialDate = Date.now();

export async function loader({ request }: LoaderArgs) {
  const wasCold = isCold;
  isCold = false;

  const parsedId = parseVercelId(request.headers.get("x-vercel-id"));

  return {
    ...parsedId,
    isCold: wasCold,
    date: new Date().toISOString(),
  };
}

export function headers() {
  return {
    'x-edge-age': Date.now() - initialDate,
  };
}

export default function App() {
  const { proxyRegion, computeRegion, isCold, date } = useLoaderData<typeof loader>();
  return (
    <>
      <main>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Proxy Region</span>
            <Region region={proxyRegion} />
          </div>
          <div className="info">
            <span>Compute Region</span>
            <Region region={computeRegion} />
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
