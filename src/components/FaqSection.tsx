import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, BRAND } from '../data/websiteData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-20 lg:py-28 bg-[#111516] border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#19E77A]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-[#19E77A]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
            Clear answers regarding our training institute, batch enrollments, agency retainers, and mentorship methodology.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#0B0D0E] border border-white/10 hover:border-[#19E77A]/30 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#19E77A]">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-white/5 text-[#19E77A] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-[#19E77A]/15' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A7B0AC] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B0D0E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-1">
              Have a question not listed here?
            </h4>
            <p className="text-xs text-[#A7B0AC]">
              Our counselors and agency directors are available to answer your specific queries.
            </p>
          </div>
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-lg transition-all whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
