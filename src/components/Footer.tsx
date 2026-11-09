import React from 'react';
import { MessageSquare, Phone, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenCertification: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenCertification }) => {
  return (
    <footer className="bg-forest-950 text-ivory/80 pt-16 pb-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/60 shadow-md">
                <img
                  src="/images/fine-parenting-logo.jpg"
                  alt="Fine Parenting Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-ivory block">
                  FINE PARENTING
                </span>
                <span className="text-xs uppercase tracking-widest text-gold font-medium">
                  Making Parenting Easy.
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory/70 leading-relaxed max-w-sm pt-2">
              Empowering parents and nurturing stronger families through compassionate psychological guidance, understanding, and evidence-based positive parenting practices.
            </p>

            <div className="flex items-center gap-2 text-xs text-gold">
              <ShieldCheck className="w-4 h-4" />
              <span>Counselling Psychologist • PhD Candidate • Parenting Coach</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors">
                  Meet Your Parenting Guide
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">
                  About the Counsellor
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-gold transition-colors">
                  Areas of Expertise
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-gold transition-colors">
                  Counselling Philosophy
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold transition-colors">
                  Why Fine Parenting?
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenCertification}
                  className="hover:text-gold transition-colors text-left"
                >
                  Parenting Coach Certification
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Enquiries */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Direct Contact & Support
            </h4>
            <p className="text-sm text-ivory/70">
              Have questions about counselling sessions or the coaching certification? Connect directly with us.
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href="https://wa.me/919891676768"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-ivory text-sm border border-white/10 transition-colors w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: +91 98916 76768</span>
              </a>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-600 text-forest-950 font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <span>Book Private Consultation</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <div>
            © {new Date().getFullYear()} FINE PARENTING. All rights reserved. Making Parenting Easy.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-peach fill-peach inline" />
            <span>for conscious, mindful families</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

