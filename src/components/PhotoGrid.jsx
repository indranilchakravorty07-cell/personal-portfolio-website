import './styles/PhotoGrid.css';

export default function PhotoGrid({ photos, onPhotoClick }) {
  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <button
          type="button"
          key={photo.id}
          className="photo-card"
          onClick={() => onPhotoClick && onPhotoClick(photo)}
          aria-label={`Open story: ${photo.label}`}
        >
          <img src={photo.image} alt={photo.label} loading="lazy" decoding="async" />
          <span className="photo-overlay">
            <span>{photo.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
