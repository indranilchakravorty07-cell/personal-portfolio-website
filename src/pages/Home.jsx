import Hero from '../components/Hero';
import ExploreSection from '../components/ExploreSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ marginTop: '-64px' }}>
      <Hero />
      <ExploreSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}