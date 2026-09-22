import './styles/HeritageHeader.css';

export default function HeritageHeader() {
  return (
    <header className="heritage-header">
      <svg className="heritage-bg-svg" viewBox="0 0 1400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice">

        {/* radiating lines from centre */}
        {Array.from({length: 24}, (_, i) => {
          const angle = (i * 15) * Math.PI / 180;
          const cx = 700, cy = 110;
          const r1 = 60, r2 = 820;
          return (
            <line key={i}
              x1={cx + Math.cos(angle) * r1} y1={cy + Math.sin(angle) * r1}
              x2={cx + Math.cos(angle) * r2} y2={cy + Math.sin(angle) * r2}
              stroke="#C49A45" strokeWidth="0.6" opacity="0.12"
            />
          );
        })}

        {/* concentric rings */}
        {[55, 130, 210, 300, 400, 510, 630, 760].map((r, i) => (
          <circle key={i} cx="700" cy="110" r={r}
            fill="none" stroke="#C49A45" strokeWidth="0.7"
            opacity={0.18 - i * 0.016}
          />
        ))}

        {/* corner diamond ornaments — top left */}
        <g stroke="#C49A45" fill="none" opacity="0.28">
          <polygon points="0,0 60,0 0,60" strokeWidth="0.8"/>
          <polygon points="0,0 38,0 0,38" strokeWidth="0.6" opacity="0.6"/>
          <line x1="0" y1="20" x2="20" y2="0" strokeWidth="0.5" opacity="0.5"/>
          <line x1="0" y1="40" x2="40" y2="0" strokeWidth="0.5" opacity="0.5"/>
        </g>

        {/* corner diamond ornaments — top right */}
        <g stroke="#C49A45" fill="none" opacity="0.28">
          <polygon points="1400,0 1340,0 1400,60" strokeWidth="0.8"/>
          <polygon points="1400,0 1362,0 1400,38" strokeWidth="0.6" opacity="0.6"/>
          <line x1="1400" y1="20" x2="1380" y2="0" strokeWidth="0.5" opacity="0.5"/>
          <line x1="1400" y1="40" x2="1360" y2="0" strokeWidth="0.5" opacity="0.5"/>
        </g>

        {/* corner diamond ornaments — bottom left */}
        <g stroke="#C49A45" fill="none" opacity="0.28">
          <polygon points="0,220 60,220 0,160" strokeWidth="0.8"/>
          <polygon points="0,220 38,220 0,182" strokeWidth="0.6" opacity="0.6"/>
        </g>

        {/* corner diamond ornaments — bottom right */}
        <g stroke="#C49A45" fill="none" opacity="0.28">
          <polygon points="1400,220 1340,220 1400,160" strokeWidth="0.8"/>
          <polygon points="1400,220 1362,220 1400,182" strokeWidth="0.6" opacity="0.6"/>
        </g>

        {/* centre diamond / compass rose */}
        <g transform="translate(700,110)" stroke="#C49A45" fill="none" opacity="0.32">
          <polygon points="0,-48 28,0 0,48 -28,0" strokeWidth="0.9"/>
          <polygon points="0,-28 16,0 0,28 -16,0" strokeWidth="0.6" opacity="0.7"/>
          <line x1="0" y1="-55" x2="0" y2="55" strokeWidth="0.5" opacity="0.4"/>
          <line x1="-55" y1="0" x2="55" y2="0" strokeWidth="0.5" opacity="0.4"/>
          <circle cx="0" cy="0" r="6" strokeWidth="0.8"/>
          <circle cx="0" cy="0" r="2" fill="#C49A45" opacity="0.5"/>
        </g>

        {/* thin horizontal rule lines */}
        <line x1="0" y1="1" x2="1400" y2="1" stroke="#C49A45" strokeWidth="0.6" opacity="0.2"/>
        <line x1="0" y1="219" x2="1400" y2="219" stroke="#C49A45" strokeWidth="0.6" opacity="0.2"/>

        {/* small cross ticks along top edge */}
        {[100,250,400,600,800,1000,1150,1300].map((x,i) => (
          <g key={i} stroke="#C49A45" opacity="0.25">
            <line x1={x} y1="0" x2={x} y2="10" strokeWidth="0.6"/>
            <line x1={x-4} y1="5" x2={x+4} y2="5" strokeWidth="0.5"/>
          </g>
        ))}
        {/* same along bottom */}
        {[100,250,400,600,800,1000,1150,1300].map((x,i) => (
          <g key={i} stroke="#C49A45" opacity="0.25">
            <line x1={x} y1="220" x2={x} y2="210" strokeWidth="0.6"/>
            <line x1={x-4} y1="215" x2={x+4} y2="215" strokeWidth="0.5"/>
          </g>
        ))}

      </svg>

      <h1>Heritage</h1>
      <p>A journey through ancient wonders and timeless landscapes</p>
    </header>
  );
}