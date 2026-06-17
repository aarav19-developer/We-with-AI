import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHead from '../ui/SectionHead';
import { teamLeads } from '../data/Team';
import styles from './About.module.css';

const pillars = [
  {
    svg: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="9" fill="url(#a1)"/><defs><linearGradient id="a1" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stop-color="#FF5722"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><rect x="9" y="9" width="18" height="18" rx="3" stroke="white" stroke-width="2" fill="none"/><line x1="13" y1="14" x2="23" y2="14" stroke="white" stroke-width="1.8" stroke-linecap="round"/><line x1="13" y1="18" x2="23" y2="18" stroke="white" stroke-width="1.8" stroke-linecap="round"/><line x1="13" y1="22" x2="19" y2="22" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    title: 'Full Service Agency',
    desc: 'Strategy, content, ads, branding and websites — all under one roof, working together instead of in silos.',
  },
  {
    svg: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="9" fill="url(#a2)"/><defs><linearGradient id="a2" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stop-color="#7B2FF7"/><stop offset="100%" stop-color="#C2185B"/></linearGradient></defs><circle cx="18" cy="14" r="5" stroke="white" stroke-width="2" fill="none"/><path d="M9 27c0-5 4-9 9-9s9 4 9 9" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    title: 'Expert Team',
    desc: "Strategists, designers, video editors and ad specialists who've grown brands across multiple industries.",
  },
  {
    svg: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="9" fill="url(#a3)"/><defs><linearGradient id="a3" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stop-color="#1A8FE3"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><path d="M18 10l2 6h6l-5 3.5 2 6L18 22l-5 3.5 2-6L10 16h6z" stroke="white" stroke-width="1.8" fill="none" stroke-linejoin="round"/></svg>`,
    title: 'Trusted Partners',
    desc: 'From EV manufacturers to retail chains — businesses trust us with their entire digital presence.',
  },
  {
    svg: `<svg viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="9" fill="url(#a4)"/><defs><linearGradient id="a4" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stop-color="#C2185B"/><stop offset="100%" stop-color="#FF5722"/></linearGradient></defs><polyline points="9,24 14,18 19,21 27,11" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polyline points="23,11 27,11 27,15" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    title: 'Result-Driven',
    desc: 'Every campaign is tracked against real numbers — reach, engagement, leads and growth, not just vanity metrics.',
  },
];

