import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import aboutUsBanner from '../assets/about_us_banner.jpg';
import introImg from '../assets/cotton_harvesting.png';
import sustainImg from '../assets/cotton_field_wide.png';
import GoogleMap from '../components/GoogleMap';

const AboutUs = () => {
  const heroRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;  // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;  // -1 to 1
    setMouse({ x, y });
  };

  const handleHeroMouseLeave = () => setMouse({ x: 0, y: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Top Organic Cotton Exporters in Gujarat | About Aarnalaxmi Cotton"
        description="Discover Aarnalaxmi's 25+ year journey as India's leading BCI and GOTS certified organic raw cotton supplier. Exporting premium sustainable cotton bales to 65+ nations."
        keywords="Top organic cotton exporters in Gujarat, cotton export history India, raw cotton suppliers Ahmedabad, BCI certified cotton export, sustainable cotton farming manufacturers India, Gujarat cotton industry"
        url="/about"
      />

      <div className="bg-white overflow-hidden pb-1">

        {/* 1. Page Header / Hero Section — Full Screen Landing Impact */}
        <section
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          className="relative flex items-center justify-start overflow-hidden mt-[76px] bg-[#050505]"
          style={{
            minHeight: 'calc(100vh - 76px)',
            perspective: '2000px',
          }}
        >
          {/* Parallax Background — Set to 'cover' for cinematic full-screen impact */}
          <div
            className="absolute inset-[-5%]"
            style={{
              backgroundImage: `url(${aboutUsBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translate(${mouse.x * -15}px, ${mouse.y * -10}px)`,
              transition: 'transform 0.4s ease-out',
              willChange: 'transform',
            }}
          />

          {/* Luxury Gradient Overlay — Deeper for full-screen focus */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%)' }} />

          {/* Content Container — Centered vertically in viewport-padding */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-10 py-20 flex flex-col justify-center h-full">
            <div
              className="max-w-3xl"
              style={{
                transform: `rotateY(${mouse.x * 2}deg) rotateX(${mouse.y * -1}deg)`,
                transition: 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Premium Small Badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                <span className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.3em]">Industry Leader Since 1998</span>
              </div>

              {/* Title with Glowing Accent — Reduced Size */}
              <div className="flex items-stretch gap-6 mb-7">
                <div className="w-1.5 rounded-full bg-gradient-to-b from-green-400 to-green-600 shadow-[0_0_25px_rgba(74,222,128,0.5)]" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  About Our<br />
                  <span className="text-green-400">Company</span>
                </h1>
              </div>

              {/* Reduced Subtitle */}
              <p className="text-lg text-gray-300 max-w-lg mb-10 leading-relaxed font-medium">
                Elevating global cotton standards through sustainable practices and uncompromising quality for decades.
              </p>

              {/* Smaller Mini Stats */}
              <div className="flex flex-wrap gap-5">
                {[
                  { value: '25+', label: 'Years Exp.' },
                  { value: '65+', label: 'Nations' },
                  { value: '500+', label: 'Partners' },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-5 py-2.5 rounded-2xl transition-all duration-500 hover:scale-105 hover:bg-white/5"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <span className="text-xl font-black text-green-400">{s.value}</span>
                    <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator — Only on full screen heroes */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce cursor-pointer z-30">
            <span className="text-white text-[10px] uppercase tracking-[0.4em] font-black">Scroll</span>
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[60px] fill-white">
              <path d="M0,40 C480,80 960,80 1440,40 L1440,80 L0,80 Z" />
            </svg>
          </div>
        </section>

        {/* 2. Our Story Section — Premium Staggered Layout */}
        <section className="py-24 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

              {/* Text Side */}
              <div className="reveal transform translate-y-[40px] opacity-0 transition-all duration-1000 ease-out order-2 lg:order-1 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-green-100 max-w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Our Foundation
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.2] break-words">
                  A Legacy Rooted in <br />
                  <span className="text-green-600">Sustainability.</span>
                </h2>

                <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                  <p className="text-lg">
                    Welcome to <span className="text-slate-900 font-bold">Aarnalaxmi Enterprises</span>, a leading sustainable cotton supplier and organic cotton trader based in Ahmedabad, Gujarat. We specialize exclusively in certified cotton varieties, including BCI, Organic, and Regenagri fibers.
                  </p>

                  <div className="py-6 border-y border-slate-100 my-8">
                    <p className="text-2xl font-black text-green-700 italic leading-tight">
                      "What drives us is simple: you — your trust and your needs."
                    </p>
                  </div>

                  <p>
                    With over <span className="text-slate-900 font-bold underline decoration-green-500/30 decoration-4 underline-offset-4">15 years of experience</span> in managing sustainable cotton projects across India, we have developed deep expertise and strong industry relationships that set us apart.
                  </p>

                  <p>
                    Our dedicated teams work on the ground in collaboration with local partners and directly engage with a network of more than <span className="text-slate-900 font-bold">14,000 farmers</span>, ensuring ethical sourcing, total traceability, and consistent quality that meets the highest global standards.
                  </p>
                </div>

                {/* Quick Stats Grid — Refined Design */}
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="flex items-center gap-5 p-6 rounded-3xl bg-green-50/50 border border-green-100/50 hover:bg-green-50 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">⏳</div>
                    <div>
                      <div className="text-3xl font-black text-slate-900 leading-none">15+</div>
                      <div className="text-[10px] text-green-700 font-black uppercase tracking-widest mt-1">Years Exp.</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-6 rounded-3xl bg-blue-50/50 border border-blue-100/50 hover:bg-blue-50 transition-colors group">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-xl group-hover:scale-110 transition-transform">👨‍🌾</div>
                    <div>
                      <div className="text-3xl font-black text-slate-900 leading-none">14k+</div>
                      <div className="text-[10px] text-blue-700 font-black uppercase tracking-widest mt-1">Farmers</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Side — Staggered Mosaic */}
              <div className="relative order-1 lg:order-2 reveal transform translate-y-[40px] opacity-0 transition-all duration-1000 delay-300 ease-out">
                {/* Main Image */}
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src={introImg}
                    alt="Sustainable Cotton Sourcing"
                    className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Secondary Floater Image */}
                <div className="absolute -bottom-10 -left-10 w-64 h-64 z-20 hidden md:block rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform hover:-translate-y-2 transition-transform duration-500">
                  <img
                    src={sustainImg}
                    alt="Cotton Field"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50 rounded-full -z-10 blur-2xl" />
                <div className="absolute top-20 -right-4 w-12 h-12 bg-green-500/10 rounded-xl rotate-12 -z-10" />
              </div>

            </div>
          </div>
        </section>

        {/* 3. Our Mission & Vision Section */}
        <section className="py-20 bg-gray-50/50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="reveal transform translate-y-20 opacity-0 transition-all duration-700 ease-out bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-8 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is simple yet powerful: to set new standards of reliability, transparency, and sustainability in the cotton business. By combining our core values with forward-thinking innovation, we create solutions that serve our partners today while protecting the future of our planet. We believe in doing business with integrity and purpose, shaping an industry where trust drives progress and impact is shared by all.
                </p>
              </div>

              {/* Vision Card */}
              <div className="reveal transform translate-y-20 opacity-0 transition-all duration-700 delay-200 ease-out bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We envision a world where people and the planet thrive together. Through our “People First” approach, we champion climate-smart agriculture and innovative solutions that safeguard the environment while empowering communities. Our goal is to redefine industry standards, proving that sustainability and growth can go hand in hand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Journey Section — Compact Design */}
        <section className="py-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Experience</h2>
              <div className="h-1 w-16 bg-green-500 rounded-full mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Building trust through 15+ years of dedicated expertise in the Indian cotton ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                { label: 'Experience', value: '15+ Years', desc: 'Managing sustainable cotton projects across India.' },
                { label: 'Impact', value: '14,000+', desc: 'Farmers engaged through our direct field network.' },
                { label: 'Presence', value: '3 States', desc: 'Active operations in Gujarat, Maharashtra & Rajasthan.' },
                { label: 'Products', value: '100% Certified', desc: 'Focus strictly on BCI, Organic, and Regenagri fibers.' }
              ].map((item, i) => (
                <div key={i} className="reveal transform translate-y-10 opacity-0 transition-all duration-700 ease-out group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all text-center h-full">
                    <div className="text-green-600 font-black text-2xl mb-2">{item.value}</div>
                    <h4 className="text-gray-900 font-bold mb-2">{item.label}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-slate-50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Leadership</h2>
              <div className="h-1.5 w-24 bg-green-500 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="reveal transform translate-y-[30px] opacity-0 transition-all duration-700 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 rounded-2xl bg-green-50 flex-shrink-0 flex items-center justify-center text-4xl">👨‍💼</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Sumit</h3>
                  <p className="text-green-600 font-bold text-sm uppercase tracking-widest mb-4">Driving Growth & Strategy</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Sumit is a seasoned professional with extensive experience in driving business growth, optimizing operations, and building impactful relationships. He thrives in dynamic environments and believes in continuous learning and adaptability.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    With a results-driven mindset, Sumit plays a pivotal role in driving organizational success while inspiring those around him to achieve their fullest potential.
                  </p>
                </div>
              </div>

              <div className="reveal transform translate-y-[30px] opacity-0 transition-all duration-700 delay-200 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-24 h-24 rounded-2xl bg-blue-50 flex-shrink-0 flex items-center justify-center text-4xl">👨‍🌾</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Sanjay</h3>
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">Partner & Field Expert</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Highly experienced with deep expertise in sales, operations, and business development. Having grown up in a family of cotton producers and farmers, Sanjay brings a unique blend of industry knowledge and practical insights.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    At Aarnalaxmi, Sanjay plays a pivotal role in managing key customer relationships and direct farming community engagement across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us Section — Premium Redesign */}
        <section className="relative py-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f2744 50%, #0d3320 100%)' }}>
          {/* Background Decorative Blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #22c55e, transparent)' }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 reveal">
              <span className="inline-block px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 border"
                style={{ color: '#4ade80', borderColor: 'rgba(74,222,128,0.3)', background: 'rgba(74,222,128,0.08)' }}>
                Our Strengths
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
                Why <span style={{ color: '#4ade80' }}>Choose</span> Us
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                Delivering more than cotton — we deliver trust, precision, and a sustainable future.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: 'Premium Quality Cotton',
                  desc: 'Every bale meets international fiber length, micronaire, and strength benchmarks.',
                  iconColor: '#4ade80',
                  glow: 'rgba(74,222,128,0.15)',
                  bg: 'rgba(74,222,128,0.08)',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 1.006 3.42 3.42 0 013.138 3.138 3.42 3.42 0 001.006 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.006 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946 1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.006-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 001.006-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  )
                },
                {
                  title: 'Trusted Farmer Network',
                  desc: '500+ verified farmers across Gujarat and Maharashtra with long-term partnerships.',
                  iconColor: '#60a5fa',
                  glow: 'rgba(96,165,250,0.15)',
                  bg: 'rgba(96,165,250,0.08)',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  title: 'Sustainable Practices',
                  desc: 'Zero-pesticide programs and soil-first farming protect ecosystems for future harvests.',
                  iconColor: '#a78bfa',
                  glow: 'rgba(167,139,250,0.15)',
                  bg: 'rgba(167,139,250,0.08)',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  )
                },
                {
                  title: 'Reliable Supply Chain',
                  desc: 'On-time delivery to 65+ countries backed by robust logistics and transparent tracking.',
                  iconColor: '#f97316',
                  glow: 'rgba(249,115,22,0.15)',
                  bg: 'rgba(249,115,22,0.08)',
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  )
                }
              ].map((card, i) => (
                <div
                  key={i}
                  className="reveal transform translate-y-12 opacity-0 transition-all duration-700 ease-out group relative overflow-hidden rounded-2xl border p-8 cursor-default"
                  style={{
                    transitionDelay: `${i * 120}ms`,
                    background: 'rgba(255,255,255,0.04)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = card.glow; e.currentTarget.style.borderColor = card.iconColor + '40'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                >
                  {/* Glow spot top-right background */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${card.iconColor}30, transparent)` }} />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: card.bg, color: card.iconColor }}>
                    {card.icon}
                  </div>

                  {/* Number Tag */}
                  <div className="absolute top-6 right-6 text-4xl font-black opacity-5 group-hover:opacity-10 transition-opacity"
                    style={{ color: card.iconColor }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 leading-snug">{card.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{card.desc}</p>

                  {/* Bottom line accent */}
                  <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ background: `linear-gradient(to right, ${card.iconColor}, transparent)` }} />
                </div>
              ))}
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
              {[
                { value: '25+', label: 'Years of Excellence' },
                { value: '500+', label: 'Farmer Partners' },
                { value: '65+', label: 'Export Countries' },
                { value: '1.5k+', label: 'Acres Farmed' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-3xl md:text-4xl font-extrabold mb-1" style={{ color: '#4ade80' }}>{stat.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* 6. Cotton Farming & Sustainability */}
        <section className="py-20 px-6 font-poppins">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 reveal transform translate-y-[30px] opacity-0 transition-all duration-700 ease-out">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-green-100 rounded-full -z-10" />
                <img
                  src={sustainImg}
                  alt="Sustainable Farming"
                  className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 reveal transform translate-y-[30px] opacity-0 transition-all duration-700 delay-200 ease-out">
              <div className="inline-block px-3 py-1 rounded-md bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">Our Commitment</div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">Sustainable Cotton Farming</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe in responsible farming practices that protect the environment and support farmers. Our cotton sourcing focuses on soil health, water conservation, and eco-friendly agricultural methods.
              </p>
              <ul className="space-y-4">
                {[
                  'Zero Pesticide Usage Program',
                  'Water Conservation Techniques',
                  'Soil Health Management',
                  'Eco-friendly Sourcing Strategy'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Company Values */}
        <section className="py-16 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <div className="h-1.5 w-24 bg-green-500 rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Sustainability', text: 'Protecting the planet through eco-friendly farming and climate-smart agriculture.', icon: '🌱' },
                { title: 'Reliability', text: 'Ensuring consistent quality and on-time global supply for over 15 years.', icon: '🏆' },
                { title: 'Transparency', text: 'Ethical and clean deals with full traceability from farm to fabric.', icon: '🔍' },
                { title: 'Trust', text: 'Built on unshakable values of honesty and commitment to our partners.', icon: '🤝' }
              ].map((value, i) => (
                <div key={i} className="reveal transform translate-y-20 opacity-0 transition-all duration-700 ease-out bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 mb-4">{value.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-white p-10 rounded-3xl border border-slate-100 text-center max-w-4xl mx-auto reveal translate-y-10 opacity-0 duration-700">
              <p className="text-xl text-slate-700 font-medium leading-relaxed italic">
                "From the very beginning, we’ve built our journey on three unshakable values: honesty, reliability, and excellence. These aren’t just words for us — they’re promises. Every decision we make comes back to one question: 'Are we doing right by the people who trust us?'"
              </p>
              <div className="mt-8 pt-8 border-t border-slate-100 flex justify-center gap-4 flex-wrap">
                {['Sustainability', 'Reliability', 'Transparency', 'Trust'].map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Visit Our Headquarters / Google Map Section */}
        <section className="py-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Content Box */}
              <div className="reveal transform translate-y-[30px] opacity-0 transition-all duration-700 ease-out">
                <div className="inline-block px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">Location</div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Visit Our <span className="text-green-600">Headquarters</span></h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Located in the heart of Gujarat's cotton hub, our state-of-the-art facility serves as the central command for our global operations and sustainable farming initiatives.
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Corporate Office</h4>
                      <p className="text-gray-500">Global Trade Centre, Cotton Avenue, Ahmedabad, Gujarat 380015, India</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">Email & Contact</h4>
                      <p className="text-gray-500 font-medium">contact@aarnalaxmi.com</p>
                      <p className="text-gray-500">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Box */}
              <div className="reveal transform translate-y-[30px] opacity-0 transition-all duration-700 delay-200 ease-out">
                <GoogleMap
                  title="Aarnalaxmi Cotton HQ"
                  height="h-[450px]"
                />
              </div>

            </div>
          </div>
        </section>

        {/* 9. Compact Professional CTA Section — Light Theme */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto reveal">
            <div
              className="relative rounded-3xl p-10 md:p-14 overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-md"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              }}
            >
              {/* Subtle Decorative Elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gray-100 rounded-full blur-2xl opacity-40" />

              <div className="relative z-10 text-center flex flex-col items-center">
                {/* Minimalist Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-slate-100 border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span className="text-slate-500 font-bold text-[9px] uppercase tracking-[0.2em]">Global Partnership</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-6 tracking-tight leading-tight">
                  Partner With Us For <br />
                  <span className="text-slate-600">Premium Cotton Supply</span>
                </h2>

                <p className="text-base md:text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
                  Join our global network. We deliver reliability and sustainable cotton standards to textile leaders in 65+ nations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#1e293b] text-white rounded-xl font-bold text-[15px] uppercase tracking-wider transition-all duration-300 hover:bg-[#334155] hover:scale-[1.02] shadow-sm"
                  >
                    Contact Us
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-[15px] uppercase tracking-wider transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>

                {/* Refined Footer Signifier */}
                <div className="mt-10 pt-6 border-t border-slate-100 w-full max-w-xs">
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                    Serving 500+ Global Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating CSS for reveal animations */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .reveal {
            opacity: 0;
            transition: all 0.5s ease-out;
          }
          .reveal.animate-in {
            opacity: 1;
            transform: translate(0, 0) !important;
          }
        `}} />
      </div>
    </>
  );
};

export default AboutUs;