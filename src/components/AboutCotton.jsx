import React, { useEffect, useRef, useState } from 'react';
import cottonFlower from '../assets/cotton_flower_closeup.png';
import cottonHarvest from '../assets/cotton_harvesting.png';
import cottonFiber from '../assets/cotton_processing.png';

const AboutCotton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const images = [
    { src: cottonFlower, alt: 'Cotton flower close-up', label: 'Cotton Flower' },
    { src: cottonHarvest, alt: 'Cotton harvesting', label: 'Harvesting' },
    { src: cottonFiber, alt: 'Cotton fiber processing', label: 'Processing' },
  ];

  return (
    <section id="about-cotton" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Natural Quality
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            The Power of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Natural Cotton
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6" />
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Images Grid */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              {/* Large image */}
              <div className="col-span-2 row-span-1 relative group rounded-2xl overflow-hidden shadow-xl h-64">
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white font-semibold text-sm bg-green-500/80 px-3 py-1 rounded-full backdrop-blur-sm">
                  {images[0].label}
                </span>
              </div>
              {/* Two small images */}
              {images.slice(1).map((img, i) => (
                <div key={i} className="relative group rounded-2xl overflow-hidden shadow-lg h-48">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-semibold text-xs bg-green-500/80 px-2 py-1 rounded-full backdrop-blur-sm">
                    {img.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="mt-4 inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-5 py-3 rounded-2xl shadow-sm">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white text-lg">
                🌿
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">100% Natural Fiber</div>
                <div className="text-xs text-gray-500">Sustainably sourced & processed</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Cotton is one of the most widely used natural fibers in the world. Known for its softness, breathability, and durability, cotton plays a vital role in the textile industry. Our cotton is sourced from trusted farmers and processed with modern standards to ensure high quality and reliability for global textile manufacturers.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                {
                  icon: '🌾',
                  title: 'Farm-to-Fabric Traceability',
                  desc: 'Full transparency from cotton seed to finished fiber bale.',
                  color: 'bg-green-100 text-green-600',
                },
                {
                  icon: '🧪',
                  title: 'Rigorous Quality Testing',
                  desc: 'Every batch is tested for purity, strength, and micronaire.',
                  color: 'bg-emerald-100 text-emerald-600',
                },
                {
                  icon: '🌍',
                  title: 'Global Export Standards',
                  desc: 'Compliant with international textile and organic certifications.',
                  color: 'bg-teal-100 text-teal-600',
                },
                {
                  icon: '♻️',
                  title: 'Sustainable Practices',
                  desc: 'Eco-friendly farming methods that protect the environment.',
                  color: 'bg-lime-100 text-lime-700',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-0.5">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#cotton-types"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Our Cotton Types
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCotton;
