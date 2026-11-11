import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Video, ArrowRight, CheckCircle2, ChevronUp } from 'lucide-react';
import { BRAND, COURSES } from '../data/websiteData';

interface FooterProps {
  onOpenGitHubModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGitHubModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07090A] border-t border-white/10 pt-16 pb-12 overflow-hidden text-[#A7B0AC]">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#19E77A]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-white/10 items-center">
          
          {/* Logo & Description */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#0e1111] p-1.5 rounded-lg border border-white/10 inline-block">
                <img
                  src={BRAND.logo}
                  alt="UBM Pakistan Logo"
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">UBM PAKISTAN</h3>
                <p className="text-xs text-[#19E77A] font-mono">Learn & Earn | Build Your Digital Future</p>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-[#A7B0AC] max-w-md leading-relaxed">
              UBM Pakistan is dedicated to empowering learners and businesses through ecommerce education, digital skills, professional services, and real-world opportunities.
            </p>
            
            <p className="text-xs text-[#A8F7C2] font-medium">
              Founder & CEO: <span className="text-white font-bold">{BRAND.founder.name}</span>
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-6 lg:justify-self-end w-full max-w-md">
            <h4 className="text-sm font-bold text-white mb-1.5">
              Subscribe to Marketplace Intelligence
            </h4>
            <p className="text-xs text-[#A7B0AC] mb-3">
              Get monthly algorithm updates, product hunting insights, and admissions notices.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-[#111516] border border-[#19E77A]/40 text-xs text-[#19E77A] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing to UBM Pakistan Insights!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#111516] border border-white/10 text-white placeholder-[#A7B0AC]/50 text-xs focus:outline-none focus:border-[#19E77A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] transition-colors shrink-0 cursor-pointer"
                >
                  Join Feed
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Column Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10 text-xs">
          
          {/* Column 1: Company */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Company</h5>
            <ul className="space-y-2.5">
              <li><a href="#about" className="hover:text-[#19E77A] transition-colors">About Us</a></li>
              <li><a href="#founder" className="hover:text-[#19E77A] transition-colors">Our Team & Founder</a></li>
              <li><a href="#services" className="hover:text-[#19E77A] transition-colors">Our Agency Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#19E77A] transition-colors">Portfolio & Work</a></li>
              <li><a href="#testimonials" className="hover:text-[#19E77A] transition-colors">Student Experiences</a></li>
              <li><a href="#contact" className="hover:text-[#19E77A] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 2: Training Tracks */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Training</h5>
            <ul className="space-y-2.5">
              <li><a href="#courses" className="hover:text-[#19E77A] transition-colors">eBay Business</a></li>
              <li><a href="#courses" className="hover:text-[#19E77A] transition-colors">Amazon FBA</a></li>
              <li><a href="#courses" className="hover:text-[#19E77A] transition-colors">Shopify Development</a></li>
              <li><a href="#courses" className="hover:text-[#19E77A] transition-colors">Etsy Business</a></li>
              <li><a href="#courses" className="hover:text-[#19E77A] transition-colors">Digital Marketing</a></li>
              <li><a href="#courses" className="hover:text-[#19E77A] transition-colors">Graphic Designing</a></li>
              <li><a href="#courses" className="hover:text-[#19E77A] transition-colors">Content Writing</a></li>
              <li><a href="#courses" className="hover:text-[#19E77A] transition-colors">YouTube Automation</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Resources</h5>
            <ul className="space-y-2.5">
              <li><a href="#blog" className="hover:text-[#19E77A] transition-colors">Industry Blog</a></li>
              <li><a href="#announcements" className="hover:text-[#19E77A] transition-colors">Announcements</a></li>
              <li><a href="#faqs" className="hover:text-[#19E77A] transition-colors">Frequently Asked Questions</a></li>
              <li>
                <button
                  type="button"
                  onClick={onOpenGitHubModal}
                  className="text-left hover:text-[#19E77A] transition-colors cursor-pointer text-[#A8F7C2]"
                >
                  GitHub Pages Static Guide
                </button>
              </li>
              <li>
                <a
                  href={BRAND.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#19E77A] transition-colors"
                >
                  Admissions Helpline
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-3">
            <h5 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Official Contact</h5>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#19E77A] shrink-0" />
                <a href="https://wa.me/923040880992" target="_blank" rel="noopener noreferrer" className="hover:text-[#19E77A] transition-colors font-mono">
                  +92 304 0880992
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#19E77A] shrink-0" />
                <a href={`mailto:${BRAND.contact.email}`} className="hover:text-[#19E77A] transition-colors break-all">
                  {BRAND.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[#A7B0AC]">
                <MapPin className="w-3.5 h-3.5 text-[#19E77A] shrink-0 mt-0.5" />
                <span>Lahore, Pakistan</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] text-[#A7B0AC] block mb-2 font-mono uppercase">Social Channels</span>
              <div className="flex items-center gap-2">
                <a
                  href={BRAND.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 hover:text-[#19E77A] transition-colors"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 hover:text-[#19E77A] transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BRAND.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 hover:text-[#19E77A] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={BRAND.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 hover:text-[#19E77A] transition-colors"
                  aria-label="TikTok Profile"
                >
                  <Video className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-center sm:text-left">
            Copyright © 2026 <strong className="text-white">UBM Pakistan</strong>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#A7B0AC] hidden md:inline">
              Designed for International Standards & GitHub Pages
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111516] border border-white/10 text-white hover:text-[#19E77A] hover:border-[#19E77A]/40 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5 text-[#19E77A]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
