import React, { useEffect, useRef, useState } from 'react';
import SEO from './SEO';

// Import images
import blog1 from '../assets/blog_organic_cotton.png';
import blog2 from '../assets/blog_market_trends.png';
import blog3 from '../assets/blog_processing_tech.png';
import blogFiber from '../assets/blog_fiber_science.png';
import blogBaling from '../assets/blog_baling_storage.png';

const Blogs = () => {
  const heroRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  };

  const handleHeroMouseLeave = () => setMouse({ x: 0, y: 0 });

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

  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Sustainability', 'Market Analysis', 'Technology', 'Industry Standards', 'Environment', 'Innovation', 'Research', 'Shipping'];

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

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <SEO 
        title="Blogs & Industry Updates | Aarnalaxmi Cotton"
        description="Stay updated with the latest trends in the cotton industry, sustainable farming practices, and global market insights from Aarnalaxmi Cotton."
        keywords="cotton industry blog, sustainable farming news, organic cotton updates, cotton market trends 2024, textile industry insights"
        url="/blogs"
      />

      <div className="bg-gray-50 pb-10">
        
        {/* Modern 3D Hero Section — Matched with About Us Design */}
        <section
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
          className="relative flex items-center justify-start overflow-hidden bg-[#050505] mt-[76px]"
          style={{
            minHeight: 'calc(100vh - 76px)',
            perspective: '2000px',
          }}
        >
          {/* Animated Background Image */}
          <div
            className="absolute inset-[-5%]"
            style={{
              backgroundImage: `url(${blogFiber})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: `translate(${mouse.x * -15}px, ${mouse.y * -10}px)`,
              transition: 'transform 0.4s ease-out',
              willChange: 'transform',
            }}
          />

          {/* Luxury Gradient Overlay — Matched with About Us */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.3) 100%)' }} />

          {/* Content Container — Left Aligned like About Us */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-10 py-20 flex flex-col justify-center h-full">
            <div 
              className="max-w-3xl"
              style={{
                transform: `rotateY(${mouse.x * 2}deg) rotateX(${mouse.y * -1}deg)`,
                transition: 'transform 0.5s ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Premium Small Badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-8"
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  backdropFilter: 'blur(12px)' 
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                <span className="text-gray-300 font-bold text-[10px] uppercase tracking-[0.3em]">Knowledge Hub</span>
              </div>

              {/* Title with Glowing Accent — Compact Size matched with About Us */}
              <div className="flex items-stretch gap-6 mb-7">
                <div className="w-1.5 rounded-full bg-gradient-to-b from-green-400 to-green-600 shadow-[0_0_25px_rgba(74,222,128,0.5)]" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  Latest <span className="text-green-400">Blogs</span> <br />
                  <span className="text-white/90">& Updates</span>
                </h1>
              </div>

              {/* Reduced Subtitle */}
              <p className="text-lg text-gray-300 max-w-lg mb-12 leading-relaxed font-medium">
                Expert insights, industry news, and our commitment to sustainable cotton excellence delivered to your screen.
              </p>
            </div>
          </div>

          {/* Scroll Down Hint — Matched with About Us Style */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce cursor-pointer z-30">
            <span className="text-white text-[10px] uppercase tracking-[0.4em] font-black">Scroll</span>
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
          </div>

          {/* Wave Transition — Matched white fill to the background below */}
          <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-[60px] fill-gray-50">
              <path d="M0,40 C480,80 960,80 1440,40 L1440,80 L0,80 Z" />
            </svg>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            
            {/* Category Filter Desktop — Functional */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 reveal">
              {categories.map((cat, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeCategory === cat 
                      ? 'bg-green-600 text-white shadow-lg shadow-green-100 border-green-600' 
                      : 'bg-white text-gray-400 hover:text-green-600 border-gray-100 hover:border-green-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className={`reveal animate-in transform flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all group border border-gray-100`}
                  >
                  {/* Image Container — Reduced Height */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-green-600 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container — Reduced Padding */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-[10px] text-gray-400 font-bold mb-3 flex items-center gap-2 uppercase tracking-wider">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {post.date}
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-[13px] mb-6 leading-relaxed line-clamp-3 font-medium">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-[10px] font-black">
                          {post.author.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <span className="text-[11px] font-bold text-gray-700">{post.author}</span>
                      </div>
                      <button className="text-green-600 font-black text-[12px] flex items-center gap-1 group/btn hover:gap-2 transition-all uppercase tracking-wider">
                        Read <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </button>
                    </div>
                  </div>
                </article>
                ))
              ) : (
                <div className="col-span-full py-20 text-center reveal animate-in">
                  <p className="text-gray-400 font-medium text-lg">No updates found in this category yet.</p>
                </div>
              )}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-12 text-center reveal">
              <button className="px-10 py-4 bg-white border-2 border-green-600 text-green-600 rounded-2xl font-bold text-lg hover:bg-green-600 hover:text-white transition-all shadow-xl shadow-green-100">
                Load More Updates
              </button>
            </div>
          </div>
        </section>

        {/* Compact Newsletter / CTA Section — Light Theme */}
        <section className="py-10 px-6">
          <div className="max-w-4xl mx-auto reveal">
            <div 
              className="relative rounded-[2.5rem] p-10 md:p-16 overflow-hidden border border-gray-100 shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              }}
            >
              {/* Subtle Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gray-100 rounded-full blur-2xl opacity-40" />

              <div className="relative z-10 text-center flex flex-col items-center">
                {/* Minimalist Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-slate-100 border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span className="text-slate-500 font-bold text-[9px] uppercase tracking-[0.2em]">Weekly Updates</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e293b] mb-4 tracking-tight leading-tight">
                  Stay Ahead of the <span className="text-slate-500">Industry</span>
                </h2>
                
                <p className="text-base text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed font-medium">
                  Expert insights and market trends delivered to your inbox. Join our global cotton community.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto" onSubmit={(e)=>e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-300 transition-all text-sm"
                  />
                  <button className="px-8 py-3.5 bg-[#1e293b] text-white rounded-xl font-bold text-[14px] uppercase tracking-wider hover:bg-[#334155] transition-all shadow-sm">
                    Subscribe
                  </button>
                </form>

                <p className="mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                  No spam. Just value. Unsubscribe anytime.
                </p>
              </div>
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
