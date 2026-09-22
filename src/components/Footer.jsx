import './styles/Footer.css';

const footerLinks = [
  {
    heading: 'Heritage',
    links: [
      { label: 'Heritage Blogs', href: '/heritage' },
      { label: 'UNESCO World Heritage Sites', href: '/heritage' },      
    ],
  },
  {
    heading: 'Wildlife',
    links: [
      { label: 'Wildlife Blogs', href: 'wildlife' },
      { label: 'Big Cats of the World', href: '/wildlife' },
      { label: 'IUCN Red List Animals', href: 'https://www.iucnredlist.org/' },      
    ],
  },
  {
    heading: 'About Me',
    links: [
      { label: 'Portfolio', href: '#about' },
      { label: 'Contact', href: '#contact' },      
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-wordmark">Framedbyabard</span>
            <p className="footer-tagline">
              Photography at the intersection of<br />
              human heritage and the natural world.
            </p>
            <div className="footer-social">
              {['Instagram', 'Behance', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="footer-social-link">{s}</a>
              ))}
            </div>
          </div>

          <nav className="footer-nav">
            {footerLinks.map(col => (
              <div key={col.heading} className="footer-col">
                <p className="footer-col-heading">{col.heading}</p>
<ul>
  {col.links.map(link => (
    <li key={link.label}>
      <a
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {link.label}
        {link.href.startsWith('http') && (
          <svg
            className="ext-icon"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M2 10L10 2M10 2H5M10 2v5" />
          </svg>
        )}
      </a>
    </li>
  ))}
</ul>

              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
  <p>
    © {year} Indranil Chakravorty · Framedbyabard. All rights reserved.{' '}
    <span className="DevMark">
      Developed by Rounak Chakraborti{' '}
      <a href="https://www.linkedin.com/in/rounak-chakraborti-profile">LinkedIn</a>{' '}
      | +91 8777402308
    </span>
  </p>
  <div className="footer-bottom-links">
    <a href="#">Go To Top</a>
    <a href="#">Usage Rights</a>
  </div>
</div>
      </div>
    </footer>
  );
}