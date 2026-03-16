import React, { useEffect, useRef, useState } from 'react';
import cottonField from '../assets/cotton_field_wide.png';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${cottonField})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Rich overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-900/85 to-teal-900/90" />

      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-green-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-300/10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 text-center">
        {/* Badge */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-green-400/30 bg-green-500/10 text-green-300 rounded-full text-sm font-semibold mb-8 uppercase tracking-widest backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Get In Touch
          </span>
        </div>

        {/* Headline */}
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Looking For Reliable
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200 mt-2">
            Cotton Supply?
          </span>
        </h2>

        {/* Text */}
        <p
          className={`text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Partner with us for premium quality cotton and trusted global delivery. Our expert team is ready to fulfill your bulk cotton requirements with full transparency and reliability.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-green-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us Today
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#cotton-types"
            className="group inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            View Our Products
          </a>
        </div>

        {/* Trust badges */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { icon: '🔒', label: 'Secure Trade' },
            { icon: '🌿', label: 'Certified Organic' },
            { icon: '🚢', label: 'Global Delivery' },
            { icon: '⭐', label: '25+ Years Experience' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
              <span className="text-lg">{badge.icon}</span>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
