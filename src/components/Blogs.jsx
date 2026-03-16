import React, { useEffect } from 'react';
import SEO from './SEO';

// Import images (assuming paths based on recent generations)
import blog1 from '../assets/blog_organic_cotton.png';
import blog2 from '../assets/blog_market_trends.png';
import blog3 from '../assets/blog_processing_tech.png';
import blogFiber from '../assets/blog_fiber_science.png';
import blogBaling from '../assets/blog_baling_storage.png';

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Cotton Farming in India",
      excerpt: "How modern technology and organic practices are revolutionizing the way we grow cotton while protecting our soil.",
      category: "Sustainability",
      date: "March 15, 2024",
      image: blog1,
      author: "Dr. Rajesh Mehta"
    },
    {
      id: 2,
      title: "Understanding Global Cotton Market Trends for 2024",
      excerpt: "An in-depth analysis of supply chain shifts and growing demand for premium certified cotton in European markets.",
      category: "Market Analysis",
      date: "March 10, 2024",
      image: blog2,
      author: "Sanjay Patel"
    },
    {
      id: 3,
      title: "The Science of Staple Length: Why Fiber Quality Matters",
      excerpt: "Exploring the technical aspects of cotton fiber strength and length, and how it impacts high-end textile manufacturing.",
      category: "Quality Control",
      date: "March 08, 2024",
      image: blogFiber,
      author: "Dr. Kavita Rao"
    },
    {
      id: 4,
      title: "Innovation in Cotton Processing: Beyond the Ginning",
      excerpt: "Exploring our new high-tech processing facility that ensures zero contamination and 100% fiber integrity.",
      category: "Technology",
      date: "March 05, 2024",
      image: blog3,
      author: "Vikram Shah"
    },
    {
      id: 5,
      title: "Bailing and Storage: Preserving Fiber Quality During Transport",
      excerpt: "Standardized bailing techniques and humidity-controlled storage that prevent fiber degradation during export.",
      category: "Logistics",
      date: "March 01, 2024",
      image: blogBaling,
      author: "Arjun Khanna"
    },
    {
      id: 6,
      title: "GOTS vs. BCI: Decoding Cotton Certifications for Buyers",
      excerpt: "A comprehensive guide to understanding different global sustainability certificates and their impact on branding.",
      category: "Industry Standards",
      date: "February 25, 2024",
      image: blog1,
      author: "Anita Desai"
    },
    {
      id: 7,
      title: "Soil Health Management: The Secret to High-Yield Cotton",
      excerpt: "How regenerative farming and soil mapping are helping our farmers produce stronger and whiter cotton fibers.",
      category: "Environment",
      date: "February 20, 2024",
      image: blog2,
      author: "Amit Kumar"
    },
    {
      id: 8,
      title: "From Seed to Shirt: The Transparent Supply Chain",
      excerpt: "How blockchain technology is helping us provide 100% traceability for every bale of cotton we export.",
      category: "Innovation",
      date: "February 15, 2024",
      image: blog3,
      author: "Priya Sharma"
    },
    {
      id: 9,
      title: "The Impact of Climate Change on Cotton Fiber Strength",
      excerpt: "Adapting to changing weather patterns with resilient seed varieties and smart irrigation systems.",
      category: "Research",
      date: "February 10, 2024",
      image: blogFiber,
      author: "Dr. Rajesh Mehta"
    },
    {
      id: 10,
      title: "Export Logistics: Ensuring Contamination-Free Delivery",
      excerpt: "Our specialized container lining and handling protocols for maintaining 'Cotton Gold' standards worldwide.",
      category: "Shipping",
      date: "February 05, 2024",
      image: blogBaling,
      author: "Vikram Shah"
    }
  ];

  return (
    <>
      <SEO 
        title="Blogs & Industry Updates | Aarnalaxmi Cotton"
        description="Stay updated with the latest trends in the cotton industry, sustainable farming practices, and global market insights from Aarnalaxmi Cotton."
        keywords="cotton industry blog, sustainable farming news, organic cotton updates, cotton market trends 2024, textile industry insights"
        url="/blogs"
      />

      <div className="bg-gray-50 pt-24 pb-20">
        {/* Header Section */}
        <section className="bg-white border-b border-gray-100 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="reveal transform translate-y-10 opacity-0 transition-all duration-700 ease-out">
              <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-green-100">
                Knowledge Hub
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                Latest <span className="text-green-600">Blogs</span> & Updates
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Expert insights, industry news, and our commitment to sustainable cotton excellence delivered to your screen.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post (Optional, but let's stick to Grid for simplicity first) */}

        {/* Blog Grid Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Category Filter Desktop (Visual Only) */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 reveal">
              {['All', 'Sustainability', 'Market Analysis', 'Technology', 'Industry Standards'].map((cat, idx) => (
                <button 
                  key={idx}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${idx === 0 ? 'bg-green-600 text-white shadow-lg shadow-green-200' : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 border border-gray-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post, i) => (
                <article 
                  key={post.id} 
                  className={`reveal transform translate-y-20 opacity-0 transition-all duration-700 ease-out flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group border border-gray-100`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="text-xs text-gray-400 font-bold mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {post.date}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold">
                          {post.author.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <span className="text-xs font-bold text-gray-700">{post.author}</span>
                      </div>
                      <button className="text-green-600 font-bold text-sm flex items-center gap-1 group/btn hover:gap-2 transition-all">
                        Read More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-20 text-center reveal">
              <button className="px-10 py-4 bg-white border-2 border-green-600 text-green-600 rounded-2xl font-bold text-lg hover:bg-green-600 hover:text-white transition-all shadow-xl shadow-green-100">
                Load More Updates
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto bg-green-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/20 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Ahead of the Industry</h2>
              <p className="text-green-100/70 mb-10 max-w-xl mx-auto">Subscribe to our newsletter and get the latest cotton market trends and sustainable farming updates delivered to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e)=>e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-grow px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-green-100/50 focus:outline-none focus:ring-2 focus:ring-green-400 backdrop-blur-md"
                />
                <button className="px-10 py-5 bg-white text-green-900 rounded-2xl font-bold hover:bg-green-100 transition-colors shadow-xl">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .reveal.animate-in {
          opacity: 1;
          transform: translate(0, 0) !important;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}} />
    </>
  );
};

export default Blogs;
