import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_aarnalaxmi.svg';

const Footer = () => {
  return (
    <footer id="contact" className={`w-full pt-20 pb-10 bg-[#f8fafc] border-t border-slate-200`}>
      <div className="w-full max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4 lg:col-span-4 space-y-6">
            <img src={logo} alt="Aarnalaxmi" className="h-[60px] w-auto" />
            <p className="text-slate-600 leading-relaxed max-w-[350px]">
              A trusted name in the global cotton market, ensuring premium quality through sustainable practices and commitment to excellence.
            </p>
            <div className="flex gap-4">
              {/* Twitter */}
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 text-slate-500 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 text-slate-500 hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200 text-slate-500 hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-3 lg:ml-auto">
            <h4 className="text-lg font-bold text-slate-800 mb-6 font-heading relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-brand-teal">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-600 hover:text-brand-teal transition-colors flex items-center gap-3 font-medium"><svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> About Us</Link></li>
              <li><a href="#" className="text-slate-600 hover:text-brand-teal transition-colors flex items-center gap-3 font-medium"><svg className="w-4 h-4 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg> Our Process</a></li>
            </ul>
          </div>

          <div className="md:col-span-5 lg:col-span-5">
            <h4 className="text-lg font-bold text-slate-800 mb-6 font-heading relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-brand-teal">Get in Touch</h4>
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-green-600 shrink-0 group-hover:bg-green-100 group-hover:text-green-700 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Our Location</span>
                    <span className="text-slate-700 font-medium">Global Trade Centre, Cotton Avenue<br/>Ahmedabad, Gujarat 380015, India</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-green-600 shrink-0 group-hover:bg-green-100 group-hover:text-green-700 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</span>
                    <a href="mailto:contact@aarnalaxmi.com" className="text-green-600 font-semibold hover:text-green-700 transition-colors">contact@aarnalaxmi.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 text-green-600 shrink-0 group-hover:bg-green-100 group-hover:text-green-700 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</span>
                    <span className="text-slate-700 font-bold">+91 98765 43210</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm font-medium mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Aarnalaxmi Enterprises. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <Link to="/privacy-policy" className="hover:text-green-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-green-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
