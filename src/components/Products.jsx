import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState(0);

  const productCategories = [
    {
      name: "Organic Cotton",
      description: "GOTS certified organic cotton with full traceability",
      products: [
        {
          name: "Premium Organic Cotton Bales",
          specs: "Staple Length: 28-32mm | Micronaire: 3.5-4.9 | Strength: 28-32 g/tex",
          certifications: ["GOTS", "OCS", "Fair Trade"],
          applications: "Premium textiles, organic clothing, sustainable fashion",
          minOrder: "1 Container (18-20 MT)",
          image: "https://images.unsplash.com/photo-1590748523363-23910ee24fa3?q=80&w=500&auto=format&fit=crop"
        },
        {
          name: "Organic Cotton Lint",
          specs: "Grade: Middling | Length: 1-1/8 inch | Strength: High",
          certifications: ["GOTS", "OCS"],
          applications: "High-end spinning, premium yarn production",
          minOrder: "500 MT",
          image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=500&auto=format&fit=crop"
        }
      ]
    },
    {
      name: "Conventional Cotton",
      description: "High-quality conventional cotton for various textile applications",
      products: [
        {
          name: "Premium Cotton Bales",
          specs: "Staple Length: 27-31mm | Micronaire: 3.7-4.2 | Grade: Strict Middling",
          certifications: ["BCI", "ISO 9001"],
          applications: "General textiles, apparel manufacturing, home textiles",
          minOrder: "1 Container (18-20 MT)",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=500&auto=format&fit=crop"
        },
        {
          name: "Cotton Comber Noil",
          specs: "Length: 8-12mm | Moisture: <8% | Trash: <2%",
          certifications: ["ISO 9001"],
          applications: "Non-woven fabrics, padding, industrial applications",
          minOrder: "100 MT",
          image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=500&auto=format&fit=crop"
        }
      ]
    },
    {
      name: "Specialty Cotton",
      description: "Specialized cotton varieties for specific industrial applications",
      products: [
        {
          name: "Extra Long Staple Cotton",
          specs: "Staple Length: 35-38mm | Micronaire: 3.0-3.5 | Premium Grade",
          certifications: ["Premium Quality", "Export Grade"],
          applications: "Luxury textiles, high-end fashion, premium bedding",
          minOrder: "500 MT",
          image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=500&auto=format&fit=crop"
        },
        {
          name: "Colored Cotton",
          specs: "Natural colors: Brown, Green | Organic certified",
          certifications: ["GOTS", "Organic"],
          applications: "Eco-friendly textiles, natural dye-free products",
          minOrder: "50 MT",
          image: "https://images.unsplash.com/photo-1590748523363-23910ee24fa3?q=80&w=500&auto=format&fit=crop"
        }
      ]
    }
  ];

  const qualityFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Assured",
      description: "Every batch tested for fiber quality, strength, and purity"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Timely Delivery",
      description: "Reliable supply chain with 15-30 days delivery worldwide"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Full Traceability",
      description: "Complete documentation from farm to final delivery"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Sustainable Sourcing",
      description: "Environmentally responsible farming and processing methods"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Premium Cotton Products for Global Markets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From certified organic cotton to specialty varieties, we offer a comprehensive range of 
            high-quality cotton products to meet diverse textile manufacturing needs.
          </p>
        </div>

        {/* Product Categories Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {productCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">{productCategories[activeTab].description}</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {productCategories[activeTab].products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Specifications:</h4>
                  <p className="text-gray-600 text-sm">{product.specs}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Certifications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, certIndex) => (
                      <span key={certIndex} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                  <p className="text-gray-600 text-sm">{product.applications}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Minimum Order:</h4>
                  <p className="text-gray-600 text-sm font-medium">{product.minOrder}</p>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href="#contact" 
                    className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
                  >
                    Request Quote
                  </a>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Specifications
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Features */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Cotton Products?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality, sustainability, and customer satisfaction sets us apart in the global cotton market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Source Premium Cotton?
            </h3>
            <p className="text-xl mb-8 text-green-100">
              Get competitive quotes for bulk cotton orders with guaranteed quality and timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Bulk Quote
              </a>
              <a 
                href="tel:+919876543210" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
