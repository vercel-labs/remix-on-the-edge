export function Card() {
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
          <symbol id="remix-logo-light">
            <g>
              <path fillRule="evenodd" clipRule="evenodd" d="M126.813 117.407C128.019 133.143 128.019 140.52 128.019 148.572H92.1886C92.1886 146.818 92.2194 145.213 92.2506 143.586C92.3476 138.529 92.4489 133.255 91.6424 122.605C90.5767 107.012 83.9688 103.547 71.8187 103.547H61.0542H15.4651V75.1778H73.5241C88.8713 75.1778 96.5451 70.4338 96.5451 57.8732C96.5451 46.8286 88.8713 40.1355 73.5241 40.1355H15.4651V12.375H79.9187C114.663 12.375 131.929 29.0502 131.929 55.6873C131.929 75.611 119.779 88.6045 103.366 90.7703C117.221 93.5855 125.321 101.598 126.813 117.407Z" fill="#D83BD2"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M126.813 117.407C128.019 133.143 128.019 140.52 128.019 148.572H92.1886C92.1886 146.818 92.2194 145.213 92.2506 143.586C92.3476 138.529 92.4489 133.255 91.6424 122.605C90.5767 107.012 83.9688 103.547 71.8187 103.547H61.0542H15.4651V75.1778H73.5241C88.8713 75.1778 96.5451 70.4338 96.5451 57.8732C96.5451 46.8286 88.8713 40.1355 73.5241 40.1355H15.4651V12.375H79.9187C114.663 12.375 131.929 29.0502 131.929 55.6873C131.929 75.611 119.779 88.6045 103.366 90.7703C117.221 93.5855 125.321 101.598 126.813 117.407Z" fill="#D83BD2"/>
              <path d="M15.4651 148.57V127.422H53.3506C59.6788 127.422 61.0527 132.191 61.0527 135.035V148.57H15.4651Z" fill="#D83BD2"/>
              <path d="M15.4651 148.57V127.422H53.3506C59.6788 127.422 61.0527 132.191 61.0527 135.035V148.57H15.4651Z" fill="#D83BD2"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M111.348 105.032C112.554 120.768 112.554 128.145 112.554 136.197H76.7235C76.7235 134.443 76.7543 132.838 76.7855 131.211C76.8825 126.154 76.9838 120.88 76.1773 110.23C75.1116 94.6373 68.5037 91.1723 56.3536 91.1723H45.5892H0V62.8028H58.059C73.4063 62.8028 81.08 58.0588 81.08 45.4982C81.08 34.4536 73.4063 27.7605 58.059 27.7605H0V0H64.4537C99.1984 0 116.464 16.6752 116.464 43.3123C116.464 63.236 104.314 76.2295 87.9011 78.3953C101.756 81.2105 109.856 89.2232 111.348 105.032Z" fill="#3DEFE9"/>
              <path d="M0 136.195V115.047H37.8855C44.2137 115.047 45.5876 119.816 45.5876 122.66V136.195H0Z" fill="#3DEFE9"/>
              <path d="M119.076 111.101L119.075 111.088L119.074 111.074C118.306 102.933 115.817 96.6294 111.591 91.987C108.632 88.7379 104.891 86.3776 100.46 84.7558C114.461 80.3479 124.197 67.5962 124.197 49.4993C124.197 35.8315 119.754 24.5368 110.687 16.6853C101.652 8.86229 88.2378 4.64062 70.6397 4.64062H6.18604H4.63953V6.18702V33.9475V35.4939H6.18604H64.245C71.7238 35.4939 77.0851 37.1286 80.5476 39.8844C83.9556 42.5971 85.7196 46.5512 85.7196 51.6853C85.7196 57.6267 83.927 61.408 80.6085 63.7918C77.1734 66.2592 71.8231 67.4435 64.245 67.4435H6.18604H4.63953V68.9899V97.3593V98.9057H6.18604H51.7752H62.5397C68.5386 98.9057 72.7428 99.779 75.6051 102.218C78.4391 104.633 80.2984 108.885 80.8204 116.522L80.8213 116.534C81.6221 127.111 81.522 132.333 81.4255 137.358L81.4254 137.369L81.4252 137.374C81.3941 138.998 81.3631 140.615 81.3631 142.384V143.93H82.9096H118.74H120.287V142.384C120.287 134.308 120.286 126.889 119.076 111.101Z" fill="black" stroke="white" strokeWidth="2"/>
              <path d="M4.63953 142.383V143.929H6.18604H51.7736H53.3202V142.383V128.847C53.3202 127.222 52.9351 124.959 51.5431 123.06C50.091 121.079 47.6824 119.688 44.0716 119.688H6.18604H4.63953V121.234V142.383Z" fill="black" stroke="white" strokeWidth="2"/>
            </g>
          </symbol>
          <symbol id="remix-logo-dark">
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
        <svg viewBox="0 0 700 700" x={315} y={172}>
          <use id="remix-logo-light" href="#remix-logo-light" />
        </svg>
        <use id="remix-logo-dark" href="#remix-logo-dark" width={137} height={137} x={500} y={150} />
      </svg>
    );
  }