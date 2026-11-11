import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { BRAND } from '../data/websiteData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const presets = [
    { label: "Enroll in eBay Business Training", text: "Hello UBM Pakistan, I want to enroll in the upcoming eBay Business training batch." },
    { label: "Shopify Agency Services Quote", text: "Hello UBM Pakistan Agency, I need a proposal to build and manage our Shopify store." },
    { label: "Amazon Account Management Inquiry", text: "Hello, I am looking for Amazon account management and product hunting services." },
    { label: "Consult with Usman Iftikhar", text: "Hello Usman Iftikhar, I would like to schedule a business consultation with you." },
  ];

  const handleSendPreset = (text: string) => {
    const url = `https://wa.me/923040880992?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Chat Popup Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#111516] border border-[#19E77A]/30 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#171C1E] to-[#0B0D0E] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#19E77A]/20 border border-[#19E77A] flex items-center justify-center text-[#19E77A]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">UBM Pakistan Helpline</h4>
                <p className="text-[10px] text-[#19E77A] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#19E77A] animate-pulse" />
                  Official WhatsApp (+923040880992)
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-[#A7B0AC] hover:text-white"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Presets */}
          <div className="p-4 space-y-2">
            <p className="text-[11px] text-[#A7B0AC]">
              Select a quick question or message our team directly:
            </p>
            {presets.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendPreset(preset.text)}
                className="w-full text-left p-2.5 rounded-lg bg-[#0B0D0E] border border-white/5 hover:border-[#19E77A]/40 text-xs text-white hover:text-[#19E77A] transition-all flex items-center justify-between group cursor-pointer"
              >
                <span className="truncate">{preset.label}</span>
                <Send className="w-3 h-3 text-[#19E77A] group-hover:translate-x-0.5 transition-transform" />
              </button>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="p-3 bg-[#0B0D0E] border-t border-white/10">
            <a
              href="https://wa.me/923040880992"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-[#19E77A] hover:bg-[#A8F7C2] text-[#0B0D0E] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Start WhatsApp Conversation</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#111516] border border-[#19E77A]/40 text-white shadow-2xl shadow-[#19E77A]/30 hover:bg-[#19E77A] hover:text-[#0B0D0E] transition-all duration-300 cursor-pointer active:scale-95"
        aria-label="Open WhatsApp Support"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-[#19E77A] group-hover:text-[#0B0D0E] transition-colors" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#19E77A] rounded-full animate-ping group-hover:hidden" />
        </div>
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
};
