import React from 'react';

const featuresData = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Heritage of Quality",
    desc: "A globally recognized identity trading in the highest class of cotton. We bring decades of expertise to every weave.",
    borderColor: "border-brand-gold"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-teal">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
    title: "Vision for Sustainability",
    desc: "Guiding and empowering farmers towards sustainable agricultural practices. Our commitment lies in shaping a greener supply chain.",
    borderColor: "border-brand-teal"
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-coral">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Global Supply Reach",
    desc: "Delivering our premium sustainable cotton safely across continents, adapting to the modern trade landscape efficiently.",
    borderColor: "border-brand-coral"
  }
];

const Features = () => {
  const isDark = false; // Forced light mode for all themes
  const sectionBg = 'bg-white';
  const titleColor = 'text-brand-dark';
  const cardBg = 'bg-white shadow-[0_15px_35px_rgba(0,0,0,0.05)] border-t-4';
  const cardTitle = 'text-brand-dark';
  const cardDesc = 'text-slate-600';
  const iconBg = 'bg-brand-light';

  return (
    <section id="about" className={`section relative z-10 ${sectionBg}`}>
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 animate-[fadeInUp_0.6s_ease-out]">
          <span className="font-heading uppercase tracking-widest text-brand-teal font-semibold text-sm inline-block mb-2">Why Choose Us</span>
          <h2 className={`text-4xl ${titleColor}`}>Defining the Modern Cotton Trade</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div className={`p-8 md:p-12 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group ${cardBg} ${!isDark ? feature.borderColor : 'border-t border-l'} animate-[fadeInUp_0.6s_ease-out]`} key={index}>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${iconBg}`}>
                {feature.icon}
              </div>
              <h3 className={`text-2xl mb-4 font-heading ${cardTitle}`}>{feature.title}</h3>
              <p className={`text-base leading-relaxed ${cardDesc}`}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
