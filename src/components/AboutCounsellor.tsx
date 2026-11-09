import React from 'react';
import { Quote, Sparkles, Check, HeartHandshake } from 'lucide-react';
import { LeafIcon } from './BotanicalElements';

export const AboutCounsellor: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F2] relative overflow-hidden">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/20 border border-sage/40 text-forest mb-3">
            <LeafIcon className="w-4 h-4 text-forest" />
            <span className="text-xs uppercase tracking-widest font-semibold">About The Counsellor</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest tracking-tight">
            My Journey in Parenting & Counselling
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-12 bg-gold/50"></span>
            <span className="w-2 h-2 rotate-45 bg-gold"></span>
            <span className="h-px w-12 bg-gold/50"></span>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Secondary Editorial Photo & Philosophy Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-premium bg-white">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src="/images/counsellor-portrait.jpg"
                    alt="Fine Parenting Counsellor in consultation"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />

                  {/* Overlaid Inspirational Quote Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-gold/30 shadow-lg text-charcoal">
                    <Quote className="w-6 h-6 text-gold mb-2 rotate-180" />
                    <p className="font-serif italic text-sm sm:text-base text-forest font-medium leading-snug">
                      "Parenting is not about raising perfect children. It is about understanding children's emotional needs and nurturing meaningful connection."
                    </p>
                    <div className="mt-3 pt-2 border-t border-sage/20 flex items-center justify-between text-xs text-forest/70">
                      <span>Counselling Psychologist</span>
                      <span className="font-semibold text-gold">PhD Candidate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Seal */}
              <div className="absolute -top-4 -left-4 bg-forest text-ivory p-3 rounded-2xl border border-gold/50 shadow-md hidden sm:flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-semibold tracking-wide">Empathetic Practice</span>
              </div>
            </div>
          </div>

          {/* Right Column — Biography */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                Clinical Empathy & Evidence-Based Guidance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mt-1">
                Understanding Children Before Correcting Behaviour
              </h3>
            </div>

            {/* Approved Client Biography */}
            <div className="space-y-4 text-base sm:text-lg text-charcoal/85 leading-relaxed">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-forest first-letter:mr-2 first-letter:float-left">
                I am a counselling psychologist, PhD candidate and parenting coach passionate about helping families navigate the challenges of modern parenting.
              </p>

              <p>
                I believe parenting is not about raising perfect children. It is about understanding children's emotional needs, encouraging independence, creating a supportive environment and developing meaningful parent-child relationships.
              </p>

              <p>
                Through parenting guidance, counselling and educational resources, Fine Parenting aims to make parenting more conscious, confident and meaningful.
              </p>
            </div>

            {/* Callout Quote */}
            <div className="p-5 rounded-2xl bg-sage/15 border-l-4 border-gold text-forest space-y-2">
              <p className="font-serif italic text-lg text-forest font-semibold">
                "My goal is to help parents understand their children rather than simply correct their behaviour."
              </p>
              <div className="flex items-center gap-2 text-xs text-forest/70">
                <HeartHandshake className="w-4 h-4 text-gold" />
                <span>Core counselling objective at Fine Parenting</span>
              </div>
            </div>

            {/* Practical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-sage/30 text-xs sm:text-sm font-medium text-forest">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Active, non-judgmental listening</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-sage/30 text-xs sm:text-sm font-medium text-forest">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Child-first emotional development</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-sage/30 text-xs sm:text-sm font-medium text-forest">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Positive discipline & communication</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-sage/30 text-xs sm:text-sm font-medium text-forest">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Parental resilience & balance</span>
              </div>
            </div>

            {/* Editorial Client Approval Note */}
            <div className="pt-2 text-[11px] text-forest/50 italic flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage"></span>
              <span>Official profile biography for Fine Parenting. Validated against authorized credentials.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

