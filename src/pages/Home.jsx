import Hero from '../components/Hero';
import ExploreSection from '../components/ExploreSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Seo from '../seo/Seo';

export default function Home() {
  return (
    <div style={{ marginTop: '-64px' }}>
      <Seo
        title="Indranil Chakravorty | Wildlife & Travel Photographer – Framedbyabard"
        description="Framedbyabard is the official portfolio of Indranil Chakravorty, a wildlife and travel photographer documenting big cats, endangered species and the world's heritage sites."
      />
      <Hero />
      <ExploreSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}