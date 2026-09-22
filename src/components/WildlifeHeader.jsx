import './styles/WildlifeHeader.css';

export default function WildlifeHeader() {
  return (
    <header className="wildlife-header">
      <svg
        className="wildlife-bg-svg"
        viewBox="0 0 1400 220"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Organic web lines from multiple points */}
        {Array.from({ length: 18 }, (_, i) => {
          const angle = (i * 20) * Math.PI / 180;
          const cx = 700, cy = 110;
          const r1 = 40, r2 = 900;
          return (
            <line key={i}
              x1={cx + Math.cos(angle) * r1} y1={cy + Math.sin(angle) * r1}
              x2={cx + Math.cos(angle) * r2} y2={cy + Math.sin(angle) * r2}
              stroke="#6DB36D" strokeWidth="0.6" opacity="0.10"
            />
          );
        })}

        {/* Concentric organic rings */}
        {[45, 110, 190, 280, 385, 500, 630, 780].map((r, i) => (
          <circle key={i} cx="700" cy="110" r={r}
            fill="none" stroke="#6DB36D" strokeWidth="0.7"
            opacity={0.18 - i * 0.014}
          />
        ))}

        {/* Paw-print inspired corner ornaments — top left */}
        <g stroke="#6DB36D" fill="none" opacity="0.25">
          <polygon points="0,0 70,0 0,70" strokeWidth="0.8" />
          <polygon points="0,0 42,0 0,42" strokeWidth="0.6" opacity="0.6" />
          <line x1="0" y1="25" x2="25" y2="0" strokeWidth="0.5" opacity="0.5" />
          <line x1="0" y1="48" x2="48" y2="0" strokeWidth="0.5" opacity="0.5" />
        </g>

        {/* Top right */}
        <g stroke="#6DB36D" fill="none" opacity="0.25">
          <polygon points="1400,0 1330,0 1400,70" strokeWidth="0.8" />
          <polygon points="1400,0 1358,0 1400,42" strokeWidth="0.6" opacity="0.6" />
          <line x1="1400" y1="25" x2="1375" y2="0" strokeWidth="0.5" opacity="0.5" />
          <line x1="1400" y1="48" x2="1352" y2="0" strokeWidth="0.5" opacity="0.5" />
        </g>

        {/* Bottom left */}
        <g stroke="#6DB36D" fill="none" opacity="0.25">
          <polygon points="0,220 70,220 0,150" strokeWidth="0.8" />
          <polygon points="0,220 42,220 0,178" strokeWidth="0.6" opacity="0.6" />
        </g>

        {/* Bottom right */}
        <g stroke="#6DB36D" fill="none" opacity="0.25">
          <polygon points="1400,220 1330,220 1400,150" strokeWidth="0.8" />
          <polygon points="1400,220 1358,220 1400,178" strokeWidth="0.6" opacity="0.6" />
        </g>

        {/* Centre compass — leaf/petal motif */}
        <g transform="translate(700,110)" stroke="#6DB36D" fill="none" opacity="0.28">
          <ellipse cx="0" cy="-30" rx="10" ry="28" strokeWidth="0.7" />
          <ellipse cx="0" cy="30"  rx="10" ry="28" strokeWidth="0.7" />
          <ellipse cx="-30" cy="0" rx="28" ry="10" strokeWidth="0.7" />
          <ellipse cx="30"  cy="0" rx="28" ry="10" strokeWidth="0.7" />
          <circle cx="0" cy="0" r="8" strokeWidth="0.9" />
          <circle cx="0" cy="0" r="2.5" fill="#6DB36D" opacity="0.5" />
        </g>

        {/* Horizontal rules */}
        <line x1="0" y1="1" x2="1400" y2="1" stroke="#6DB36D" strokeWidth="0.6" opacity="0.18" />
        <line x1="0" y1="219" x2="1400" y2="219" stroke="#6DB36D" strokeWidth="0.6" opacity="0.18" />

        {/* Tick marks */}
        {[100, 250, 400, 600, 800, 1000, 1150, 1300].map((x, i) => (
          <g key={i} stroke="#6DB36D" opacity="0.22">
            <line x1={x} y1="0" x2={x} y2="10" strokeWidth="0.6" />
            <line x1={x - 4} y1="5" x2={x + 4} y2="5" strokeWidth="0.5" />
          </g>
        ))}
        {[100, 250, 400, 600, 800, 1000, 1150, 1300].map((x, i) => (
          <g key={i} stroke="#6DB36D" opacity="0.22">
            <line x1={x} y1="220" x2={x} y2="210" strokeWidth="0.6" />
            <line x1={x - 4} y1="215" x2={x + 4} y2="215" strokeWidth="0.5" />
          </g>
        ))}
      </svg>

      <h1>Wildlife</h1>
      <p>In pursuit of the wild — where instinct still rules and silence speaks</p>
    </header>
  );
}