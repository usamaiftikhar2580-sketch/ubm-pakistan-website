import React from 'react';
import { X, Clock, BarChart, CheckCircle2, MessageSquare, ArrowRight, Wrench, Users, BookOpen } from 'lucide-react';
import { Course, BRAND } from '../data/websiteData';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnrollNow: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnrollNow,
}) => {
  if (!course) return null;

  const whatsappInquiryUrl = `${BRAND.contact.whatsappUrl}?text=${encodeURIComponent(
    `Hello UBM Pakistan Team, I am interested in enrolling in "${course.title}". Please share current batch timings and admission details.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#111516] border border-[#19E77A]/30 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#151A1C] to-[#0B0D0E] border-b border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-[#A7B0AC] hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#19E77A] bg-[#19E77A]/10 px-2.5 py-0.5 rounded border border-[#19E77A]/20">
              {course.badge}
            </span>
            <span className="text-xs text-[#A7B0AC] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#19E77A]" />
              {course.duration}
            </span>
            <span className="text-xs text-[#A7B0AC] flex items-center gap-1">
              <BarChart className="w-3.5 h-3.5 text-[#19E77A]" />
              {course.level}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            {course.title}
          </h3>
          <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[65vh] overflow-y-auto">
          
          {/* Key Course Highlights */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8F7C2] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#19E77A]" />
              Key Course Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#0B0D0E] border border-white/5 text-xs sm:text-sm text-[#A7B0AC]">
                  <span className="text-[#19E77A] font-bold">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Syllabus Roadmap */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#A8F7C2] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#19E77A]" />
              Curriculum Roadmap & Module Breakdown
            </h4>
            <div className="space-y-3">
              {course.syllabus.map((module, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0B0D0E] border border-white/10 hover:border-[#19E77A]/30 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-[#19E77A] font-semibold">{module.week}</span>
                    <span className="text-xs text-white font-medium">{module.topic}</span>
                  </div>
                  <p className="text-xs text-[#A7B0AC] leading-relaxed">{module.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Audience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0B0D0E] border border-white/5">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#19E77A]" />
                Tools & Software Covered
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {course.tools.map((tool, idx) => (
                  <span key={idx} className="text-xs px-2 py-0.5 rounded bg-white/5 text-[#A8F7C2] border border-white/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0D0E] border border-white/5">
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#19E77A]" />
                Ideal For
              </h5>
              <p className="text-xs text-[#A7B0AC] leading-relaxed">
                {course.audience}
              </p>
            </div>
          </div>

          {/* Notice on transparent fees and certificates */}
          <div className="p-3 rounded-lg bg-[#151A1C] border border-white/10 text-xs text-[#A7B0AC]">
            <strong className="text-white">Admission Notice:</strong> In line with UBM Pakistan policy, fee schedules and current batch timetable are shared directly during admission counseling. Contact our team below to verify availability.
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#0B0D0E] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#A7B0AC] hover:text-white transition-colors cursor-pointer"
          >
            Close Overview
          </button>

          <div className="flex items-center gap-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#A8F7C2] bg-[#111516] border border-[#19E77A]/30 rounded-xl hover:bg-[#19E77A]/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#19E77A]" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onEnrollNow(course);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-xl shadow-lg shadow-[#19E77A]/25 transition-all cursor-pointer"
            >
              <span>Enroll in This Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
