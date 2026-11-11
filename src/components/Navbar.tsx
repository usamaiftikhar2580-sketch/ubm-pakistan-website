import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { BRAND } from '../data/websiteData';

interface NavbarProps {
  onOpenEnrollModal: () => void;
  onOpenGitHubModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnrollModal,
  onOpenGitHubModal,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Services', href: '#services' },
    { label: 'Our Agency', href: '#agency' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Announcements', href: '#announcements' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0D0E]/95 backdrop-blur-md border-b border-[#19E77A]/15 py-3 shadow-2xl shadow-black/60'
            : 'bg-[#0B0D0E]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Zone: Large prominent UBM Pakistan Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19E77A] rounded-lg transition-transform hover:scale-[1.02]"
              aria-label="UBM Pakistan - Home"
            >
              <div className="relative overflow-hidden rounded-lg border border-white/10 group-hover:border-[#19E77A]/40 transition-colors bg-[#0e1111] p-1 shadow-md">
                <img
                  src={BRAND.logo}
                  alt="UBM Pakistan Official Logo"
                  className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="hidden xl:flex flex-col">
                <span className="text-sm font-semibold tracking-wide text-white flex items-center gap-1.5">
                  UBM PAKISTAN
                  <span className="text-[10px] text-[#19E77A] tracking-wider uppercase font-mono">Official</span>
                </span>
                <span className="text-[11px] text-[#A7B0AC]">Learn & Earn | Digital Future</span>
              </div>
            </a>

            {/* Nav Links: Desktop Clean Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium text-[#A7B0AC]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-2.5 py-1.5 rounded-md transition-all whitespace-nowrap shrink-0 hover:text-white ${
                      isActive
                        ? 'text-[#19E77A] font-semibold bg-[#19E77A]/10 border border-[#19E77A]/20'
                        : 'hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Zone: WhatsApp Contact + Enroll Now CTA + GitHub Pages helper */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* WhatsApp Quick CTA */}
              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#A8F7C2] bg-[#111516] border border-[#19E77A]/30 rounded-lg hover:bg-[#19E77A]/10 hover:border-[#19E77A] transition-all whitespace-nowrap shadow-sm group"
                aria-label="Direct WhatsApp Contact"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#19E77A] group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Primary Green CTA */}
              <button
                type="button"
                onClick={onOpenEnrollModal}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] active:scale-95 rounded-lg shadow-lg shadow-[#19E77A]/25 transition-all whitespace-nowrap cursor-pointer hover:shadow-[#19E77A]/40"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* GitHub Pages Guide Button */}
              <button
                type="button"
                onClick={onOpenGitHubModal}
                title="View GitHub Pages Deployment & Export Code"
                className="p-2 text-xs text-[#A7B0AC] hover:text-[#19E77A] bg-[#111516] border border-white/10 rounded-lg transition-colors hover:border-[#19E77A]/30 cursor-pointer"
                aria-label="Export for GitHub Pages"
              >
                <Sparkles className="w-4 h-4" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#A7B0AC] hover:text-white bg-[#111516] border border-white/10 rounded-lg transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#19E77A]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#111516] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={BRAND.logo}
                    alt="UBM Pakistan Logo"
                    className="h-10 w-auto object-contain bg-[#0e1111] p-1 rounded border border-white/10"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white">UBM Pakistan</h3>
                    <p className="text-[11px] text-[#A7B0AC]">Learn & Earn</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-[#A7B0AC] hover:text-white rounded-lg hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#A7B0AC] hover:text-white hover:bg-white/5 hover:border-l-2 hover:border-[#19E77A] transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollModal();
                }}
                className="w-full py-2.5 text-center text-sm font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-lg transition-all"
              >
                Enroll Now in Course
              </button>

              <a
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold text-[#A8F7C2] bg-white/5 border border-[#19E77A]/30 rounded-lg flex items-center justify-center gap-2 hover:bg-[#19E77A]/10"
              >
                <MessageSquare className="w-4 h-4 text-[#19E77A]" />
                <span>Chat on WhatsApp (+923040880992)</span>
              </a>

              <p className="text-[11px] text-center text-[#A7B0AC]">
                Founder & CEO: Usman Iftikhar
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
