import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './styles/Navbar.css';

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'Explore',  to: '/#explore' },
  { label: 'About',    to: '/#about' },
  { label: 'Heritage', to: '/heritage' },
  { label: 'Wildlife', to: '/wildlife' },
  { label: 'Contact',  to: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  // Transparent only on the home hero, and only before the user scrolls.
  // Initialised from isHome directly so there's no flash of the wrong state
  // on first paint.
  const [transparent, setTransparent] = useState(isHome);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isHome) { setTransparent(false); return; }
    const onScroll = () => setTransparent(window.scrollY < 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

const handleHashLink = (e, to) => {
  if (to.includes('#')) {
    e.preventDefault();
    const hash = to.split('#')[1];
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  } else {
    setOpen(false);
  }
};

  return (
    <>
      <nav aria-label="Main" className={`navbar${transparent ? ' navbar--transparent' : ''}`}>
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          Framedbyabard
        </NavLink>

        <ul className="navbar-links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive && !to.includes('#') ? 'navbar-link active' : 'navbar-link'
                }
                onClick={(e) => handleHashLink(e, to)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-controls="mobile-menu"
          className={`navbar-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <div className={`navbar-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} aria-hidden="true" />

      {/* Mobile drawer — single, no duplicate wrapper */}
      <div id="mobile-menu" className={`navbar-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button type="button" className="navbar-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
        <ul>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={label}>
              <NavLink
                to={to}
                className="navbar-drawer-link"
                onClick={(e) => handleHashLink(e, to)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}