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

// Numbers pulled from ContactSection.jsx — keep these in sync if that
// section's phone number ever changes.
const CONTACT_WHATSAPP = '919821873302'; // client — +91 98218 73302
const DEV_WHATSAPP = '918777402308';     // developer — +91 87774 02308

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.48 1.34 5L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.02a8.1 8.1 0 01-4.13-1.13l-.3-.18-3.11.81.83-3.03-.2-.31a8.12 8.12 0 01-1.24-4.28c0-4.48 3.65-8.13 8.15-8.13 2.18 0 4.22.85 5.76 2.39a8.08 8.08 0 012.38 5.75c0 4.48-3.65 8.11-8.14 8.11zm4.47-6.09c-.24-.12-1.44-.71-1.67-.8-.22-.08-.38-.12-.55.12-.16.24-.63.8-.77.97-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42-.14-.01-.3-.01-.46-.01s-.42.06-.64.3c-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/indranilchakravorty/', // TODO: replace with the real Instagram profile URL
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/indranil.chakravorty.3', // TODO: replace with the real Facebook page URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.94z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${CONTACT_WHATSAPP}`,
    icon: <WhatsAppIcon />,
    whatsapp: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/indranil-chakravorty-4360519/', // TODO: replace with the real LinkedIn profile URL
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.4 8.75h3.1V21H3.4V8.75zm6.2 0h2.97v1.68h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.7c0-1.36-.02-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9.6V8.75z" />
      </svg>
    ),
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
              {socialLinks.map(({ label, href, icon, whatsapp }) => (
                <a
                  key={label}
                  href={href}
                  className={`footer-social-link${whatsapp ? ' footer-social-link--whatsapp' : ''}`}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={whatsapp ? 'Chat on WhatsApp' : label}
                  title={label}
                >
                  {icon}
                </a>
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
              <a href="https://www.linkedin.com/in/rounak-chakraborti-profile" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{' '}
              <a
                href={`https://wa.me/${DEV_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="dev-whatsapp"
                aria-label="Chat with Rounak on WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon width="12" height="12" />
                +91 87774 02308
              </a>
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
