import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing-page-root">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          margin: 0;
          background-color: #0b1120;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .landing-page-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: radial-gradient(circle at 80% 20%, #1e1b4b 0%, #0f172a 60%, #0b0f19 100%);
          color: #f8fafc;
        }

        .landing-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 2.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .landing-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
        }

        .nav-link-btn {
          background: rgba(255, 255, 255, 0.08);
          color: #f8fafc;
          padding: 0.65rem 1.35rem;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.2s ease;
        }

        .nav-link-btn:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .landing-hero-content {
          flex: 1;
          max-width: 1040px;
          margin: 0 auto;
          padding: 4.5rem 1.5rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.35);
          color: #a5b4fc;
          padding: 0.4rem 1.1rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.75rem;
        }

        .hero-title {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          line-height: 1.15;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          max-width: 620px;
          color: #94a3b8;
          font-size: 1.12rem;
          line-height: 1.6;
          margin-bottom: 2.25rem;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #6366f1 0%, #7c3aed 100%);
          color: #ffffff;
          padding: 0.95rem 2.25rem;
          border-radius: 10px;
          font-size: 1.05rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 12px 30px -8px rgba(99, 102, 241, 0.5);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 35px -8px rgba(99, 102, 241, 0.65);
        }

        .cards-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 1.5rem;
          width: 100%;
          margin-top: 4.5rem;
          text-align: left;
        }

        .feature-box {
          background: rgba(30, 41, 59, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 2rem 1.75rem;
          border-radius: 14px;
          backdrop-filter: blur(10px);
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .feature-box:hover {
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-3px);
        }

        .feature-box-icon {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .feature-box h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 0.5rem;
        }

        .feature-box p {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.55;
          margin: 0;
        }

        .landing-footer {
          padding: 2rem;
          text-align: center;
          font-size: 0.85rem;
          color: #64748b;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: 2rem;
        }
      `}</style>

      {/* Navigation */}
      <header className="landing-navbar">
        <div className="landing-brand">
          <span>🎓</span>
          <span>EduManager</span>
        </div>
        <Link to="/dashboard" className="nav-link-btn">
          Open Dashboard →
        </Link>
      </header>

      {/* Hero */}
      <main className="landing-hero-content">
        <div className="hero-pill">
          ⚡ Real-time Student Record Management
        </div>

        <h1 className="hero-title">
          Smart, Secure & Simple <br />
          <span className="hero-gradient-text">Student Management</span>
        </h1>

        <p className="hero-description">
          Effortlessly handle student enrollments, department tracking, records lookup,
          and institutional data in one streamlined platform By Aadil Shakil Khan
        </p>

        <div>
          <Link to="/dashboard" className="cta-button">
            Launch Dashboard →
          </Link>
        </div>

        {/* Feature Cards */}
        <section className="cards-row">
          <div className="feature-box">
            <div className="feature-box-icon">📋</div>
            <h3>Centralized Register</h3>
            <p>Maintain precise student records with unique IDs, emails, and departmental mappings.</p>
          </div>

          <div className="feature-box">
            <div className="feature-box-icon">🔍</div>
            <h3>Instant Search</h3>
            <p>Locate records instantly with live multi-field filtering across student identifiers.</p>
          </div>

          <div className="feature-box">
            <div className="feature-box-icon">📊</div>
            <h3>Live Department Metrics</h3>
            <p>Get real-time headcounts and department stats updated dynamically via cloud sync.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <p>© 2026 Student Management System. Built with MERN Stack.</p>
      </footer>
    </div>
  );
}