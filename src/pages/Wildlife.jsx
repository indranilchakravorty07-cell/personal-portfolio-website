import { useNavigate } from 'react-router-dom';
import WildlifeHeader from '../components/WildlifeHeader';
import HeritageSection from '../components/HeritageSection';
import PhotoGrid from '../components/PhotoGrid';
import dashboard from '../data/wildlife_dashboard.json';
import './styles/Wildlife.css';
import Footer from '../components/Footer';

export default function Wildlife() {
  const navigate = useNavigate();

  const handleTravelClick  = (photo) => navigate(`/wildlife-travel/${photo.blogId}`);
  const handleBigCatClick  = (photo) => navigate(`/wildlife/${photo.blogId}`);
  const handleIucnClick    = (photo) => navigate(`/iucn/${photo.blogId}`);

  return (
    <div className="wildlife-page" style={{ marginTop: '-64px' }}>
      <WildlifeHeader />

      <div className="wildlife-body three-col">

        {/* Column 1 — Travel Stories */}
        <div className="wildlife-col">
          <div className="wildlife-col-title">
            <h2>Travel Stories</h2>
            <div className="wildlife-col-line" />
          </div>
          <PhotoGrid photos={dashboard.travelStories} onPhotoClick={handleTravelClick} />
        </div>

        <div className="wildlife-divider" />

        {/* Column 2 — Big Cats */}
        <div className="wildlife-col">
          <div className="wildlife-col-title">
            <h2>Big Cats</h2>
            <div className="wildlife-col-line" />
          </div>
          <PhotoGrid photos={dashboard.bigCats} onPhotoClick={handleBigCatClick} />
        </div>

        <div className="wildlife-divider" />

        {/* Column 3 — IUCN Red List */}
        <div className="wildlife-col">
          <div className="wildlife-col-title">
            <h2>IUCN Red List</h2>
            <div className="wildlife-col-line" />
          </div>
          <PhotoGrid photos={dashboard.iucn} onPhotoClick={handleIucnClick} />
        </div>

      </div>
      <Footer/>
    </div>
    
  );
}