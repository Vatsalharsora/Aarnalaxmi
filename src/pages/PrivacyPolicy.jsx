import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Privacy Policy | Aarnalaxmi Cotton"
        description="Learn about how Aarnalaxmi Cotton collects, uses, and protects your personal data. Our commitment to your privacy and data security."
        url="/privacy-policy"
      />
      
      <div className="bg-[#f8fafc] min-h-screen pt-[120px] pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-sm border border-slate-100 mb-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-slate-100 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="text-slate-500 font-bold text-[9px] uppercase tracking-[0.2em]">Compliance & Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">Privacy <span className="text-green-600">Policy</span></h1>
              <p className="text-slate-500 font-medium leading-relaxed">Last Updated: March 17, 2026</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-sm border border-slate-100 space-y-12">
            
            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">01</span>
                Introduction
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                <p>
                  At Aarnalaxmi Cotton, we value the trust you place in us when sharing your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data. This policy applies to our website (aarnalaxmi.com) and all services offered by Aarnalaxmi Enterprises.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">02</span>
                Information We Collect
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium space-y-4">
                <p>We collect information to provide better services to our global clients and partners. This includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and company details provided when you request a quote or contact us.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, and pages visited.</li>
                  <li><strong>Business Data:</strong> Details related to your cotton sourcing requirements and trade preferences.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">03</span>
                How We Use Your Information
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium space-y-4">
                <p>Aarnalaxmi uses the collected data for various purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our services to our textile partners.</li>
                  <li>To process trade inquiries and provide accurate bulk quotes.</li>
                  <li>To communicate with you regarding industry updates, sustainable farming news, and market trends.</li>
                  <li>To improve our website functionality and user experience.</li>
                  <li>To comply with international trade regulations and legal obligations.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">04</span>
                Data Security
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                <p>
                  We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">05</span>
                Your Data Rights
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                <p>
                  You have the right to access, update, or delete the personal information we hold about you. If you wish to exercise these rights or have any questions about our privacy practices, please contact us at <a href="mailto:privacy@aarnalaxmi.com" className="text-green-600 font-bold hover:underline">privacy@aarnalaxmi.com</a>.
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Have questions about our policy?</h3>
                  <p className="text-sm text-slate-500 font-medium">Our legal team is here to help you understand your rights.</p>
                </div>
                <a href="mailto:contact@aarnalaxmi.com" className="px-8 py-3 bg-slate-800 text-white rounded-xl font-bold text-sm tracking-wider hover:bg-slate-700 transition-all shadow-sm shrink-0">
                  Contact Support
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
