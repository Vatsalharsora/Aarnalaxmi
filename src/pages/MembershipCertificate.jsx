import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const certificationsList = [
  { id: 'iso9001', cert: 'ISO 9001', title: 'Quality Management', desc: 'Certified quality management system for consistent excellence', icon: '⭐', features: ['Process Control', 'Risk Assessment', 'Continual Improvement'], issueDate: 'Jan 2024', validUntil: 'Jan 2027', body: 'Global Standards LLC' },
  { id: 'iso14001', cert: 'ISO 14001', title: 'Environmental Management', desc: 'Environmental management certification ensuring sustainability', icon: '🌍', features: ['Emissions Reduction', 'Waste Management', 'Resource Efficiency'], issueDate: 'Feb 2023', validUntil: 'Feb 2026', body: 'EcoCert International' },
  { id: 'gots', cert: 'GOTS', title: 'Organic Textile Standard', desc: 'Global Organic Textile Standard for premium organic cotton', icon: '🌱', features: ['100% Organic', 'No Chemicals', 'Fair Wages'], issueDate: 'Mar 2024', validUntil: 'Mar 2025', body: 'GOTS Global' },
  { id: 'bci', cert: 'BCI', title: 'Better Cotton Initiative', desc: 'Sustainable farming practices and farmer welfare commitment', icon: '👨‍🌾', features: ['Farmer Training', 'Water Conservation', 'Soil Health'], issueDate: 'Dec 2023', validUntil: 'Dec 2026', body: 'Better Cotton' },
  { id: 'fairtrade', cert: 'Fair Trade', title: 'Fair Trade Certified', desc: 'Ethical sourcing and fair compensation guarantee', icon: '🤝', features: ['Fair Wages', 'Worker Rights', 'Community Dev'], issueDate: 'Nov 2023', validUntil: 'Nov 2025', body: 'Fairtrade Foundation' },
  { id: 'coo', cert: 'CoO', title: 'Certificate of Origin', desc: 'Complete traceability and product authentication', icon: '📋', features: ['Full Traceability', 'Farm to Factory', 'Quality Verified'], issueDate: 'On Demand', validUntil: 'Per Shipment', body: 'Chamber of Commerce' }
];

