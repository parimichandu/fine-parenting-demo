import React from 'react';
import { CheckCircle2, HeartHandshake } from 'lucide-react';

export const MyApproachCard: React.FC<{ className?: string }> = ({ className = "" }) => {
  const approaches = [
    {
      title: "Understand the child's world",
      detail: "Looking beyond surface reactions to see what emotional needs drive their behaviour.",
    },
    {
      title: "Build positive communication",
      detail: "Shifting from criticism and lecturing to connection and open, non-defensive dialogue.",
    },
    {
      title: "Guide with empathy, not fear",
      detail: "Replacing punitive methods with gentle limits and collaborative problem-solving.",
    },
    {
      title: "Strengthen family relationships",
      detail: "Creating lasting emotional safety where both parents and children feel respected.",
    },
  ];

  return (
    <div className={`rounded-3xl bg-sage/15 border border-sage/40 p-6 sm:p-7 shadow-soft ${className}`}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest">
          My Approach
        </h3>
        <span className="p-2 rounded-xl bg-forest/10 text-forest">
          <HeartHandshake className="w-5 h-5 text-forest" />
        </span>
      </div>

      <div className="space-y-4">
        {approaches.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5 fill-forest/20" />
            <div>
              <div className="text-sm font-semibold text-forest leading-snug">
                {item.title}
              </div>
              <div className="text-xs text-forest/70 mt-0.5 leading-relaxed">
                {item.detail}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-sage/25 text-[11px] text-forest/70 italic flex items-center justify-between">
        <span>Grounded in developmental psychology</span>
        <span className="font-medium text-gold-700">Client-First Care</span>
      </div>
    </div>
  );
};
