import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner_1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';

const Hero = ({ theme = {} }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: banner1,
      subtitle: 'Heritage of Quality, Vision for Sustainability',
      title: 'Premium Cotton',
      highlight: 'From Our Farms',
      desc: 'Cultivating excellence with sustainable farming practices and premium quality cotton for global markets.'
    },
    {
      image: banner2,
      subtitle: 'Sustainable Agriculture Excellence',
      title: 'Pure White Gold',
      highlight: 'Naturally Grown',
      desc: 'Delivering the finest cotton through generations of expertise and commitment to quality standards.'
    },
    {
      image: banner3,
      subtitle: 'Trusted Global Cotton Supplier',
      title: 'Quality Cotton',
      highlight: 'Worldwide Supply',
      desc: 'Empowering global supply chains with premium cotton and sustainable trading practices.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden ${theme.bgClass || ''}`}>      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20 z-10"></div>
        </div>
      ))}
      
      <div className="relative z-20 pt-[80px] w-full max-w-7xl mx-auto px-8">
        <div className="max-w-[700px] animate-[slideInLeft_1s_ease-out]">
          <span 
            className="inline-block font-heading uppercase tracking-[3px] text-brand-gold font-semibold mb-6 text-sm border-l-4 border-brand-coral pl-4 animate-[slideInLeft_0.8s_ease-out]" 
            key={`subtitle-${currentSlide}`}
          >
            {slides[currentSlide].subtitle}
          </span>
          <h1 
            className={`text-5xl md:text-[4.5rem] leading-[1.1] mb-8 animate-[slideInUp_0.8s_ease-out_0.2s_both] ${theme.titleColor || 'text-white'}`} 
            key={`title-${currentSlide}`}
          >
            {slides[currentSlide].title} <br/>
            <span className="text-brand-teal">{slides[currentSlide].highlight}</span>
          </h1>
          <p 
            className={`text-lg md:text-xl mb-12 max-w-[600px] animate-[slideInUp_0.8s_ease-out_0.4s_both] ${theme.descColor || 'text-white'}`} 
            key={`desc-${currentSlide}`}
          >
            {slides[currentSlide].desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-[slideInUp_0.8s_ease-out_0.6s_both]">
            <a href="#products" className={`btn ${theme.btnPrimary || 'btn-primary'}`}>Discover More</a>
            <a href="#contact" className={`btn ${theme.btnSecondary || 'btn-secondary'}`}>Partner With Us</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 p-0 cursor-pointer ${
              index === currentSlide 
                ? 'bg-brand-gold border-2 border-brand-gold scale-125' 
                : 'bg-white/40 border-2 border-white/60 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
