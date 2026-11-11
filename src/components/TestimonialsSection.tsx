import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Info, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/websiteData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 3 at a time on desktop, 1 on mobile
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Get active slice with wrap
  const getVisibleTestimonials = () => {
    const list: Testimonial[] = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % TESTIMONIALS.length;
      list.push(TESTIMONIALS[idx]);
    }
    return list;
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-[#111516] border-y border-white/5 overflow-hidden">
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-[#19E77A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
              <span>Community Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Real Learning.{' '}
              <span className="text-[#19E77A]">Valuable Experiences.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
              Insights and feedback from our students and agency clients across Pakistan and overseas cohorts.
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#A7B0AC]/80 bg-black/40 px-3 py-1 rounded-lg border border-white/5">
              <Info className="w-3.5 h-3.5 text-[#19E77A]" />
              <span>Clearly marked demo student review placeholders — editable in configuration</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs font-mono text-[#A7B0AC] mr-2">
              {currentIndex + 1} / {TESTIMONIALS.length}
            </span>
            <button
              type="button"
              onClick={prevSlide}
              className="p-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white hover:text-[#19E77A] hover:border-[#19E77A]/40 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white hover:text-[#19E77A] hover:border-[#19E77A]/40 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {getVisibleTestimonials().map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="p-6 sm:p-7 rounded-2xl bg-[#0B0D0E] border border-white/10 hover:border-[#19E77A]/30 transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Top row: stars + quotation mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#19E77A]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#19E77A]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-[#19E77A]/30 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed mb-6 italic">
                  "{item.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111516] border border-[#19E77A]/30 flex items-center justify-center text-xs font-bold text-[#19E77A] font-mono">
                    {item.avatarSeed}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{item.name}</h4>
                    <p className="text-[11px] text-[#A7B0AC]">{item.city} · {item.courseOrBatch}</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-[#A8F7C2] bg-[#19E77A]/10 px-2 py-0.5 rounded border border-[#19E77A]/20">
                  {item.verifiedLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === currentIndex
                  ? 'w-8 bg-[#19E77A]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
