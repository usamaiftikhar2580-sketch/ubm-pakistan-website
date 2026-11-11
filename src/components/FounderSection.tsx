import React from 'react';
import { MessageSquare, Linkedin, Facebook, Instagram, Video, Mail, CheckCircle2, Quote, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/websiteData';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="relative py-20 lg:py-28 bg-[#0B0D0E] overflow-hidden">
      
      {/* Emerald ambient backlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#19E77A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
            <span>Executive Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Meet the Founder & CEO
          </h2>
          <p className="text-sm sm:text-base text-[#A7B0AC] mt-3">
            Leading Pakistan’s digital commerce evolution through practical skills and agency execution.
          </p>
        </div>

        {/* Founder Profile Card (International Executive Showcase) */}
        <div className="rounded-3xl bg-[#111516] border border-white/10 overflow-hidden shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Column: Portrait Photography */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex justify-center items-center relative bg-gradient-to-b from-[#151A1C] to-[#0B0D0E]">
              
              {/* Outer decorative halo */}
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-[#19E77A]/30 shadow-2xl shadow-black/80 bg-[#0B0D0E]">
                <img
                  src={BRAND.founder.image}
                  alt="Usman Iftikhar - Founder & CEO of UBM Pakistan"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient overlay for bottom badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay Name Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B0D0E]/85 backdrop-blur-md border border-white/10">
                  <h4 className="text-base font-bold text-white tracking-tight">{BRAND.founder.name}</h4>
                  <p className="text-xs text-[#19E77A] font-medium">{BRAND.founder.title}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Vision, Social Handles, Direct Contact */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A8F7C2] bg-[#19E77A]/10 px-3 py-1 rounded-full border border-[#19E77A]/20 mb-4">
                  <span>Founder Profile</span>
                  <span>·</span>
                  <span>UBM Pakistan</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {BRAND.founder.name}
                </h3>
                <p className="text-sm sm:text-base text-[#19E77A] font-semibold mb-6">
                  {BRAND.founder.title}
                </p>

                {/* Biography */}
                <div className="space-y-4 text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
                  <p>
                    <strong className="text-white">Usman Iftikhar</strong> is the Founder and CEO of UBM Pakistan, focused on ecommerce education, digital skills development, and online business opportunities.
                  </p>
                  <p>
                    Through UBM Pakistan, he aims to empower individuals with practical knowledge and help businesses establish and strengthen their digital presence.
                  </p>
                  <p>
                    His vision is to build a professional platform where learning, innovation, and real-world business opportunities come together. Under his leadership, UBM Pakistan has trained hundreds of aspiring entrepreneurs and managed high-volume international client stores across leading global marketplaces.
                  </p>
                </div>

                {/* Quote Block */}
                <div className="mt-6 p-4 rounded-xl bg-[#0B0D0E] border-l-2 border-[#19E77A] text-xs sm:text-sm text-white italic flex items-start gap-3">
                  <Quote className="w-5 h-5 text-[#19E77A] shrink-0 opacity-80" />
                  <p>
                    "{BRAND.founder.quote}"
                  </p>
                </div>
              </div>

              {/* Verified Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-[#A8F7C2]">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>Practical Ecommerce Architect</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#A8F7C2]">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>Direct 1-on-1 Student Mentorship</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#A8F7C2]">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>International Agency Director</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#A8F7C2]">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0" />
                  <span>Strategic Business Consultant</span>
                </div>
              </div>

              {/* Social Channels & Contact CTAs */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                
                {/* Social Profiles */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#A7B0AC] mr-1 hidden sm:inline">Connect:</span>
                  <a
                    href={BRAND.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#0B0D0E] border border-white/10 text-[#A7B0AC] hover:text-[#19E77A] hover:border-[#19E77A]/40 transition-colors"
                    aria-label="Usman Iftikhar LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#0B0D0E] border border-white/10 text-[#A7B0AC] hover:text-[#19E77A] hover:border-[#19E77A]/40 transition-colors"
                    aria-label="Usman Iftikhar Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#0B0D0E] border border-white/10 text-[#A7B0AC] hover:text-[#19E77A] hover:border-[#19E77A]/40 transition-colors"
                    aria-label="Usman Iftikhar Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#0B0D0E] border border-white/10 text-[#A7B0AC] hover:text-[#19E77A] hover:border-[#19E77A]/40 transition-colors"
                    aria-label="Usman Iftikhar TikTok"
                  >
                    <Video className="w-4 h-4" />
                  </a>
                </div>

                {/* Direct Message to Founder WhatsApp */}
                <div className="flex items-center gap-3">
                  <a
                    href={`${BRAND.contact.whatsappUrl}?text=${encodeURIComponent(
                      "Hello Usman Iftikhar, I am reaching out from the UBM Pakistan website to connect with you directly."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-xl shadow-lg shadow-[#19E77A]/25 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Message Usman Iftikhar</span>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
