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

        {/* bottom strip — 3 value props */}
        <div className={`${styles.strip} reveal`}>
          {[
            { icon: '📊', label: 'Data-Driven Strategy', desc: 'Every decision backed by real numbers, not guesswork.' },
            { icon: '🎬', label: 'Premium Creative',      desc: 'Content built to stop the scroll and build your brand.' },
            { icon: '📈', label: 'Measurable Growth',     desc: 'Clear reports showing exactly what moved the needle.' },
          ].map((item) => (
            <div key={item.label} className={styles.stripItem}>
              <span className={styles.stripIcon}>{item.icon}</span>
              <div>
                <p className={styles.stripLabel}>{item.label}</p>
                <p className={styles.stripDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
