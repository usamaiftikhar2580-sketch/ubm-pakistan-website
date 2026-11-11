import React from 'react';
import { X, Clock, Calendar, User, Tag, Share2, MessageSquare, ArrowLeft } from 'lucide-react';
import { BlogPost, BRAND } from '../data/websiteData';

interface BlogReaderModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogReaderModal: React.FC<BlogReaderModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#111516] border border-[#19E77A]/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#171C1E] to-[#0B0D0E] border-b border-white/10 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-[#A7B0AC] hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#A7B0AC] mb-3">
            <span className="font-mono text-[#19E77A] bg-[#19E77A]/10 px-2.5 py-0.5 rounded border border-[#19E77A]/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5 text-[#19E77A]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#19E77A]" />
              {post.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
            {post.title}
          </h2>

          <div className="flex items-center gap-2 text-xs text-[#A8F7C2]">
            <User className="w-3.5 h-3.5 text-[#19E77A]" />
            <span>By {post.author}</span>
            <span>·</span>
            <span>UBM Pakistan Knowledge Hub</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-5 text-sm sm:text-base text-[#D4DBD7] leading-relaxed">
          <p className="text-base sm:text-lg font-medium text-white italic border-l-2 border-[#19E77A] pl-4">
            "{post.excerpt}"
          </p>

          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Tags */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-[#19E77A]" />
              <span className="text-xs text-[#A7B0AC]">Tags:</span>
              {post.tags.map((tag, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-[#0B0D0E] text-[#A8F7C2] border border-white/5 font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#0B0D0E] border-t border-white/10 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1 text-xs text-[#A7B0AC] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#19E77A]" />
              <span>Share</span>
            </button>

            <a
              href={`${BRAND.contact.whatsappUrl}?text=${encodeURIComponent(
                `Hello UBM Pakistan, I read your article "${post.title}" and would like to learn more.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-lg transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss With Author</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
