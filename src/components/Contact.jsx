import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from '../ui/Button';
import styles from './Contact.module.css';

// ── EmailJS config ─────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_9vac6zf';  
const EMAILJS_TEMPLATE_ID = 'template_23qosxo';  
const EMAILJS_PUBLIC_KEY  = 'L5HtprM45V5o6ST29';   
// ──────────────────────────────────────────────────────────────────────────

const contactInfo = [
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 10.15a19.79 19.79 0 01-3.07-8.67A2 2 0 012.63 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.57a16 16 0 006 6l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>`,
    label: 'Call Us Now', value: '+91 92860 90694',
    sub: 'Mon–Sat, 10am–7pm IST', href: 'tel:+919286090694', color: '#FF5722',
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    label: 'Email Us', value: 'zotosmartservices@gmail.com',
    sub: 'We reply within 24 hours', href: 'mailto:zotosmartservices@gmail.com', color: '#7B2FF7',
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.386.659 4.617 1.806 6.52L.057 24l5.638-1.479A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.957 0-3.795-.52-5.385-1.426L3.6 21.8l1.26-3.866A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>`,
    label: 'WhatsApp', value: 'Message Us on WhatsApp',
    sub: 'Quick response guaranteed', href: 'https://wa.me/919286090694', color: '#25D366',
  },
  {
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    label: 'Find Us', value: 'Raj Kamal Enclave, Meerut',
    sub: 'Near Shoprix, Uttar Pradesh', href: null, color: '#C2185B',
  },
];

const goals = [
  'Build Brand Awareness', 'Social Media Growth', 'Run Paid Advertising',
  'Create Content & Reels', 'Design a Website', 'Complete Digital Presence',
  'Not Sure Yet — Need Guidance',
];

