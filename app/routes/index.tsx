import { Suspense } from 'react';
import { defer } from '@vercel/remix';
import type { LoaderArgs } from '@vercel/remix';
import { Await, useLoaderData } from '@remix-run/react';

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

  return defer({
    isCold: wasCold,
    proxyRegion: sleep(parsedId.proxyRegion, 1000),
    computeRegion: sleep(parsedId.computeRegion, 1500),
    date: new Date().toISOString(),
  });
}

function sleep(val: any, ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(val), ms));
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
            <Suspense fallback={<strong>Loading...</strong>}>
              <Await resolve={proxyRegion}>
                {(region) => <Region region={region} />}
              </Await>
            </Suspense>
          </div>
          <div className="info">
            <span>Compute Region</span>
            <Suspense fallback={<strong>Loading...</strong>}>
              <Await resolve={computeRegion}>
                {(region) => <Region region={region} />}
              </Await>
            </Suspense>
          </div>
        </div>
      </main>

      <Footer>
        <p>
          Generated at {date} <span data-break /> ({isCold ? "cold" : "hot"}) by{" "}
          <a
            href="https://vercel.com/docs/concepts/functions/edge-functions"
            target="_blank"
            rel="noreferrer"
          >
            Vercel Edge Runtime
          </a>
        </p>
      </Footer>
    </>
  );
}
