import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="topbar">
        <div className="container topbar-row">
          <Link to="/" className="brand" aria-label="Student Record System home">
            <span className="brand-mark" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 9 12 4 2 9l10 5 10-5Z" />
                <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
                <path d="M22 9v6" />
              </svg>
            </span>
            <span>Student Record System</span>
          </Link>
          <nav style={{ display: 'flex', gap: '0.6rem' }} aria-label="Primary">
            <Link to="/about" className="btn btn-ghost btn-small">
              About
            </Link>
            <Link to="/" className="btn btn-ghost btn-small">
              <span aria-hidden="true">←</span> Home
            </Link>
          </nav>
        </div>
      </header>

      <main id="main" className="container" style={{ paddingTop: '2rem' }}>
        {children}
      </main>
      <footer className="site-footer">
        <div className="container">
          Cloud Computing CA2 &middot; React on Netlify, Express on Render, MongoDB Atlas
        </div>
      </footer>
    </>
  );
}
