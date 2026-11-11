import React from 'react';
import {
  BookOpen, Award, Briefcase, Users, TrendingUp, Globe, ShieldCheck, RefreshCw, CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US, BRAND } from '../data/websiteData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#19E77A]" };
    switch (iconName) {
      case 'BookOpen': return <BookOpen {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Users': return <Users {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'RefreshCw': return <RefreshCw {...props} />;
      default: return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#111516] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
            <span>Our Distinct Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Why Choose <span className="text-[#19E77A]">UBM Pakistan?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
            We reject theoretical promises and passive lectures. Our ecosystem is built entirely around live store data, active international marketplaces, and dedicated operational support.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-[#0B0D0E] border border-white/10 hover:border-[#19E77A]/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-[#19E77A]/10 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#111516] border border-white/10 group-hover:bg-[#19E77A]/10 group-hover:border-[#19E77A]/30 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-[#A7B0AC] tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#19E77A] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#A8F7C2]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#19E77A]" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Commitment Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0B0D0E] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-lg font-bold text-white mb-2">
              Our Uncompromising Commitment to Students & Agency Partners
            </h4>
            <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed">
              Every learner at UBM Pakistan receives individual attention. If you encounter hurdles on your client accounts or store setup, our mentorship team steps in with practical, screen-share assistance.
            </p>
          </div>
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-[#19E77A] bg-[#19E77A]/10 border border-[#19E77A]/30 hover:bg-[#19E77A] hover:text-[#0B0D0E] rounded-xl transition-all whitespace-nowrap"
          >
            Speak With Our Academic Advisor
          </a>
        </div>

      </div>
    </section>
  );
};
