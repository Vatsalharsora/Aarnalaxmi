import React, { useEffect, useRef, useState } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'High Quality Cotton',
      description: 'Every bale tested for micronaire, staple length, strength and uniformity. We never compromise on quality standards.',
      stat: '98%',
      statLabel: 'Quality Pass Rate',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      statColor: 'text-emerald-600',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Trusted Farmers Network',
      description: 'Our strong network of verified and experienced farmers ensures a consistent and reliable cotton supply year-round.',
      stat: '500+',
      statLabel: 'Farmer Partners',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      statColor: 'text-blue-600',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Modern Processing Standards',
      description: 'State-of-the-art ginning and processing facilities equipped with modern technology to maintain superior fiber quality.',
      stat: '100%',
      statLabel: 'Modern Facilities',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      statColor: 'text-purple-600',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: 'Reliable Supply Chain',
      description: 'From farm collection to global delivery, our end-to-end supply chain management guarantees timely and accurate fulfillment.',
      stat: '30 Days',
      statLabel: 'Avg. Delivery Time',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      statColor: 'text-amber-600',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Global Export Support',
      description: 'Complete export documentation, customs support, and international logistics coordination for hassle-free global trade.',
      stat: '65+',
      statLabel: 'Countries Served',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
      border: 'border-teal-200',
      statColor: 'text-teal-600',
    },
  ];

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-widest">
            ✅ Why Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
              Us?
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We combine quality, reliability, and sustainability to be your most trusted cotton supply partner in the global market.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group p-7 bg-white rounded-2xl border ${reason.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color.replace('text-', 'from-').replace('-600', '-400')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 ${reason.bg} ${reason.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {reason.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>

              {/* Stat */}
              <div className={`mt-5 pt-4 border-t border-gray-100 flex items-center justify-between`}>
                <div>
                  <span className={`text-2xl font-black ${reason.statColor}`}>{reason.stat}</span>
                  <span className="text-xs text-gray-400 block uppercase tracking-widest mt-0.5">{reason.statLabel}</span>
                </div>
                <div className={`w-8 h-8 ${reason.bg} ${reason.color} rounded-lg flex items-center justify-center opacity-60`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
