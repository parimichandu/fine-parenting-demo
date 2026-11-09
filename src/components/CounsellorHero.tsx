import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BotanicalBranch } from './BotanicalElements';

interface CounsellorHeroProps {
  onOpenConsultation: () => void;
}

export const CounsellorHero: React.FC<CounsellorHeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FAF8F2]">
      {/* Decorative ambient background elements */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-sage/10 via-peach/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-10 -right-10 opacity-30 pointer-events-none hidden lg:block">
        <BotanicalBranch className="w-80 h-32 text-sage" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE — COUNSELLOR PHOTOGRAPH (Editorial Frame) */}
          <div className="lg:col-span-5 order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Outer decorative backing layer */}
              <div className="absolute -inset-2.5 rounded-[2rem] bg-gradient-to-tr from-sage/40 via-gold/20 to-peach/30 -rotate-1 shadow-soft" />
              
              {/* Editorial Frame */}
              <div className="relative rounded-[1.75rem] overflow-hidden border-2 border-gold/40 shadow-premium bg-white">
                {/* Counsellor original portrait */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-forest/5">
                  <img
                    src="/images/counsellor-portrait.jpg"
                    alt="Counselling Psychologist & Founder, Fine Parenting"
                    className="w-full h-full object-cover object-top contrast-[1.02] brightness-[1.01] transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle editorial warm lighting gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Identification Pill at bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-ivory pointer-events-none">
                    <div className="bg-forest-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/30 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-xs font-medium tracking-wide">Available for Consultations</span>
                    </div>
                    <div className="bg-gold/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-forest-950 tracking-wider">
                      PhD Candidate
                    </div>
                  </div>
                </div>

                {/* Subtle caption strip */}
                <div className="py-3 px-4 bg-ivory-100 border-t border-sage/20 flex items-center justify-between text-xs text-forest/80">
                  <span className="font-serif italic">Fine Parenting • Founder Profile</span>
                  <span className="flex items-center gap-1 text-gold-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    Verified Practitioner
                  </span>
                </div>
              </div>

              {/* Floating Badge: Clinical Empathy */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-md border border-gold/35 rounded-2xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-peach/30 text-forest flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gold">Compassionate Care</div>
                  <div className="text-xs font-semibold text-forest">Empathetic Guidance</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — INTRODUCTION */}
          <div className="lg:col-span-7 order-2 space-y-6">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold-700">
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-700">
                MEET YOUR PARENTING GUIDE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest leading-[1.18]">
              Empowering Parents. <br className="hidden sm:inline" />
              <span className="text-forest/90 italic">Nurturing Stronger Families.</span>
            </h1>

            {/* Professional Designation */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-gold tracking-wide">
              <span>Counselling Psychologist</span>
              <span className="text-sage font-bold">•</span>
              <span>PhD Candidate</span>
              <span className="text-sage font-bold">•</span>
              <span>Parenting Coach</span>
            </div>

            {/* Subtle Divider */}
            <div className="w-20 h-0.5 bg-gold/60"></div>

            {/* Introduction Copy */}
            <div className="space-y-4 text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal">
              <p>
                Welcome to Fine Parenting. I believe that every child deserves to grow in an environment filled with understanding, encouragement, emotional support and positive guidance.
              </p>
              <p className="text-forest/90 font-medium">
                My approach focuses on helping parents understand their children's behaviour, build meaningful connections and develop healthier parenting practices.
              </p>
            </div>

            {/* Actions: Connect With Me & WhatsApp */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-forest hover:bg-forest-700 text-ivory font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition-all group border border-gold/40"
              >
                <span>Connect With Me</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/919891676768?text=Hello%20Fine%20Parenting%2C%20I%20would%20like%20to%20connect%20with%20the%20counsellor."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-ivory-200 text-forest font-semibold text-sm tracking-wide border border-sage/40 shadow-sm hover:shadow transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Indicator */}
            <div className="pt-4 border-t border-sage/20 flex flex-wrap items-center gap-6 text-xs text-forest/75">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span>Individualized family guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span>Evidence-based psychological insight</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                <span>Non-judgmental, compassionate space</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

