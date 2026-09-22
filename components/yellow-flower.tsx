type YellowFlowerProps = {
  className?: string
}

export function YellowFlower({ className }: YellowFlowerProps) {
  const petals = Array.from({ length: 12 }, (_, index) => {
    const angle = index * 30
    const radians = (angle * Math.PI) / 180
    const radius = 75
    const x = Math.cos(radians) * radius
    const y = Math.sin(radians) * radius

    return { angle, x, y, index }
  })

  const seeds = Array.from({ length: 16 }, (_, index) => {
    const angle = index * 22.5
    const radians = (angle * Math.PI) / 180
    const radius = 25

    return {
      index,
      cx: Math.cos(radians) * radius,
      cy: Math.sin(radians) * radius,
    }
  })

  return (
    <div className={`flower-scene ${className ?? ''}`} aria-label="Una flor amarilla floreciendo">
      <div className="flower-glow" aria-hidden="true" />
      <div className="flower-pollen" aria-hidden="true">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>
      <svg className="flower-art" viewBox="0 0 300 480" role="img" aria-label="Flor amarilla">
        <defs>
          <filter id="flowerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.28" />
          </filter>
          <linearGradient id="petalMain" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFE135" />
            <stop offset="40%" stopColor="#FDD835" />
            <stop offset="70%" stopColor="#FBC02D" />
            <stop offset="100%" stopColor="#F9A825" />
          </linearGradient>
          <linearGradient id="petalLight" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="50%" stopColor="#FFE082" />
            <stop offset="100%" stopColor="#FFD54F" />
          </linearGradient>
          <radialGradient id="centerGlow" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#F57F17" />
            <stop offset="100%" stopColor="#BF360C" />
          </radialGradient>
          <linearGradient id="stemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="50%" stopColor="#43A047" />
            <stop offset="100%" stopColor="#1B5E20" />
          </linearGradient>
        </defs>

        <path
          className="svg-stem"
          d="M150 160 Q145 220 140 280 Q138 340 135 420"
          fill="none"
          stroke="url(#stemGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#flowerShadow)"
        />

        <g className="svg-leaves">
          <ellipse
            className="svg-leaf"
            cx="110"
            cy="260"
            rx="25"
            ry="12"
            fill="#388E3C"
            opacity="0.85"
            transform="rotate(-35 110 260)"
            filter="url(#flowerShadow)"
          />
          <path
            d="M110 248 Q115 260 110 272"
            stroke="#2E7D32"
            strokeWidth="1"
            fill="none"
            opacity="0.55"
          />
          <ellipse
            className="svg-leaf svg-leaf-two"
            cx="190"
            cy="320"
            rx="28"
            ry="13"
            fill="#43A047"
            opacity="0.9"
            transform="rotate(40 190 320)"
            filter="url(#flowerShadow)"
          />
          <path
            d="M190 307 Q185 320 190 333"
            stroke="#2E7D32"
            strokeWidth="1"
            fill="none"
            opacity="0.55"
          />
        </g>

        <g className="svg-bloom" transform="translate(150 150)">
          {petals.map(({ angle, x, y, index }) => (
            <g
              key={`petal-${index}`}
              transform={`translate(${x} ${y}) rotate(${angle})`}
              className="svg-petal-group"
            >
              <path
                className="svg-petal"
                d="M 0 -8 Q -18 -35 -22 -70 Q -20 -85 0 -92 Q 20 -85 22 -70 Q 18 -35 0 -8 Z"
                fill={index % 2 === 0 ? 'url(#petalMain)' : 'url(#petalLight)'}
                filter="url(#flowerShadow)"
                style={{ '--petal-delay': `${index * 70}ms` } as React.CSSProperties}
              />
              <path
                d="M 0 -8 Q -15 -30 -18 -65 Q -17 -75 0 -85"
                stroke="rgba(139, 90, 0, 0.22)"
                strokeWidth="1.5"
                fill="none"
                opacity="0.45"
              />
            </g>
          ))}

          <circle className="svg-center-ring" r="48" fill="none" stroke="#F9A825" strokeWidth="4" />
          <circle
            className="svg-center-ring-glow"
            r="46"
            fill="none"
            stroke="#FFE082"
            strokeWidth="1.5"
          />
          <circle className="svg-center-base" r="42" fill="url(#centerGlow)" filter="url(#flowerShadow)" />

          {seeds.map(({ index, cx, cy }) => (
            <circle
              key={`seed-${index}`}
              className="svg-seed"
              cx={cx}
              cy={cy}
              r="3.5"
              fill="#8B5A00"
              style={{ '--seed-delay': `${900 + index * 35}ms` } as React.CSSProperties}
            />
          ))}

          <circle cx="-8" cy="-8" r="12" fill="#FFF59D" opacity="0.4" />
        </g>
      </svg>
    </div>
  )
}
