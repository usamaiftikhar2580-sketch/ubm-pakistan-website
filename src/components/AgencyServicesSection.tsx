import React, { useState } from 'react';
import {
  ShoppingBag, ShieldCheck, Globe, Sparkles, Search, FileText, Layers,
  BarChart3, Truck, TrendingUp, Share2, Target, PenTool, Palette, Edit3,
  Code2, Video, Cpu, ArrowRight, MessageSquare, CheckCircle2
} from 'lucide-react';
import { AGENCY_SERVICES, Service, BRAND } from '../data/websiteData';

interface AgencyServicesSectionProps {
  onSelectService: (service: Service) => void;
  onRequestQuote: (service: Service) => void;
}

export const AgencyServicesSection: React.FC<AgencyServicesSectionProps> = ({
  onSelectService,
  onRequestQuote,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ecommerce' | 'digital'>('all');

  // Dynamic Lucide Icon Mapper
  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#19E77A]" };
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Globe': return <Globe {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Search': return <Search {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Share2': return <Share2 {...props} />;
      case 'Target': return <Target {...props} />;
      case 'PenTool': return <PenTool {...props} />;
      case 'Palette': return <Palette {...props} />;
      case 'Edit3': return <Edit3 {...props} />;
      case 'Code2': return <Code2 {...props} />;
      case 'Video': return <Video {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const filteredServices = activeTab === 'all'
    ? AGENCY_SERVICES
    : AGENCY_SERVICES.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#0B0D0E] overflow-hidden">
      
      {/* Subtle green ambient light */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#19E77A]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="agency">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
              <span>Agency & Enterprise Division</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Professional Ecommerce &{' '}
              <span className="text-[#19E77A]">Digital Solutions</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
              From launching your online business to managing and growing your digital presence, UBM Pakistan provides professional solutions designed to help businesses succeed in competitive global marketplaces.
            </p>
          </div>

          {/* Service Category Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-[#111516] border border-white/10 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              All Solutions ({AGENCY_SERVICES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ecommerce')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'ecommerce'
                  ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Ecommerce Services (9)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('digital')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'digital'
                  ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Digital Services (9)
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-[#111516] border border-white/10 hover:border-[#19E77A]/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:shadow-[#19E77A]/10 hover:-translate-y-1"
            >
              <div>
                {/* Header Icon + Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-[#0B0D0E] border border-white/10 group-hover:border-[#19E77A]/30 group-hover:bg-[#19E77A]/10 transition-colors">
                    {renderIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A7B0AC] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {service.category === 'ecommerce' ? 'Store Solution' : 'Growth Asset'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#19E77A] transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-white/5">
                  {service.deliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#A8F7C2]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#19E77A] shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Get a Quote & Details */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-[#A7B0AC] hover:text-white transition-colors cursor-pointer py-1"
                >
                  View Scope & SLAs
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={`${BRAND.contact.whatsappUrl}?text=${encodeURIComponent(
                      `Hello UBM Pakistan, I need a consultation for ${service.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Direct WhatsApp"
                    className="p-2 text-xs text-[#A8F7C2] bg-white/5 hover:bg-[#19E77A]/20 border border-white/10 hover:border-[#19E77A]/40 rounded-lg transition-all"
                    aria-label="Contact via WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#19E77A]" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onRequestQuote(service)}
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-lg transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Agency Retainer Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#111516] via-[#151A1C] to-[#111516] border border-[#19E77A]/25 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-mono text-[#19E77A] tracking-wider uppercase block mb-1">
              Custom Enterprise Retainers
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Looking for a Dedicated Remote Ecommerce Operations Team?
            </h4>
            <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed">
              We provide turnkey dedicated staffing for international brands: trained product hunters, store managers, customer support agents, and media buyers managed directly under UBM Pakistan supervision.
            </p>
          </div>
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs sm:text-sm font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-xl shadow-lg shadow-[#19E77A]/25 transition-all whitespace-nowrap"
          >
            Schedule Discovery Consultation
          </a>
        </div>

      </div>
    </section>
  );
};