export default function About({ compact = false }) {
  const storyRef = useScrollReveal();
  const teamRef  = useScrollReveal();

  return (
    <>
      {/* ── Story + Pillars ── */}
      <section className={`section ${compact ? '' : 'section--alt'}`} ref={storyRef}>
        <div className="container">
          {!compact && (
            <SectionHead
              badge="Who We Are"
              title="From Zero To Recognized Brands"
              align="left"
            />
          )}
          <div className={styles.layout}>
            <div className={`${styles.copy} reveal`}>
              {compact && (
                <span className="badge" style={{ marginBottom: 14, display: 'inline-flex' }}>Who We Are</span>
              )}
              {compact && (
                <h2 className={styles.compactH2}>From Zero To Recognized Brands</h2>
              )}
              <p>
                ZoTo Smart Services is a full-service digital marketing and brand-building agency
                that combines strategy, creativity and technology to help businesses grow from zero
                to brands people actually recognize and trust.
              </p>
              <p style={{ marginTop: 16 }}>
                We don't believe in one-size-fits-all marketing. Every brand we take on gets a
                strategy built around its own goals, audience and industry — then a team that handles
                everything from the first social post to the final ad report.
              </p>
              <p style={{ marginTop: 16 }}>
                It's an approach that's helped us manage <strong>50+ brands</strong> across
                automotive, food &amp; grocery, real estate, sports and services — and keep{' '}
                <strong>95%</strong> of our clients long after their first contract ends.
              </p>
            </div>
            <div className={styles.pillars}>
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`${styles.pillar} reveal`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className={styles.pillarIcon} dangerouslySetInnerHTML={{ __html: p.svg }} />
                  <div>
                    <h4 className={styles.pillarTitle}>{p.title}</h4>
                    <p className={styles.pillarDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership — light warm theme, Contact-page energy ── */}
      {!compact && (
        <section className={styles.leaderSection} ref={teamRef}>
          {/* background decorations */}
          <div className={styles.bgBlob1} aria-hidden="true" />
          <div className={styles.bgBlob2} aria-hidden="true" />
          <div className={styles.bgDots}  aria-hidden="true" />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>

            {/* ── Header ── */}
            <div className={`${styles.leaderHead} reveal`}>
              <span className={styles.leaderBadge}>
                <span className={styles.badgeDot} />
                Leadership
              </span>
              <h2 className={styles.leaderTitle}>
                The Minds <em>Behind ZoTo</em>
              </h2>
              <p className={styles.leaderSub}>
                Two builders. One relentless vision. Making every brand impossible to ignore.
              </p>
              {/* proof bar — same style as Contact */}
              <div className={styles.proofBar}>
                {['VK','AH'].map((ini, i) => (
                  <div
                    key={ini}
                    className={styles.proofAvatar}
                    style={{
                      background: [teamLeads[0]?.color ?? '#FF5722', teamLeads[1]?.color ?? '#7B2FF7'][i],
                      marginLeft: i > 0 ? -10 : 0,
                      zIndex: 10 - i,
                    }}
                  >
                    {ini}
                  </div>
                ))}
                <p className={styles.proofText}>
                  <strong>Founders</strong> — Meerut, India
                </p>
              </div>
            </div>

            {/* ── Team cards ── */}
            <div className={styles.teamGrid}>
              {teamLeads.map((member, i) => (
                <div
                  key={member.name}
                  className={`${styles.teamCard} reveal`}
                  style={{ transitionDelay: `${i * 160}ms`, '--mc': member.color }}
                >
                  {/* animated colour top bar */}
                  <div className={styles.cardBar} style={{ background: member.color }} />

                  {/* card inner padding */}
                  <div className={styles.cardInner}>

                    {/* avatar + tag */}
                    <div className={styles.cardTop}>
                      <div className={styles.avatarWrap}>
                        <div className={styles.avatarPulse}
                          style={{ background: `${member.color}25` }} />
                        <div
                          className={styles.avatar}
                          style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}bb)` }}
                        >
                          <span>{member.initials}</span>
                        </div>
                      </div>
                      <span
                        className={styles.memberTag}
                        style={{ color: member.color, background: `${member.color}14`, borderColor: `${member.color}35` }}
                      >
                        {member.tag}
                      </span>
                    </div>

                    {/* name */}
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole} style={{ color: member.color }}>
                      {member.role}
                    </p>

                    {/* divider with member colour */}
                    <div className={styles.cardDivider}
                      style={{ background: `linear-gradient(90deg, ${member.color}50, transparent)` }} />

                    {/* bio */}
                    <p className={styles.memberBio}>{member.bio}</p>

                    {/* animated skill bars instead of chips */}
                    <div className={styles.skillBars}>
                      {member.skills.map((s, si) => (
                        <div key={s.label} className={styles.skillRow}>
                          <div className={styles.skillMeta}>
                            <span className={styles.skillLabel}>{s.label}</span>
                            <span className={styles.skillPct} style={{ color: member.color }}>{s.pct}%</span>
                          </div>
                          <div className={styles.skillTrack}>
                            <div
                              className={styles.skillFill}
                              style={{
                                width: `${s.pct}%`,
                                background: `linear-gradient(90deg, ${member.color}, ${member.color}88)`,
                                animationDelay: `${0.3 + si * 0.15}s`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* hover glow overlay */}
                  <div className={styles.cardGlow}
                    style={{ background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${member.color}18, transparent 70%)` }} />
                </div>
              ))}
            </div>

            {/* ── More team strip — same energy as Contact urgency bar ── */}
            <div className={`${styles.moreStrip} reveal`}>
              <div className={styles.moreLeft}>
                <div className={styles.avatarStack}>
                  {[
                    { ini: 'KA', bg: '#FF5722' },
                    { ini: 'VS', bg: '#7B2FF7' },
                    { ini: 'MN', bg: '#1A8FE3' },
                  ].map(({ ini, bg }, i) => (
                    <div
                      key={ini}
                      className={styles.stackAvatar}
                      style={{ background: bg, marginLeft: i > 0 ? -12 : 0, zIndex: 10 - i }}
                    >
                      {ini}
                    </div>
                  ))}
                  <div className={styles.stackMore}>+</div>
                </div>
                <div>
                  <p className={styles.moreTitle}>Our Growing Team</p>
                  <p className={styles.moreSub}>
                    Kanhaiya · Vishal · Manish · Kartik and many more creative minds behind the work.
                  </p>
                </div>
              </div>
              <div className={styles.moreStats}>
                <div className={styles.stat}>
                  <strong>10+</strong>
                  <span>Team Members</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <strong>50+</strong>
                  <span>Brands Served</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                  <strong>95%</strong>
                  <span>Retention Rate</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}
    </>
  );
}
