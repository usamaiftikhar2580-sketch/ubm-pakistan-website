import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle, Clock, ShieldCheck } from 'lucide-react';
import { BRAND, COURSES, AGENCY_SERVICES, Course, Service } from '../data/websiteData';

interface ContactAdmissionSectionProps {
  preselectedCourse?: Course | null;
  preselectedService?: Service | null;
}

export const ContactAdmissionSection: React.FC<ContactAdmissionSectionProps> = ({
  preselectedCourse,
  preselectedService,
}) => {
  const [inquiryType, setInquiryType] = useState<'admission' | 'agency' | 'general'>(
    preselectedService ? 'agency' : 'admission'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    selectedCourse: preselectedCourse?.title || COURSES[0].title,
    selectedService: preselectedService?.title || AGENCY_SERVICES[0].title,
    batchPreference: 'Weekend Cohort (Sat - Sun)',
    businessType: 'Existing Seller / Store Owner',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Validate form fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) newErrors.whatsapp = 'Valid WhatsApp number is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your inquiry';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit via WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    let text = `*New Inquiry - UBM Pakistan Website*\n`;
    text += `*Type:* ${inquiryType.toUpperCase()}\n`;
    text += `*Name:* ${formData.name}\n`;
    text += `*Email:* ${formData.email}\n`;
    text += `*WhatsApp:* ${formData.whatsapp}\n`;

    if (inquiryType === 'admission') {
      text += `*Course:* ${formData.selectedCourse}\n`;
      text += `*Batch Preference:* ${formData.batchPreference}\n`;
    } else if (inquiryType === 'agency') {
      text += `*Service:* ${formData.selectedService}\n`;
      text += `*Business Profile:* ${formData.businessType}\n`;
    }

    text += `*Message:* ${formData.message}\n`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/923040880992?text=${encoded}`;
    
    setSubmittedSuccess(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // Standard Form submit (Formspree or simulated confirmation for static deployment)
  const handleStandardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmittedSuccess(true);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#0B0D0E] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#19E77A]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Start Your Journey with <span className="text-[#19E77A]">UBM Pakistan</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
            Apply for upcoming course batches, request a custom agency proposal, or speak directly with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111516] border border-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Official Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-[#A7B0AC]">
                We respond promptly across phone, WhatsApp, and email during business hours.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Phone / WhatsApp */}
                <a
                  href="https://wa.me/923040880992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B0D0E] border border-white/5 hover:border-[#19E77A]/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#111516] border border-white/10 text-[#19E77A] group-hover:bg-[#19E77A] group-hover:text-[#0B0D0E] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A7B0AC] block font-mono">Phone & WhatsApp</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#19E77A] transition-colors">
                      {BRAND.contact.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B0D0E] border border-white/5 hover:border-[#19E77A]/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#111516] border border-white/10 text-[#19E77A] group-hover:bg-[#19E77A] group-hover:text-[#0B0D0E] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A7B0AC] block font-mono">Official Email</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#19E77A] transition-colors break-all">
                      {BRAND.contact.email}
                    </span>
                  </div>
                </a>

                {/* Office / Campus Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0B0D0E] border border-white/5">
                  <div className="p-2.5 rounded-lg bg-[#111516] border border-white/10 text-[#19E77A]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A7B0AC] block font-mono">Headquarters Location</span>
                    <span className="text-sm font-bold text-white">
                      {BRAND.contact.address}
                    </span>
                  </div>
                </div>

              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-xl bg-[#0B0D0E] border border-white/5 flex items-center justify-between text-xs text-[#A7B0AC]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#19E77A]" />
                  <span>Support Hours:</span>
                </div>
                <span className="text-white font-medium">Mon – Sat (10:00 AM – 8:00 PM PKT)</span>
              </div>
            </div>

            {/* Google Maps Location Preview */}
            <div className="rounded-2xl overflow-hidden bg-[#111516] border border-white/10 shadow-xl">
              <div className="p-4 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#19E77A]" />
                  Campus Location Map
                </span>
                <span className="text-[#19E77A] font-mono text-[11px]">Lahore, Pakistan</span>
              </div>
              <div className="relative w-full h-56 bg-[#0e1111]">
                <iframe
                  title="UBM Pakistan Campus Map"
                  src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#111516] border border-white/10 shadow-2xl">
              
              {/* Type Switcher */}
              <div className="flex items-center gap-1.5 p-1 bg-[#0B0D0E] border border-white/10 rounded-xl mb-8">
                <button
                  type="button"
                  onClick={() => setInquiryType('admission')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    inquiryType === 'admission'
                      ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                      : 'text-[#A7B0AC] hover:text-white'
                  }`}
                >
                  Admission Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('agency')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    inquiryType === 'agency'
                      ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                      : 'text-[#A7B0AC] hover:text-white'
                  }`}
                >
                  Agency / Services
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('general')}
                  className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    inquiryType === 'general'
                      ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                      : 'text-[#A7B0AC] hover:text-white'
                  }`}
                >
                  General Contact
                </button>
              </div>

              {submittedSuccess ? (
                <div className="p-8 rounded-xl bg-[#0B0D0E] border border-[#19E77A]/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#19E77A]/15 border border-[#19E77A] mx-auto flex items-center justify-center text-[#19E77A]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Inquiry Form Generated!</h4>
                  <p className="text-sm text-[#A7B0AC] max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formatted. If WhatsApp did not open automatically, click the button below to send it directly to our counselor team.
                  </p>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/923040880992?text=${encodeURIComponent(
                        `Inquiry from ${formData.name} regarding ${
                          inquiryType === 'admission' ? formData.selectedCourse : formData.selectedService
                        }: ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 text-xs sm:text-sm font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-xl transition-all"
                    >
                      Open WhatsApp Chat
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          whatsapp: '',
                          selectedCourse: COURSES[0].title,
                          selectedService: AGENCY_SERVICES[0].title,
                          batchPreference: 'Weekend Cohort (Sat - Sun)',
                          businessType: 'Existing Seller / Store Owner',
                          message: '',
                        });
                      }}
                      className="px-4 py-2.5 text-xs text-[#A7B0AC] hover:text-white"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
                  
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Your Full Name <span className="text-[#19E77A]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Usman Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white placeholder-[#A7B0AC]/50 text-sm focus:outline-none focus:border-[#19E77A] transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email & WhatsApp 2-col */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">
                        Email Address <span className="text-[#19E77A]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white placeholder-[#A7B0AC]/50 text-sm focus:outline-none focus:border-[#19E77A] transition-colors"
                      />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5">
                        WhatsApp Number <span className="text-[#19E77A]">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white placeholder-[#A7B0AC]/50 text-sm focus:outline-none focus:border-[#19E77A] transition-colors"
                      />
                      {errors.whatsapp && <p className="text-[11px] text-red-400 mt-1">{errors.whatsapp}</p>}
                    </div>
                  </div>

                  {/* Conditional Course / Service selector */}
                  {inquiryType === 'admission' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white mb-1.5">
                          Select Training Track
                        </label>
                        <select
                          value={formData.selectedCourse}
                          onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#19E77A] transition-colors"
                        >
                          {COURSES.map((c) => (
                            <option key={c.id} value={c.title} className="bg-[#111516] text-white">
                              {c.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white mb-1.5">
                          Batch Timing Preference
                        </label>
                        <select
                          value={formData.batchPreference}
                          onChange={(e) => setFormData({ ...formData, batchPreference: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#19E77A] transition-colors"
                        >
                          <option value="Weekend Cohort (Sat - Sun)" className="bg-[#111516]">Weekend Cohort (Sat - Sun)</option>
                          <option value="Weekday Evening (Mon - Thu)" className="bg-[#111516]">Weekday Evening (Mon - Thu)</option>
                          <option value="Online Virtual Classes (Remote)" className="bg-[#111516]">Online Virtual Classes (Remote)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {inquiryType === 'agency' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-white mb-1.5">
                          Select Agency Service
                        </label>
                        <select
                          value={formData.selectedService}
                          onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#19E77A] transition-colors"
                        >
                          {AGENCY_SERVICES.map((s) => (
                            <option key={s.id} value={s.title} className="bg-[#111516] text-white">
                              {s.title} ({s.category})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-white mb-1.5">
                          Current Business Profile
                        </label>
                        <select
                          value={formData.businessType}
                          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white text-sm focus:outline-none focus:border-[#19E77A] transition-colors"
                        >
                          <option value="Brand Manufacturer / Exporter" className="bg-[#111516]">Brand Manufacturer / Exporter</option>
                          <option value="Active Store Owner" className="bg-[#111516]">Active Store Owner</option>
                          <option value="New Store Launch / Investor" className="bg-[#111516]">New Store Launch / Investor</option>
                          <option value="Individual Seeking Dedicated VA" className="bg-[#111516]">Individual Seeking Dedicated VA</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5">
                      Your Message / Specific Requirements <span className="text-[#19E77A]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder={
                        inquiryType === 'admission'
                          ? 'Tell us about your background, goals, and any previous ecommerce experience...'
                          : 'Describe your store URL, target marketplaces, and the challenges you need help solving...'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0D0E] border border-white/10 text-white placeholder-[#A7B0AC]/50 text-sm focus:outline-none focus:border-[#19E77A] transition-colors resize-none"
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button Options */}
                  <div className="pt-3 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] shadow-lg shadow-[#19E77A]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Submit Inquiry via WhatsApp (Instant Reply)</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleStandardSubmit}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-[#A7B0AC] hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer"
                    >
                      Or Submit as Standard Web Inquiry (Configurable Formspree)
                    </button>
                  </div>

                  {/* GitHub Pages & Static Compliance Note */}
                  <p className="text-[11px] text-center text-[#A7B0AC] pt-2">
                    Direct integration with official WhatsApp: <strong className="text-white">+923040880992</strong>. 100% static & GitHub Pages compatible.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
