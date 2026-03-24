import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import bannerImg from '../../assets/sustainable_Cotton_banner.png';

const SustainableCotton = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simple intersection observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.will-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Certified Organic Cotton India | BCI, GOTS & Sustainable Cotton"
        description="Partner with ethical raw cotton suppliers in India. 100% traceable, sustainable, and certified organic cotton (GOTS, BCI) for global textile brands and manufacturers."
        keywords="Certified organic cotton India, GOTS certified organic cotton suppliers India, Fair Trade certified cotton distributors, wholesale organic cotton, sustainable cotton farming manufacturers India"
        url="/sustainable-cotton"
      />

      <div className="bg-slate-50 overflow-hidden">
        {/* 1. Hero Banner */}
        <section className="relative w-full h-[550px] flex items-center justify-center overflow-hidden mt-[76px]">
          <div className="absolute inset-0 w-full h-full">
            <img src={bannerImg} alt="Sustainable Cotton Banner" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl will-reveal opacity-0 translate-y-10 transition-all duration-1000">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold uppercase tracking-[0.2em] text-sm mb-6 border border-white/30 backdrop-blur-md">
                ♻️ Eco-Friendly Excellence
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                Sustainable <span className="text-emerald-200">Cotton</span>
              </h1>
              <p className="text-xl text-emerald-50 font-medium max-w-2xl mx-auto leading-relaxed">
                Honest, ethical, and environmentally responsible cotton farming for a sustainable future.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Why Sustainable Cotton Matters */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 will-reveal opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Sustainable Cotton Matters
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Making a positive impact on our planet, one fiber at a time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🌍',
                  title: 'Environmental Protection',
                  desc: 'Reduces chemical use, conserves water, and protects soil health for future generations.'
                },
                {
                  icon: '👨‍🌾',
                  title: 'Farmer Welfare',
                  desc: 'Fair wages, safe working conditions, and sustainable livelihoods for farming communities.'
                },
                {
                  icon: '💚',
                  title: 'Consumer Health',
                  desc: 'No harmful chemicals means safer textiles for you and your family.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl border border-emerald-100 will-reveal opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: (i * 100) + 'ms' }}>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Our Sustainability Practices */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 will-reveal opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                🌱 Our Sustainability Practices
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Committed to responsible and ethical cotton production.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  num: '01',
                  title: 'Organic Farming',
                  points: ['No synthetic pesticides or fertilizers', 'Natural pest management', 'Crop rotation practices']
                },
                {
                  num: '02',
                  title: 'Water Conservation',
                  points: ['Efficient irrigation systems', '30% less water usage', 'Rainwater harvesting']
                },
                {
                  num: '03',
                  title: 'Soil Health',
                  points: ['Natural composting', 'Biodiversity protection', 'Long-term fertility']
                },
                {
                  num: '04',
                  title: 'Fair Trade Practices',
                  points: ['Competitive wages', 'Safe working conditions', 'Community development']
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow will-reveal opacity-0 translate-y-10 duration-700" style={{ transitionDelay: (i * 100) + 'ms' }}>
                  <div className="text-5xl font-black text-emerald-500 mb-4">{item.num}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-slate-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Certifications & Standards */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 will-reveal opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                ✓ Certifications & Standards
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Verified commitments to sustainability and ethical practices.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { cert: 'GOTS', name: 'Global Organic Textile Standard', desc: 'World\'s leading textile certification' },
                { cert: 'BCI', name: 'Better Cotton Initiative', desc: 'Sustainable cotton farming' },
                { cert: 'FAIR', name: 'Fair Trade Certified', desc: 'Ethical sourcing guarantee' },
                { cert: 'ISO', name: 'ISO 14001', desc: 'Environmental management' }
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-100 text-center will-reveal opacity-0 translate-y-10 duration-700 hover:shadow-md transition-shadow" style={{ transitionDelay: (i * 100) + 'ms' }}>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{item.cert}</div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{item.name}</h4>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Impact & Difference */}
        <section className="py-16 px-6 bg-emerald-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 will-reveal opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                📊 The Difference We Make
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { stat: '30%', label: 'Less Water Used' },
                { stat: '0%', label: 'Synthetic Chemicals' },
                { stat: '2000+', label: 'Farmers Supported' },
                { stat: '50K+', label: 'Tons Grown Sustainably' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-emerald-200 text-center will-reveal opacity-0 translate-y-10 duration-700 shadow-sm hover:shadow-lg transition-all" style={{ transitionDelay: (i * 100) + 'ms' }}>
                  <div className="text-5xl font-black text-emerald-600 mb-3">{item.stat}</div>
                  <p className="text-slate-700 font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Our Promise */}
        <section className="py-16 px-6 bg-gradient-to-r from-emerald-600 to-green-500 text-white">
          <div className="max-w-4xl mx-auto text-center will-reveal opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-black mb-6">🌿 Our Sustainable Promise</h2>
            <p className="text-xl md:text-2xl leading-relaxed mb-10 text-emerald-50">
              Every cotton fiber we produce is a commitment to environmental stewardship, fair labor practices, and a healthier planet. We believe sustainable cotton is not just a choice—it's a responsibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all uppercase tracking-wider">
                Support Sustainability
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/about-cotton" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-bold rounded-full border border-white/30 hover:bg-white/30 transition-all uppercase tracking-wider">
                Learn More About Cotton
              </Link>
            </div>
          </div>
        </section>

        {/* Floating Style for Reveal Animations */}
        <style dangerouslySetInnerHTML={{__html: `
          .animate-reveal {
            opacity: 1 !important;
            transform: translate(0,0) !important;
          }
        `}} />
      </div>
    </>
  );
};

export default SustainableCotton;
