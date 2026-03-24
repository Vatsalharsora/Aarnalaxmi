import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import blogPosts from '../data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = Number(id);
  const post = blogPosts.find((item) => item.id === blogId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-black text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">The article you are looking for does not exist or has been moved.</p>
          <button
            onClick={() => navigate('/blogs')}
            className="inline-flex items-center rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white hover:bg-green-700 transition"
          >
            Return to Blogs
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 4);

  return (
    <>
      <SEO
        title={`${post.title} | Aarnalaxmi Cotton Blog`}
        description={post.excerpt}
        keywords="cotton blog, cotton industry, cotton export, sustainable cotton"
        url={`/blogs/${post.id}`}
      />

      <section className="bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-green-600 font-bold text-sm uppercase tracking-widest hover:text-green-700"
          >
            ← Back to blogs
          </Link>

          <article className="mt-8 bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-[11px] font-black uppercase tracking-wider bg-green-100 text-green-700 rounded-full">{post.category}</span>
                <span className="text-xs text-gray-500">{post.date}</span>
                <span className="text-xs text-gray-500">•</span>
                <span className="text-xs text-gray-500">By {post.author}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-5">{post.title}</h1>
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-5 text-gray-600 text-lg leading-relaxed">{paragraph}</p>
              ))}
              <div className="mt-8 text-gray-600 text-sm">
                <p className="font-black uppercase tracking-widest text-gray-500">Want more?</p>
                <p className="mt-2">Explore related reads from the same category and stay ahead of industry insights.</p>
              </div>
            </div>
          </article>

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-black text-slate-900 mb-5">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/blogs/${related.id}`}
                    className="group block rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
                  >
                    <img src={related.image} alt={related.title} className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="p-4">
                      <h3 className="text-lg font-black text-slate-900 mb-2">{related.title}</h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{related.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
