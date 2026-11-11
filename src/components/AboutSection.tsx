import React from 'react';
import { Target, Compass, HeartHandshake, ArrowRight, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { BRAND } from '../data/websiteData';

interface AboutSectionProps {
  onLearnMore: () => void;
  onExploreCourses: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onExploreCourses }) => {
  const values = [
    {
      title: "Practical Learning",
      description: "Direct immersion in live seller dashboards, real order feeds, and verified store tools.",
      icon: Target
    },
    {
      title: "Integrity & Real Data",
      description: "No exaggerated promises or get-rich schemes. We emphasize methodical work and business discipline.",
      icon: ShieldCheck
    },
    {
      title: "Continuous Mentorship",
      description: "Direct access to instructors and senior specialists who help resolve active client challenges.",
      icon: HeartHandshake
    },
    {
      title: "Global Competitiveness",
      description: "Equipping Pakistani youth to trade and consult with high-value clients across US, UK & UAE.",
      icon: Award
    }
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#0B0D0E] overflow-hidden">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#19E77A]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#19E77A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
            <span>Who We Are</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Empowering Pakistan Through{' '}
            <span className="text-[#19E77A]">Ecommerce & Digital Skills</span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#A7B0AC] leading-relaxed">
            <p>
              <strong className="text-white">UBM Pakistan</strong> is a growing ecommerce and digital skills platform dedicated to helping individuals, entrepreneurs, and businesses succeed in the digital economy.
            </p>
            <p>
              Our mission is to make practical digital education accessible while providing professional ecommerce solutions that help businesses grow online. We believe in practical learning, real-world experience, continuous mentorship, and long-term growth.
            </p>
            <p>
              Through our training programs and agency services, we aim to create opportunities for individuals and businesses to participate in the global digital marketplace.
            </p>
          </div>
        </div>

        {/* Dual Pillar Structure (Institute & Agency) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1: Training Institute */}
          <div className="p-8 rounded-2xl bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#19E77A] px-2.5 py-1 rounded bg-[#19E77A]/10 border border-[#19E77A]/20">
                  Division 01
                </span>
                <span className="text-xs text-[#A7B0AC]">Education & Academics</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                UBM Training Institute
              </h3>
              <p className="text-sm text-[#A7B0AC] leading-relaxed mb-6">
                Practical, cohort-based digital skills training designed to convert enthusiastic learners into high-earning store operators, digital marketers, and global virtual assistants.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-[#A8F7C2]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>Hands-on practice on real seller accounts (eBay, Amazon, Shopify, Etsy)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>1-on-1 mentorship by CEO Usman Iftikhar & industry experts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>Freelance profile building (Upwork, Fiverr & Direct Clients)</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={onExploreCourses}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#19E77A] hover:text-[#A8F7C2] transition-colors pt-4 border-t border-white/5 cursor-pointer"
            >
              <span>Explore 10 Training Tracks</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 2: Agency & Professional Services */}
          <div className="p-8 rounded-2xl bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 transition-all duration-300 relative group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-[#19E77A] px-2.5 py-1 rounded bg-[#19E77A]/10 border border-[#19E77A]/20">
                  Division 02
                </span>
                <span className="text-xs text-[#A7B0AC]">B2B & Enterprise Solutions</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                UBM Agency & Enterprise Services
              </h3>
              <p className="text-sm text-[#A7B0AC] leading-relaxed mb-6">
                Comprehensive digital agency services for local manufacturers, brands, and international store owners who need professional management, advertising, and execution.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-[#A8F7C2]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>Full store management across eBay, Amazon, Etsy & Shopify</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>Performance marketing (Meta Ads, Google Ads & Conversion Rate Optimization)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>Turnkey YouTube automation & digital asset creation</span>
                </li>
              </ul>
            </div>
            <button
              type="button"
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#19E77A] hover:text-[#A8F7C2] transition-colors pt-4 border-t border-white/5 cursor-pointer"
            >
              <span>Explore 18+ Agency Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mission, Vision, and Values Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Mission */}
          <div className="p-6 rounded-xl bg-[#151A1C] border border-white/10">
            <div className="p-3 rounded-lg bg-[#0B0D0E] border border-white/10 w-fit text-[#19E77A] mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Our Mission</h4>
            <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed">
              To democratize high-value digital and ecommerce education in Pakistan while providing businesses with top-tier international standard execution and store management.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 rounded-xl bg-[#151A1C] border border-white/10">
            <div className="p-3 rounded-lg bg-[#0B0D0E] border border-white/10 w-fit text-[#19E77A] mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Our Vision</h4>
            <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed">
              To be Pakistan’s most trusted bridge between skilled local talent and the multi-trillion-dollar global digital economy, fostering hundreds of sustainable enterprises.
            </p>
          </div>

          {/* Core Values */}
          <div className="p-6 rounded-xl bg-[#151A1C] border border-white/10">
            <div className="p-3 rounded-lg bg-[#0B0D0E] border border-white/10 w-fit text-[#19E77A] mb-4">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Our Core Values</h4>
            <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed">
              Pragmatic execution, complete transparency, ethical commerce, relentless mentorship, and long-term client value creation over short-term gains.
            </p>
          </div>
        </div>

        {/* Founder Spotlight Card inside About */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111516] border border-[#19E77A]/25 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="relative shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border-2 border-[#19E77A] shadow-lg shadow-[#19E77A]/20 bg-[#0B0D0E]">
              <img
                src={BRAND.founder.image}
                alt={BRAND.founder.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <blockquote className="text-sm sm:text-base text-white italic mb-3">
              "{BRAND.founder.quote}"
            </blockquote>
            <div className="text-xs text-[#A7B0AC]">
              <span className="font-bold text-white text-sm block">{BRAND.founder.name}</span>
              <span>{BRAND.founder.title}</span>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="#founder"
              className="px-4 py-2 text-xs font-semibold text-[#19E77A] bg-[#19E77A]/10 border border-[#19E77A]/30 rounded-lg hover:bg-[#19E77A] hover:text-[#0B0D0E] transition-all"
            >
              Read Full Founder Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
