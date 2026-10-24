import { Link } from 'react-router-dom';

/* ------------------------------------------------------------------
   Edit your details here. Everything on the About page reads from this.
------------------------------------------------------------------- */
const PROFILE = {
  name: 'Aadil Shakil Khan',
  initials: 'AK',
  role: 'Developer & creator of Student Record System',
  tagline:
    'I design and build full-stack web apps. This project is my Cloud Computing CA2 work, built with the MERN stack and deployed on the cloud.',
  email: 'ak0022123@gmail.com',
  github: 'https://github.com/aadil-khan-123',
  repo: 'https://github.com/aadil-khan-123/Student-Record-System-CC-P1',
  course: 'Cloud Computing (CA2)',
  project: 'Student Record System',
};

const STACK = [
  { name: 'React', role: 'Frontend UI and routing', color: '#38bdf8' },
  { name: 'Express & Node.js', role: 'REST API backend', color: '#34d399' },
  { name: 'MongoDB Atlas', role: 'Cloud database', color: '#4ade80' },
  { name: 'Netlify', role: 'Frontend hosting', color: '#2dd4bf' },
  { name: 'Render', role: 'Backend hosting', color: '#a78bfa' },
];

const FLOW = ['Browser', 'React on Netlify', 'Express API on Render', 'MongoDB Atlas'];

const HIGHLIGHTS = [
  'Add, edit, and delete student records with validated forms',
  'Live search across ID, name, email, and department',
  'Dashboard summary of students and departments',
  'Responsive design for phones, tablets, and desktops',
];

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const GithubIcon = () => (
  <svg {...iconProps}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);
