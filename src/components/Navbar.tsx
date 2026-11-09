import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Certification', href: '#certification' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-sage/20 py-2.5'
          : 'bg-ivory/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-gold/60 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/fine-parenting-logo.jpg"
                alt="Fine Parenting Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-forest group-hover:text-gold transition-colors">
                FINE PARENTING
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest uppercase text-forest/70 -mt-0.5">
                Making Parenting Easy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-forest/80 hover:text-gold hover:underline decoration-gold underline-offset-8 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/919891676768"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium text-forest bg-sage/20 hover:bg-sage/35 border border-sage/40 transition-all"
              title="Chat on WhatsApp: +91 98916 76768"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>+91 98916 76768</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-ivory bg-forest hover:bg-forest-700 shadow-sm hover:shadow-md transition-all border border-gold/40"
            >
              <Calendar className="w-3.5 h-3.5 text-gold" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-ivory bg-forest flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3 text-gold" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-forest hover:bg-sage/20 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory/98 border-b border-sage/30 px-6 pt-3 pb-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-forest/90 hover:text-gold py-1 border-b border-sage/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 rounded-xl bg-forest text-ivory font-semibold text-sm flex items-center justify-center gap-2 shadow"
              >
                <Calendar className="w-4 h-4 text-gold" />
                <span>Book a Consultation</span>
              </button>
              <a
                href="https://wa.me/919891676768"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] text-white font-medium text-sm flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 98916 76768)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

