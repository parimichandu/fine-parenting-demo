import React from 'react';
import { Users, GraduationCap, Award } from 'lucide-react';

export const ProfessionalHighlights: React.FC = () => {
  const stats = [
    {
      metric: '500+',
      label: 'Parents Counselled',
      description: 'Guiding families through behavioral challenges, mindful communication, and emotional resilience.',
      icon: Users,
    },
    {
      metric: 'PhD',
      label: 'Candidate',
      description: 'Engaged in advanced psychological research focusing on positive parent-child dynamics and child development.',
      icon: GraduationCap,
    },
    {
      metric: 'Parenting Coach',
      label: 'Certification Program',
      description: 'Leading comprehensive live interactive training programs for aspiring parenting educators and coaches.',
      icon: Award,
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 border border-gold/30 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle gold top indicator accent */}
              <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-2xl bg-ivory-200 border border-gold/20 text-gold group-hover:scale-105 group-hover:bg-gold/10 transition-all">
                  <Icon className="w-6 h-6 stroke-[1.6]" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-forest/40">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-1">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-forest tracking-tight">
                  {stat.metric}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-gold-700">
                  {stat.label}
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-forest/70 leading-relaxed">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

