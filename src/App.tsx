/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustStatsSection } from './components/TrustStatsSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { AgencyServicesSection } from './components/AgencyServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { FounderSection } from './components/FounderSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { BlogSection } from './components/BlogSection';
import { FaqSection } from './components/FaqSection';
import { ContactAdmissionSection } from './components/ContactAdmissionSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CourseDetailModal } from './components/CourseDetailModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BlogReaderModal } from './components/BlogReaderModal';
import { GitHubPagesModal } from './components/GitHubPagesModal';
import { Course, Service, BlogPost, PortfolioItem, COURSES } from './data/websiteData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);
  
  // For pre-filling forms
  const [contactCourse, setContactCourse] = useState<Course | null>(null);
  const [contactService, setContactService] = useState<Service | null>(null);

  // Scroll spy to highlight active section in Navbar
  useEffect(() => {
    const sectionIds = ['home', 'about', 'courses', 'services', 'agency', 'portfolio', 'announcements', 'blog', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (course?: Course, service?: Service) => {
    if (course) setContactCourse(course);
    if (service) setContactService(service);
    
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnrollClick = (course?: Course) => {
    const targetCourse = course || COURSES[0];
    scrollToContact(targetCourse, undefined);
  };

  const handleQuoteClick = (service: Service) => {
    scrollToContact(undefined, service);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-white flex flex-col font-sans selection:bg-[#19E77A] selection:text-[#0B0D0E] relative">
      
      {/* Sticky Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenEnrollModal={() => handleEnrollClick()}
        onOpenGitHubModal={() => setIsGitHubModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Interactive Particle Universe */}
        <HeroSection
          onExploreCourses={() => {
            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreServices={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onTalkToTeam={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. Trust and Achievements (Editable Statistics) */}
        <TrustStatsSection />

        {/* 3. About UBM Pakistan (Who We Are, Mission, Vision, Values, Two Pillars) */}
        <AboutSection
          onLearnMore={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreCourses={() => {
            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 4. Professional Training Programs (10 Courses) */}
        <CoursesSection
          onSelectCourse={(course) => setSelectedCourse(course)}
          onEnrollNow={(course) => handleEnrollClick(course)}
        />

        {/* 5. Professional Ecommerce Agency Services (18 Solutions) */}
        <AgencyServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuote={(service) => handleQuoteClick(service)}
        />

        {/* 6. Why Choose UBM Pakistan? (8 Core Value Cards) */}
        <WhyChooseSection />

        {/* 7. Founder & CEO Section (Usman Iftikhar Portrait & Bio) */}
        <FounderSection />

        {/* 8. Student Feedback & Testimonials (10 Demo Reviews Carousel) */}
        <TestimonialsSection />

        {/* 9. Student Success & Agency Portfolio (Case Studies) */}
        <PortfolioSection
          onRequestSimilarProject={() => {
            scrollToContact();
          }}
        />

        {/* 10. Announcements & Latest News */}
        <AnnouncementsSection />

        {/* 11. Blog & Learning Resources (In-Depth Guides) */}
        <BlogSection
          onSelectPost={(post) => setSelectedPost(post)}
        />

        {/* 12. Frequently Asked Questions (Accordion) */}
        <FaqSection />

        {/* 13. Contact & Admission Section (WhatsApp integration & Map) */}
        <ContactAdmissionSection
          preselectedCourse={contactCourse}
          preselectedService={contactService}
        />
      </main>

      {/* Footer */}
      <Footer onOpenGitHubModal={() => setIsGitHubModalOpen(true)} />

      {/* Floating WhatsApp Contact Button */}
      <FloatingWhatsApp />

      {/* Interactive Detail Overlays */}
      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnrollNow={(course) => {
          setSelectedCourse(null);
          handleEnrollClick(course);
        }}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(service) => {
          setSelectedService(null);
          handleQuoteClick(service);
        }}
      />

      <BlogReaderModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />

      <GitHubPagesModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />

    </div>
  );
}
