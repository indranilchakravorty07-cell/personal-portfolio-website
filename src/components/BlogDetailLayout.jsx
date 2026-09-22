import { useState } from 'react';
import './styles/BlogDetailLayout.css';

export default function BlogDetailLayout({
  header,
  footer,
  backLabel = '← Back',
  onBack,
  badge,
  title,
  location,
  country,
  description,
  photos = [],
  pageClass = '',
  notFound,
}) {
  const [modalPhoto, setModalPhoto] = useState(null);

  if (notFound) {
    return (
      <div className="blog-not-found">
        {header}
        <div className="blog-not-found-body">
          <p>{notFound.message}</p>
          <button onClick={notFound.onBack}>{backLabel}</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`travel-blog-page ${pageClass}`} style={{ marginTop: '-64px' }}>
      {header}

      <div className="travel-blog-body">
        {/* LEFT — Blog info */}
        <aside className="blog-left">
          <button className="blog-back-btn" onClick={onBack}>
            {backLabel}
          </button>

          {badge}

          <h1 className="blog-title">{title}</h1>
          <div className="blog-meta">
            <span className="blog-location">{location}</span>
            <span className="blog-dot">·</span>
            <span className="blog-country">{country}</span>
          </div>
          <div className="blog-divider" />
          <p className="blog-description">{description}</p>
        </aside>

        {/* RIGHT — Photo grid */}
        <section className="blog-right">
          <div className="blog-photo-grid">
            {photos.map(photo => (
              <div
                key={photo.id}
                className="blog-photo-card"
                onClick={() => setModalPhoto(photo)}
              >
                <img src={photo.image} alt={photo.caption} />
                <div className="blog-photo-caption">{photo.caption}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {modalPhoto && (
        <div className="photo-modal-overlay" onClick={() => setModalPhoto(null)}>
          <div className="photo-modal-content" onClick={e => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={() => setModalPhoto(null)}>✕</button>
            <img src={modalPhoto.image} alt={modalPhoto.caption} />
            <p className="photo-modal-caption">{modalPhoto.caption}</p>
          </div>
        </div>
      )}

      {footer}
    </div>
  );
}