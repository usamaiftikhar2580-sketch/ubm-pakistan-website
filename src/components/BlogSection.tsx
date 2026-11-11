import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/websiteData';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'eBay Tips',
    'Amazon Business',
    'Shopify Guides',
    'Etsy Business',
    'Digital Marketing',
    'YouTube Growth',
  ];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="blog" className="relative py-20 lg:py-28 bg-[#0B0D0E] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#19E77A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-[#19E77A]" />
              <span>Knowledge & Growth Resources</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Explore Our <span className="text-[#19E77A]">Latest Insights</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
              In-depth strategic blueprints, marketplace policy updates, and tactical ecommerce advice written by practitioners at UBM Pakistan.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111516] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#19E77A] text-[#0B0D0E]'
                    : 'text-[#A7B0AC] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group p-6 sm:p-7 rounded-2xl bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* Meta info */}
                <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                  <span className="font-mono text-[#19E77A] bg-[#19E77A]/10 px-2.5 py-0.5 rounded border border-[#19E77A]/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-[#A7B0AC] text-[11px] font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#19E77A]" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#19E77A] transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Read More */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[#A7B0AC] flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#19E77A]" />
                  <span>{post.author}</span>
                </span>
                
                <span className="inline-flex items-center gap-1 font-bold text-[#19E77A] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
