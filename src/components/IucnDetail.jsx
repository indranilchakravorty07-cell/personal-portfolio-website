import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import iucnBlogs from '../data/iucn_blogs.json';
import WildlifeHeader from '../components/WildlifeHeader';
import Footer from '../components/Footer';
import './styles/TravelBlog.css';
import './styles/IucnDetail.css';

export default function IucnDetail() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = iucnBlogs[blogId];
  const [modalPhoto, setModalPhoto] = useState(null);

  if (!blog) {
    return (
      <div className="blog-not-found">
        <WildlifeHeader />
        <div className="blog-not-found-body">
          <p>Entry not found.</p>
          <button onClick={() => navigate('/wildlife')}>← Back to Wildlife</button>
        </div>
      </div>
    );
  }

  return (
    <div className="travel-blog-page iucn-detail-page">
      <WildlifeHeader />

      <div className="travel-blog-body">
        <aside className="blog-left">
          <button className="blog-back-btn" onClick={() => navigate('/wildlife')}>
            ← Back
          </button>
          <div className={`iucn-status-badge iucn-${blog.iucnStatus.toLowerCase().replace(/ /g, '-')}`}>
            IUCN: {blog.iucnStatus}
          </div>
          <h1 className="blog-title">{blog.title}</h1>
          <div className="blog-meta">
            <span className="blog-location">{blog.location}</span>
            <span className="blog-dot">·</span>
            <span className="blog-country">{blog.country}</span>
          </div>
          <div className="blog-divider" />
          <p className="blog-description">{blog.description}</p>
        </aside>

        <section className="blog-right">
          <div className="blog-photo-grid">
            {blog.galleryPhotos.map(photo => (
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

      {modalPhoto && (
        <div className="photo-modal-overlay" onClick={() => setModalPhoto(null)}>
          <div className="photo-modal-content" onClick={e => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={() => setModalPhoto(null)}>✕</button>
            <img src={modalPhoto.image} alt={modalPhoto.caption} />
            <p className="photo-modal-caption">{modalPhoto.caption}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}