import React from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';
import { Service, BRAND } from '../data/websiteData';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onRequestQuote: (service: Service) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  const whatsappInquiryUrl = `${BRAND.contact.whatsappUrl}?text=${encodeURIComponent(
    `Hello UBM Pakistan Agency, I would like to inquire about your "${service.title}" services. Please share scope and pricing details.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#111516] border border-[#19E77A]/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#171C1E] to-[#0B0D0E] border-b border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-[#A7B0AC] hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#19E77A] bg-[#19E77A]/10 px-2.5 py-0.5 rounded border border-[#19E77A]/20">
              {service.category === 'ecommerce' ? 'Ecommerce Solution' : 'Digital Growth Service'}
            </span>
            <span className="text-xs text-[#A7B0AC] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#19E77A]" />
              {service.timeline}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            {service.title}
          </h3>
          <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Key Deliverables */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8F7C2] mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#19E77A]" />
              Scope of Work & Deliverables
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0B0D0E] border border-white/5 text-xs sm:text-sm text-[#FFFFFF]">
                  <CheckCircle2 className="w-4 h-4 text-[#19E77A] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8F7C2] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#19E77A]" />
              Business Benefits for Your Brand
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#0B0D0E] border border-[#19E77A]/15 text-xs text-[#A7B0AC] flex flex-col justify-between">
                  <span className="font-semibold text-white mb-1">0{idx + 1}. Outcome</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise SLA Note */}
          <div className="p-4 rounded-xl bg-[#151A1C] border border-white/10 text-xs text-[#A7B0AC] leading-relaxed">
            <strong className="text-white block mb-1">Confidentiality & Dedicated Communication:</strong>
            All UBM Pakistan agency client contracts include Non-Disclosure Agreements (NDAs), dedicated Slack / WhatsApp communication channels, and bi-weekly executive review meetings.
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#0B0D0E] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
          >
            Back to Services
          </button>

          <div className="flex items-center gap-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#A8F7C2] bg-[#111516] border border-[#19E77A]/30 rounded-xl hover:bg-[#19E77A]/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#19E77A]" />
              <span>Contact Us</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(service);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-xl shadow-lg shadow-[#19E77A]/25 transition-all cursor-pointer"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
