import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Briefcase, FolderCheck, Edit2 } from 'lucide-react';
import { BRAND } from '../data/websiteData';

export const TrustStatsSection: React.FC = () => {
  // Counters animation state
  const [counts, setCounts] = useState({
    students: 0,
    programs: 0,
    services: 0,
    projects: 0,
  });

  useEffect(() => {
    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    const animateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        students: Math.floor(ease * 1500),
        programs: Math.floor(ease * 10),
        services: Math.floor(ease * 18),
        projects: Math.floor(ease * 250),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      }
    };

    const frameId = requestAnimationFrame(animateCounters);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const statCards = [
    {
      id: 'students',
      label: 'Students & Learners',
      value: `${counts.students.toLocaleString()}+`,
      subtitle: 'Cohort learners & community members',
      icon: Users,
      badge: 'Editable Placeholder'
    },
    {
      id: 'programs',
      label: 'Professional Training Programs',
      value: `${counts.programs} Tracks`,
      subtitle: 'Market-verified practical curricula',
      icon: GraduationCap,
      badge: 'Active Offerings'
    },
    {
      id: 'services',
      label: 'Digital Agency Services',
      value: `${counts.services}+ Solutions`,
      subtitle: 'Ecommerce management & marketing',
      icon: Briefcase,
      badge: 'Turnkey Solutions'
    },
    {
      id: 'projects',
      label: 'Projects & Client Work',
      value: `${counts.projects}+ Delivered`,
      subtitle: 'Stores launched & client campaigns',
      icon: FolderCheck,
      badge: 'Client Work'
    },
  ];

  return (
    <section id="stats" className="relative py-16 bg-[#111516] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#19E77A] uppercase tracking-wider mb-2">
            <span>Institutional Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            Building Skills. Creating Opportunities.
          </h2>
          <p className="text-sm sm:text-base text-[#A7B0AC]">
            Empowering Pakistani talent with hands-on ecommerce mastery while serving international enterprise clients.
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#A7B0AC]/80 bg-black/40 px-2.5 py-1 rounded border border-white/5">
            <Edit2 className="w-3 h-3 text-[#19E77A]" />
            <span>Benchmark figures are adjustable in administrative settings</span>
          </div>
        </div>

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="group relative p-6 rounded-xl bg-[#0B0D0E] border border-white/10 hover:border-[#19E77A]/40 transition-all duration-300 shadow-lg hover:shadow-[#19E77A]/10 flex flex-col justify-between"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#19E77A]/5 rounded-bl-full group-hover:bg-[#19E77A]/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[#111516] border border-white/10 text-[#19E77A] group-hover:bg-[#19E77A] group-hover:text-[#0B0D0E] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-[#A7B0AC] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight mb-1 tabular-nums group-hover:text-[#19E77A] transition-colors">
                    {stat.value}
                  </div>

                  <h3 className="text-sm font-semibold text-[#A8F7C2] mb-1">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs text-[#A7B0AC] pt-2 border-t border-white/5">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
