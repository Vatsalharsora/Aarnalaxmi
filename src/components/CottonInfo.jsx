import React from 'react';

const CottonInfo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
            PREMIUM QUALITY
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Sustainable <span className="text-green-600">Organic Cotton</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From farm to fabric, we deliver premium organic cotton that meets international standards while preserving our environment for future generations.
          </p>
        </div>

        {/* Main Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-cover bg-center" style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0f9ff"/><circle cx="200" cy="150" r="80" fill="%23059669" opacity="0.1"/><rect x="150" y="100" width="100" height="100" rx="10" fill="%23ffffff" stroke="%23059669" stroke-width="2"/><text x="200" y="140" text-anchor="middle" fill="%23059669" font-size="14" font-weight="bold">ORGANIC</text><text x="200" y="160" text-anchor="middle" fill="%23059669" font-size="14" font-weight="bold">COTTON</text><text x="200" y="180" text-anchor="middle" fill="%23059669" font-size="12">🌱 Premium Quality</text></svg>')`
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-700">Organic Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Cotton?</h3>
              <p className="text-gray-600 leading-relaxed">
                Our premium organic cotton is cultivated using sustainable farming practices, ensuring superior quality while protecting the environment. Each fiber is carefully selected to meet the highest international standards.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Certified Organic</h4>
                <p className="text-gray-600 text-sm">GOTS certified organic cotton grown without harmful chemicals</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Superior Strength</h4>
                <p className="text-gray-600 text-sm">Long staple fibers with exceptional tensile strength</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural Softness</h4>
                <p className="text-gray-600 text-sm">Naturally soft fibers perfect for premium textiles</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Supply</h4>
                <p className="text-gray-600 text-sm">Reliable worldwide distribution network</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">From seed to shipment, every step is carefully monitored to ensure premium quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-16 h-16 bg-cover bg-center rounded-full" style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="%23ffffff"/><text x="32" y="40" text-anchor="middle" fill="%23059669" font-size="24">🌱</text></svg>')`
                }}></div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Organic Farming</h4>
              <p className="text-gray-600 text-sm">Sustainable cultivation without harmful chemicals</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-16 h-16 bg-cover bg-center rounded-full" style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="%23ffffff"/><text x="32" y="40" text-anchor="middle" fill="%233b82f6" font-size="24">🔬</text></svg>')`
                }}></div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Testing</h4>
              <p className="text-gray-600 text-sm">Rigorous lab testing for purity and strength</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-16 h-16 bg-cover bg-center rounded-full" style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="%23ffffff"/><text x="32" y="40" text-anchor="middle" fill="%23eab308" font-size="24">📦</text></svg>')`
                }}></div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Processing</h4>
              <p className="text-gray-600 text-sm">Advanced processing maintaining fiber integrity</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="w-16 h-16 bg-cover bg-center rounded-full" style={{
                  backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="%23ffffff"/><text x="32" y="40" text-anchor="middle" fill="%238b5cf6" font-size="24">🚚</text></svg>')`
                }}></div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Delivery</h4>
              <p className="text-gray-600 text-sm">Secure packaging and worldwide shipping</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Trusted Worldwide</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">Our commitment to quality and sustainability has earned the trust of clients across the globe</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">1,500+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Tons Produced Annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">65+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CottonInfo;