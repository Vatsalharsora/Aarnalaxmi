import React, { useState, useEffect, useCallback } from 'react';
import banner1 from '../assets/banner_1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';

const slides = [
  {
    image: banner1,
    tag: 'Premium Cotton Supplier',
    heading1: 'Premium Quality Cotton',
    heading2: 'From Trusted Farms',
    desc: 'Supplying high-quality natural cotton to textile industries with a commitment to sustainability and global standards.',
  },
  {
    image: banner2,
    tag: 'Sustainable Agriculture',
    heading1: 'Organically Grown',
    heading2: 'Naturally Pure Cotton',
    desc: 'Certified organic cotton cultivated with eco-friendly methods and responsible farming practices for a better world.',
  },
  {
    image: banner3,
    tag: 'Trusted Cotton Trading',
    heading1: 'Reliable Global',
    heading2: 'Cotton Supply Partner',
    desc: 'Your trusted partner for consistent bulk cotton supply with certified quality assurance and on-time worldwide delivery.',
  },
];

const HEADER_HEIGHT = 76;

/* ── Inline keyframes injected once ── */
const styleTag = `
  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroSlideLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes heroBadge {
    from { opacity: 0; transform: scale(0.85) translateY(10px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes heroLine {
    from { width: 0; }
    to   { width: 64px; }
  }
  @keyframes dotPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.6; transform: scale(0.8); }
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('hero-keyframes')) {
  const el = document.createElement('style');
  el.id = 'hero-keyframes';
  el.textContent = styleTag;
  document.head.appendChild(el);
}

/* ── Animated content block — re-mounts on slide change ── */
const SlideContent = ({ slide }) => (
  <div style={{ maxWidth: '640px' }}>

    {/* Badge — scale + fade */}
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '8px',
      padding: '5px 14px', borderRadius: '999px',
      border: '1px solid rgba(74,222,128,0.45)',
      background: 'rgba(74,222,128,0.12)',
      marginBottom: '18px',
      animation: 'heroBadge 0.5s cubic-bezier(.22,1,.36,1) both',
    }}>
      <span style={{
        width: '8px', height: '8px', borderRadius: '50%',
        background: '#4ade80', display: 'inline-block',
        animation: 'dotPulse 2s ease-in-out infinite',
      }} />
      <span style={{
        color: '#86efac', fontSize: '11px', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.14em',
      }}>
        {slide.tag}
      </span>
    </div>

    {/* Heading line 1 — slide from left */}
    <h1 style={{
      color: '#ffffff',
      fontSize: 'clamp(1.75rem, 3.2vw, 2.7rem)',
      fontWeight: 800, lineHeight: 1.18,
      marginBottom: '4px', whiteSpace: 'nowrap',
      animation: 'heroSlideLeft 0.55s 0.1s cubic-bezier(.22,1,.36,1) both',
    }}>
      {slide.heading1}
    </h1>

    {/* Heading line 2 — slide from left with delay */}
    <h1 style={{
      backgroundImage: 'linear-gradient(90deg, #86efac 0%, #34d399 60%, #6ee7b7 100%)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontSize: 'clamp(1.75rem, 3.2vw, 2.7rem)',
      fontWeight: 800, lineHeight: 1.18,
      marginBottom: '10px',
      animation: 'heroSlideLeft 0.55s 0.22s cubic-bezier(.22,1,.36,1) both',
    }}>
      {slide.heading2}
    </h1>

    {/* Accent line */}
    <div style={{
      height: '3px', background: 'linear-gradient(90deg,#4ade80,#059669)',
      borderRadius: '4px', marginBottom: '18px',
      animation: 'heroLine 0.5s 0.35s cubic-bezier(.22,1,.36,1) both',
    }} />

    {/* Description — fade up */}
    <p style={{
      color: '#d1fae5', fontSize: 'clamp(0.88rem, 1.4vw, 1rem)',
      lineHeight: 1.75, marginBottom: '28px', maxWidth: '540px',
      animation: 'heroFadeUp 0.55s 0.38s cubic-bezier(.22,1,.36,1) both',
    }}>
      {slide.desc}
    </p>

    {/* Buttons — fade up with delay */}
    <div style={{
      display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '36px',
      animation: 'heroFadeUp 0.55s 0.5s cubic-bezier(.22,1,.36,1) both',
    }}>
      <a
        href="#cotton-types"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '12px 26px',
          background: 'linear-gradient(135deg,#16a34a,#059669)',
          color: '#fff', borderRadius: '10px', fontWeight: 700,
          fontSize: '14px', textDecoration: 'none',
          boxShadow: '0 4px 20px rgba(22,163,74,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 28px rgba(22,163,74,0.55)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(22,163,74,0.4)';
        }}
      >
        Explore Products
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <a
        href="#contact"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '12px 26px',
          border: '2px solid rgba(255,255,255,0.4)',
          color: '#fff', borderRadius: '10px', fontWeight: 700,
          fontSize: '14px', textDecoration: 'none',
          backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,0.07)',
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.75)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
        }}
      >
        Contact Us
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>
    </div>

    {/* Stats — fade up last */}
    <div style={{
      display: 'flex', gap: '32px', flexWrap: 'wrap',
      animation: 'heroFadeUp 0.55s 0.62s cubic-bezier(.22,1,.36,1) both',
    }}>
      {[
        { val: '25+',   lbl: 'Years Experience' },
        { val: '1500+', lbl: 'Acres Farmland' },
        { val: '65+',   lbl: 'Countries Served' },
      ].map((s, i) => (
        <div key={i}>
          <div style={{ color: '#4ade80', fontSize: '1.55rem', fontWeight: 800, lineHeight: 1 }}>{s.val}</div>
          <div style={{ color: '#9ca3af', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>{s.lbl}</div>
        </div>
      ))}
    </div>

  </div>
);

/* ─────────────────────────────── Hero ─────────────────────────────── */
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey]   = useState(0);   // forces re-mount of SlideContent

  const goTo = useCallback((idx) => {
    setCurrent(idx);
    setAnimKey(k => k + 1);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      id="home"
      style={{
        paddingTop: HEADER_HEIGHT,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ─── Background slides ─── */}
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            transition: 'opacity 0.9s ease',
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* ─── Overlay ─── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(105deg,rgba(0,0,0,0.78) 0%,rgba(0,0,0,0.52) 55%,rgba(0,0,0,0.18) 100%)',
      }} />

      {/* ─── Animated Text Content ─── */}
      <div style={{
        position: 'relative', zIndex: 3,
        flex: 1, display: 'flex', alignItems: 'center',
        width: '100%', maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 40px 90px 40px',
      }}>
        {/* key={animKey} forces fresh mount = fresh animations on every slide change */}
        <SlideContent key={animKey} slide={slides[current]} />
      </div>

      {/* ─── Prev Arrow ─── */}
      <button
        onClick={prev} aria-label="Previous"
        style={{
          position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, width: '44px', height: '44px', borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.35)',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
          color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s, transform 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)';  e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ─── Next Arrow ─── */}
      <button
        onClick={next} aria-label="Next"
        style={{
          position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, width: '44px', height: '44px', borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.35)',
          background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
          color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s, transform 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)';  e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ─── Dot Indicators ─── */}
      <div style={{
        position: 'absolute', bottom: '26px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        {slides.map((_, i) => (
          <button
            key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            style={{
              height: '8px', width: i === current ? '28px' : '8px',
              borderRadius: '999px',
              background: i === current ? '#4ade80' : 'rgba(255,255,255,0.38)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.35s ease', padding: 0,
            }}
          />
        ))}
      </div>

      {/* ─── Slide Counter ─── */}
      <div style={{
        position: 'absolute', bottom: '26px', right: '26px',
        zIndex: 10, color: 'rgba(255,255,255,0.4)',
        fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em',
        userSelect: 'none', fontFamily: 'monospace',
      }}>
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </section>
  );
};

export default Hero;
