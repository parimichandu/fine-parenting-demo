import React, { useState } from 'react';
import { X, Calendar, User, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'Parenting Guidance',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [childAge, setChildAge] = useState('5-11 years (School Age)');
  const [topic, setTopic] = useState(defaultTopic);
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Fine Parenting team,\n\nI would like to book a consultation with the Counselling Psychologist.\n\nName: ${name || 'A Parent'}\nChild Age: ${childAge}\nTopic: ${topic}\nPreferred Date: ${preferredDate || 'Earliest available'}\nMessage: ${notes || 'Looking forward to guidance.'}`
    );
    window.open(`https://wa.me/919891676768?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/70 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative w-full max-w-xl bg-ivory rounded-3xl border border-gold/30 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-charcoal"
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
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                Private & Confidential
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-forest font-bold mt-1">
                Book a Consultation
              </h3>
              <p className="text-sm text-forest/70 mt-2">
                Begin your journey towards mindful parenting. Share a few details and we will connect with you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-forest/40" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-forest/40" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                    Child's Age Group
                  </label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                  >
                    <option value="Toddler (1-4 years)">Toddler (1-4 years)</option>
                    <option value="School Age (5-11 years)">School Age (5-11 years)</option>
                    <option value="Teenager (12-18 years)">Teenager (12-18 years)</option>
                    <option value="Expecting / New Parent">Expecting / New Parent</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                    Focus Area
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                  >
                    <option value="Parenting Counselling">Parenting Counselling</option>
                    <option value="Child Behaviour Guidance">Child Behaviour Guidance</option>
                    <option value="Teen Counselling">Teen Counselling</option>
                    <option value="Parent Coaching">Parent Coaching</option>
                    <option value="Emotional & Social Development">Emotional & Social Development</option>
                    <option value="General Consultation">General Family Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-forest/40" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-forest/80 mb-1">
                  Brief Note (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any specific situation or concerns you would like to address..."
                  className="w-full p-3 rounded-xl border border-sage/40 bg-white/70 focus:bg-white focus:outline-none focus:border-forest text-sm text-charcoal resize-none transition-all"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-700 text-ivory font-medium px-5 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Consultation</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium px-5 py-3 rounded-xl transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-xs text-forest/60 pt-1">
                Direct WhatsApp Helpline: <strong className="text-forest">+91 98916 76768</strong>
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-sage/20 text-forest rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-forest" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-forest mb-2">
              Thank You, {name || 'Parent'}!
            </h3>
            <p className="text-sm text-forest/80 max-w-md mx-auto mb-6">
              Your consultation request has been received. Our team will contact you within 24 hours to confirm your scheduled slot.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium px-5 py-2.5 rounded-xl transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl border border-forest/30 text-forest font-medium hover:bg-forest/5 transition-all text-sm"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