const MembershipCertificate = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [verifyId, setVerifyId] = useState('');
  const [verifyStatus, setVerifyStatus] = useState(null); // null, 'loading', 'success', 'error'
  const [selectedCert, setSelectedCert] = useState(null); // Modal state
  
  // Scroll to top on initial page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Manage intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, { threshold: 0.1 });

    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.will-reveal');
      elements.forEach(el => observer.observe(el));
    }, 50);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [activeTab]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!verifyId.trim()) return;
    
    setVerifyStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (verifyId.length > 5) {
        setVerifyStatus('success');
      } else {
        setVerifyStatus('error');
      }
    }, 1500);
  };

  return (
    <>
      <SEO
        title="Memberships & Certifications - Aarnalaxmi Cotton"
        description="Aarnalaxmi is certified with ISO 9001, ISO 14001, GOTS, BCI, and Fair Trade. View our interactive certification verification and global standards."
        keywords="cotton memberships, certifications, ISO 9001, ISO 14001, GOTS certified, BCI cotton, Fair Trade cotton, global verified cotton"
        url="/membership-certificate"
      />

      <div className="bg-slate-50 min-h-screen relative pb-20 mt-[76px]">
        
        {/* Modal for Certificate Preview */}
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedCert(null)}>
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl transform transition-all" onClick={e => e.stopPropagation()}>
              <div className="bg-slate-900 text-white p-6 sm:p-8 flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div>
                  <div className="text-blue-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">Verified Certificate</div>
                  <h2 className="text-2xl sm:text-4xl font-black">{selectedCert.cert}</h2>
                </div>
                <button onClick={() => setSelectedCert(null)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex items-start gap-6 border-b border-slate-100 pb-8 mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-blue-50 flex items-center justify-center text-5xl sm:text-6xl flex-shrink-0">
                    {selectedCert.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{selectedCert.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{selectedCert.desc}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Issue Date</p>
                    <p className="font-semibold text-slate-800">{selectedCert.issueDate}</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Valid Until</p>
                    <p className="font-semibold text-slate-800">{selectedCert.validUntil}</p>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 col-span-2 sm:col-span-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Certifying Body</p>
                    <p className="font-semibold text-slate-800">{selectedCert.body}</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-4 sm:p-5 col-span-2 sm:col-span-1 border border-green-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">✓</div>
                    <div>
                      <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-0.5">Status</p>
                      <p className="font-bold text-green-800">Active & Verified</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-colors flex justify-center items-center gap-2" onClick={() => setSelectedCert(null)}>
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Premium Corporate Hero Section */}
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596726591060-1e594d210515?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/30"></div>
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[70%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 will-reveal opacity-0 translate-y-10 transition-all duration-1000">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Global Standards & Excellence
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Memberships &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Certifications</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-medium max-w-xl leading-relaxed mb-8">
                Driving change through innovation, responsibility, and total transparency. Our recognized global standards ensure unmatched quality and ethical practices.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['ISO 9001', 'ISO 14001', 'GOTS', 'BCI', 'Fair Trade'].map((badge, i) => (
                  <div key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-semibold text-sm backdrop-blur-md will-reveal opacity-0 translate-y-5 duration-700" style={{ transitionDelay: (i * 100) + 'ms' }}>
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certificate Verification Tool */}
            <div className="w-full md:w-[450px] flex-shrink-0 will-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Verify Authenticity</h3>
                  <p className="text-slate-400 text-sm mb-6">Enter a Certificate ID or Batch Number to verify its real-time global status.</p>
                  
                  <form onSubmit={handleVerify} className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="e.g. GOTS-2024-XXXX" 
                        value={verifyId}
                        onChange={(e) => setVerifyId(e.target.value)}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                      />
                    </div>
                    <button 
                      type="submit" 
                      disabled={verifyStatus === 'loading' || !verifyId.trim()}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {verifyStatus === 'loading' ? (
                        <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Verifying...</>
                      ) : 'Verify Now'}
                    </button>
                    
                    {verifyStatus === 'success' && (
                      <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>Verified! Certificate <strong>{verifyId}</strong> is active and authentic.</span>
                      </div>
                    )}
                    {verifyStatus === 'error' && (
                      <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-start gap-3">
                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        <span>Invalid ID. Please check the Certificate ID and try again.</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Tab Navigation System */}
        <section className="sticky top-[76px] z-40 py-4 px-4 sm:px-6 bg-slate-50/90 backdrop-blur-xl border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex overflow-x-auto hide-scrollbar snap-x gap-2 pb-2 sm:pb-0 justify-start md:justify-center">
            {[
              { id: 'certifications', label: 'Global Certifications', icon: '🏅' },
              { id: 'membership', label: 'Membership Tiers', icon: '💼' },
              { id: 'benefits', label: 'Member Benefits', icon: '🎁' },
              { id: 'process', label: 'How to Join', icon: '📋' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 whitespace-nowrap snap-start flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Active Tab Content Area */}
        <div className="pt-12 min-h-[500px]">
          
          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <section className="px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 will-reveal opacity-0 translate-y-10 transition-all duration-700">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    Global Recognized Standards
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Click on any certification to view detailed credibility and authentication. We implement the highest grade of international standards assuring buyers worldwide.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {certificationsList.map((item, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedCert(item)}
                      className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 overflow-hidden will-reveal opacity-0 translate-y-10 transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-blue-200 hover:-translate-y-2 flex flex-col h-full cursor-pointer" 
                      style={{ transitionDelay: (i * 100) + 'ms' }}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] group-hover:bg-blue-50 transition-colors duration-500"></div>
                      <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                      
                      <div className="relative z-10 flex-grow">
                        <div className="flex items-start justify-between mb-8">
                          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-4xl group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-500">
                            {item.icon}
                          </div>
                          <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors duration-500">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <div className="text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">{item.cert}</div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-8">{item.desc}</p>
                      </div>

                      <div className="relative z-10 space-y-3 pt-6 border-t border-slate-100 mt-auto">
                        {item.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-3 text-slate-700 font-medium">
                            <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Membership Tiers Tab */}
          {activeTab === 'membership' && (
            <section className="px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 will-reveal opacity-0 translate-y-10 transition-all duration-700">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    Aarnalaxmi Membership Tiers
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">Gain priority sourcing, exclusive pricing, and global market insights by joining our tiered network.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[
                    { tier: 'Associate', price: 'Standard Access', perks: ['Farm Verification Reports', 'Quality Testing Results', 'Certificate Database Access', 'Basic Email Support'], icon: '🥉', highlight: false },
                    { tier: 'Partner', price: 'Priority Trading', perks: ['Everything in Associate', 'Priority Order Fulfillment', 'Advanced Market Analytics', 'Dedicated Representative', 'Custom Bulk Pricing'], icon: '🏆', highlight: true, badge: 'Recommended' },
                    { tier: 'Global Strategic', price: 'Enterprise Export', perks: ['Everything in Partner', 'Executive Account Management', 'Co-branding Benefits', 'Global Transport Logistics', 'Direct Farm Allocation'], icon: '💎', highlight: false }
                  ].map((item, i) => (
                    <div key={i} className={`relative will-reveal opacity-0 translate-y-10 transition-all duration-700 flex flex-col`} style={{ transitionDelay: (i * 100) + 'ms' }}>
                      <div className={`rounded-[2rem] p-8 sm:p-10 h-full border-2 flex flex-col ${item.highlight ? 'border-slate-900 bg-slate-900 text-white shadow-2xl lg:-translate-y-4' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                        {item.badge && <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm tracking-wider uppercase shadow-lg">{item.badge}</div>}
                        
                        <div className="text-5xl mb-6">{item.icon}</div>
                        <h3 className={`text-3xl font-black mb-2 ${item.highlight ? 'text-white' : 'text-slate-900'}`}>{item.tier}</h3>
                        <p className={`text-xl font-bold mb-8 ${item.highlight ? 'text-blue-400' : 'text-slate-500'}`}>{item.price}</p>
                        
                        <div className={`border-t pt-8 mb-8 flex-grow ${item.highlight ? 'border-slate-800' : 'border-slate-100'}`}>
                          <ul className="space-y-4">
                            {item.perks.map((perk, j) => (
                              <li key={j} className="flex items-start gap-4">
                                <span className={`text-xl font-bold mt-0.5 ${item.highlight ? 'text-blue-400' : 'text-slate-900'}`}>✓</span>
                                <span className={`font-medium leading-relaxed ${item.highlight ? 'text-slate-300' : 'text-slate-700'}`}>{perk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all mt-auto ${item.highlight ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                          Inquire Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <section className="px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 will-reveal opacity-0 translate-y-10 transition-all duration-700">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    Why the World Trusts Us
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">Operating across 65+ countries, our membership network unlocking exclusive advantages for B2B buyers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Global Network Access', desc: 'Seamlessly export to or source from 65+ nations with zero bureaucratic friction.', benefits: ['Direct buyer/seller pairing', '20% cost efficiency', 'Export compliance help'], icon: '🌐' },
                    { title: 'Rigorous Quality Labs', desc: 'Every bale is tracked, inspected, and documented by independent laboratories.', benefits: ['HVI Testing Data', 'Micronaire grading', 'Moisture tracking'], icon: '🔬' },
                    { title: 'Sustainable Transparency', desc: 'Trace the cotton back to the exact farm region and verify environmental metrics.', benefits: ['Carbon reporting', 'Farm GPS tracking', 'Water usage data'], icon: '🌍' },
                    { title: 'Strategic Marketing', desc: 'Use our global reputation to boost the perceived value of your end-textile products.', benefits: ['Co-branding kits', 'Trust badges', 'Press release sharing'], icon: '📈' }
                  ].map((benefit, i) => (
                      <div key={i} className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200 will-reveal opacity-0 translate-y-10 transition-all duration-700 hover:shadow-xl hover:border-blue-300 group" style={{ transitionDelay: (i * 100) + 'ms' }}>
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl mb-8 group-hover:bg-slate-900 group-hover:block transition-all flex text-center leading-[64px] group-hover:text-white group-hover:scale-110 duration-300">
                          {benefit.icon}
                        </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-4">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-8">{benefit.desc}</p>
                      <div className="space-y-4">
                        {benefit.benefits.map((b, j) => (
                          <div key={j} className="text-slate-700 font-medium flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center text-sm font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">✓</span>{b}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* How to Join Tab */}
          {activeTab === 'process' && (
            <section className="px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 will-reveal opacity-0 translate-y-10 transition-all duration-700">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    Onboarding & Review Process
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">A streamlined secure 4-step framework to initiate robust international trade relations.</p>
                </div>

                <div className="relative">
                  {/* Timeline Background Line */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200"></div>

                  <div className="space-y-12">
                    {[
                      { step: '01', title: 'Submit Enterprise Profiling', desc: 'Securely submit your business entity details, historical trade volume, and certification requests via our portal.', icon: '📝' },
                      { step: '02', title: 'Compliance Due Diligence', desc: 'Our regional compliance managers review all documentation against international trade protocols (3 to 5 business days).', icon: '🔍' },
                      { step: '03', title: 'Account Configuration', desc: 'We configure your logistics preferences, quality benchmarks, and assign your dedicated account lead.', icon: '⚙️' },
                      { step: '04', title: 'Trade Activation', desc: 'Full access is granted to our real-time inventory systems, certification databases, and global shipping nodes.', icon: '🚀' }
                    ].map((item, i) => (
                      <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center will-reveal opacity-0 translate-y-10 transition-all duration-700`} style={{ transitionDelay: (i * 100) + 'ms' }}>
                        <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-400 transition-all relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-0 group-hover:bg-slate-100 transition-colors"></div>
                            <div className="relative z-10">
                              <div className={`text-4xl mb-6 ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>{item.icon}</div>
                              <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                              <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 text-white font-black text-xl shadow-xl z-10 flex-shrink-0 rotate-45 group hover:bg-blue-600 transition-colors">
                          <span className="-rotate-45 block">{item.step}</span>
                        </div>
                        
                        <div className="flex-1 w-full hidden md:block"></div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-20 text-center will-reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
                  <Link to="/#contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white font-black rounded-full hover:scale-105 hover:bg-blue-600 hover:shadow-2xl transition-all uppercase tracking-wider text-lg">
                    Begin Application
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Global Footer Banner */}
        <section className="mt-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto rounded-[3rem] bg-blue-600 text-white p-10 sm:p-20 relative overflow-hidden will-reveal opacity-0 translate-y-10 transition-all duration-1000">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">Elevate Your Cotton Supply Chain</h2>
              <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-10 max-w-2xl leading-relaxed">
                Join thousands of global leaders who prioritize quality, ethics, and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/#contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 shadow-xl transition-all text-center">
                  Partner With Us Today
                </Link>
                <a href="mailto:trade@aarnalaxmi.com" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center">
                  Email Compliance Team
                </a>
              </div>
            </div>
          </div>
        </section>

        <style dangerouslySetInnerHTML={{__html: `
          .animate-reveal {
            opacity: 1 !important;
            transform: translate(0,0) !important;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}} />
      </div>
    </>
  );
};

export default MembershipCertificate;
