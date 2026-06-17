/* ─────────────────────────────────────────────────────────
   Services Data — three categories:
   1. Social Media & Marketing (existing + new)
   2. Designing Services (from image)
   3. Advertising Services (from image, no duplicates)
───────────────────────────────────────────────────────── */

export const serviceCategories = [
  {
    id: 'marketing',
    label: 'Marketing Services',
    color: '#7B2FF7',
    colorSoft: '#F5F0FF',
    svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#mc)"/><defs><linearGradient id="mc" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stop-color="#7B2FF7"/><stop offset="100%" stop-color="#C2185B"/></linearGradient></defs><polyline points="8,28 15,20 21,24 32,12" stroke="white" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polyline points="26,12 32,12 32,18" stroke="white" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>`,
    services: [
      { label: 'Social Media Management',   icon: 'instagram' },
      { label: 'Social Media Marketing',    icon: 'megaphone' },
      { label: 'Search Engine Optimization',icon: 'search'    },
      { label: 'Content Marketing',         icon: 'file'      },
      { label: 'Influencer Marketing',      icon: 'star'      },
      { label: 'Video Editing',             icon: 'video'     },
      { label: 'Google Ads Management',     icon: 'google'    },
      { label: 'Meta Ads Management',       icon: 'meta'      },
      { label: 'Facebook Ads Management',   icon: 'facebook'  },
      { label: 'Instagram Ads Management',  icon: 'instagram' },
      { label: 'Pay-Per-Click Advertising', icon: 'cursor'    },
      { label: 'Campaign Strategy',         icon: 'chart'     },
    ],
  },
  {
    id: 'designing',
    label: 'Designing Services',
    color: '#F4622A',
    colorSoft: '#FFF0E8',
    svg: `<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="10" fill="url(#dc)"/><defs><linearGradient id="dc" x1="0" y1="0" x2="40" y2="40"><stop offset="0%" stop-color="#F4622A"/><stop offset="100%" stop-color="#E91E8C"/></linearGradient></defs><circle cx="20" cy="20" r="8" stroke="white" stroke-width="2.2" fill="none"/><line x1="20" y1="8" x2="20" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="20" y1="28" x2="20" y2="32" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="20" x2="12" y2="20" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="28" y1="20" x2="32" y2="20" stroke="white" stroke-width="2" stroke-linecap="round"/><circle cx="20" cy="20" r="3" fill="white"/></svg>`,
    services: [
      { label: 'Logo Design',          icon: 'star'   },
      { label: 'Letterhead Design',    icon: 'doc'    },
      { label: 'Catalogue Design',     icon: 'book'   },
      { label: 'Brochure Design',      icon: 'layout' },
      { label: 'Graphic Design',       icon: 'pen'    },
      { label: 'UI/UX Design',         icon: 'uiux'   },
      { label: 'Landing Page Design',  icon: 'web'    },
      { label: 'Ad Design',            icon: 'ad'     },
      { label: 'Menu Design',          icon: 'grid'   },
      { label: 'Flyer Design',         icon: 'flyer'  },
    ],
  },
];

