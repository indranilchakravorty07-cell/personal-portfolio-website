import { useState, useEffect, useRef } from 'react';
import Seo from '../seo/Seo';
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
  const closeBtnRef = useRef(null);
  const lastTriggerRef = useRef(null);

  // Modal: Escape closes, page behind doesn't scroll, focus moves in and returns on close.
  useEffect(() => {
    if (!modalPhoto) return;
    const onKey = (e) => { if (e.key === 'Escape') setModalPhoto(null); };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      lastTriggerRef.current?.focus?.();
    };
  }, [modalPhoto]);

  if (notFound) {
  return (
    <div className="blog-not-found">
      <Seo title="Story not found – Framedbyabard" description="This story does not exist." noindex />
      {header}
      <div className="blog-not-found-body">
        <p>{notFound.message}</p>
        <button onClick={notFound.onBack}>{backLabel}</button>
      </div>
      {footer}
    </div>
  );
}

const safePhotos = Array.isArray(photos) ? photos : [];

  return (
    <div className={`travel-blog-page ${pageClass}`} style={{ marginTop: '-64px' }}>
      <Seo
        title={`${title} – Indranil Chakravorty | Framedbyabard`}
        description={(description || '').replace(/\s+/g, ' ').slice(0, 155).trim() + ((description || '').length > 155 ? '…' : '')}
        image={safePhotos[0]?.image}
      />
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
  {safePhotos.length === 0 ? (
    <div className="blog-photos-empty">
      <div className="blog-photos-empty-icon" aria-hidden="true">📷</div>
      <h2>Images coming soon</h2>
      <p>The photo gallery for this story is on its way. Check back shortly.</p>
    </div>
  ) : (
    <div className="blog-photo-grid">
      {safePhotos.map(photo => (
        <button
          type="button"
          key={photo.id}
          className="blog-photo-card"
          onClick={(e) => { lastTriggerRef.current = e.currentTarget; setModalPhoto(photo); }}
          aria-label={`View larger: ${photo.caption}`}
        >
          <img src={photo.image} alt={photo.caption} loading="lazy" decoding="async" />
          <span className="blog-photo-caption">{photo.caption}</span>
        </button>
      ))}
    </div>
  )}
</section>
      </div>

      {/* Modal */}
      {modalPhoto && (
        <div className="photo-modal-overlay" onClick={() => setModalPhoto(null)}>
          <div className="photo-modal-content" role="dialog" aria-modal="true" aria-label={modalPhoto.caption} onClick={e => e.stopPropagation()}>
            <button ref={closeBtnRef} type="button" className="photo-modal-close" onClick={() => setModalPhoto(null)} aria-label="Close photo">✕</button>
            <img src={modalPhoto.image} alt={modalPhoto.caption} />
            <p className="photo-modal-caption">{modalPhoto.caption}</p>
          </div>
        </div>
      )}

      {footer}
    </div>
  );
}