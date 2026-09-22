import { useNavigate } from 'react-router-dom';
import HeritageHeader from '../components/HeritageHeader';
import HeritageSection from '../components/HeritageSection';
import dashboard from '../data/travel_dashboard.json';
import './styles/Heritage.css';
import Footer from '../components/Footer';

export default function Heritage() {
  const navigate = useNavigate();

  const handleTravelClick = (photo) => {
    navigate(`/travel/${photo.blogId}`);
  };

  const handleUnescoClick = (photo) => {
    navigate(`/unesco/${photo.blogId}`);
  };

  return (
    <div className="heritage-page" style={{ marginTop: '-64px' }}>
      <HeritageHeader />
      <div className="heritage-body">
        <HeritageSection
          title="Travels"
          photos={dashboard.travels}
          onPhotoClick={handleTravelClick}
        />
        <div className="heritage-divider" />
        <HeritageSection
          title="UNESCO World Heritage Sites"
          photos={dashboard.unesco}
          onPhotoClick={handleUnescoClick}
        />
      </div>
      <Footer/>
    </div>
  );
}
