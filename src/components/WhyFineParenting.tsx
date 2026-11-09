import React from 'react';
import { HeartHandshake, ShieldCheck, Compass, Lightbulb } from 'lucide-react';
import { GoldDivider } from './BotanicalElements';

export const WhyFineParenting: React.FC = () => {
  const features = [
    {
      title: 'UNDERSTANDING',
      tagline: "Children's inner world decoded",
      description: "Understand children's feelings, thoughts and behaviour through developmental psychology and gentle observation.",
      icon: Lightbulb,
      accent: 'from-gold/20 to-gold/5',
    },
    {
      title: 'EMPATHY',
      tagline: 'Compassion at the forefront',
      description: 'Approach parenting challenges with compassion, removing guilt and fostering deep emotional resonance.',
      icon: HeartHandshake,
      accent: 'from-peach/30 to-peach/5',
    },
    {
      title: 'POSITIVE GUIDANCE',
      tagline: 'Constructive growth principles',
      description: 'Encourage healthy communication, intrinsic cooperation, and holistic emotional and intellectual development.',
      icon: Compass,
      accent: 'from-sage/30 to-sage/5',
    },
    {
      title: 'PARENTAL CONFIDENCE',
      tagline: 'Empowered, calm decision-making',
      description: 'Help parents feel more informed, peaceful, and confident in navigating everyday family complexities.',
      icon: ShieldCheck,
      accent: 'from-forest/15 to-forest/5',
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Our Commitment To Families
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mt-2">
            Why Fine Parenting?
          </h2>
          <p className="text-forest/70 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            A compassionate bridge between child psychology and modern family living, making parenting joyful, calm, and fulfilling.
          </p>
          <GoldDivider className="my-6" />
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-ivory rounded-3xl p-7 border border-sage/30 hover:border-gold/50 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-sage/40 text-forest group-hover:text-gold group-hover:border-gold/50 transition-all flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 stroke-[1.7]" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-xl font-bold text-forest tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-gold-700 uppercase tracking-wide mb-3">
                    {item.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-forest/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-sage/20 flex items-center gap-2">
                  <div className="h-1 w-8 rounded-full bg-gold/70 group-hover:w-16 transition-all duration-300"></div>
                  <span className="text-[11px] font-medium text-forest/60">Fine Parenting Pillar</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

