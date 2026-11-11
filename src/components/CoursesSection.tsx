import React, { useState } from 'react';
import { Clock, BarChart, ArrowRight, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { COURSES, Course, BRAND } from '../data/websiteData';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onEnrollNow: (course: Course) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onEnrollNow,
}) => {
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'marketing' | 'creative'>('all');

  const filteredCourses = filter === 'all'
    ? COURSES
    : COURSES.filter((c) => c.category === filter);

  return (
    <section id="courses" className="relative py-20 lg:py-28 bg-[#111516] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#19E77A]" />
              <span>Training Programs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Explore Our Professional{' '}
              <span className="text-[#19E77A]">Training Programs</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A7B0AC] leading-relaxed">
              Learn in-demand digital skills through practical training, expert guidance, and real-world projects. Every curriculum is updated for global marketplace standards.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#0B0D0E] border border-white/10 rounded-xl">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              All Programs ({COURSES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('ecommerce')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'ecommerce'
                  ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Ecommerce Tracks
            </button>
            <button
              type="button"
              onClick={() => setFilter('marketing')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'marketing'
                  ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Marketing
            </button>
            <button
              type="button"
              onClick={() => setFilter('creative')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'creative'
                  ? 'bg-[#19E77A] text-[#0B0D0E] shadow-sm'
                  : 'text-[#A7B0AC] hover:text-white'
              }`}
            >
              Creative & Tech
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl bg-[#0B0D0E] border border-white/10 hover:border-[#19E77A]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#19E77A]/10 hover:-translate-y-1"
            >
              {/* Card Header & Visual Theme Accent */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Metadata Row */}
                  <div className="flex items-center justify-between gap-2 mb-4 text-xs">
                    <span className="font-mono text-[#19E77A] bg-[#19E77A]/10 px-2 py-0.5 rounded border border-[#19E77A]/20">
                      {course.badge}
                    </span>
                    <div className="flex items-center gap-3 text-[#A7B0AC] text-[11px]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#19E77A]" />
                        {course.duration}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <BarChart className="w-3 h-3 text-[#19E77A]" />
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#19E77A] transition-colors mb-2.5 leading-snug">
                    {course.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#A7B0AC] leading-relaxed mb-5 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {course.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#A8F7C2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#19E77A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software Tools Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5 mb-4">
                  {course.tools.slice(0, 3).map((tool, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#A7B0AC] border border-white/5 font-mono">
                      {tool}
                    </span>
                  ))}
                  {course.tools.length > 3 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-[#19E77A] font-mono">
                      +{course.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons: Learn More & Enroll Now */}
              <div className="p-4 sm:p-5 bg-[#111516] border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectCourse(course)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#A7B0AC] hover:text-white transition-colors cursor-pointer py-1"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#19E77A]" />
                  <span>Learn More</span>
                </button>

                <button
                  type="button"
                  onClick={() => onEnrollNow(course)}
                  className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold text-[#0B0D0E] bg-[#19E77A] hover:bg-[#A8F7C2] rounded-lg shadow-md shadow-[#19E77A]/20 transition-all cursor-pointer active:scale-95"
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Inquire on custom corporate training / batch timing */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B0D0E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white mb-1">
              Need custom guidance on choosing the right training program?
            </h4>
            <p className="text-xs sm:text-sm text-[#A7B0AC]">
              Our academic counselors review your background and recommend the most profitable path.
            </p>
          </div>
          <a
            href={BRAND.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-[#0B0D0E] bg-[#A8F7C2] hover:bg-[#19E77A] rounded-xl transition-all whitespace-nowrap"
          >
            Ask Counselor on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
