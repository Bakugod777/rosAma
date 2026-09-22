type YellowFlowerProps = {
  className?: string
}

export function YellowFlower({ className }: YellowFlowerProps) {
  const backPetals = Array.from({ length: 10 }, (_, index) => index * 36 + 18)
  const frontPetals = Array.from({ length: 12 }, (_, index) => index * 30)

  return (
    <div className={`flower-scene ${className ?? ''}`} aria-label="Una flor amarilla floreciendo">
      <div className="flower-glow" aria-hidden="true" />
      <div className="flower-pollen" aria-hidden="true">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>

      <svg className="flower-art" viewBox="0 0 320 500" role="img" aria-label="Flor amarilla">
        <defs>
          <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#5c410a" floodOpacity="0.22" />
          </filter>
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1b5e20" />
            <stop offset="45%" stopColor="#43a047" />
            <stop offset="100%" stopColor="#2e7d32" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66bb6a" />
            <stop offset="55%" stopColor="#2e7d32" />
            <stop offset="100%" stopColor="#1b5e20" />
          </linearGradient>
          <linearGradient id="petalBack" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#ffe082" />
            <stop offset="45%" stopColor="#fbc02d" />
            <stop offset="100%" stopColor="#f9a825" />
          </linearGradient>
          <linearGradient id="petalFront" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#fff59d" />
            <stop offset="35%" stopColor="#ffee58" />
            <stop offset="75%" stopColor="#fdd835" />
            <stop offset="100%" stopColor="#f9a825" />
          </linearGradient>
          <radialGradient id="petalShine" cx="35%" cy="25%" r="65%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="diskOuter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb300" />
            <stop offset="55%" stopColor="#ef6c00" />
            <stop offset="100%" stopColor="#bf360c" />
          </radialGradient>
          <radialGradient id="diskInner" cx="42%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#ffe082" />
            <stop offset="40%" stopColor="#ff8f00" />
            <stop offset="100%" stopColor="#e65100" />
          </radialGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="150" cy="455" rx="48" ry="10" fill="#8d7a3d" opacity="0.18" className="svg-ground" />

        {/* Stem */}
        <path
          className="svg-stem"
          d="M160 168 C156 230 152 290 148 350 C145 390 142 425 140 448"
          fill="none"
          stroke="url(#stemGrad)"
          strokeWidth="9"
          strokeLinecap="round"
          filter="url(#softShadow)"
        />

        {/* Leaves */}
        <g className="svg-leaf svg-leaf-left" filter="url(#softShadow)">
          <path
            d="M148 285 C120 268 88 272 72 288 C92 304 122 310 148 300 Z"
            fill="url(#leafGrad)"
          />
          <path d="M148 292 C118 284 96 286 80 292" fill="none" stroke="#1b5e20" strokeWidth="1.2" opacity="0.45" />
        </g>
        <g className="svg-leaf svg-leaf-right" filter="url(#softShadow)">
          <path
            d="M150 345 C178 328 214 334 232 354 C210 372 176 372 150 360 Z"
            fill="url(#leafGrad)"
          />
          <path d="M150 352 C180 344 204 348 220 356" fill="none" stroke="#1b5e20" strokeWidth="1.2" opacity="0.45" />
        </g>

        {/* Bloom */}
        <g className="svg-bloom" transform="translate(160 155)">
          {/* Back petals — slightly longer, darker */}
          {backPetals.map((angle, index) => (
            <g key={`back-${angle}`} transform={`rotate(${angle})`} className="svg-petal-spin">
              <path
                className="svg-petal svg-petal-back"
                style={{ '--petal-delay': `${120 + index * 45}ms` } as React.CSSProperties}
                d="M0 8 C-16 -8 -26 -48 -24 -78 C-22 -98 -12 -112 0 -118 C12 -112 22 -98 24 -78 C26 -48 16 -8 0 8 Z"
                fill="url(#petalBack)"
                filter="url(#softShadow)"
              />
            </g>
          ))}

          {/* Front petals */}
          {frontPetals.map((angle, index) => (
            <g key={`front-${angle}`} transform={`rotate(${angle})`} className="svg-petal-spin">
              <path
                className="svg-petal svg-petal-front"
                style={{ '--petal-delay': `${280 + index * 40}ms` } as React.CSSProperties}
                d="M0 10 C-14 -2 -22 -38 -20 -68 C-18 -88 -10 -100 0 -106 C10 -100 18 -88 20 -68 C22 -38 14 -2 0 10 Z"
                fill="url(#petalFront)"
                filter="url(#softShadow)"
              />
              <path
                className="svg-petal-shine"
                style={{ '--petal-delay': `${280 + index * 40}ms` } as React.CSSProperties}
                d="M0 10 C-14 -2 -22 -38 -20 -68 C-18 -88 -10 -100 0 -106 C10 -100 18 -88 20 -68 C22 -38 14 -2 0 10 Z"
                fill="url(#petalShine)"
              />
              <path
                className="svg-petal-vein"
                style={{ '--petal-delay': `${280 + index * 40}ms` } as React.CSSProperties}
                d="M0 6 C-1 -20 -1 -55 0 -95"
                fill="none"
                stroke="#c79100"
                strokeWidth="1"
                opacity="0.28"
              />
            </g>
          ))}

          {/* Flower disk */}
          <circle className="svg-disk-outer" r="42" fill="url(#diskOuter)" filter="url(#softShadow)" />
          <circle className="svg-disk-inner" r="34" fill="url(#diskInner)" />

          {/* Seed pattern */}
          {Array.from({ length: 5 }, (_, ring) =>
            Array.from({ length: 8 + ring * 4 }, (_, i) => {
              const count = 8 + ring * 4
              const angle = (i / count) * Math.PI * 2 + ring * 0.35
              const radius = 8 + ring * 5.2
              return (
                <circle
                  key={`seed-${ring}-${i}`}
                  className="svg-seed"
                  style={{ '--seed-delay': `${900 + ring * 80 + i * 12}ms` } as React.CSSProperties}
                  cx={Math.cos(angle) * radius}
                  cy={Math.sin(angle) * radius}
                  r={ring === 0 ? 2.2 : 2.6}
                  fill={ring % 2 === 0 ? '#5d4037' : '#3e2723'}
                  opacity="0.85"
                />
              )
            }),
          )}

          <circle className="svg-disk-highlight" cx="-8" cy="-9" r="10" fill="#fff8e1" opacity="0.35" />
        </g>
      </svg>
    </div>
  )
}
