import React, { useEffect, useRef, useState } from 'react';

const CottonTypes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cottonTypes = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      emoji: '🌾',
      title: 'Raw Cotton',
      description: 'High-grade natural cotton sourced from reliable farms, ginned to international quality standards with verified staple length and micronaire.',
      features: ['Long staple fiber', 'Low moisture content', 'Zero contamination'],
      gradient: 'from-amber-50 to-yellow-50',
      accent: 'bg-amber-500',
      iconBg: 'bg-amber-100 text-amber-600',
      tag: 'Most Popular',
      tagColor: 'bg-amber-100 text-amber-700',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      emoji: '🌿',
      title: 'Organic Cotton',
      description: 'Cotton grown without synthetic chemicals and harmful pesticides, certified to GOTS and OCS standards for eco-conscious textile manufacturers.',
      features: ['GOTS Certified', 'Pesticide-free', 'Fair trade sourced'],
      gradient: 'from-green-50 to-emerald-50',
      accent: 'bg-green-500',
      iconBg: 'bg-green-100 text-green-600',
      tag: 'Certified',
      tagColor: 'bg-green-100 text-green-700',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      emoji: '♻️',
      title: 'Sustainable Cotton',
      description: 'Cotton produced using environmentally responsible farming practices, water-efficient irrigation, and reduced carbon footprint throughout the supply chain.',
      features: ['Water efficient', 'Low carbon footprint', 'BCI Certified'],
      gradient: 'from-teal-50 to-cyan-50',
      accent: 'bg-teal-500',
      iconBg: 'bg-teal-100 text-teal-600',
      tag: 'Eco-Friendly',
      tagColor: 'bg-teal-100 text-teal-700',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      emoji: '⭐',
      title: 'Premium Export Cotton',
      description: 'High quality cotton specially prepared for international textile markets, meeting global export regulations and buyer certification standards.',
      features: ['Export grade', 'International certified', 'Premium packaging'],
      gradient: 'from-purple-50 to-indigo-50',
      accent: 'bg-purple-500',
      iconBg: 'bg-purple-100 text-purple-600',
      tag: 'Export Ready',
      tagColor: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <section id="cotton-types" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
            🌱 Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Our Cotton{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Types
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore our range of high-quality cotton varieties — each carefully sourced, tested, and prepared for the demands of modern textile industries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cottonTypes.map((type, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-b ${type.gradient} border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 cursor-pointer overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${type.accent} rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />

              {/* Tag */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${type.tagColor}`}>
                {type.tag}
              </span>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${type.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                {type.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{type.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {type.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-gray-200/70">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 group/link"
                >
                  Get Quote
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CottonTypes;
