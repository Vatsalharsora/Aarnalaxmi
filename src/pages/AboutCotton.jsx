import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import cottonPlantImg from '../../assets/about_cotton_banner.png';
import cottonHarvestImg from '../../assets/image_the_heritage_of_cotton.png';
import fabricImg from '../../assets/cotton_fabric_texture.jpg';
import productsImg from '../../assets/cotton-products.png';

const AboutCotton = () => {
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
        title="About Cotton | Properties, Types & Uses - Aarnalaxmi"
        description="Discover why cotton is special. Learn about its natural properties, various types like Organic and Egyptian, and its versatile uses worldwide."
        keywords="about cotton, why cotton is special, types of cotton, organic cotton, Egyptian cotton, cotton uses, natural fibers, sustainable clothing"
        url="/about-cotton"
      />

      <div className="bg-slate-50 mt-[76px]">
        {/* 1. Hero Banner (Cotton Plant) */}
        <section className="relative w-full h-[550px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img src={cottonPlantImg} alt="Raw Cotton Banner" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl will-reveal opacity-0 translate-y-10 transition-all duration-1000">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-300 font-bold uppercase tracking-[0.2em] text-sm mb-6 border border-green-500/30 backdrop-blur-md">
                🌿 The Miracle Fiber
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                About <span className="text-green-400">Cotton</span>
              </h1>
              <p className="text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
                Cotton is one of the most widely used natural fibers in the world, known for its softness, breathability, and versatility.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Intro Section (Cotton Harvesting) */}
        <section className="py-16 px-6 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="will-reveal opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight break-words">
                The Heritage of Cotton
                <div className="h-1.5 w-20 bg-green-500 rounded-full mt-5" />
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  It is grown from the cotton plant and has been used for thousands of years to create comfortable and durable fabrics.
                </p>
                <p>
                  Cotton fibers are naturally soft, lightweight, and gentle on the skin, making them ideal for everyday wear. Due to its breathable nature, cotton helps keep the body cool in hot weather and provides comfort throughout the day.
                </p>
              </div>
            </div>
            <div className="relative will-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <div className="absolute inset-0 bg-green-100 rounded-[2.5rem] rotate-3 scale-105 -z-10" />
              <img 
                src={cottonHarvestImg} 
                alt="Farmers picking cotton" 
                className="w-full h-[400px] object-cover rounded-[2.5rem] shadow-xl"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-white/20">
                <span className="text-green-600 font-bold flex items-center gap-2">
                  <span>👨‍🌾</span> Harvesting Nature's Best
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Cotton is Special */}
        <section className="py-16 px-6 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 will-reveal opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                🌱 Why Cotton is Special
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">The natural properties that make cotton the world's favorite fabric.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Features List */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: '♻️', title: 'Natural & Eco-Friendly', desc: 'Biodegradable and sustainable.' },
                  { icon: '☁️', title: 'Soft & Comfortable', desc: 'Perfect for daily wear.' },
                  { icon: '🌬️', title: 'Breathable Fabric', desc: 'Keeps you cool and fresh.' },
                  { icon: '🛡️', title: 'Durable', desc: 'Long-lasting and easy to maintain.' },
                  { icon: '✨', title: 'Hypoallergenic', desc: 'Suitable for sensitive skin.' }
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow will-reveal opacity-0 translate-y-10 duration-700" style={{ transitionDelay: (i * 100) + 'ms' }}>
                    <div className="text-3xl mb-4 bg-green-50 w-12 h-12 flex items-center justify-center rounded-2xl">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-500">{feature.desc}</p>
                  </div>
                ))}
              </div>
              
              {/* Fabric Image */}
              <div className="lg:col-span-5 h-[500px] relative rounded-3xl overflow-hidden shadow-2xl will-reveal opacity-0 translate-y-10 transition-all duration-1000">
                <img src={fabricImg} alt="Cotton Fabric Texture" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-8 left-8 text-white text-2xl font-bold">Pure Organic Texture</h3>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Types of Cotton */}
        <section className="py-16 px-6 bg-white shrink-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 will-reveal opacity-0 translate-y-10 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                🧵 Types of Cotton
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Organic Cotton', desc: 'Grown without harmful chemicals.', styles: 'border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50', iconColor: 'text-emerald-500 border-emerald-100' },
                { name: 'Egyptian Cotton', desc: 'Known for luxury and softness.', styles: 'border-amber-100 bg-amber-50/30 hover:bg-amber-50', iconColor: 'text-amber-500 border-amber-100' },
                { name: 'Pima Cotton', desc: 'Extra long fibers for durability.', styles: 'border-blue-100 bg-blue-50/30 hover:bg-blue-50', iconColor: 'text-blue-500 border-blue-100' },
                { name: 'Upland Cotton', desc: 'Most commonly used cotton.', styles: 'border-slate-100 bg-slate-50/30 hover:bg-slate-50', iconColor: 'text-slate-500 border-slate-100' }
              ].map((type, i) => (
                <div key={i} className={"p-8 rounded-3xl border-2 transition-colors will-reveal opacity-0 translate-y-10 duration-700 text-center " + type.styles} style={{ transitionDelay: (i * 100) + 'ms' }}>
                  <div className={"w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-6 border " + type.iconColor}>
                    🥇
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{type.name}</h3>
                  <p className="text-slate-600 font-medium">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Uses of Cotton */}
        <section className="py-16 px-6 bg-slate-50 text-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl -z-10" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Products Image */}
            <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] will-reveal opacity-0 translate-y-10 transition-all duration-1000">
              <img src={productsImg} alt="Cotton Products" className="w-full h-full object-cover opacity-80" />
            </div>

            {/* List */}
            <div className="order-1 lg:order-2 will-reveal opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                👕 Uses of Cotton
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Cotton is incredibly versatile and is used in a wide range of essential products daily:
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: 'Clothing', items: 'T-shirts, shirts, dresses' },
                  { title: 'Home Textiles', items: 'Bedsheets, towels, curtains' },
                  { title: 'Medical Supplies', items: 'Bandages, cotton pads' },
                  { title: 'Industrial Products', items: 'Canvas, threads, filters' }
                ].map((use, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 hover:bg-slate-100 transition-colors shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{use.title}</h4>
                      <p className="text-slate-600">{use.items}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Our Commitment */}
        <section className="py-16 px-6 bg-green-600 text-center relative overflow-hidden">
          {/* Subtle patterns */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          
          <div className="max-w-4xl mx-auto relative z-10 will-reveal opacity-0 translate-y-10 transition-all duration-1000">
            <span className="text-6xl mb-6 block drop-shadow-lg">🌍</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Our Commitment</h2>
            <p className="text-xl md:text-2xl text-green-100 font-medium leading-relaxed mb-8">
              We believe in providing high-quality cotton products that are comfortable, sustainable, and affordable. Our focus is on delivering premium cotton materials while caring for the environment and supporting ethical farming practices.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all uppercase tracking-wider">
              Work With Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
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

export default AboutCotton;
