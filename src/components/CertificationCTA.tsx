import React from 'react';
import { Award, Video, UsersRound, BookOpen, ArrowRight } from 'lucide-react';
import { BotanicalBranch } from './BotanicalElements';

interface CertificationCTAProps {
  onOpenCertification: () => void;
}

export const CertificationCTA: React.FC<CertificationCTAProps> = ({ onOpenCertification }) => {
  return (
    <section id="certification" className="py-20 lg:py-24 bg-ivory relative overflow-hidden">
      {/* Background ambient decoration */}
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
        <BotanicalBranch className="w-80 h-32 text-sage" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-forest-800 via-forest to-forest-900 text-ivory p-8 sm:p-12 lg:p-16 border-2 border-gold/40 shadow-premium overflow-hidden">
          
          {/* Subtle gold line embellishment */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-gold/20 pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-gold/20 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 border border-gold/40 text-gold-300">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                  Professional Development
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory leading-tight">
                Become a Certified <br className="hidden sm:inline" />
                <span className="italic text-gold">Parenting Coach</span>
              </h2>

              <p className="text-ivory/85 text-base sm:text-lg leading-relaxed max-w-xl">
                Explore our live Parenting Coach Certification Program and discover opportunities to develop your parenting coaching knowledge.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenCertification}
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gold hover:bg-gold-600 text-forest-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all group"
                >
                  <span>Enquire About Certification</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-[11px] text-ivory/60 italic pt-1">
                * Course modules, interactive schedule, and syllabus provided upon enquiry.
              </p>
            </div>

            {/* Right Highlights Cards */}
            <div className="lg:col-span-5 space-y-3.5">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
                  <Video className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-ivory">Live & Interactive Sessions</h4>
                  <p className="text-xs text-ivory/70 mt-0.5">Participate in engaging real-time discussions and Q&As.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
                  <UsersRound className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-ivory">Expert Guidance</h4>
                  <p className="text-xs text-ivory/70 mt-0.5">Mentored by our Counselling Psychologist & PhD Candidate.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-ivory">Certification Program</h4>
                  <p className="text-xs text-ivory/70 mt-0.5">Practical coaching frameworks for modern family dynamics.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

