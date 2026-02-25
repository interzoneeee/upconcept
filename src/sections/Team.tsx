import { useEffect, useRef } from 'react';

const Team = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Ordem: 2 profissionais de dentária, 2 de medicina geral para equilíbrio
  const team = [
    {
      name: 'Renata Moço',
      role: 'Diretora Clínica - Dentária',
      description: 'Responsável pela gestão clínica e coordenação da equipa de medicina dentária.',
      image: '/images/renata.jpg',
    },
    {
      name: 'Dr. João Meirinhos',
      role: 'Endodontia',
      description: 'Dentista com prática exclusiva em endodontia. Especialista em tratamentos de canal com tecnologia avançada.',
      image: '/images/joao.jpg',
    },
    {
      name: 'Adriana Silva',
      role: 'Assistente de Consultório Dentário',
      description: 'Apoio aos dentistas durante os procedimentos e acolhimento aos pacientes.',
      image: '/images/adriana.jpg',
    },
    {
      name: 'Melissa Freitas',
      role: 'Assistente de Medicina Geral',
      description: 'Assistente dedicada ao apoio na medicina geral e ao bem-estar dos pacientes.',
      image: '/images/melissa.jpg',
    },
  ];

  return (
    <section 
      id="equipa" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 bg-up-light-bg text-up-teal rounded-full text-sm font-semibold mb-4">
            A Nossa Equipa
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A nossa equipa de{' '}
            <span className="text-gradient">excelência</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-gray-600">
            Uma equipa multidisciplinar dedicada à sua saúde, 
            desde a medicina dentária até à medicina geral.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 group"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Photo */}
                <div className="relative h-72 overflow-hidden bg-up-light-bg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-up-teal/20 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-up-light-bg text-up-teal rounded-full text-sm font-medium mb-4">
                    {member.role}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-700 mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {[
            { value: '+10', label: 'Anos de Experiência' },
            { value: '+5000', label: 'Pacientes Satisfeitos' },
            { value: '100%', label: 'Dedicação' },
            { value: '100%', label: 'Compromisso' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 sm:p-6 bg-up-cream rounded-xl sm:rounded-2xl"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-up-teal mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