const CodeIcon = () => (
  <svg {...iconProps}>
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const CapIcon = () => (
  <svg {...iconProps} width={22} height={22}>
    <path d="M22 9 12 4 2 9l10 5 10-5Z" />
    <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
    <path d="M22 9v6" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="ab">
      <style>{`
        .ab, .ab *, .ab *::before, .ab *::after { box-sizing: border-box; }
        .ab {
          position: relative; min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden;
          background: #0b1120; color: #f8fafc;
          font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
        }
        .ab h1, .ab h2, .ab h3, .ab p, .ab dl, .ab dd, .ab ul { margin: 0; padding: 0; }
        .ab ul { list-style: none; }

        .ab-glow { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
        .ab-orb { position: absolute; border-radius: 50%; filter: blur(90px); }
        .ab-orb-1 { width: 500px; height: 500px; top: -150px; left: -120px; background: #4f46e5; opacity: 0.4; }
        .ab-orb-2 { width: 460px; height: 460px; top: 300px; right: -160px; background: #7c3aed; opacity: 0.3; }
        .ab-orb-3 { width: 360px; height: 360px; bottom: 80px; left: 20%; background: #0ea5e9; opacity: 0.16; }
        .ab-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 48px 48px;
          -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%);
          mask-image: radial-gradient(ellipse at 50% 0%, #000 20%, transparent 70%);
        }
        .ab-inner { position: relative; z-index: 1; display: flex; flex-direction: column; flex: 1; }
        .ab-wrap { width: 100%; max-width: 1040px; margin: 0 auto; padding: 0 1.5rem; }

        /* Nav */
        .ab-nav { position: sticky; top: 0; z-index: 50; background: rgba(11,17,32,0.72); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid rgba(255,255,255,0.08); }
        .ab-nav-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; height: 68px; }
        .ab-brand { display: flex; align-items: center; gap: 0.65rem; font-weight: 800; font-size: 1.08rem; color: #fff; text-decoration: none; }
        .ab-brand-mark { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, #6366f1, #a855f7); box-shadow: 0 8px 20px -6px rgba(99,102,241,0.7); color: #fff; }
        .ab-nav-links { display: flex; align-items: center; gap: 0.75rem; }

        /* Buttons */
        .ab-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.55rem; min-height: 44px; padding: 0.65rem 1.3rem; border-radius: 11px; font: inherit; font-size: 0.95rem; font-weight: 650; text-decoration: none; cursor: pointer; border: 1px solid transparent; transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, border-color 0.15s ease; }
        .ab-btn-primary { color: #fff; background: linear-gradient(135deg, #6366f1, #7c3aed); box-shadow: 0 12px 28px -10px rgba(99,102,241,0.85); }
        .ab-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 18px 34px -10px rgba(99,102,241,0.95); }
        .ab-btn-ghost { color: #e2e8f0; background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.16); }
        .ab-btn-ghost:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.3); }
        .ab-btn-sm { min-height: 40px; padding: 0.45rem 1.05rem; font-size: 0.9rem; border-radius: 9px; }
        .ab-btn:focus-visible { outline: 3px solid rgba(165,180,252,0.7); outline-offset: 3px; }

        /* Profile hero */
        .ab-hero { padding: 4rem 0 2rem; }
        .ab-profile { position: relative; display: grid; gap: 2rem; align-items: center; padding: 2.25rem; border-radius: 22px; background: linear-gradient(160deg, rgba(30,41,59,0.75), rgba(15,23,42,0.85)); border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 40px 80px -40px rgba(0,0,0,0.8); overflow: hidden; }
        .ab-profile::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 3px; background: linear-gradient(90deg, #6366f1, #a855f7, #ec4899); }
        @media (min-width: 760px) { .ab-profile { grid-template-columns: auto 1fr; gap: 2.5rem; padding: 2.75rem; } }
        .ab-avatar { display: grid; place-items: center; width: 132px; height: 132px; border-radius: 50%; font-size: 2.6rem; font-weight: 800; letter-spacing: 0.02em; color: #fff; background: linear-gradient(135deg, #6366f1, #a855f7 60%, #ec4899); box-shadow: 0 0 0 6px rgba(99,102,241,0.18), 0 24px 40px -14px rgba(99,102,241,0.8); }
        .ab-role { display: inline-flex; padding: 0.35rem 0.95rem; border-radius: 999px; margin-bottom: 0.9rem; background: rgba(99,102,241,0.14); border: 1px solid rgba(129,140,248,0.35); color: #c7d2fe; font-size: 0.82rem; font-weight: 600; }
        .ab-name { font-size: clamp(2rem, 4.6vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 0.85rem; background: linear-gradient(135deg, #ffffff 30%, #c7d2fe 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
        .ab-tagline { color: #94a3b8; line-height: 1.7; max-width: 560px; margin-bottom: 1.5rem; }
        .ab-actions { display: flex; flex-wrap: wrap; gap: 0.7rem; }

        /* Sections */
        .ab-section { padding: 2.25rem 0 0.5rem; }
        .ab-eyebrow { color: #a5b4fc; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.5rem; }
        .ab-h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 1.4rem; }

        .ab-two { display: grid; gap: 1.25rem; }
        @media (min-width: 860px) { .ab-two { grid-template-columns: 1.15fr 0.85fr; } }
        .ab-card { padding: 1.75rem; border-radius: 16px; background: rgba(30,41,59,0.5); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
        .ab-card h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.8rem; }
        .ab-card p { color: #94a3b8; line-height: 1.7; }
        .ab-card p + p { margin-top: 0.8rem; }

        .ab-details { display: grid; gap: 0.95rem; }
        .ab-details div { display: flex; flex-direction: column; gap: 0.15rem; padding-bottom: 0.95rem; border-bottom: 1px dashed rgba(255,255,255,0.1); }
        .ab-details div:last-child { border-bottom: 0; padding-bottom: 0; }
        .ab-details dt { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.07em; font-weight: 700; color: #64748b; }
        .ab-details dd { color: #e2e8f0; font-weight: 600; overflow-wrap: anywhere; }
        .ab-details a { color: #c7d2fe; text-decoration: none; }
        .ab-details a:hover { text-decoration: underline; }

        .ab-list { display: grid; gap: 0.7rem; }
        .ab-list li { display: flex; align-items: flex-start; gap: 0.7rem; color: #cbd5e1; line-height: 1.55; }
        .ab-check { flex-shrink: 0; display: grid; place-items: center; width: 22px; height: 22px; margin-top: 1px; border-radius: 50%; background: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.45); color: #6ee7b7; font-size: 0.75rem; font-weight: 800; }

        .ab-stack { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }
        .ab-tech { padding: 1.25rem; border-radius: 14px; background: rgba(30,41,59,0.5); border: 1px solid rgba(255,255,255,0.08); transition: transform 0.2s ease, border-color 0.2s ease; }
        .ab-tech:hover { transform: translateY(-3px); border-color: rgba(129,140,248,0.45); }
        .ab-tech-dot { width: 10px; height: 10px; border-radius: 50%; margin-bottom: 0.85rem; }
        .ab-tech h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.2rem; }
        .ab-tech p { color: #94a3b8; font-size: 0.88rem; }

        .ab-flow { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 0.6rem; padding: 1.5rem; border-radius: 16px; background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.14); }
        .ab-node { padding: 0.6rem 1.1rem; border-radius: 10px; font-weight: 650; font-size: 0.9rem; color: #e2e8f0; background: rgba(99,102,241,0.14); border: 1px solid rgba(129,140,248,0.35); }
        .ab-arrow { color: #64748b; font-weight: 700; }

        .ab-final { margin: 3.5rem 0 3rem; padding: 2.75rem 1.5rem; text-align: center; border-radius: 22px; background: linear-gradient(135deg, rgba(99,102,241,0.28), rgba(168,85,247,0.22) 55%, rgba(244,114,182,0.18)); border: 1px solid rgba(165,180,252,0.28); }
        .ab-final h2 { font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.6rem; }
        .ab-final p { color: #94a3b8; margin-bottom: 1.5rem; }
        .ab-final-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.7rem; }

        .ab-footer { border-top: 1px solid rgba(255,255,255,0.07); padding: 1.75rem 0; color: #64748b; font-size: 0.86rem; }
        .ab-footer-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.6rem 1.5rem; }
        .ab-footer a { color: #94a3b8; text-decoration: none; }
        .ab-footer a:hover { color: #fff; }

        @media (max-width: 640px) {
          .ab-hero { padding-top: 2.5rem; }
          .ab-profile { padding: 1.6rem; text-align: center; justify-items: center; }
          .ab-actions { justify-content: center; }
          .ab-avatar { width: 108px; height: 108px; font-size: 2.1rem; }
          .ab-nav-links .ab-hide-sm { display: none; }
          .ab-footer-row { justify-content: center; text-align: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ab-btn, .ab-tech { transition: none; }
        }
      `}</style>

      <div className="ab-glow" aria-hidden="true">
        <div className="ab-orb ab-orb-1" />
        <div className="ab-orb ab-orb-2" />
        <div className="ab-orb ab-orb-3" />
        <div className="ab-grid" />
      </div>

      <div className="ab-inner">
        <header className="ab-nav">
          <div className="ab-wrap ab-nav-row">
            <Link to="/" className="ab-brand" aria-label="Student Record System home">
              <span className="ab-brand-mark">
                <CapIcon />
              </span>
              <span>Student Record System</span>
            </Link>
            <nav className="ab-nav-links" aria-label="Primary">
              <Link to="/" className="ab-btn ab-btn-ghost ab-btn-sm ab-hide-sm">
                Home
              </Link>
              <Link to="/dashboard" className="ab-btn ab-btn-primary ab-btn-sm">
                Open Dashboard <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </div>
        </header>

        <main>
          {/* Profile */}
          <div className="ab-wrap">
            <section className="ab-hero" aria-labelledby="ab-name">
              <div className="ab-profile">
                <div className="ab-avatar" aria-hidden="true">
                  {PROFILE.initials}
                </div>
                <div>
                  <span className="ab-role">{PROFILE.role}</span>
                  <h1 id="ab-name" className="ab-name">
                    {PROFILE.name}
                  </h1>
                  <p className="ab-tagline">{PROFILE.tagline}</p>
                  <div className="ab-actions">
                    <a className="ab-btn ab-btn-primary" href={`mailto:${PROFILE.email}`}>
                      <MailIcon /> Email me
                    </a>
                    <a className="ab-btn ab-btn-ghost" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon /> GitHub
                    </a>
                    <a className="ab-btn ab-btn-ghost" href={PROFILE.repo} target="_blank" rel="noopener noreferrer">
                      <CodeIcon /> Project repo
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* About + details */}
          <section className="ab-section">
            <div className="ab-wrap">
              <div className="ab-eyebrow">About</div>
              <h2 className="ab-h2">About me and the project</h2>
              <div className="ab-two">
                <article className="ab-card">
                  <h3>Hi, I&rsquo;m {PROFILE.name.split(' ')[0]} 👋</h3>
                  <p>
                    I&rsquo;m the developer behind <strong>{PROFILE.project}</strong>, a web app for managing student
                    records. I built it as my {PROFILE.course} project to learn how a real application is put
                    together and deployed across cloud services.
                  </p>
                  <p>
                    The app lets you add, search, update, and remove students from a clean dashboard, with the
                    frontend, API, and database each hosted on its own cloud platform.
                  </p>
                </article>

                <article className="ab-card">
                  <h3>Details</h3>
                  <dl className="ab-details">
                    <div>
                      <dt>Name</dt>
                      <dd>{PROFILE.name}</dd>
                    </div>
                    <div>
                      <dt>Email</dt>
                      <dd>
                        <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                      </dd>
                    </div>
                    <div>
                      <dt>GitHub</dt>
                      <dd>
                        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                          github.com/aadil-khan-123
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt>Project</dt>
                      <dd>{PROFILE.project}</dd>
                    </div>
                    <div>
                      <dt>Course</dt>
                      <dd>{PROFILE.course}</dd>
                    </div>
                  </dl>
                </article>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="ab-section">
            <div className="ab-wrap">
              <article className="ab-card">
                <h3>What the project does</h3>
                <ul className="ab-list">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h}>
                      <span className="ab-check" aria-hidden="true">
                        ✓
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          {/* Tech stack */}
          <section className="ab-section">
            <div className="ab-wrap">
              <div className="ab-eyebrow">Tech stack</div>
              <h2 className="ab-h2">Built with</h2>
              <div className="ab-stack">
                {STACK.map((t) => (
                  <article className="ab-tech" key={t.name}>
                    <div className="ab-tech-dot" style={{ background: t.color, boxShadow: `0 0 14px ${t.color}` }} />
                    <h3>{t.name}</h3>
                    <p>{t.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section className="ab-section">
            <div className="ab-wrap">
              <div className="ab-eyebrow">Architecture</div>
              <h2 className="ab-h2">How it fits together</h2>
              <div className="ab-flow" role="list" aria-label="Request flow">
                {FLOW.map((step, i) => (
                  <span key={step} style={{ display: 'contents' }}>
                    <span className="ab-node" role="listitem">
                      {step}
                    </span>
                    {i < FLOW.length - 1 && (
                      <span className="ab-arrow" aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="ab-wrap">
            <section className="ab-final">
              <h2>Want to see it in action?</h2>
              <p>Open the dashboard and try adding, searching, and editing student records.</p>
              <div className="ab-final-actions">
                <Link to="/dashboard" className="ab-btn ab-btn-primary">
                  Go to Dashboard <span aria-hidden="true">→</span>
                </Link>
                <Link to="/" className="ab-btn ab-btn-ghost">
                  Back to Home
                </Link>
              </div>
            </section>
          </div>
        </main>

        <footer className="ab-footer">
          <div className="ab-wrap ab-footer-row">
            <span>© 2026 Student Record System · Built with the MERN stack</span>
            <Link to="/">Home</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
