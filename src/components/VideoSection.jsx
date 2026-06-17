import { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './VideoSection.module.css';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const ref = useScrollReveal();

  return (
    <section className={styles.section} ref={ref}>
      {/* background glows */}
      <div className={styles.bgOrange} aria-hidden="true" />
      <div className={styles.bgPurple} aria-hidden="true" />

      <div className="container">
        <div className={`${styles.head} reveal`}>
          <span className="badge">See Us In Action</span>
          <h2 className={styles.title}>
            Watch How We Build<br />
            <em className={styles.italic}>Brands That Last</em>
          </h2>
          <p className={styles.sub}>
            From strategy to execution — see the process, the people and the results
            that make ZoTo different.
          </p>
        </div>

        <div className={`${styles.frame} reveal`}>
          {/* animated decorative rings */}
          <div className={styles.ring1} aria-hidden="true" />
          <div className={styles.ring2} aria-hidden="true" />

          {!playing ? (
            /* ── Thumbnail placeholder ── */
            <div className={styles.thumb}>
              {/* animated waveform behind the play button */}
              <div className={styles.waveWrap} aria-hidden="true">
                {[1,2,3,4,5,6,7,8,9,10,11,12].map((n) => (
                  <div key={n} className={styles.wave} style={{ animationDelay: `${n * 0.1}s` }} />
                ))}
              </div>

              {/* play button */}
              <button
                className={styles.playBtn}
                onClick={() => setPlaying(true)}
                aria-label="Play video"
              >
                <span className={styles.playRipple} />
                <span className={styles.playRipple2} />
                <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                  <polygon points="6,3 20,12 6,21"/>
                </svg>
              </button>

              {/* label */}
              <div className={styles.thumbLabel}>
                <span className={styles.liveDot} />
                Click to watch our story
              </div>

              {/* floating stat chips */}
              <div className={`${styles.chip} ${styles.chip1}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="3,17 9,11 13,15 21,7"/>
                </svg>
                50+ Brands
              </div>
              <div className={`${styles.chip} ${styles.chip2}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                </svg>
                3+ Years
              </div>
              <div className={`${styles.chip} ${styles.chip3}`}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                </svg>
                95% Retention
              </div>

              {/* animated SVG graph inside the placeholder */}
              <svg className={styles.graphSvg} viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="gfill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(167,139,250,.35)"/>
                    <stop offset="100%" stopColor="rgba(167,139,250,0)"/>
                  </linearGradient>
                </defs>
                <path
                  d="M0,100 C50,90 80,70 120,55 C160,40 180,60 220,42 C260,25 290,30 330,15 C360,5 380,8 400,4"
                  fill="none"
                  stroke="rgba(167,139,250,.7)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className={styles.graphLine}
                />
                <path
                  d="M0,100 C50,90 80,70 120,55 C160,40 180,60 220,42 C260,25 290,30 330,15 C360,5 380,8 400,4 L400,120 L0,120 Z"
                  fill="url(#gfill)"
                />
                {/* orange growth curve */}
                <path
                  d="M0,110 C60,108 100,95 150,80 C200,65 230,72 270,55 C310,38 350,20 400,10"
                  fill="none"
                  stroke="rgba(244,98,42,.55)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                  className={styles.graphLine2}
                />
              </svg>
            </div>
          ) : (
            /* ── Video embed placeholder — swap src for real video ── */
            <div className={styles.videoWrap}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="ZoTo Smart Services — Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.iframe}
              />
            </div>
          )}
        </div>

        {/* bottom strip — 3 value props with SVG icons, no emojis */}
        <div className={`${styles.strip} reveal`}>
          {[
            {
              svg: (
                <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
                  <rect width="40" height="40" rx="10" fill="url(#vs1)"/>
                  <defs><linearGradient id="vs1" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#7B2FF7"/>
                    <stop offset="100%" stopColor="#1A8FE3"/>
                  </linearGradient></defs>
                  <rect x="9" y="22" width="4" height="9" rx="2" fill="white" opacity=".6"/>
                  <rect x="16" y="16" width="4" height="15" rx="2" fill="white" opacity=".8"/>
                  <rect x="23" y="10" width="4" height="21" rx="2" fill="white"/>
                  <polyline points="9,20 18,14 27,8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
                </svg>
              ),
              label: 'Data-Driven Strategy',
              desc: 'Every decision backed by real numbers, not guesswork.',
            },
            {
              svg: (
                <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
                  <rect width="40" height="40" rx="10" fill="url(#vs2)"/>
                  <defs><linearGradient id="vs2" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#FF5722"/>
                    <stop offset="100%" stopColor="#E91E8C"/>
                  </linearGradient></defs>
                  <rect x="8" y="11" width="24" height="18" rx="3" stroke="white" strokeWidth="2" fill="none"/>
                  <polygon points="17,16 17,24 25,20" fill="white"/>
                  <line x1="8" y1="33" x2="32" y2="33" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ),
              label: 'Premium Creative',
              desc: 'Content built to stop the scroll and build your brand.',
            },
            {
              svg: (
                <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
                  <rect width="40" height="40" rx="10" fill="url(#vs3)"/>
                  <defs><linearGradient id="vs3" x1="0" y1="0" x2="40" y2="40">
                    <stop offset="0%" stopColor="#C2185B"/>
                    <stop offset="100%" stopColor="#FF5722"/>
                  </linearGradient></defs>
                  <polyline points="8,28 15,20 20,24 28,14 32,10" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="27,10 32,10 32,15" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
                  <circle cx="32" cy="10" r="3" fill="white"/>
                </svg>
              ),
              label: 'Measurable Growth',
              desc: 'Clear reports showing exactly what moved the needle.',
            },
          ].map((item) => (
            <div key={item.label} className={styles.stripItem}>
              <span className={styles.stripIconWrap}>{item.svg}</span>
              <div>
                <p className={styles.stripLabel}>{item.label}</p>
                <p className={styles.stripDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* ── Bridge transition — fills gap before Services section ── */}
        <div className={styles.bridge}>
          {/* wave SVG */}
          <svg className={styles.bridgeWave} viewBox="0 0 1440 60" preserveAspectRatio="none" height="60">
            <path d="M0,30 C180,60 360,0 540,30 C720,60 900,0 1080,30 C1260,60 1380,20 1440,30 L1440,60 L0,60Z"
              fill="url(#bwGrad)"/>
            <defs>
              <linearGradient id="bwGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#A78BFA"/>
                <stop offset="50%" stopColor="#F4622A"/>
                <stop offset="100%" stopColor="#A78BFA"/>
              </linearGradient>
            </defs>
          </svg>

          {/* gradient divider */}
          <div className={styles.divider} />

          {/* floating service pills — tease what's coming */}
          <div className={styles.pillRow}>
            {[
              { label: 'Social Media Management', color: '#E91E8C',  delay: '0s'    },
              { label: 'SEO & Google Ads',        color: '#7B2FF7',  delay: '0.4s'  },
              { label: 'Branding & Design',       color: '#FF5722',  delay: '0.8s'  },
              { label: 'Content & Video',         color: '#1A8FE3',  delay: '1.2s'  },
              { label: 'Performance Advertising', color: '#C2185B',  delay: '1.6s'  },
              { label: 'Strategy & Growth',       color: '#7B2FF7',  delay: '2.0s'  },
            ].map((p) => (
              <span
                key={p.label}
                className={styles.pill}
                style={{ animationDelay: p.delay, '--pill-c': p.color }}
              >
                <span className={styles.pillDot} style={{ background: p.color }} />
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
