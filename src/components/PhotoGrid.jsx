import './styles/PhotoGrid.css';

export default function PhotoGrid({ photos, onPhotoClick }) {
  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <div
          key={photo.id}
          className="photo-card"
          onClick={() => onPhotoClick && onPhotoClick(photo)}
        >
          <img src={photo.image} alt={photo.label} />
          <div className="photo-overlay">
            <span>{photo.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
