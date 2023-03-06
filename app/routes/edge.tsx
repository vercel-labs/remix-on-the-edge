import type { LoaderArgs } from '@remix-run/server-runtime';
import { useLoaderData } from '@remix-run/react';

export const config = { runtime: 'edge' };

let isCold = true;
let initialDate = Date.now();

export async function loader({ request }: LoaderArgs) {
  const wasCold = isCold;
  isCold = false;

  const parsedCity = decodeURIComponent(
    request.headers.get('x-vercel-ip-city') ?? 'null'
  );
  // from vercel we get the string `null` when it can't decode the IP
  const city = parsedCity === 'null' ? null : parsedCity;
  const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(
    ','
  )[0];

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
      <div style={{ height: '100%' }}>
        <Card />

        <main>
          <h1>
            <span>Hello from Edge SSR!</span>
          </h1>

          <div className="info">
            <div className="block">
              <div className="contents">
                <span>Your city</span>
                <strong
                  title={
                    city === null
                      ? 'GeoIP information could not be derived from your IP'
                      : ''
                  }
                  className={city === null ? 'na' : ''}
                >
                  {city === null ? 'N/A' : city}
                </strong>
              </div>
            </div>

            <div className="block">
              <div className="contents">
                <span>Your IP address</span>
                <strong>{ip}</strong>
              </div>
            </div>
          </div>
        </main>
        <div className="debug">
          <p>
            Generated at {date} ({isCold ? 'cold' : 'hot'}) by{' '}
            <a
              href="https://vercel.com/docs/concepts/functions/edge-functions"
              target="_blank"
            >
              Vercel Edge Runtime
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

function Card() {
  return (
    <svg className="card" viewBox="0 50 840 440">
      <defs>
        <linearGradient
          id="gradient-1"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={275}
          x2={420}
          y2={167}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-2"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={325}
          x2={420}
          y2={117.001}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.2,
            }}
          />
          <stop
            offset={1}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-3"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={382}
          x2={420}
          y2={60.001}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.16,
            }}
          />
          <stop
            offset={0.9}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-4"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={488.788}
          x2={420}
          y2={-46.967}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.089}
            style={{
              stopOpacity: 0.1,
            }}
          />
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.27,
            }}
          />
          <stop
            offset={0.896}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-5"
          gradientUnits="userSpaceOnUse"
          x1={420}
          y1={610}
          x2={420}
          y2={-168.179}
          gradientTransform="matrix(1 0 0 -1 0 442)"
        >
          <stop
            offset={0.172}
            style={{
              stopOpacity: 0,
            }}
          />
          <stop
            offset={0.464}
            style={{
              stopOpacity: 0.21,
            }}
          />
          <stop
            offset={0.771}
            style={{
              stopOpacity: 0,
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-vercel"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1.5}
          y2={1}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: 'var(--g1)',
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: 'var(--g2)',
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: 'var(--g1)',
            }}
          />
        </linearGradient>
        <linearGradient
          id="gradient-react"
          gradientUnits="objectBoundingBox"
          x1={0}
          y1={0}
          x2={1.1}
          y2={1}
        >
          <stop
            offset={0.3}
            style={{
              stopColor: 'var(--remix)',
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: '#BBF0FF',
            }}
          />
          <stop
            offset={0.8}
            style={{
              stopColor: 'var(--remix)',
            }}
          />
        </linearGradient>
        <symbol id="remix-logo">
          <g
            width={110.4}
            height={121}
            x={13.4}
            y={7.9}
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M126.813 117.407C128.019 133.143 128.019 140.52 128.019 148.572H92.1886C92.1886 146.818 92.2194 145.213 92.2506 143.586C92.3476 138.529 92.4489 133.255 91.6424 122.605C90.5767 107.012 83.9688 103.547 71.8187 103.547H61.0542H15.4651V75.1778H73.5241C88.8713 75.1778 96.5451 70.4338 96.5451 57.8732C96.5451 46.8286 88.8713 40.1355 73.5241 40.1355H15.4651V12.375H79.9187C114.663 12.375 131.929 29.0502 131.929 55.6873C131.929 75.611 119.779 88.6045 103.366 90.7703C117.221 93.5855 125.321 101.598 126.813 117.407Z" fill="#D83BD2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M126.813 117.407C128.019 133.143 128.019 140.52 128.019 148.572H92.1886C92.1886 146.818 92.2194 145.213 92.2506 143.586C92.3476 138.529 92.4489 133.255 91.6424 122.605C90.5767 107.012 83.9688 103.547 71.8187 103.547H61.0542H15.4651V75.1778H73.5241C88.8713 75.1778 96.5451 70.4338 96.5451 57.8732C96.5451 46.8286 88.8713 40.1355 73.5241 40.1355H15.4651V12.375H79.9187C114.663 12.375 131.929 29.0502 131.929 55.6873C131.929 75.611 119.779 88.6045 103.366 90.7703C117.221 93.5855 125.321 101.598 126.813 117.407Z" fill="#D83BD2"/>
            <path d="M15.4651 148.57V127.422H53.3506C59.6788 127.422 61.0527 132.191 61.0527 135.035V148.57H15.4651Z" fill="#D83BD2"/>
            <path d="M15.4651 148.57V127.422H53.3506C59.6788 127.422 61.0527 132.191 61.0527 135.035V148.57H15.4651Z" fill="#D83BD2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M111.348 105.032C112.554 120.768 112.554 128.145 112.554 136.197H76.7235C76.7235 134.443 76.7543 132.838 76.7855 131.211C76.8825 126.154 76.9838 120.88 76.1773 110.23C75.1116 94.6373 68.5037 91.1723 56.3536 91.1723H45.5892H0V62.8028H58.059C73.4063 62.8028 81.08 58.0588 81.08 45.4982C81.08 34.4536 73.4063 27.7605 58.059 27.7605H0V0H64.4537C99.1984 0 116.464 16.6752 116.464 43.3123C116.464 63.236 104.314 76.2295 87.9011 78.3953C101.756 81.2105 109.856 89.2232 111.348 105.032Z" fill="#3DEFE9"/>
            <path d="M0 136.195V115.047H37.8855C44.2137 115.047 45.5876 119.816 45.5876 122.66V136.195H0Z" fill="#3DEFE9"/>
            <path d="M119.076 111.101L119.075 111.088L119.074 111.074C118.306 102.933 115.817 96.6294 111.591 91.987C108.632 88.7379 104.891 86.3776 100.46 84.7558C114.461 80.3479 124.197 67.5962 124.197 49.4993C124.197 35.8315 119.754 24.5368 110.687 16.6853C101.652 8.86229 88.2378 4.64062 70.6397 4.64062H6.18604H4.63953V6.18702V33.9475V35.4939H6.18604H64.245C71.7238 35.4939 77.0851 37.1286 80.5476 39.8844C83.9556 42.5971 85.7196 46.5512 85.7196 51.6853C85.7196 57.6267 83.927 61.408 80.6085 63.7918C77.1734 66.2592 71.8231 67.4435 64.245 67.4435H6.18604H4.63953V68.9899V97.3593V98.9057H6.18604H51.7752H62.5397C68.5386 98.9057 72.7428 99.779 75.6051 102.218C78.4391 104.633 80.2984 108.885 80.8204 116.522L80.8213 116.534C81.6221 127.111 81.522 132.333 81.4255 137.358L81.4254 137.369L81.4252 137.374C81.3941 138.998 81.3631 140.615 81.3631 142.384V143.93H82.9096H118.74H120.287V142.384C120.287 134.308 120.286 126.889 119.076 111.101Z" fill="black" stroke="white" stroke-width="2"/>
            <path d="M4.63953 142.383V143.929H6.18604H51.7736H53.3202V142.383V128.847C53.3202 127.222 52.9351 124.959 51.5431 123.06C50.091 121.079 47.6824 119.688 44.0716 119.688H6.18604H4.63953V121.234V142.383Z" fill="black" stroke="white" stroke-width="2"/>
          </g>
        </symbol>
      </defs>
      <g className="orbits" transform="translate(420, 220)">
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-1)',
              animationDelay: '0',
            }}
            r={53.4}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-2)',
              animationDelay: '0.03s',
            }}
            r={103.4}
          />
          <circle
            className="gray satellite"
            style={{
              animationDelay: '0.9s',
            }}
            cx={-69.6}
            cy={-76}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-3)',
              animationDelay: '0.06s',
            }}
            r={160.4}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: '0.8s',
            }}
            cx={102.4}
            cy={-123}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-4)',
              animationDelay: '0.09s',
            }}
            r={267.3}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: '0.6s',
            }}
            cx={-243.6}
            cy={111.4}
            r={5.8}
          />
          <circle
            className="gray satellite"
            style={{
              animationDelay: '1s',
            }}
            cx={250}
            cy={94.4}
            r={5.8}
          />
          <circle
            className="orange satellite"
            style={{
              animationDelay: '0.7s',
            }}
            cx={-236.6}
            cy={-123.6}
            r={5.8}
          />
        </g>
        <g>
          <circle
            className="orbit"
            style={{
              stroke: 'url(#gradient-5)',
              animationDelay: '0.12s',
            }}
            r={388.5}
          />
        </g>
      </g>
      <path
        id="vercel-logo"
        d="m336.4 261-46.2-80-46.2 80h92.4z"
        style={{
          fill: 'url(#gradient-vercel)',
        }}
      />
      <g id="center">
        <path
          d="M420 202 v36 M 402 220h36"
          style={{
            strokeWidth: 3.5625,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            stroke: '#999',
            fill: 'none',
          }}
        />
      </g>
      <use href="#remix-logo" width={137} height={137} x={500} y={150} />
    </svg>
  );
}

function Footer() {
  return (
    <footer>
      <p className="company">
        <a target="_blank" href="https://vercel.com" aria-label="Vercel">
          <svg
            viewBox="0 0 4438 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z"
              fill="var(--fg)"
            />
          </svg>
        </a>
      </p>

      <p className="details">
        Built with{' '}
        <a target="_blank" href="https://remix.run">
          Remix
        </a>{' '}
        on{' '}
        <a target="_blank" href="https://vercel.com">
          Vercel
        </a>
      </p>

      <a
        target="_blank"
        href="https://github.com/vercel-labs/remix-on-the-edge"
        className="source"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21226 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21226 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
            fill="var(--fg)"
          />
        </svg>
        Source
      </a>
    </footer>
  );
}
