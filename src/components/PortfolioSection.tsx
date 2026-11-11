import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioItem, BRAND } from '../data/websiteData';

interface PortfolioSectionProps {
  onRequestSimilarProject: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onRequestSimilarProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'stores' | 'websites' | 'marketing' | 'design' | 'youtube'>('all');

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-20 lg:py-28 bg-[#0B0D0E] overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#19E77A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#19E77A]" />
              <span>Student Success & Agency Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Learning That{' '}
              <span className="text-[#19E77A]">Creates Opportunities</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
              Real store turnarounds, bespoke web development, high-ROI marketing funnels, and digital assets executed by our agency and top cohort graduates.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111516] border border-white/10 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#19E77A] text-[#0B0D0E]'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              All Projects ({PORTFOLIO_PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('stores')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'stores'
                  ? 'bg-[#19E77A] text-[#0B0D0E]'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Ecommerce Stores
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('websites')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'websites'
                  ? 'bg-[#19E77A] text-[#0B0D0E]'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Websites
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('marketing')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'marketing'
                  ? 'bg-[#19E77A] text-[#0B0D0E]'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Marketing
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('design')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'design'
                  ? 'bg-[#19E77A] text-[#0B0D0E]'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Design & Print
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('youtube')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeFilter === 'youtube'
                  ? 'bg-[#19E77A] text-[#0B0D0E]'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              YouTube
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((project) => (
            <div
              key={project.id}
              className="group p-6 sm:p-7 rounded-2xl bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-[#A8F7C2] bg-[#19E77A]/10 px-2 py-0.5 rounded border border-[#19E77A]/20">
                    {project.clientType}
                  </span>
                  <span className="text-xs font-bold text-[#19E77A] font-mono">
                    {project.metric}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#19E77A] transition-colors mb-2.5 leading-snug">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Deliverables tags */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
                  {project.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#FFFFFF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#19E77A] shrink-0" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-[#A7B0AC]">Verified Portfolio Case</span>
                <button
                  type="button"
                  onClick={() => onRequestSimilarProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#19E77A] hover:text-[#A8F7C2] transition-colors cursor-pointer"
                >
                  <span>Build Similar Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Projects / Custom Case Study Inquiries */}
        <div className="mt-14 text-center">
          <a
            href={`${BRAND.contact.whatsappUrl}?text=${encodeURIComponent(
              "Hello UBM Pakistan, I would like to review more case studies and portfolio projects."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#111516] hover:bg-[#151A1C] border border-white/15 hover:border-[#19E77A]/50 rounded-xl transition-all"
          >
            <span>Request Full Agency Portfolio & Audited Case Studies</span>
            <ExternalLink className="w-4 h-4 text-[#19E77A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
