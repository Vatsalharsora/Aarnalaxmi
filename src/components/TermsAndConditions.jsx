import React, { useEffect } from 'react';
import SEO from './SEO';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Terms & Conditions | Aarnalaxmi Cotton"
        description="Read the terms and conditions for using Aarnalaxmi Cotton services, trade agreements, and website usage policies."
        url="/terms-conditions"
      />
      
      <div className="bg-[#f8fafc] min-h-screen pt-[120px] pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-sm border border-slate-100 mb-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-slate-100 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span className="text-slate-500 font-bold text-[9px] uppercase tracking-[0.2em]">Legal Framework</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 tracking-tight">Terms & <span className="text-green-600">Conditions</span></h1>
              <p className="text-slate-500 font-medium leading-relaxed">Last Updated: March 17, 2026</p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-sm border border-slate-100 space-y-12">
            
            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">01</span>
                Agreement to Terms
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                <p>
                  By accessing the website at aarnalaxmi.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">02</span>
                Trade & Quotations
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium space-y-4">
                <p>As a global cotton supplier, all trade inquiries and quotes are subject to the following:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Validity:</strong> Quotations provided through the website are indicative and subject to final confirmation based on market price volatility.</li>
                  <li><strong>Certification:</strong> All GOTS, BCI, and organic claims are verified at the time of trade. Documentation is provided upon request during official negotiations.</li>
                  <li><strong>Quantity:</strong> Minimum Order Quantity (MOQ) applies to all export shipments as discussed during the inquiry process.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">03</span>
                Use License
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Aarnalaxmi Cotton's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Modify or copy the materials.</li>
                  <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Aarnalaxmi Cotton's website.</li>
                  <li>Remove any copyright or other proprietary notations from the materials.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">04</span>
                Disclaimer
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                <p>
                  The materials on Aarnalaxmi Cotton's website are provided on an 'as is' basis. Aarnalaxmi Cotton makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">05</span>
                Limitations
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                <p>
                  In no event shall Aarnalaxmi Cotton or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aarnalaxmi Cotton's website, even if Aarnalaxmi Cotton or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-sm italic">06</span>
                Governing Law
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Gujarat, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </div>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                <p className="text-sm text-slate-500 font-medium mb-0">For any further clarification regarding our trading terms, please contact our administrative head office.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
