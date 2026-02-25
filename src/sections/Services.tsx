import { useEffect, useRef } from 'react';
import { 
  Stethoscope, 
  Smile, 
  Microscope, 
  Heart, 
  Sparkles, 
  Bone,
  ArrowRight,
  Activity,
  Apple,
  Dumbbell,
  Footprints
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
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

  const dentalServices = [
    {
      icon: Smile,
      title: 'Medicina Dentária Geral',
      description: 'Consultas de rotina, limpezas profissionais e prevenção de problemas dentários.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Estética Dental',
      description: 'Branqueamento, facetas e tratamentos para um sorriso perfeito.',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Bone,
      title: 'Implantologia',
      description: 'Implantes dentários de última geração para substituir dentes perdidos.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: Microscope,
      title: 'Endodontia',
      description: 'Tratamento de canal com tecnologia avançada e mínimo desconforto.',
      color: 'bg-rose-50 text-rose-600',
    },
  ];

  const medicalServices = [
    {
      icon: Stethoscope,
      title: 'Medicina Geral e Familiar',
      description: 'Atendimento completo para toda a família, com foco na prevenção.',
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      icon: Heart,
      title: 'Análises Clínicas',
      description: 'Exames laboratoriais com resultados precisos e rápidos.',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Smile,
      title: 'Terapia da Fala',
      description: 'Reabilitação e tratamento de problemas de comunicação.',
      color: 'bg-cyan-50 text-cyan-600',
    },
    {
      icon: Activity,
      title: 'Fisioterapia',
      description: 'Tratamento de lesões e reabilitação física especializada.',
      color: 'bg-indigo-50 text-indigo-600',
    },
  ];

  const wellnessServices = [
    {
      icon: Footprints,
      title: 'Palmilhas Personalizadas',
      description: 'Avaliação postural e palmilhas feitas à medida da sua pisada.',
      color: 'bg-amber-50 text-amber-600',
    },
    {
      icon: Apple,
      title: 'Nutrição',
      description: 'Consultas de nutrição para uma alimentação saudável e equilibrada.',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'Acompanhamento personalizado de exercício físico.',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Pilates',
      description: 'Aulas de Pilates para fortalecimento e flexibilidade.',
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contactos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="servicos" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 bg-up-light-bg text-up-teal rounded-full text-sm font-semibold mb-4">
            Os Nossos Serviços
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Cuidamos da sua saúde de{' '}
            <span className="text-gradient">forma integral</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base sm:text-lg text-gray-600">
            Oferecemos uma ampla gama de serviços médicos e dentários, 
            desde consultas de rotina até tratamentos especializados, 
            tudo num só lugar.
          </p>
        </div>

        {/* Medical Services - First */}
        <div className="mb-16">
          <h3 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-300 text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-up-teal rounded-xl flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            Medicina Geral
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicalServices.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 group"
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dental Services - Second */}
        <div className="mb-16">
          <h3 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-700 text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-up-teal rounded-xl flex items-center justify-center">
              <Smile className="w-6 h-6 text-white" />
            </div>
            Medicina Dentária
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dentalServices.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 group"
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Services */}
        <div className="mb-16">
          <h3 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-1100 text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-12 h-12 bg-up-teal rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            Bem-Estar e Desporto
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessServices.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 group"
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-1200 text-center">
          <div className="bg-gradient-medical rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
              Precisa de ajuda para escolher o tratamento?
            </h3>
            <p className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              A nossa equipa está disponível para o ajudar a encontrar a melhor solução 
              para as suas necessidades. Entre em contacto connosco.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-up-teal hover:bg-up-light-bg rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold group w-full sm:w-auto"
            >
              Falar com um Especialista
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
