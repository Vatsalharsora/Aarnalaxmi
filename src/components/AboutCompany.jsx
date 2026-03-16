import React from 'react';

const AboutCompany = () => {
  return (
    <section id="about" className="section bg-[#f8fafc] border-b border-slate-200">
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative rounded-2xl z-10 animate-[slideInLeft_0.8s_ease-out]">
            <div className="absolute -top-5 -left-5 w-full h-full rounded-2xl -z-10 opacity-20 bg-brand-gold"></div>
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
              alt="Aarnalaxmi Enterprise Team" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] block" 
            />
            <div className="absolute -bottom-10 right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-teal">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h4 className="font-heading text-2xl font-bold text-brand-dark">20+ Years</h4>
                  <p className="text-slate-500 font-medium text-sm text-brand-teal uppercase tracking-wider">Of Global Trust</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-[slideInRight_0.8s_ease-out] lg:pl-8">
            <span className="font-heading uppercase tracking-widest text-brand-gold font-bold text-sm inline-block mb-3 border-l-4 border-brand-teal pl-3">Our Company</span>
            <h2 className="text-4xl lg:text-5xl mb-6 text-brand-dark leading-tight">Delivering Excellence in Every Thread</h2>
            <p className="text-lg mb-6 leading-relaxed text-slate-600">
              At <strong className="text-brand-teal">Aarnalaxmi Enterprises</strong>, we take pride in being a premier global entity in the cotton trading industry. Over the changing landscapes of global trade, we have adapted, innovated, and grown to deliver the most reliable supply chain solutions.
            </p>
            <p className="text-lg mb-10 leading-relaxed text-slate-600">
              We connect local farmers sharing a rich heritage of cotton cultivation with modern international manufacturers. Our focus remains steadfast on mutual growth, strict quality compliance, and unmatched business ethics.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="font-heading text-3xl font-extrabold text-brand-dark mb-2">50+</h4>
                <p className="text-slate-500 font-medium">Countries Served Globally</p>
              </div>
              <div>
                <h4 className="font-heading text-3xl font-extrabold text-brand-dark mb-2">100%</h4>
                <p className="text-slate-500 font-medium">Client Satisfaction Rate</p>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">Discover Our Legacy</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
