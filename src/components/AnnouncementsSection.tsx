import React, { useState } from 'react';
import { Bell, Calendar, ArrowRight, X, AlertCircle, Sparkles } from 'lucide-react';
import { ANNOUNCEMENTS, Announcement, BRAND } from '../data/websiteData';

export const AnnouncementsSection: React.FC = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  return (
    <section id="announcements" className="relative py-20 lg:py-28 bg-[#111516] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
              <Bell className="w-3.5 h-3.5 text-[#19E77A]" />
              <span>Timely Briefings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Latest News & <span className="text-[#19E77A]">Announcements</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
              Stay informed about upcoming cohorts, free masterclasses, agency expansions, and internship opportunities at UBM Pakistan.
            </p>
          </div>

          <div className="text-xs text-[#A7B0AC] bg-[#0B0D0E] px-3.5 py-2 rounded-xl border border-white/10 self-start md:self-end">
            <span>Official Updates Feed</span>
            <span className="mx-2 text-white/20">|</span>
            <span className="text-[#19E77A] font-mono">Live</span>
          </div>
        </div>

        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ANNOUNCEMENTS.map((item) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl bg-[#0B0D0E] border transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1 ${
                item.isUrgent
                  ? 'border-[#19E77A]/50 ring-1 ring-[#19E77A]/30'
                  : 'border-white/10 hover:border-[#19E77A]/30'
              }`}
            >
              <div>
                {/* Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                    item.isUrgent
                      ? 'text-[#19E77A] bg-[#19E77A]/15 border-[#19E77A]/30'
                      : 'text-[#A8F7C2] bg-white/5 border-white/10'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-[11px] text-[#A7B0AC] flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3 text-[#19E77A]" />
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-3 leading-snug group-hover:text-[#19E77A] transition-colors">
                  {item.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#A7B0AC] leading-relaxed mb-6 line-clamp-3">
                  {item.shortDesc}
                </p>
              </div>

              {/* Read More button */}
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(item)}
                className="pt-3 border-t border-white/5 inline-flex items-center justify-between text-xs font-semibold text-[#19E77A] hover:text-[#A8F7C2] transition-colors cursor-pointer w-full"
              >
                <span>Read Full Announcement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Announcement Detail Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#111516] border border-[#19E77A]/30 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#A7B0AC] hover:text-white bg-white/5 hover:bg-white/10"
              aria-label="Close announcement"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-[#19E77A] bg-[#19E77A]/10 px-2 py-0.5 rounded border border-[#19E77A]/20">
                {selectedAnnouncement.category}
              </span>
              <span className="text-xs text-[#A7B0AC] font-mono">
                {selectedAnnouncement.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {selectedAnnouncement.title}
            </h3>

            <div className="text-sm text-[#A7B0AC] leading-relaxed space-y-3 mb-6">
              <p>{selectedAnnouncement.content}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedAnnouncement(null)}
                className="text-xs text-[#A7B0AC] hover:text-white"
              >
                Close
              </button>
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-lg transition-all"
              >
                Ask About This on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
