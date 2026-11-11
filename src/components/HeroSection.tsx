import React from 'react';
import { ArrowRight, ChevronDown, MessageSquare, Shield, Sparkles, Briefcase } from 'lucide-react';
import { ParticleUniverseCanvas } from './ParticleUniverseCanvas';
import { BRAND } from '../data/websiteData';

interface HeroSectionProps {
  onExploreCourses: () => void;
  onExploreServices: () => void;
  onTalkToTeam: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCourses,
  onExploreServices,
  onTalkToTeam,
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden">
      {/* Interactive Universe Canvas Canvas Background */}
      <ParticleUniverseCanvas className="z-0" />

      {/* Ambient Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#19E77A]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-[350px] h-[350px] bg-[#19E77A]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center my-auto">
        
        {/* Subtle Platform Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111516]/90 border border-[#19E77A]/30 text-[#A8F7C2] text-xs font-medium mb-6 shadow-inner animate-in fade-in slide-in-from-bottom-2 duration-700">
          <Sparkles className="w-3.5 h-3.5 text-[#19E77A]" />
          <span>Pakistan's Ecommerce & Digital Skills Platform</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#19E77A]" />
          <span className="text-[#A7B0AC] hidden sm:inline">Training & Agency</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-4">
          Master Ecommerce.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19E77A] via-[#A8F7C2] to-[#19E77A]">
            Build Your Digital Future.
          </span>
        </h1>

        {/* Supporting Heading */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#A8F7C2] max-w-3xl mx-auto mb-6">
          Learn Digital Skills. Launch Businesses. Grow Globally.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#A7B0AC] max-w-3xl mx-auto leading-relaxed mb-10">
          At <strong className="text-white font-semibold">UBM Pakistan</strong>, we empower individuals and businesses with practical ecommerce training, professional digital services, expert mentorship, and real-world opportunities. Learn the skills that matter and build your future in the digital economy.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto mb-14">
          <button
            type="button"
            onClick={onExploreCourses}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-xl shadow-xl shadow-[#19E77A]/25 transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <span>Explore Our Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#111516] hover:bg-[#171C1E] border border-white/15 hover:border-[#19E77A]/50 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg"
          >
            <Briefcase className="w-4 h-4 text-[#19E77A]" />
            <span>Explore Our Services</span>
          </button>

          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-[#A8F7C2] bg-[#111516]/80 hover:bg-[#19E77A]/10 border border-[#19E77A]/30 rounded-xl transition-all duration-200 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#19E77A]" />
            <span>Talk to Our Team</span>
          </a>
        </div>

        {/* Trust Badges Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="p-3 rounded-lg bg-[#111516]/60 border border-white/5 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-wider text-[#A7B0AC] font-mono block">Founder & CEO</span>
            <span className="text-sm font-semibold text-white truncate block">{BRAND.founder.name}</span>
          </div>
          <div className="p-3 rounded-lg bg-[#111516]/60 border border-white/5 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-wider text-[#A7B0AC] font-mono block">Two Divisions</span>
            <span className="text-sm font-semibold text-[#A8F7C2] truncate block">Institute & Agency</span>
          </div>
          <div className="p-3 rounded-lg bg-[#111516]/60 border border-white/5 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-wider text-[#A7B0AC] font-mono block">Training Tracks</span>
            <span className="text-sm font-semibold text-white truncate block">10 Practical Courses</span>
          </div>
          <div className="p-3 rounded-lg bg-[#111516]/60 border border-white/5 backdrop-blur-sm">
            <span className="text-[11px] uppercase tracking-wider text-[#A7B0AC] font-mono block">Agency Solutions</span>
            <span className="text-sm font-semibold text-[#19E77A] truncate block">18+ Scalable Services</span>
          </div>
        </div>
      </div>

      {/* Subtle Animated Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-8 text-[#A7B0AC] hover:text-[#19E77A] transition-colors">
        <a href="#stats" className="flex flex-col items-center gap-1 group text-xs tracking-wider uppercase font-mono">
          <span className="text-[10px] group-hover:text-[#19E77A] transition-colors">Scroll to Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#19E77A]" />
        </a>
      </div>
    </section>
  );
};
