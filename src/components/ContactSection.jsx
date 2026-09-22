import './styles/ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        <div className="contact-left">
          <span className="contact-eyebrow">Get in Touch</span>
          <h2>Let's talk about<br />a place worth telling.</h2>
          <p className="contact-subtext">
            Open to assignments, editorial collaborations, and licensing.<br />
            Response within 48 hours.
          </p>

          <div className="contact-channels">
            <a href="mailto:john@framedbyabard.com" className="contact-channel">
              <div className="channel-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              </div>
              <div className="channel-detail">
                <span className="channel-label">Email</span>
                <span className="channel-value">Indranil.chakravorty07@gmail.com</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>

            <a href="tel:+910000000000" className="contact-channel">
              <div className="channel-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div className="channel-detail">
                <span className="channel-label">Phone</span>
                <span className="channel-value">+91 +91 98218 73302</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-availability">
            <div className="availability-dot" />
            <span>Always Exploring the World!</span>
          </div>
          <blockquote className="contact-quote">
            "Every frame is an argument for why a place deserves to exist."
          </blockquote>
          <p className="contact-quote-attr">— Indranil Chakravorty, Framedbyabard</p>

          
        </div>

      </div>
    </section>
  );
}