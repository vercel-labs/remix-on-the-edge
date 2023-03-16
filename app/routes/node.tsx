import type { LoaderArgs } from '@vercel/remix';
import { useLoaderData } from '@remix-run/react';

let isCold = true;
let initialDate = Date.now();

export async function loader({ request }: LoaderArgs) {
  const wasCold = isCold;
  isCold = false;

  // we still render IP to demonstrate dynamic-ness
  const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(
    ','
  )[0];

  // `process.versions.node` only exists in the Node.js runtime, naturally
  const version = process.versions.node;

  return {
    isCold: wasCold,
    ip,
    version,
    date: new Date().toISOString(),
  };
}

export function headers() {
  return {
    'x-serverless-age': Date.now() - initialDate,
  };
}

export default function App() {
  const { version, ip, isCold, date } = useLoaderData();
  return (
    <>
      <div style={{ height: '100%' }}>
        <Card />

        <main>
          <h1>
            <span>Hello from Node.js SSR!</span>
          </h1>

          <div className="info">
            <div className="block">
              <div className="contents">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <Nodejs
                    style={{
                      display: 'inline-flex',
                      alignSelf: 'center',
                      marginRight: 5,
                    }}
                    width={16}
                    height={16}
                  />{' '}
                  Node.js Version
                </span>
                <strong>{version}</strong>
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
              href="https://vercel.com/docs/concepts/functions/serverless-functions"
              target="_blank"
            >
              Vercel Serverless Functions
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
          <g fill="#E8F2FF" filter="url(#remix-filter)">
            <path
              fillRule="evenodd"
              d="M100.7 90.4c.7 9.3.7 13.7.7 18.5H79.8v-3c0-3 .1-6-.4-12.4-.6-9.3-4.6-11.4-12-11.4h-34V65.3h35c9.4 0 14-2.9 14-10.3 0-6.6-4.6-10.6-14-10.6h-35V28h39c21 0 31.4 10 31.4 25.8 0 11.8-7.4 19.6-17.3 20.8 8.4 1.7 13.3 6.5 14.2 15.9z"
              clipRule="evenodd"
            />
            <path d="M33.4 109V96.2h22.9c3.8 0 4.6 2.9 4.6 4.6v8H33.4z" />
          </g>
        </symbol>
        <filter
          id="remix-filter"
          width={110.4}
          height={121}
          x={13.4}
          y={7.9}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3_60" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.223529 0 0 0 0 0.572549 0 0 0 0 1 0 0 0 0.9 0" />
          <feBlend
            in2="effect1_dropShadow_3_60"
            result="effect2_dropShadow_3_60"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_3_60"
            result="shape"
          />
        </filter>
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

function Nodejs(props) {
  return (
    <svg
      width={127}
      height={144}
      viewBox="0 0 127 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={127}
        height={144}
      >
        <path
          d="M60.299 1.452L4.126 33.874A6.78 6.78 0 00.73 39.75v64.891a6.778 6.778 0 003.395 5.874l56.177 32.448a6.798 6.798 0 006.787 0l56.168-32.448a6.794 6.794 0 003.386-5.874V39.75a6.779 6.779 0 00-3.4-5.876L67.084 1.452a6.831 6.831 0 00-6.8 0"
          fill="#fff"
        />
      </mask>
      <g mask="url(#a)">
        <path
          d="M183.409 28.37L25.123-49.218l-81.16 165.565 158.283 77.59 81.163-165.569z"
          fill="url(#paint0_linear_0_1)"
        />
      </g>
      <mask
        id="b"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={123}
        height={144}
      >
        <path
          d="M2.123 108.76a6.795 6.795 0 002 1.754l48.187 27.834 8.026 4.613c1.2.693 2.568.987 3.912.887.448-.036.896-.12 1.334-.244l59.245-108.48a6.705 6.705 0 00-1.579-1.254L86.467 12.63 67.024 1.444a7.092 7.092 0 00-1.76-.707L2.124 108.76z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#b)">
        <path
          d="M-66.314 51.317l111.766 151.27L193.265 93.38 81.492-57.887-66.314 51.317z"
          fill="url(#paint1_linear_0_1)"
        />
      </g>
      <mask
        id="c"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={0}
        width={123}
        height={144}
      >
        <path
          d="M63.014.583a6.853 6.853 0 00-2.714.869L4.287 33.782l60.4 110.012c.84-.12 1.667-.4 2.413-.832l56.174-32.448a6.806 6.806 0 003.28-4.634L64.98.693a7.054 7.054 0 00-1.373-.136c-.187 0-.373.01-.56.027"
          fill="#fff"
        />
      </mask>
      <g mask="url(#c)">
        <path
          d="M4.286.557v143.24H126.53V.557H4.286z"
          fill="url(#paint2_linear_0_1)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_0_1"
          x1={104.219}
          y1={-10.5462}
          x2={23.0644}
          y2={155.008}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.3} stopColor="#3E863D" />
          <stop offset={0.5} stopColor="#55934F" />
          <stop offset={0.8} stopColor="#5AAD45" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1={-9.7611}
          y1={127.819}
          x2={138.058}
          y2={18.5988}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.57} stopColor="#3E863D" />
          <stop offset={0.72} stopColor="#619857" />
          <stop offset={1} stopColor="#76AC64" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1={4.32698}
          y1={72.181}
          x2={126.553}
          y2={72.181}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.16} stopColor="#6BBF47" />
          <stop offset={0.38} stopColor="#79B461" />
          <stop offset={0.47} stopColor="#75AC64" />
          <stop offset={0.7} stopColor="#659E5A" />
          <stop offset={0.9} stopColor="#3E863D" />
        </linearGradient>
      </defs>
    </svg>
  );
}
