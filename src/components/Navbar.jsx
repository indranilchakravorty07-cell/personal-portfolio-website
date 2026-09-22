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
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) { setHidden(false); return; }
    const onScroll = () => setHidden(window.scrollY < 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => { setOpen(false); }, [location.pathname]);

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
      <nav className={`navbar${hidden ? ' navbar--hidden' : ''}`}>
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
          className={`navbar-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />

      {/* Mobile drawer — single, no duplicate wrapper */}
      <div className={`navbar-drawer ${open ? 'open' : ''}`}>
        <button className="navbar-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
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