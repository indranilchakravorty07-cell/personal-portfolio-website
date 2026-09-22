import { useState, useEffect, useCallback } from 'react';
import { heroSlidesDesktop, heroSlidesMobile } from '../data/heroSlides';
import './styles/Hero.css';



export default function Hero() {
  const [current, setCurrent]     = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile]   = useState(window.innerWidth <= 900);

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
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div key={slide.id} className={`hero-bg-slide ${i === current ? 'active' : ''}`}>
          <img src={slide.image} alt={slide.label} />
          <div className="hero-scrim" />
        </div>
      ))}

      <button className="hero-arrow hero-arrow--left" onClick={prev} aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button className="hero-arrow hero-arrow--right" onClick={next} aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      <div className="hero-identity">
        <h1 className="hero-title">Indranil Chakravorty</h1>
        <p className="hero-role">Travel &amp; Wildlife Photographer</p>
      </div>

      <div className="hero-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={slide.label}
          />
        ))}
      </div>
    </section>
  );
}