/* Purple SVG pin for map overlay */
function PurplePin() {
  return (
    <svg viewBox="0 0 24 36" fill="none" width="24" height="36">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 7.18 10.5 22.5 11.1 23.4a1.1 1.1 0 001.8 0C13.5 34.5 24 19.18 24 12 24 5.37 18.63 0 12 0z"
        fill="#7C3AED"/>
      <circle cx="12" cy="12" r="5" fill="white"/>
      <circle cx="12" cy="12" r="2.5" fill="#7C3AED"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useScrollReveal();
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', goal: 'Not Sure Yet — Need Guidance', message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSent(true);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong. Please try again or reach us directly via phone/WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.noiseBg} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Headline ── */}
        <div className={styles.topHead}>
          <span className="badge" style={{ background: 'rgba(124,58,237,.08)', color: 'var(--purple)', borderColor: 'var(--purple-muted)' }}>
            <span className={styles.badgeDot} />
            Limited Spots — Act Now
          </span>
          <h2 className={styles.mainTitle}>
            Stop Being <span className={styles.gradTitle}>Invisible.</span><br />
            Your Competition <span className={styles.gradTitle2}>Isn't Waiting.</span>
          </h2>
          <p className={styles.mainSub}>
            Every day without a strategy is a day your competitors are pulling ahead.
            Book a free call — we'll map out exactly how to make your brand impossible to ignore.
          </p>
          <div className={styles.proofBar}>
            <div className={styles.proofAvatars}>
              {['VK','RR','RD','SG'].map((init, i) => (
                <div key={init} className={styles.proofAvatar}
                  style={{ background: ['#FF5722','#7B2FF7','#C2185B','#1A8FE3'][i], marginLeft: i > 0 ? -10 : 0, zIndex: 10-i }}>
                  {init}
                </div>
              ))}
            </div>
            <p className={styles.proofText}><strong>50+ brands</strong> already growing with ZoTo</p>
          </div>
        </div>

        {/* ── Main two-column ── */}
        <div className={styles.layout}>

          {/* ── Orange info box ── */}
          <div className={`${styles.infoBox} reveal`}>
            <div className={styles.infoBoxHead}>
              <span className={styles.infoBoxBadge}>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 4v4M6 4h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Contact Information
              </span>
              <h3 className={styles.infoBoxTitle}>Let's Start a Conversation</h3>
            </div>

            <div className={styles.info}>
              <div className={styles.infoCards}>
                {contactInfo.map((c) => (
                  <div key={c.label} className={styles.infoCard} style={{ '--ci-color': c.color }}>
                    <div className={styles.infoCardGlow} />
                    <div className={styles.infoIcon}
                      style={{ color: c.color, background: `${c.color}18`, border: `1px solid ${c.color}30` }}
                      dangerouslySetInnerHTML={{ __html: c.svg }}
                    />
                    <div>
                      <p className={styles.infoLabel}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className={styles.infoValue} style={{ color: c.color }}
                          target={c.href.startsWith('http') ? '_blank' : undefined}
                          rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          {c.value}
                        </a>
                      ) : (
                        <p className={styles.infoValue} style={{ color: c.color }}>{c.value}</p>
                      )}
                      <p className={styles.infoSub}>{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.urgency}>
                <div className={styles.urgencyDot} />
                <p><strong>We cap client intake every month</strong> to ensure every brand gets the full attention it deserves. Spots are genuinely limited — don't wait.</p>
              </div>

              <div className={styles.trustPills}>
                {['No Lock-in', 'Free First Call', 'Results or Revamp', '24hr Response'].map((t) => (
                  <span key={t} className={styles.trustPill}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Purple form box ── */}
          <div className={`${styles.formWrap} reveal`} style={{ transitionDelay: '120ms' }}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Start Your Growth Journey</h3>
              <p className={styles.formSub}>Fill in your details and we'll get back to you within 24 hours with a free strategy overview.</p>
            </div>

            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(124,58,237,.1)" stroke="#7C3AED" strokeWidth="2"/>
                    <path d="M7 12l4 4 6-6" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>You're in! We'll be in touch soon.</h4>
                <p>Thanks for reaching out. Our team will contact you within 24 hours to schedule your free strategy call.</p>
              </div>
            ) : (
              <form ref={formRef} className={styles.form} onSubmit={onSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" value={form.name} onChange={onChange}/>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={onChange}/>
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required placeholder="you@company.com" value={form.email} onChange={onChange}/>
                </div>
                <div className={styles.field}>
                  <label htmlFor="goal">What's Your Primary Goal?</label>
                  <select id="goal" name="goal" value={form.goal} onChange={onChange}>
                    {goals.map((g) => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Tell Us About Your Business</label>
                  <textarea id="message" name="message" rows={4} required
                    placeholder="What does your business do? What are your goals?"
                    value={form.message} onChange={onChange}/>
                </div>
                {error && <p className={styles.errorMsg}>{error}</p>}
                <Button type="submit" size="lg" disabled={loading}>
                  {loading ? (
                    <>
                      <svg className={styles.spinner} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.7 10.15a19.79 19.79 0 01-3.07-8.67A2 2 0 012.63 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.57a16 16 0 006 6l.96-.96a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                      </svg>
                      Book My Free Strategy Call
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            MAP ROW — orange info + map iframe
        ════════════════════════════════════════ */}
        <div className={`${styles.mapSection} reveal`}>

          {/* left panel — orange shade */}
          <div className={styles.mapInfoPanel}>
            <div className={styles.mapInfoHead}>
              <div className={styles.mapPinCircle}>
                <PurplePin />
              </div>
              <p className={styles.mapInfoTitle}>Our Office</p>
              <p className={styles.mapInfoAddr}>
                <strong>Raj Kamal Enclave</strong>
                Near Shoprix, Meerut<br />
                Uttar Pradesh — India
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Raj+Kamal+Enclave+near+Shoprix+Meerut+UP"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapDirectionsBtn}
            >
              Get Directions
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <div className={styles.mapOpenHours}>
              <p className={styles.mapOpenHoursTitle}>
                <span className={styles.mapOpenDot} />
                We're Open
              </p>
              <div className={styles.mapOpenHoursRow}>
                <span>Monday – Saturday</span>
                <span>10:00 AM – 7:00 PM</span>
              </div>
              <div className={styles.mapOpenHoursRow}>
                <span>Sunday</span>
                <span>By Appointment</span>
              </div>
            </div>
          </div>

          {/* right — map iframe pinned to Raj Kamal Enclave, Meerut */}
          <div className={styles.mapFrame}>
            <iframe
              title="ZoTo Smart Services — Raj Kamal Enclave, Meerut"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.0!2d77.7028!3d28.9844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c6568e834c24b%3A0x2a8b6b5b3e4c1234!2sRaj+Kamal+Enclave%2C+Meerut%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
