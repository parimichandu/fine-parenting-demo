import React, { useState } from 'react';
import { X, Award, CheckCircle2, MessageSquare, Send } from 'lucide-react';

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificationModal: React.FC<CertificationModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [background, setBackground] = useState('Parent / Caregiver');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello Fine Parenting team,\n\nI am interested in learning more about the live Parenting Coach Certification Program.\n\nName: ${name || 'Prospective Trainee'}\nBackground: ${background}\nPhone: ${phone || 'Available'}\n\nPlease share the program syllabus, upcoming cohort dates, and enrolment details.`
    );
    window.open(`https://wa.me/919891676768?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/70 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative w-full max-w-lg bg-ivory rounded-3xl border border-gold/30 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-charcoal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-forest/70 hover:text-forest hover:bg-forest/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-center max-w-md mx-auto mb-6">
              <div className="inline-flex p-2.5 bg-gold/15 text-gold rounded-2xl mb-2">
                <Award className="w-6 h-6" />
              </div>
              <span className="block text-xs uppercase tracking-widest text-gold font-semibold">
                Live Interactive Mentorship
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest mt-1">
                Parenting Coach Certification
              </h3>
              <p className="text-sm text-forest/70 mt-2">
                Explore our live Parenting Coach Certification Program and discover opportunities to develop your parenting coaching knowledge.
              </p>
            </div>

            <div className="bg-sage/15 border border-sage/30 rounded-2xl p-3.5 mb-5 text-xs text-forest/90 space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="text-gold font-bold">✓</span>
                <span>Live & Interactive training sessions led by Counselling Psychologist</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold font-bold">✓</span>
                <span>Practical case studies on child behaviour & communication</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold font-bold">✓</span>
                <span>Structured frameworks to coach and guide parents effectively</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. / Mr. / Ms. Name"
                  className="w-full px-4 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98916 76768"
                  className="w-full px-4 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Current Background
                </label>
                <select
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                >
                  <option value="Parent / Caregiver">Parent / Caregiver</option>
                  <option value="Educator / Teacher">Educator / Teacher</option>
                  <option value="Psychologist / Counsellor">Psychologist / Counsellor</option>
                  <option value="Healthcare Professional">Healthcare Professional</option>
                  <option value="Life Coach / Mentor">Life Coach / Mentor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-700 text-ivory font-medium px-5 py-3 rounded-xl transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Enquire Now</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium px-5 py-3 rounded-xl transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-forest mb-2">
              Enquiry Received!
            </h3>
            <p className="text-sm text-forest/80 max-w-md mx-auto mb-6">
              Thank you for your interest in the Parenting Coach Certification Program. We will share program syllabus and cohort details shortly.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleWhatsAppEnquiry}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium px-5 py-2.5 rounded-xl transition-all text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Query</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl border border-forest/30 text-forest font-medium hover:bg-forest/5 transition-all text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

