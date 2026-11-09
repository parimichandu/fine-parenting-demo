import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { CounsellorHero } from './components/CounsellorHero';
import { ProfessionalHighlights } from './components/ProfessionalHighlights';
import { AboutCounsellor } from './components/AboutCounsellor';
import { ExpertiseCards } from './components/ExpertiseCards';
import { CounsellingPhilosophy } from './components/CounsellingPhilosophy';
import { WhyFineParenting } from './components/WhyFineParenting';
import { CertificationCTA } from './components/CertificationCTA';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { CertificationModal } from './components/CertificationModal';
import { MessageSquare } from 'lucide-react';

export function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [certificationOpen, setCertificationOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('Parenting Counselling');

  const handleOpenConsultationWithTopic = (topic?: string) => {
    if (topic) setSelectedTopic(topic);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F2] text-[#292929] flex flex-col font-sans selection:bg-forest selection:text-ivory">
      {/* Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultationWithTopic('General Parenting Consultation')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 2: Profile Hero Section */}
        <CounsellorHero onOpenConsultation={() => handleOpenConsultationWithTopic('Initial Counselling Consultation')} />

        {/* Section 3: Professional Highlights (3 Statistics Cards) */}
        <ProfessionalHighlights />

        {/* Section 4: About the Counsellor */}
        <AboutCounsellor />

        {/* Section 5: Areas of Expertise (6 Cards) */}
        <ExpertiseCards 
          onSelectService={(service) => handleOpenConsultationWithTopic(service)}
          onOpenCertification={() => setCertificationOpen(true)}
        />

        {/* Section 6: Counselling Philosophy */}
        <CounsellingPhilosophy />

        {/* Section 7: Why Fine Parenting? (4 Feature Cards) */}
        <WhyFineParenting />

        {/* Section 8: Parenting Coach Certification */}
        <CertificationCTA onOpenCertification={() => setCertificationOpen(true)} />

        {/* Section 9: Closing Message & Contact CTA */}
        <ContactCTA onOpenConsultation={() => handleOpenConsultationWithTopic('Consultation Booking')} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenConsultation={() => handleOpenConsultationWithTopic('Footer Consultation Booking')}
        onOpenCertification={() => setCertificationOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button for Parents */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/919891676768?text=Hello%20Fine%20Parenting%2C%20I%20would%20like%20to%20connect%20with%20the%20counsellor."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-xl hover:shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-105 border-2 border-white/60"
          title="Direct WhatsApp Support (+91 98916 76768)"
        >
          <MessageSquare className="w-5 h-5 fill-white stroke-none" />
          <span className="hidden sm:inline font-semibold">Chat with Us</span>
          
          {/* Subtle Online Ping */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>
        </a>
      </aside>

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultTopic={selectedTopic}
      />

      {/* Interactive Certification Modal */}
      <CertificationModal
        isOpen={certificationOpen}
        onClose={() => setCertificationOpen(false)}
      />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}

export default App;

