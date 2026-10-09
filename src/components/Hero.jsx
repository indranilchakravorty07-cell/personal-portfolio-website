import { useState, useEffect, useCallback } from 'react';
import { heroSlidesDesktop, heroSlidesMobile } from '../data/heroSlides';
import usePrefersReducedMotion from '../utils/usePrefersReducedMotion';
import './styles/Hero.css';



export default function Hero() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile]   = useState(window.innerWidth <= 900);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const slides = isMobile ? heroSlidesMobile : heroSlidesDesktop;

  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 400);
  }, [animating]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    if (reducedMotion) return; // no auto-advancing for people who asked for less motion
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [current, slides.length, reducedMotion]);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div key={slide.id} className={`hero-bg-slide ${i === current ? 'active' : ''}`} aria-hidden={i !== current}>
          <img
            src={slide.image}
            alt={slide.label}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            decoding="async"
          />
          <div className="hero-scrim" />
        </div>
      ))}

      <button type="button" className="hero-arrow hero-arrow--left" onClick={prev} aria-label="Previous slide">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button type="button" className="hero-arrow hero-arrow--right" onClick={next} aria-label="Next slide">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      <div className="hero-identity">
        <h1 className="hero-title">Indranil Chakravorty</h1>
        <p className="hero-role">Travel &amp; Wildlife Photographer</p>
      </div>

      <div className="hero-dots" role="group" aria-label="Choose slide">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1} of ${slides.length}`}
            aria-current={i === current ? 'true' : undefined}
          />
        ))}
      </div>
    </section>
  );
}