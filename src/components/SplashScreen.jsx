import { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

/* ── timing constants (ms) ── */
const T_LOGO        = 400;   // logo SVG fades + scales in
const T_ZOTO_START  = 900;   // "ZoTo" letters start appearing
const T_ZOTO_DONE   = 1700;  // last letter of "ZoTo" lands
const T_SS_START    = 1900;  // "Smart Services" fades in
const T_SS_DONE     = 2400;  // "Smart Services" fully visible
const T_TAGLINE     = 2600;  // tagline appears
const T_EXIT        = 3600;  // whole splash starts fading out
const T_DONE        = 4400;  // component unmounts, site shows

const ZOTO_LETTERS = ['Z', 'o', 'T', 'o'];

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('idle'); // idle → logo → zoto → ss → tagline → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'),    T_LOGO);
    const t2 = setTimeout(() => setPhase('zoto'),    T_ZOTO_START);
    const t3 = setTimeout(() => setPhase('ss'),      T_SS_START);
    const t4 = setTimeout(() => setPhase('tagline'), T_TAGLINE);
    const t5 = setTimeout(() => setPhase('exit'),    T_EXIT);
    const t6 = setTimeout(() => onDone(),            T_DONE);
    return () => [t1,t2,t3,t4,t5,t6].forEach(clearTimeout);
  }, [onDone]);

  const letterVisible = (idx) =>
    phase === 'zoto' || phase === 'ss' || phase === 'tagline' || phase === 'exit'
      ? true : false;

  return (
    <div className={`${styles.splash} ${phase === 'exit' ? styles.splashExit : ''}`}>

      {/* ── background particles ── */}
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className={styles.particle}
            style={{
              left:  `${5 + (i * 37) % 90}%`,
              top:   `${10 + (i * 53) % 80}%`,
              animationDelay: `${(i * 0.18) % 2}s`,
              width:  `${4 + (i % 3) * 3}px`,
              height: `${4 + (i % 3) * 3}px`,
              opacity: 0.12 + (i % 4) * 0.07,
            }}
          />
        ))}
      </div>

      {/* ── two ambient glow blobs ── */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      {/* ── centre content ── */}
      <div className={styles.centre}>

        {/* SVG logo mark */}
        <div className={`${styles.logoWrap} ${phase !== 'idle' ? styles.logoIn : ''}`}>
          <SplashLogo />
        </div>

        {/* "ZoTo" — letter by letter */}
        <div className={styles.zotoRow} aria-label="ZoTo">
          {ZOTO_LETTERS.map((ch, i) => (
            <span
              key={i}
              className={`${styles.zotoLetter} ${letterVisible(i) ? styles.zotoLetterIn : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {ch}
            </span>
          ))}
        </div>

        {/* "Smart Services" */}
        <div className={`${styles.smartServices} ${
          phase === 'ss' || phase === 'tagline' || phase === 'exit'
            ? styles.ssIn : ''
        }`}>
          Smart Services
        </div>

        {/* tagline */}
        <div className={`${styles.tagline} ${
          phase === 'tagline' || phase === 'exit' ? styles.taglineIn : ''
        }`}>
          Digital Marketing Agency · Meerut, India
        </div>

        {/* progress bar */}
        <div className={styles.progressBar}>
          <div className={`${styles.progressFill} ${phase !== 'idle' ? styles.progressRun : ''}`} />
        </div>
      </div>
    </div>
  );
}

/* ── Splash-specific SVG logo mark ── */
function SplashLogo() {
  return (
    <svg width="90" height="90" viewBox="0 0 56 56" fill="none"
      xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="splashGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF5722"/>
          <stop offset="100%" stopColor="#7B2FF7"/>
        </linearGradient>
        <filter id="splashGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="splashSparkGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* bg square */}
      <rect x="2" y="2" width="52" height="52" rx="14"
        fill="url(#splashGrad)" opacity="0.15"/>
      <rect x="2" y="2" width="52" height="52" rx="14"
        fill="none" stroke="url(#splashGrad)" strokeWidth="1.5" opacity="0.6"/>

      {/* outer glow ring */}
      <circle cx="28" cy="28" r="26" stroke="url(#splashGrad)"
        strokeWidth="0.5" opacity="0.3" fill="none"
        style={{ animation: 'splashRingPulse 2s ease-in-out infinite' }}/>

      {/* orbit rings */}
      <g style={{ transformOrigin:'28px 28px', animation:'splashOrbit 6s linear infinite' }}>
        <ellipse cx="28" cy="28" rx="22" ry="8"
          stroke="#FF5722" strokeWidth="1" strokeDasharray="4 3"
          opacity="0.4" fill="none" transform="rotate(-20 28 28)"/>
      </g>
      <g style={{ transformOrigin:'28px 28px', animation:'splashOrbit 9s linear infinite reverse' }}>
        <ellipse cx="28" cy="28" rx="18" ry="6"
          stroke="#7B2FF7" strokeWidth="1" strokeDasharray="3 4"
          opacity="0.35" fill="none" transform="rotate(40 28 28)"/>
      </g>

      {/* Z letter */}
      <text x="28" y="36" textAnchor="middle"
        fontFamily="Georgia, serif" fontStyle="italic"
        fontWeight="900" fontSize="30"
        fill="url(#splashGrad)"
        filter="url(#splashGlow)"
        style={{ animation: 'splashZPulse 2.5s ease-in-out infinite' }}>
        Z
      </text>

      {/* orbiting sparks */}
      <g style={{ transformOrigin:'28px 28px', animation:'splashOrbit 3s linear infinite' }}>
        <circle cx="50" cy="28" r="3" fill="#FF5722" filter="url(#splashSparkGlow)" opacity="0.9"/>
      </g>
      <g style={{ transformOrigin:'28px 28px', animation:'splashOrbit 3s linear infinite', animationDelay:'-1s' }}>
        <circle cx="50" cy="28" r="2.5" fill="#7B2FF7" filter="url(#splashSparkGlow)" opacity="0.85"/>
      </g>
      <g style={{ transformOrigin:'28px 28px', animation:'splashOrbit 3s linear infinite', animationDelay:'-2s' }}>
        <circle cx="50" cy="28" r="2" fill="#ffffff" filter="url(#splashSparkGlow)" opacity="0.7"/>
      </g>

      {/* corner dots */}
      <circle cx="9"  cy="9"  r="2.5" fill="#FF5722" opacity="0.6"
        style={{ animation:'splashDotBlink 1.8s ease-in-out infinite' }}/>
      <circle cx="47" cy="47" r="2.5" fill="#7B2FF7" opacity="0.6"
        style={{ animation:'splashDotBlink 1.8s ease-in-out infinite', animationDelay:'0.9s' }}/>
    </svg>
  );
}
