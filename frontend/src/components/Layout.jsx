export default function Layout({ children }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
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