import React from 'react';

const CompanyInfo = () => {
  const features = [
    {
      number: "25+",
      label: "Years Experience",
      description: "Serving the cotton industry since 1998",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "1,500+",
      label: "Acres Farmland",
      description: "Sustainable cotton cultivation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      number: "65+",
      label: "Countries",
      description: "Global cotton supply network",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "100%",
      label: "Quality Focus",
      description: "Premium cotton products",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const certifications = [
    {
      name: "GOTS Certified",
      description: "Global Organic Textile Standard",
      logo: "🌱"
    },
    {
      name: "Quality Assured",
      description: "Premium Grade Cotton",
      logo: "✅"
    },
    {
      name: "Sustainable",
      description: "Eco-friendly Practices",
      logo: "🌿"
    },
    {
      name: "Reliable",
      description: "Trusted Supply Partner",
      logo: "🤝"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Company Info */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            ABOUT AARNALAXMI COTTON
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Quality Cotton from Gujarat
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Established in 1998, we are dedicated to providing premium quality cotton through sustainable farming practices and reliable supply chain management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                {feature.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{feature.number}</div>
              <div className="text-sm font-semibold text-gray-800 mb-1">{feature.label}</div>
              <div className="text-gray-600 text-xs">{feature.description}</div>
            </div>
          ))}
        </div>

        {/* Quality Standards */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Quality Standards
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards in cotton production and supply, ensuring quality and sustainability at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors duration-300">
                <div className="text-3xl mb-3">{cert.logo}</div>
                <div className="font-semibold text-gray-900 mb-1">{cert.name}</div>
                <div className="text-gray-600 text-sm">{cert.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;