import React, { useEffect, useRef } from 'react';
import SEO from './SEO';
import heroImg from '../assets/hero_cotton_farm.png';
import introImg from '../assets/cotton_harvesting.png';
import sustainImg from '../assets/cotton_field_wide.png';
import GoogleMap from './GoogleMap';

const AboutUs = () => {
  const scrollRefs = useRef([]);

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
        title="About Us | Excellence in Sustainable Cotton Supply - Aarnalaxmi"
        description="Explore Aarnalaxmi's 25-year journey from local farms to becoming a global leader in premium cotton supply. Committed to integrity, sustainability, and quality in 65+ countries."
        keywords="about aarnalaxmi enterprises, cotton company history, sustainable cotton sourcing India, global cotton supply chain, cotton mission and vision, premium cotton quality control, organic cotton heritage Gujarat"
        url="/about"
      />

      <div className="bg-white overflow-hidden pb-1">
        
        {/* 1. Page Header / Hero Section */}
        <section 
          className="relative h-[60vh] min-h-[450px] flex items-center justify-center text-center px-6 overflow-hidden mt-[76px]"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          
          <div className="relative z-10 max-w-4xl animate-fade-in px-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-500/10 backdrop-blur-md mb-6 mx-auto">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-300 font-bold text-xs uppercase tracking-widest leading-none">Established 1998</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight leading-[1.1]">
              About Our <span className="text-green-400">Company</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed">
              Delivering premium quality cotton with trust, sustainability, and global standards.
            </p>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 w-full leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full fill-white">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,117.26,123.61,124.76,190.27,117.24A429.09,429.09,0,0,0,321.39,56.44Z" />
            </svg>
          </div>
        </section>

        {/* 2. Company Introduction Section */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal transform translate-y-[30px] opacity-0 transition-all duration-700 ease-out">
              <div className="inline-block px-3 py-1 rounded-md bg-green-50 text-green-600 text-xs font-bold uppercase tracking-widest mb-4">Discovery</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                Who We Are
                <div className="h-[2px] w-12 bg-green-500 rounded-full" />
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a trusted cotton supplier committed to providing high-quality natural cotton to textile industries. Our company works closely with experienced farmers and follows modern processing standards to ensure premium cotton quality.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                With a strong focus on sustainability and reliability, we aim to support the growing demand of the global textile market, bridging the gap between nature's produce and industrial needs.
              </p>
              
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-green-600 leading-none">25+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Years Exc.</span>
                </div>
                <div className="w-[1px] h-10 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-green-600 leading-none">1.5k+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Acres farmed</span>
                </div>
                <div className="w-[1px] h-10 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-green-600 leading-none">65+</span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1">Countries</span>
                </div>
              </div>
            </div>
            
            <div className="relative reveal transform translate-y-[30px] opacity-0 transition-all duration-700 delay-200 ease-out">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-50 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-50 rounded-2xl -z-10" />
              <img 
                src={introImg} 
                alt="Cotton Harvesting" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
              />
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
                  To provide high-quality cotton while supporting farmers and maintaining sustainable agricultural practices. We strive to be the bridge between sustainable farms and premium textile manufacturers.
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
                  To become a trusted global supplier of premium cotton and build long-term relationships with textile industries worldwide, setting the standard for quality and ethical trade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Journey Section — Compact Design */}
        <section className="py-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <div className="h-1 w-16 bg-green-500 rounded-full mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                From a small family vision to a global cotton supply leader, here is our story.
              </p>
            </div>

            {/* Compact Step Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Horizontal Line for Desktop */}
              <div className="hidden lg:block absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-green-100 -z-0" />
              
              {[
                { year: '1998', title: 'The Founding', desc: 'Started with a small family farm focused on organic methods.' },
                { year: '2005', title: 'Expansion', desc: 'Partnered with 200+ farmers to increase sourcing capacity.' },
                { year: '2012', title: 'Global Reach', desc: 'Began exporting to core European and Asian textile markets.' },
                { year: '2023', title: 'Modern Era', desc: 'Reached 1,500+ acres of certified sustainable farmland.' }
              ].map((item, i) => (
                <div key={i} className="reveal transform translate-y-10 opacity-0 transition-all duration-700 ease-out group">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all text-center h-full relative z-10">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-5 border-4 border-white shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us Section */}
        <section className="py-16 bg-green-600 text-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-lg text-green-100 max-w-2xl mx-auto">Providing unmatched quality and reliability in every fiber we trade.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Premium Quality Cotton', icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 1.006 3.42 3.42 0 013.138 3.138 3.42 3.42 0 001.006 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.006 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946 1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.006-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 001.006-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )},
                { title: 'Trusted Farmer Network', icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )},
                { title: 'Sustainable Practices', icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )},
                { title: 'Reliable Supply Chain', icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                )}
              ].map((card, i) => (
                <div key={i} className="reveal transform translate-y-10 opacity-0 transition-all duration-700 ease-out bg-green-500/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white hover:text-green-600 transition-all group overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10 transform scale-150 rotate-12 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div className="mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                  <h4 className="text-xl font-bold leading-tight">{card.title}</h4>
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
                { title: 'Quality', text: 'Uncompromising standards in every bale of cotton we supply.', icon: '🏆' },
                { title: 'Integrity', text: 'Transparency and honesty in all our global trade relations.', icon: '🤝' },
                { title: 'Sustainability', text: 'Protecting the planet through eco-friendly farming practices.', icon: '🌱' },
                { title: 'Customer Commitment', text: 'Building long-term growth for our partners worldwide.', icon: '🌍' }
              ].map((value, i) => (
                <div key={i} className="reveal transform translate-y-20 opacity-0 transition-all duration-700 ease-out bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600">{value.text}</p>
                </div>
              ))}
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

        {/* 9. Call To Action Section */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto relative bg-green-900 rounded-[3rem] p-12 md:p-16 overflow-hidden text-center text-white reveal">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-600/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-2xl mx-auto leading-tight">
                Partner With Us For Premium Cotton Supply
              </h2>
              <p className="text-lg md:text-xl text-green-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                We are committed to delivering reliable cotton supply for textile industries. Contact us today to learn more about our cotton products and services.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto px-10 py-5 bg-white text-green-900 rounded-2xl font-bold text-lg hover:bg-green-100 transition-colors shadow-xl"
                >
                  Contact Us
                </a>
                <a 
                  href="tel:+919876543210" 
                  className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Floating CSS for reveal animations */}
        <style dangerouslySetInnerHTML={{ __html: `
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