/* ── Icon SVGs map ── */
export const iconSvgs = {
  instagram: `<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="10" cy="10" r="3.2" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="14" cy="6" r="1" fill="currentColor"/></svg>`,
  megaphone: `<svg viewBox="0 0 20 20" fill="none"><path d="M4 8H3a1 1 0 00-1 1v2a1 1 0 001 1h1l3 4h1V4H7L4 8z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 5.5l7-3v15l-7-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  search:    `<svg viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="5.5" stroke="currentColor" stroke-width="1.6"/><line x1="13.5" y1="13.5" x2="17" y2="17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  file:      `<svg viewBox="0 0 20 20" fill="none"><path d="M12 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V8l-4-6z" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="7" y1="11" x2="13" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="14" x2="11" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  star:      `<svg viewBox="0 0 20 20" fill="none"><polygon points="10,2 12.5,7.5 18,8.2 14,12 15.2,17.5 10,14.8 4.8,17.5 6,12 2,8.2 7.5,7.5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>`,
  video:     `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="12" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><polyline points="14,8 18,6 18,14 14,12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  google:    `<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M10 10h4c0 2.2-1.8 4-4 4a4 4 0 110-8c1.1 0 2.1.4 2.8 1.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  meta:      `<svg viewBox="0 0 20 20" fill="none"><path d="M2 12c0-3 1.5-6 3.5-6C7 6 8 8 10 8s3-2 4.5-2c2 0 3.5 3 3.5 6 0 1.5-.7 2-1.5 2-.6 0-1.2-.5-2-1.8C14 11 13.5 10 13 10s-1 1-1.5 2.2c-.8 1.3-1.4 1.8-2 1.8-.6 0-1.2-.5-2-1.8C7 11 6.5 10 6 10s-1 1-1.5 2.2c-.8 1.3-1.4 1.8-2 1.8C1.7 14 2 13.5 2 12z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
  facebook:  `<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M11 10h2l.5-2.5H11V6c0-.7.3-1 1-1h1.5V2.5S12.8 2 11.5 2C9.5 2 9 3.3 9 5v2.5H7V10h2v8h2v-8z" stroke="currentColor" stroke-width="1.3" fill="none" stroke-linejoin="round"/></svg>`,
  cursor:    `<svg viewBox="0 0 20 20" fill="none"><path d="M4 2l12 8-6 1-3 5L4 2z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>`,
  chart:     `<svg viewBox="0 0 20 20" fill="none"><polyline points="3,15 8,9 12,12 17,5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  doc:       `<svg viewBox="0 0 20 20" fill="none"><rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="7" y1="7" x2="13" y2="7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="7" y1="13" x2="10" y2="13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  book:      `<svg viewBox="0 0 20 20" fill="none"><path d="M4 3h5a3 3 0 013 3v11a2 2 0 00-2-2H4V3z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M16 3h-5a3 3 0 00-3 3v11a2 2 0 012-2h6V3z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
  layout:    `<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="3" y1="8" x2="17" y2="8" stroke="currentColor" stroke-width="1.4"/><line x1="10" y1="8" x2="10" y2="17" stroke="currentColor" stroke-width="1.4"/></svg>`,
  pen:       `<svg viewBox="0 0 20 20" fill="none"><path d="M14 3l3 3-9 9-4 1 1-4 9-9z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><line x1="12" y1="5" x2="15" y2="8" stroke="currentColor" stroke-width="1.5"/></svg>`,
  uiux:      `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="5" y="7" width="4" height="3" rx="1" stroke="currentColor" stroke-width="1.3" fill="none"/><line x1="11" y1="8" x2="15" y2="8" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><line x1="11" y1="11" x2="14" y2="11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  web:       `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="2" y1="8" x2="18" y2="8" stroke="currentColor" stroke-width="1.3"/><circle cx="5" cy="6" r="1" fill="currentColor"/><circle cx="8" cy="6" r="1" fill="currentColor"/></svg>`,
  ad:        `<svg viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="7" y1="9" x2="7" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M7 9h3a2 2 0 010 4H7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/><line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="12" y1="11" x2="14" y2="11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  grid:      `<svg viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4" fill="none"/><rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4" fill="none"/><rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4" fill="none"/><rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4" fill="none"/></svg>`,
  flyer:     `<svg viewBox="0 0 20 20" fill="none"><path d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6l-2-4z" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="6" y1="9" x2="14" y2="9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><line x1="6" y1="12" x2="11" y2="12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><polyline points="12,2 12,6 16,6" stroke="currentColor" stroke-width="1.3" fill="none"/></svg>`,
};

