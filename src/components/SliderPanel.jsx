import { useState, useEffect, useCallback } from 'react';
import usePrefersReducedMotion from '../utils/usePrefersReducedMotion';
import './styles/SliderPanel.css';

export default function SliderPanel({ title, slides, accentColor }) {
  const [current, setCurrent] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setTimeout(next, 4000);
    return () => clearTimeout(timer);
  }, [current, next, reducedMotion]);

  const prev = () => {
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  const stopProp = (e) => e.stopPropagation();

  return (
    <div className="slider-panel" style={{ '--accent': accentColor }}>
      <div className="slider-image-wrap">
        {slides.map((s, i) => (
          <img
            key={i}
            src={s.image}
            alt={i === current ? s.name : ''}
            aria-hidden={i !== current}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={`slider-img ${i === current ? 'active' : ''}`}
          />
        ))}
        <div className="slider-overlay" />
        <div className="slider-text">
          <p className="slider-category">{title}</p>
          <h2 className="slider-name">{slide.name}</h2>
          <p className="slider-desc">{slide.description}</p>
        </div>
        <div className="slider-controls" onClick={stopProp}>
          <button type="button" onClick={prev} aria-label="Previous slide">&#8592;</button>
          <div className="slider-dots">
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" onClick={next} aria-label="Next slide">&#8594;</button>
        </div>
      </div>
    </div>
  );
}