import { useNavigate } from 'react-router-dom';
import SliderPanel from './SliderPanel';
import { heritageSlides, wildlifeSlides } from '../data/exploreSlides';
import './styles/ExploreSection.css';

export default function ExploreSection() {
  const navigate = useNavigate();

  return (
    <section id="explore" className="explore-section">
      <div className="explore-header">
        <h2>Explore</h2>
        <p>Two worlds, one journey — ancient stones and living wild.</p>
      </div>
      <div className="explore-grid">
        <div
          className="explore-clickable"
          onClick={() => navigate('/heritage')}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && navigate('/heritage')}
          title="View Heritage"
        >
          <SliderPanel title="Heritage Destinations" slides={heritageSlides} accentColor="#D4A853" />
          <div className="explore-click-hint">View Heritage →</div>
        </div>

        <div
          className="explore-clickable"
          onClick={() => navigate('/wildlife')}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && navigate('/wildlife')}
          title="View Wildlife"
        >
          <SliderPanel title="Wildlife Encounters" slides={wildlifeSlides} accentColor="#D4A853" />
          <div className="explore-click-hint">View Wildlife →</div>
        </div>
      </div>
    </section>
  );
}