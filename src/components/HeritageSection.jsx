import PhotoGrid from './PhotoGrid';
import './styles/HeritageSection.css';

export default function HeritageSection({ title, photos, onPhotoClick }) {
  return (
    <section className="heritage-section">
      <div className="heritage-section-title">
        <h2>{title}</h2>
        <div className="heritage-section-line" />
      </div>
      <PhotoGrid photos={photos} onPhotoClick={onPhotoClick} />
    </section>
  );
}
