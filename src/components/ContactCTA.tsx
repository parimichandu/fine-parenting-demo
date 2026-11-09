import React from 'react';
import { Calendar, MessageSquare, Phone, Clock, Mail } from 'lucide-react';
import { LeafIcon } from './BotanicalElements';

interface ContactCTAProps {
  onOpenConsultation: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="relative py-24 bg-forest text-ivory overflow-hidden">
      {/* Decorative leaf flourishes in top and bottom corners matching brand image */}
      <div className="absolute -top-12 -left-12 opacity-20 pointer-events-none rotate-45">
        <LeafIcon className="w-64 h-64 text-sage" />
      </div>
      <div className="absolute -bottom-12 -right-12 opacity-20 pointer-events-none -rotate-135">
        <LeafIcon className="w-64 h-64 text-sage" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold/30 text-gold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span className="text-xs uppercase tracking-widest font-semibold text-gold">
            Begin Your Conversation
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ivory leading-tight mb-6">
          Let’s Make Parenting a <br className="hidden sm:inline" />
          <span className="italic text-gold">More Meaningful Journey.</span>
        </h2>

        {/* Description */}
        <p className="text-ivory/85 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Every family has a unique story. Let's work towards building stronger connections, happier children and more confident parents.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold hover:bg-gold-600 text-forest-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all border border-gold/60"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>

          <a
            href="https://wa.me/919891676768?text=Hello%20Fine%20Parenting%2C%20I%20would%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Contact Cards */}
        <div className="mt-14 pt-10 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-gold font-semibold">Direct Helpline</div>
              <a href="tel:+919891676768" className="text-sm font-medium text-ivory hover:text-gold transition-colors">
                +91 98916 76768
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-gold font-semibold">Consultation Hours</div>
              <div className="text-sm font-medium text-ivory">Mon – Sat: 9 AM – 7 PM IST</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider text-gold font-semibold">Parent Support</div>
              <div className="text-sm font-medium text-ivory">support@fineparenting.com</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

