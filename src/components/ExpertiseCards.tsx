import React from 'react';
import { 
  Users, 
  Smile, 
  Compass, 
  MessageCircle, 
  HeartHandshake, 
  Award, 
  ArrowRight 
} from 'lucide-react';
import { GoldDivider } from './BotanicalElements';

interface ExpertiseCardsProps {
  onSelectService: (serviceName: string) => void;
  onOpenCertification: () => void;
}

export const ExpertiseCards: React.FC<ExpertiseCardsProps> = ({
  onSelectService,
  onOpenCertification,
}) => {
  const expertiseList = [
    {
      id: '01',
      title: 'PARENTING COUNSELLING',
      description: 'Helping parents understand everyday parenting challenges and develop positive parenting approaches.',
      icon: Users,
      action: 'Book Counselling',
      type: 'consultation',
    },
    {
      id: '02',
      title: 'CHILD BEHAVIOUR GUIDANCE',
      description: "Supporting parents in understanding children's emotional and behavioural needs.",
      icon: Smile,
      action: 'Guidance Session',
      type: 'consultation',
    },
    {
      id: '03',
      title: 'TEEN COUNSELLING',
      description: 'Helping teenagers navigate confidence, emotional development and personal challenges.',
      icon: Compass,
      action: 'Book for Teen',
      type: 'consultation',
    },
    {
      id: '04',
      title: 'PARENT COACHING',
      description: 'Encouraging better communication, positive parenting and stronger family relationships.',
      icon: MessageCircle,
      action: 'Parent Coaching',
      type: 'consultation',
    },
    {
      id: '05',
      title: 'EMOTIONAL & SOCIAL DEVELOPMENT',
      description: "Helping parents understand the importance of children's emotional and social growth.",
      icon: HeartHandshake,
      action: 'Development Plan',
      type: 'consultation',
    },
    {
      id: '06',
      title: 'PARENTING COACH CERTIFICATION',
      description: 'Introducing individuals to the live parenting coach certification program.',
      icon: Award,
      action: 'Enquire About Program',
      type: 'certification',
    },
  ];

  const handleClick = (item: typeof expertiseList[0]) => {
    if (item.type === 'certification') {
      onOpenCertification();
    } else {
      onSelectService(item.title);
    }
  };

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Specialized Practice & Programmes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mt-2">
            Areas of Expertise
          </h2>
          <p className="text-forest/70 text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Comprehensive psychological support tailored to every developmental milestone of your family's journey.
          </p>
          <GoldDivider className="my-6" />
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseList.map((item) => {
            const Icon = item.icon;
            const isCert = item.type === 'certification';

            return (
              <div
                key={item.id}
                onClick={() => handleClick(item)}
                className={`group cursor-pointer relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between border ${
                  isCert
                    ? 'bg-gradient-to-br from-ivory via-white to-gold/10 border-gold/50 shadow-soft hover:shadow-premium hover:-translate-y-1.5'
                    : 'bg-ivory/50 hover:bg-white border-sage/30 hover:border-gold/40 shadow-soft hover:shadow-premium hover:-translate-y-1.5'
                }`}
              >
                <div>
                  {/* Top Bar: Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sage/20 border border-sage/40 text-forest group-hover:bg-gold group-hover:text-ivory group-hover:border-gold transition-all flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[1.7]" />
                    </div>
                    <span className="font-serif text-lg font-bold text-gold/80 tracking-widest">
                      {item.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-forest tracking-tight group-hover:text-gold-700 transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-forest/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Trigger */}
                <div className="pt-6 mt-6 border-t border-sage/20 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-gold transition-colors">
                    {item.action}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-forest/5 group-hover:bg-gold group-hover:text-ivory flex items-center justify-center transition-all text-forest">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