/* Legacy flat array — used in HomePage preview (first 6) */
export const services = [
  {
    id: 'social', title: 'Social Media Management',
    svg: `<svg viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="url(#s1)"/><defs><linearGradient id="s1" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#FF6B2B"/><stop offset="100%" stop-color="#E91E8C"/></linearGradient></defs><rect x="14" y="14" width="20" height="20" rx="5" stroke="white" stroke-width="2.5" fill="none"/><circle cx="24" cy="24" r="4" stroke="white" stroke-width="2.5" fill="none"/><circle cx="30.5" cy="17.5" r="1.5" fill="white"/></svg>`,
    short: 'Full-service presence management across Instagram, Facebook & more.',
    desc: 'We manage your social presence end-to-end — content calendars, captions, daily posting, and community engagement.',
    features: ['Content calendar & creative captions','Daily posting & scheduling','Community engagement & DM replies','Monthly analytics & growth reports'],
  },
  {
    id: 'seo', title: 'Search Engine Optimization',
    svg: `<svg viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="url(#s2b)"/><defs><linearGradient id="s2b" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#7B2FF7"/><stop offset="100%" stop-color="#1A8FE3"/></linearGradient></defs><circle cx="22" cy="22" r="9" stroke="white" stroke-width="2.5" fill="none"/><line x1="29" y1="29" x2="36" y2="36" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    short: 'Rank higher on Google and drive consistent organic traffic to your business.',
    desc: 'On-page, off-page and technical SEO strategies that get your business found by the right people at the right time.',
    features: ['Keyword research & on-page SEO','Technical SEO audit & fixes','Link building & authority growth','Monthly ranking & traffic reports'],
  },
  {
    id: 'ads', title: 'Google & Meta Ads',
    svg: `<svg viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="url(#s3b)"/><defs><linearGradient id="s3b" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#C2185B"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><polyline points="12,32 20,22 26,28 36,16" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><polyline points="30,16 36,16 36,22" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
    short: 'Targeted paid campaigns on Google, Meta, Facebook & Instagram that generate real leads.',
    desc: 'We plan, launch and optimize paid campaigns across Google, Meta and YouTube — built on real targeting and tested creative.',
    features: ['Google Ads & Meta Ads setup','Audience targeting & retargeting','Creative testing & budget optimization','Conversion tracking & ROI reporting'],
  },
  {
    id: 'content', title: 'Content Creation & Video Editing',
    svg: `<svg viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="url(#s4b)"/><defs><linearGradient id="s4b" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#FF6B2B"/><stop offset="100%" stop-color="#7B2FF7"/></linearGradient></defs><rect x="12" y="14" width="24" height="20" rx="3" stroke="white" stroke-width="2.5" fill="none"/><polygon points="21,19 21,29 31,24" fill="white"/></svg>`,
    short: 'Professional reels, videos, ad shoots and graphics that stop the scroll.',
    desc: 'Professional reels, ad videos, product photography and graphic design — content built to premium standards.',
    features: ['Reels & short-form video production','Ad shoots & brand films','Graphic design & motion graphics','Product & on-location photography'],
  },
  {
    id: 'logo', title: 'Logo & Brand Identity Design',
    svg: `<svg viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="url(#s5b)"/><defs><linearGradient id="s5b" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#1A8FE3"/><stop offset="100%" stop-color="#C2185B"/></linearGradient></defs><polygon points="24,13 30,20 38,21 32,27 34,35 24,30 14,35 16,27 10,21 18,20" stroke="white" stroke-width="2" fill="none" stroke-linejoin="round"/></svg>`,
    short: 'Logo design, brand color palette, typography and complete visual identity kit.',
    desc: 'From logo to color palette, typography and brand guidelines — we build an identity that makes your brand instantly recognizable.',
    features: ['Logo design & brand refresh','Color palette & typography kit','Brand guidelines document','Visual identity for all platforms'],
  },
  {
    id: 'design', title: 'Graphic & Print Design',
    svg: `<svg viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="url(#s6b)"/><defs><linearGradient id="s6b" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stop-color="#E91E8C"/><stop offset="100%" stop-color="#FF6B2B"/></linearGradient></defs><path d="M16 32l4-12 4 8 3-4 5 8H16z" stroke="white" stroke-width="2" fill="none" stroke-linejoin="round"/><circle cx="30" cy="18" r="3" stroke="white" stroke-width="2" fill="none"/></svg>`,
    short: 'Brochures, catalogues, flyers, letterheads, menus and ad creatives — print & digital.',
    desc: 'Every piece of print and digital design your brand needs — from brochures to catalogues, flyers, menus, letterheads and ad creatives.',
    features: ['Brochure & catalogue design','Flyer & menu design','Letterhead & stationery','Ad creatives for digital platforms'],
  },
];
