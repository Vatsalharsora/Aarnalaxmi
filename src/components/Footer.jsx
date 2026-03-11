import React from 'react';
import logo from '../assets/logo_aarnalaxmi.svg';
import logoWhite from '../assets/logo_white_aarnalaxmi.svg';

const Footer = ({ themeType = 1, transparent = false, customClass = '' }) => {

  // --------------- THEME 1: Transparent Floating Glass Footer ---------------
  if (themeType === 1) {
    return (
      <footer id="contact" className={`w-full py-12 relative overflow-hidden ${customClass}`}>
        <div className="w-[95%] max-w-7xl mx-auto rounded-3xl p-12 relative z-10" 
             style={{ background: 'transparent', borderTop: '1px solid rgba(255, 255, 255, 0.4)' }}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-left">
            <div className="flex-1 space-y-6">
              <img src={logoWhite} alt="Aarnalaxmi Enterprises" className="h-[60px] w-auto opacity-100" />
              <p className="text-gray-300 max-w-[400px] text-lg font-light leading-relaxed">
                Pioneering sustainable cotton merchandising. We weave raw quality into a cleaner future.
              </p>
              <div className="flex gap-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-8 md:mt-0 mt-8 w-full md:w-auto">
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-white/10 inline-block min-w-full md:min-w-0">Explore</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors block">Our Story</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors block">Cotton Varieties</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors block">Fabric Roles</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors block">Partner with Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 pb-2 border-b border-white/10 inline-block min-w-full md:min-w-0">Information</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-white mt-1">📍</span>
                    <span className="text-gray-400">Cotton Avenue,<br/>Ahmedabad, India</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">✉️</span>
                    <a href="mailto:info@aarnalaxmi.com" className="text-gray-400 hover:text-white">info@aarnalaxmi.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-white">📞</span>
                    <span className="text-gray-400">+91 98765 43210</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex justify-between text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Aarnalaxmi.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // --------------- THEME 2: Classic 4-Column Light Footer ---------------
  if (themeType === 2) {
    return (
      <footer id="contact" className={`w-full pt-20 pb-10 bg-[#f8fafc] border-t border-slate-200 ${customClass}`}>
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-4 lg:col-span-5 space-y-6">
              <img src={logo} alt="Aarnalaxmi" className="h-[70px] w-auto" />
              <p className="text-slate-600 leading-relaxed max-w-[350px]">
                A trusted name in the global cotton market, ensuring premium quality through sustainable practices.
              </p>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded bg-slate-200"></div>
                <div className="w-8 h-8 rounded bg-slate-200"></div>
                <div className="w-8 h-8 rounded bg-slate-200"></div>
              </div>
            </div>
            
            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="text-lg font-bold text-slate-800 mb-6 font-heading">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-600 hover:text-brand-teal transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-teal"></span> About Us</a></li>
                <li><a href="#" className="text-slate-600 hover:text-brand-teal transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-teal"></span> Sustainability</a></li>
                <li><a href="#" className="text-slate-600 hover:text-brand-teal transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-teal"></span> Our Process</a></li>
                <li><a href="#" className="text-slate-600 hover:text-brand-teal transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-teal"></span> Careers</a></li>
              </ul>
            </div>
            
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="text-lg font-bold text-slate-800 mb-6 font-heading">Get in Touch</h4>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="text-brand-teal mt-1">📍</div>
                    <div className="text-slate-600">Global Trade Centre, Cotton Ave, India</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-brand-teal mt-1">✉️</div>
                    <div className="text-slate-600 font-medium text-brand-teal">contact@aarnalaxmi.com</div>
                  </li>
                  <li className="flex gap-4">
                    <div className="text-brand-teal mt-1">📞</div>
                    <div className="text-slate-600 font-bold">+91 98765 43210</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-slate-200 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Aarnalaxmi Enterprises. Built with quality.</p>
          </div>
        </div>
      </footer>
    );
  }

  // --------------- THEME 3: Bold Corporate Dark Footer ---------------
  return (
    <footer id="contact" className={`w-full bg-[#0a0f1c] text-slate-300 relative overflow-hidden ${customClass}`}>
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-teal via-brand-gold to-brand-coral"></div>
      
      <div className="w-full max-w-7xl mx-auto px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <img src={logoWhite} alt="Aarnalaxmi" className="h-[60px] w-auto mb-8" />
            <h3 className="text-xl font-bold text-white mb-4 font-heading tracking-wide">SHAPING THE GLOBAL COTTON INDUSTRY.</h3>
            <p className="text-slate-400 mb-8 max-w-[300px]">We deliver uncompromised quality from farm to factory, globally.</p>
            <a href="#" className="inline-block border-b-2 border-brand-gold text-brand-gold pb-1 font-bold uppercase tracking-wide hover:text-white hover:border-white transition-colors">Download Brochure</a>
          </div>
          
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 opacity-50">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Yarn Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fabric Rolls</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 opacity-50">Impact</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Eco-Farming</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Annual Report</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 border-t border-white/10 md:border-none pt-8 md:pt-0">
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 opacity-50">Newsletter</h4>
              <p className="text-xs text-slate-400 mb-4">Stay updated on cotton market trends.</p>
              <div className="flex bg-white/5 rounded p-1">
                <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none px-3 text-sm w-full text-white" />
                <button className="bg-brand-gold text-brand-dark px-3 py-2 rounded text-xs font-bold">→</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-slate-500 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} AARNALAXMI ENTERPRISES.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-gold transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-brand-gold transition-colors">FACEBOOK</a>
            <a href="#" className="hover:text-brand-gold transition-colors">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
