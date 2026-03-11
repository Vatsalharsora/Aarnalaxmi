import React from 'react';

const Products = ({ theme = {}, themeType = 1 }) => {
  const isDark = false; // Forced light mode for all themes
  const sectionBg = 'bg-white';
  const titleColor = 'text-brand-dark';
  const descColor = 'text-slate-600';
  const listTextColor = 'text-brand-dark';
  const badgeBg = 'bg-brand-gold text-brand-dark shadow-[0_10px_30px_rgba(0,0,0,0.15)]';

  return (
    <section id="products" className={`section ${sectionBg}`}>
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-[slideInLeft_0.8s_ease-out]">
            <span className="font-heading uppercase tracking-widest text-brand-teal font-semibold text-sm inline-block mb-2">What We Do</span>
            <h2 className={`text-4xl mb-6 ${titleColor}`}>Premium Cotton Products & Merchandising</h2>
            <p className={`text-lg mb-8 leading-relaxed ${descColor}`}>
              We specialize in the sourcing, processing, and trading of premium cotton varieties. With our expansive network of farmers and advanced processing facilities, ensuring quality control from seed to final delivery.
            </p>
            <ul className={`list-none text-lg space-y-6 ${descColor}`}>
              <li className="flex items-start">
                <span className="inline-block min-w[12px] min-h-[12px] w-3 h-3 rounded-full mt-2 mr-4 bg-brand-gold shrink-0"></span>
                <span><strong className={listTextColor}>Raw Cotton Procurement</strong> - Direct sourcing enforcing fair trade.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block min-w-[12px] min-h-[12px] w-3 h-3 rounded-full mt-2 mr-4 bg-brand-teal shrink-0"></span>
                <span><strong className={listTextColor}>Sustainable Processing</strong> - Advanced technology for minimal footprint.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block min-w-[12px] min-h-[12px] w-3 h-3 rounded-full mt-2 mr-4 bg-brand-coral shrink-0"></span>
                <span><strong className={listTextColor}>Global Merchandising</strong> - Linking premium threads with top global manufacturers.</span>
              </li>
            </ul>
            <a href="#contact" className="btn btn-outline mt-10">Learn More</a>
          </div>
          <div className="relative rounded-[20px] z-10 mt-12 lg:mt-0 animate-[slideInRight_0.8s_ease-out]">
            <div className="absolute -top-5 -right-5 w-full h-full rounded-[20px] -z-10 opacity-10 bg-brand-teal"></div>
            <img src="https://images.unsplash.com/photo-1590748523363-23910ee24fa3?q=80&w=1000&auto=format&fit=crop" alt="Cotton Processing" className="w-full rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] block" />
            <div className={`absolute -bottom-8 -left-8 p-6 rounded-xl flex flex-col items-center justify-center text-center ${badgeBg}`}>
              <span className="font-heading text-4xl font-extrabold leading-none">100%</span>
              <span className="text-sm font-semibold mt-2 uppercase tracking-wide">Organic Certified<br/>Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
