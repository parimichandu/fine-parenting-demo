import React from 'react';
import { 
  Ear, 
  Heart, 
  Sparkles, 
  MessageSquare, 
  SmilePlus, 
  Home 
} from 'lucide-react';
import { BotanicalBranch, LeafIcon } from './BotanicalElements';

export const CounsellingPhilosophy: React.FC = () => {
  const principles = [
    {
      title: 'Listen before judging.',
      description: 'Create an attentive pause. Hearing your child’s perspective first melts defensive barriers and validates their emotional reality.',
      icon: Ear,
    },
    {
      title: 'Understand before reacting.',
      description: 'Behind every challenging behaviour lies an unmet emotional need or overwhelmed nervous system seeking co-regulation.',
      icon: Heart,
    },
    {
      title: 'Encourage instead of constantly criticising.',
      description: 'Highlight effort and character over mistakes. Meaningful affirmation builds lasting intrinsic motivation and self-esteem.',
      icon: Sparkles,
    },
    {
      title: 'Build trust through communication.',
      description: 'Consistent, honest, and gentle dialogue teaches children that they can turn to their parents in times of distress without fear.',
      icon: MessageSquare,
    },
    {
      title: 'Support children’s emotional development.',
      description: 'Help children name, understand, and navigate intense feelings with patience, resilience, and compassionate guidance.',
      icon: SmilePlus,
    },
    {
      title: 'Create a safe and positive home environment.',
      description: 'A peaceful, predictable, and supportive household provides the emotional foundation where children naturally thrive.',
      icon: Home,
    },
  ];

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#FAF8F2] relative overflow-hidden">
      {/* Botanical Background Illustrations */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <BotanicalBranch className="w-96 h-28 text-sage" />
      </div>
      <div className="absolute -bottom-10 -right-10 opacity-25 pointer-events-none rotate-12">
        <BotanicalBranch className="w-80 h-32 text-sage" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 text-forest mb-4">
            <LeafIcon className="w-4 h-4 text-forest" />
            <span className="text-xs uppercase tracking-widest font-semibold">Counselling Philosophy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-tight tracking-tight">
            "Every Child Needs Understanding <br className="hidden sm:inline" />
            <span className="italic text-gold-700">Before Correction.</span>"
          </h2>

          <p className="text-forest/75 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Effective parenting does not stem from control; it grows from compassionate connection. When children feel genuinely understood, cooperation and healthy behaviour naturally follow.
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-px w-16 bg-gold/40"></span>
            <span className="w-2 h-2 rotate-45 bg-gold"></span>
            <span className="h-px w-16 bg-gold/40"></span>
          </div>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-7 border border-gold/25 hover:border-gold/60 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage/20 group-hover:bg-forest group-hover:text-ivory text-forest transition-colors flex items-center justify-center">
                    <Icon className="w-6 h-6 stroke-[1.7]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Principle 0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-forest group-hover:text-gold-700 transition-colors mb-2.5">
                  {principle.title}
                </h3>

                <p className="text-sm text-forest/75 leading-relaxed">
                  {principle.description}
                </p>

                {/* Subtle bottom botanical accent */}
                <div className="mt-5 pt-3 border-t border-sage/15 flex items-center gap-1.5 text-xs text-sage-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                  <span>Mindful Family Practice</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Quote Banner */}
        <div className="mt-14 max-w-3xl mx-auto rounded-3xl bg-forest text-ivory p-8 sm:p-10 border border-gold/40 text-center shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 opacity-10">
            <LeafIcon className="w-48 h-48 text-white" />
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-ivory leading-relaxed font-normal">
            "When we change the way we look at our children, the children we look at change."
          </p>
          <div className="mt-4 text-xs uppercase tracking-widest text-gold font-semibold">
            Fine Parenting Core Belief
          </div>
        </div>

      </div>
    </section>
  );
};

