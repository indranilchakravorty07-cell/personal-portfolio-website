import PhotoGrid from './PhotoGrid';
import './styles/WildlifeSection.css';

export default function WildlifeSection({ bigCats, iucn, onBigCatClick, onIucnClick }) {
  return (
    <div className="wildlife-right-panel">
      <div className="wildlife-sub-section">
        <div className="wildlife-sub-title">
          <h2>Big Cats</h2>
          <div className="wildlife-sub-line" />
        </div>
        <PhotoGrid photos={bigCats} onPhotoClick={onBigCatClick} />
      </div>

      <div className="wildlife-panel-divider" />

      <div className="wildlife-sub-section">
        <div className="wildlife-sub-title">
          <h2>IUCN Red List Animals</h2>
          <div className="wildlife-sub-line" />
        </div>
        <PhotoGrid photos={iucn} onPhotoClick={onIucnClick} />
      </div>
    </div>
  );
}