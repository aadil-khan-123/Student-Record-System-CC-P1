import { Link } from 'react-router-dom';

/* ---------- Small inline icons (no extra dependencies) ---------- */
const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const IconCap = () => (
  <svg {...iconProps}>
    <path d="M22 9 12 4 2 9l10 5 10-5Z" />
    <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
    <path d="M22 9v6" />
  </svg>
);
const IconRegister = () => (
  <svg {...iconProps}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);
const IconSearch = () => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
const IconChart = () => (
  <svg {...iconProps}>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </svg>
);
const IconEdit = () => (
  <svg {...iconProps}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);
const IconCloud = () => (
  <svg {...iconProps}>
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.7 1.5A3.8 3.8 0 0 0 6.5 19Z" />
  </svg>
);
const IconShield = () => (
  <svg {...iconProps}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FEATURES = [
  {
    icon: <IconRegister />,
    title: 'Centralized Register',
    text: 'Keep every student record in one place, with unique IDs, emails, and department mapping.',
  },
  {
    icon: <IconSearch />,
    title: 'Instant Search',
    text: 'Find anyone in seconds with live filtering across ID, name, email, and department.',
  },
  {
    icon: <IconChart />,
    title: 'Live Department Metrics',
    text: 'See headcounts and department stats update as soon as records change.',
  },
  {
    icon: <IconEdit />,
    title: 'Add, Edit & Delete',
    text: 'Manage the full record lifecycle with validated forms and safe delete confirmation.',
  },
  {
    icon: <IconCloud />,
    title: 'Cloud Synced',
    text: 'React frontend, Express API, and MongoDB Atlas keep your data available anywhere.',
  },
  {
    icon: <IconShield />,
    title: 'Clean & Reliable',
    text: 'Clear error messages, loading states, and a layout that works on phones and desktops.',
  },
];

const STEPS = [
  { n: '01', title: 'Open the dashboard', text: 'One click takes you to the live student workspace.' },
  { n: '02', title: 'Add your students', text: 'Enter ID, name, email, and department in a simple form.' },
  { n: '03', title: 'Search and manage', text: 'Filter, edit, or remove records and watch the stats update.' },
];

const STACK = ['React', 'Express', 'MongoDB Atlas', 'Netlify', 'Render'];

const PREVIEW_ROWS = [
  { id: 'S-1001', name: 'Student One', dept: 'Computer Science' },
  { id: 'S-1002', name: 'Student Two', dept: 'Mechanical' },
  { id: 'S-1003', name: 'Student Three', dept: 'Electronics' },
];

export default function LandingPage() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="lp">
      <style>{`
        .lp, .lp *, .lp *::before, .lp *::after { box-sizing: border-box; }
        .lp {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          background: #0b1120;
          color: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
        }
        .lp h1, .lp h2, .lp h3, .lp p { margin: 0; }

        /* Background glow */
        .lp-glow { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
        .lp-orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.5; }
        .lp-orb-1 { width: 520px; height: 520px; top: -160px; right: -120px; background: #4f46e5; }
        .lp-orb-2 { width: 460px; height: 460px; top: 380px; left: -180px; background: #7c3aed; opacity: 0.35; }
        .lp-orb-3 { width: 380px; height: 380px; bottom: 120px; right: -100px; background: #0ea5e9; opacity: 0.22; }
        .lp-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%);
          mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%);
        }

        .lp-inner { position: relative; z-index: 1; display: flex; flex-direction: column; flex: 1; }
        .lp-wrap { width: 100%; max-width: 1120px; margin: 0 auto; padding: 0 1.5rem; }

        /* Navbar */
        .lp-nav {
          position: sticky; top: 0; z-index: 50;
          background: rgba(11, 17, 32, 0.72);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .lp-nav-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; height: 68px; }
        .lp-brand { display: flex; align-items: center; gap: 0.65rem; font-weight: 800; font-size: 1.1rem; letter-spacing: -0.01em; color: #fff; text-decoration: none; }
        .lp-brand-mark {
          display: grid; place-items: center; width: 38px; height: 38px; border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          box-shadow: 0 8px 20px -6px rgba(99,102,241,0.7);
          color: #fff;
        }
        .lp-nav-links { display: flex; align-items: center; gap: 1.5rem; }
        .lp-nav-link { background: none; border: 0; color: #cbd5e1; font: inherit; font-size: 0.93rem; font-weight: 500; cursor: pointer; padding: 0.25rem 0; }
        .lp-nav-link:hover { color: #fff; }

        /* Buttons */
        .lp-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.55rem;
          min-height: 46px; padding: 0.75rem 1.5rem; border-radius: 11px;
          font: inherit; font-size: 0.98rem; font-weight: 650; text-decoration: none; cursor: pointer;
          border: 1px solid transparent; transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, border-color 0.15s ease;
        }
        .lp-btn-primary {
          color: #fff;
          background: linear-gradient(135deg, #6366f1 0%, #7c3aed 100%);
          box-shadow: 0 12px 30px -10px rgba(99,102,241,0.8);
        }
        .lp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 36px -10px rgba(99,102,241,0.9); }
        .lp-btn-ghost { color: #e2e8f0; background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.16); }
        .lp-btn-ghost:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.3); }
        .lp-btn-sm { min-height: 40px; padding: 0.5rem 1.1rem; font-size: 0.92rem; border-radius: 9px; }
        .lp-btn:focus-visible, .lp-nav-link:focus-visible { outline: 3px solid rgba(165,180,252,0.7); outline-offset: 3px; }
        .lp-arrow { transition: transform 0.15s ease; }
        .lp-btn:hover .lp-arrow { transform: translateX(3px); }

        /* Hero */
        .lp-hero { display: grid; gap: 3rem; align-items: center; padding: 4.5rem 0 3rem; }
        @media (min-width: 960px) { .lp-hero { grid-template-columns: 1.05fr 0.95fr; padding: 5.5rem 0 4rem; } }
        .lp-pill {
          display: inline-flex; align-items: center; gap: 0.55rem;
          padding: 0.4rem 1rem; border-radius: 999px; margin-bottom: 1.5rem;
          background: rgba(99,102,241,0.12); border: 1px solid rgba(129,140,248,0.35);
          color: #c7d2fe; font-size: 0.82rem; font-weight: 600;
        }
        .lp-dot { width: 8px; height: 8px; border-radius: 50%; background: #34d399; box-shadow: 0 0 0 0 rgba(52,211,153,0.6); animation: lp-pulse 2s infinite; }
        @keyframes lp-pulse { 70% { box-shadow: 0 0 0 8px rgba(52,211,153,0); } 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0); } }
        .lp-title { font-size: clamp(2.3rem, 5.4vw, 3.8rem); line-height: 1.08; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 1.4rem; }
        .lp-gradient { background: linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
        .lp-lead { max-width: 560px; color: #94a3b8; font-size: 1.1rem; line-height: 1.65; margin-bottom: 2rem; }
        .lp-cta-row { display: flex; flex-wrap: wrap; gap: 0.9rem; }
        .lp-byline { margin-top: 1.75rem; color: #64748b; font-size: 0.88rem; }
        .lp-byline strong { color: #cbd5e1; font-weight: 600; }

        /* Preview card */
        .lp-preview {
          position: relative; border-radius: 18px; padding: 1px;
          background: linear-gradient(145deg, rgba(129,140,248,0.6), rgba(255,255,255,0.06) 40%, rgba(244,114,182,0.4));
          box-shadow: 0 40px 80px -30px rgba(0,0,0,0.7);
          animation: lp-float 6s ease-in-out infinite;
        }
        @keyframes lp-float { 50% { transform: translateY(-8px); } }
        .lp-preview-body { border-radius: 17px; background: #111a2e; overflow: hidden; }
        .lp-preview-bar { display: flex; align-items: center; gap: 0.4rem; padding: 0.8rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .lp-bar-dot { width: 10px; height: 10px; border-radius: 50%; }
        .lp-bar-title { margin-left: 0.6rem; font-size: 0.78rem; color: #64748b; }
        .lp-preview-content { padding: 1.1rem; }
        .lp-tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.7rem; margin-bottom: 1rem; }
        .lp-tile { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 11px; padding: 0.8rem; }
        .lp-tile-label { font-size: 0.68rem; letter-spacing: 0.05em; text-transform: uppercase; color: #64748b; font-weight: 600; }
        .lp-tile-bar { margin-top: 0.7rem; height: 8px; border-radius: 6px; background: linear-gradient(90deg, #6366f1, #a855f7); }
        .lp-rows { border: 1px solid rgba(255,255,255,0.07); border-radius: 11px; overflow: hidden; }
        .lp-row { display: grid; grid-template-columns: 0.8fr 1.1fr 1.2fr; gap: 0.5rem; padding: 0.65rem 0.8rem; font-size: 0.8rem; color: #cbd5e1; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .lp-row:last-child { border-bottom: 0; }
        .lp-row-head { background: rgba(255,255,255,0.04); color: #64748b; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
        .lp-preview-note { margin-top: 0.8rem; font-size: 0.72rem; color: #64748b; text-align: center; }

        /* Stack strip */
        .lp-stack { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 0.6rem 0.75rem; padding: 1.4rem 0 0.5rem; }
        .lp-stack-label { color: #64748b; font-size: 0.85rem; margin-right: 0.4rem; }
        .lp-chip { padding: 0.35rem 0.85rem; border-radius: 999px; font-size: 0.82rem; font-weight: 600; color: #cbd5e1; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); }

        /* Sections */
        .lp-section { padding: 4.5rem 0 1rem; }
        .lp-eyebrow { color: #a5b4fc; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.7rem; }
        .lp-h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 800; letter-spacing: -0.02em; line-height: 1.15; margin-bottom: 0.9rem; }
        .lp-sub { color: #94a3b8; max-width: 560px; line-height: 1.65; }
        .lp-head { text-align: center; display: flex; flex-direction: column; align-items: center; margin-bottom: 2.75rem; }

        .lp-features { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem; }
        .lp-card {
          padding: 1.75rem; border-radius: 16px; text-align: left;
          background: rgba(30,41,59,0.5); border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
          transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }
        .lp-card:hover { transform: translateY(-4px); border-color: rgba(129,140,248,0.45); background: rgba(30,41,59,0.75); }
        .lp-card-icon {
          display: grid; place-items: center; width: 48px; height: 48px; border-radius: 12px; margin-bottom: 1.1rem;
          color: #c7d2fe; background: linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.2));
          border: 1px solid rgba(129,140,248,0.3);
        }
        .lp-card h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.45rem; color: #f8fafc; }
        .lp-card p { color: #94a3b8; font-size: 0.95rem; line-height: 1.6; }

        .lp-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem; counter-reset: s; }
        .lp-step { padding: 1.6rem; border-radius: 16px; background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.14); }
        .lp-step-n { font-size: 2rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 0.6rem; }
        .lp-step h3 { font-size: 1.08rem; font-weight: 700; margin-bottom: 0.4rem; }
        .lp-step p { color: #94a3b8; font-size: 0.93rem; line-height: 1.6; }

        /* Final CTA */
        .lp-final { margin: 4.5rem 0 3rem; padding: 3rem 1.5rem; text-align: center; border-radius: 22px; background: linear-gradient(135deg, rgba(99,102,241,0.28), rgba(168,85,247,0.22) 55%, rgba(244,114,182,0.18)); border: 1px solid rgba(165,180,252,0.28); }
        .lp-final .lp-sub { margin: 0 auto 1.75rem; }
        .lp-final .lp-h2 { margin-bottom: 0.7rem; }

        /* Footer */
        .lp-footer { border-top: 1px solid rgba(255,255,255,0.07); padding: 1.75rem 0; color: #64748b; font-size: 0.86rem; }
        .lp-footer-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.6rem 1.5rem; }

        @media (max-width: 640px) {
          .lp-nav-links .lp-nav-link { display: none; }
          .lp-hero { padding-top: 3rem; }
          .lp-btn { width: 100%; }
          .lp-cta-row { flex-direction: column; }
          .lp-nav .lp-btn { width: auto; }
          .lp-footer-row { justify-content: center; text-align: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .lp-preview, .lp-dot { animation: none; }
          .lp-card, .lp-btn, .lp-arrow { transition: none; }
        }
      `}</style>

      {/* Ambient background */}
      <div className="lp-glow" aria-hidden="true">
        <div className="lp-orb lp-orb-1" />
        <div className="lp-orb lp-orb-2" />
        <div className="lp-orb lp-orb-3" />
        <div className="lp-grid" />
      </div>

      <div className="lp-inner">
        {/* Navigation */}
        <header className="lp-nav">
          <div className="lp-wrap lp-nav-row">
            <Link to="/" className="lp-brand" aria-label="Student Record System home">
              <span className="lp-brand-mark">
                <IconCap />
              </span>
              <span>Student Record System</span>
            </Link>
            <nav className="lp-nav-links" aria-label="Primary">
              <button type="button" className="lp-nav-link" onClick={scrollToFeatures}>
                Features
              </button>
              <Link to="/dashboard" className="lp-btn lp-btn-primary lp-btn-sm">
                Open Dashboard <span className="lp-arrow">→</span>
              </Link>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero */}
          <div className="lp-wrap">
            <section className="lp-hero">
              <div>
                <div className="lp-pill">
                  <span className="lp-dot" /> Real-time student record management
                </div>
                <h1 className="lp-title">
                  Smart, secure &amp; simple <br />
                  <span className="lp-gradient">student records</span>
                </h1>
                <p className="lp-lead">
                  Handle enrollments, department tracking, and record lookup in one streamlined
                  platform. Fast to use, easy to manage, and always in sync with the cloud.
                </p>
                <div className="lp-cta-row">
                  <Link to="/dashboard" className="lp-btn lp-btn-primary">
                    Launch Dashboard <span className="lp-arrow">→</span>
                  </Link>
                  <button type="button" className="lp-btn lp-btn-ghost" onClick={scrollToFeatures}>
                    Explore features
                  </button>
                </div>
                <p className="lp-byline">
                  Built by <strong>Aadil Shakil Khan</strong>
                </p>
              </div>

              {/* Decorative dashboard preview */}
              <div className="lp-preview" aria-hidden="true">
                <div className="lp-preview-body">
                  <div className="lp-preview-bar">
                    <span className="lp-bar-dot" style={{ background: '#f87171' }} />
                    <span className="lp-bar-dot" style={{ background: '#fbbf24' }} />
                    <span className="lp-bar-dot" style={{ background: '#34d399' }} />
                    <span className="lp-bar-title">Student Record System · Dashboard</span>
                  </div>
                  <div className="lp-preview-content">
                    <div className="lp-tiles">
                      {['Students', 'Departments', 'Records'].map((label, i) => (
                        <div className="lp-tile" key={label}>
                          <div className="lp-tile-label">{label}</div>
                          <div className="lp-tile-bar" style={{ width: `${86 - i * 18}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="lp-rows">
                      <div className="lp-row lp-row-head">
                        <span>ID</span>
                        <span>Name</span>
                        <span>Department</span>
                      </div>
                      {PREVIEW_ROWS.map((r) => (
                        <div className="lp-row" key={r.id}>
                          <span>{r.id}</span>
                          <span>{r.name}</span>
                          <span>{r.dept}</span>
                        </div>
                      ))}
                    </div>
                    <p className="lp-preview-note">Sample data for illustration</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="lp-stack">
              <span className="lp-stack-label">Built with</span>
              {STACK.map((s) => (
                <span className="lp-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <section id="features" className="lp-section">
            <div className="lp-wrap">
              <div className="lp-head">
                <div className="lp-eyebrow">Features</div>
                <h2 className="lp-h2">Everything you need to manage students</h2>
                <p className="lp-sub">
                  A focused toolset that keeps records accurate and easy to find.
                </p>
              </div>
              <div className="lp-features">
                {FEATURES.map((f) => (
                  <article className="lp-card" key={f.title}>
                    <div className="lp-card-icon">{f.icon}</div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="lp-section">
            <div className="lp-wrap">
              <div className="lp-head">
                <div className="lp-eyebrow">How it works</div>
                <h2 className="lp-h2">Up and running in three steps</h2>
              </div>
              <div className="lp-steps">
                {STEPS.map((s) => (
                  <div className="lp-step" key={s.n}>
                    <div className="lp-step-n lp-gradient">{s.n}</div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="lp-wrap">
            <section className="lp-final">
              <h2 className="lp-h2">Ready to organize your student records?</h2>
              <p className="lp-sub">Jump into the dashboard and start managing records right away.</p>
              <Link to="/dashboard" className="lp-btn lp-btn-primary">
                Go to Dashboard <span className="lp-arrow">→</span>
              </Link>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="lp-footer">
          <div className="lp-wrap lp-footer-row">
            <span>© 2026 Student Record System · Built with the MERN stack</span>
            <span>By Aadil Shakil Khan</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
