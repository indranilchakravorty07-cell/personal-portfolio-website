import { Link, useNavigate } from 'react-router-dom';
import SliderPanel from './SliderPanel';
import { heritageSlides, wildlifeSlides } from '../data/exploreSlides';
import './styles/ExploreSection.css';

export default function ExploreSection() {
  const navigate = useNavigate();

  return (
    <section id="explore" className="explore-section" aria-labelledby="explore-heading">
      <div className="explore-header">
        <h2 id="explore-heading">Explore</h2>
        <p>Two worlds, one journey — ancient stones and living wild.</p>
      </div>
      <div className="explore-grid">
        {/* Mouse/touch users can tap anywhere on the panel; keyboard & screen-reader users use the real link. */}
        <div className="explore-clickable" onClick={() => navigate('/heritage')}>
          <SliderPanel title="Heritage Destinations" slides={heritageSlides} accentColor="#D4A853" />
          <Link to="/heritage" className="explore-click-hint" onClick={e => e.stopPropagation()}>View Heritage →</Link>
        </div>

        <div className="explore-clickable" onClick={() => navigate('/wildlife')}>
          <SliderPanel title="Wildlife Encounters" slides={wildlifeSlides} accentColor="#D4A853" />
          <Link to="/wildlife" className="explore-click-hint" onClick={e => e.stopPropagation()}>View Wildlife →</Link>
        </div>
      </div>
    </section>
  );
}
