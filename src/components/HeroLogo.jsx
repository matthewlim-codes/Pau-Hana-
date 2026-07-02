export function HeroLogo() {
  return (
    <div className="hero-logo" role="img" aria-label="Pau Hana">
      <svg viewBox="0 0 980 220" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="woodFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#efd6ad" />
            <stop offset="45%" stopColor="#caa36d" />
            <stop offset="100%" stopColor="#f4dfb8" />
          </linearGradient>
          <pattern id="woodLines" width="24" height="220" patternUnits="userSpaceOnUse">
            <path d="M4 0 C16 42 5 82 15 128 C22 160 16 190 8 220" fill="none" stroke="#9c7448" strokeOpacity="0.18" strokeWidth="3" />
            <path d="M20 0 C10 54 22 92 12 136 C5 168 8 198 18 220" fill="none" stroke="#fff2d8" strokeOpacity="0.2" strokeWidth="2" />
          </pattern>
          <filter id="logoShadow" x="-8%" y="-20%" width="116%" height="145%">
            <feDropShadow dx="0" dy="10" stdDeviation="4" floodColor="#024731" floodOpacity="0.28" />
            <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#000000" floodOpacity="0.2" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          <text
            x="490"
            y="150"
            textAnchor="middle"
            className="hero-logo-text hero-logo-wood"
          >
            Pau Hana
          </text>
          <text
            x="490"
            y="150"
            textAnchor="middle"
            className="hero-logo-text hero-logo-grain"
          >
            Pau Hana
          </text>
          <text
            x="490"
            y="150"
            textAnchor="middle"
            className="hero-logo-text hero-logo-green"
          >
            Pau Hana
          </text>
        </g>
      </svg>
    </div>
  );
}
