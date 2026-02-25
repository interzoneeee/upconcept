import { useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Shield, Clock, Award, Sparkles, Stethoscope, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Shield, text: 'Equipa Especializada' },
    { icon: Clock, text: 'Aberto Todos os Dias' },
    { icon: Award, text: 'Tecnologia Avançada' },
  ];

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80" 
          alt="Modern Medical and Dental Clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-up-teal/95 via-up-teal/85 to-up-teal/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-up-mint/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-up-mint" />
                Up Concept - Figueira da Foz
              </span>
            </div>

            <h1 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A sua saúde em{' '}
              <span className="text-up-mint">boas mãos</span>
            </h1>

            <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Cuidamos de si e da sua família com excelência em{' '}
              <span className="font-semibold text-up-mint">Medicina Geral</span> e{' '}
              <span className="font-semibold text-up-mint">Medicina Dentária</span>. 
              Uma equipa multidisciplinar dedicada ao seu bem-estar, 
              com atendimento personalizado todos os dias.
            </p>

            {/* Service Pills */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-250 flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Stethoscope className="w-4 h-4 text-up-mint" />
                <span className="text-sm font-medium">Medicina Geral</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Smile className="w-4 h-4 text-up-mint" />
                <span className="text-sm font-medium">Medicina Dentária</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Award className="w-4 h-4 text-up-mint" />
                <span className="text-sm font-medium">Endodontia</span>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                onClick={() => scrollToSection('#contactos')}
                size="lg"
                className="bg-white text-up-teal hover:bg-up-light-bg rounded-full px-8 py-6 text-base font-semibold group shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Marcar Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('#servicos')}
                size="lg"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-6 text-base font-semibold backdrop-blur-sm"
              >
                Ver Serviços
              </Button>
            </div>

            {/* Features */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-400 flex flex-wrap gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-up-mint flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Mobile Stats - Visible only on small screens */}
            <div className="lg:hidden animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 sm:p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">+10</div>
                    <div className="text-white/80 text-xs sm:text-sm">Anos de Experiência</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-white/10 rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-up-mint mb-1">+5000</div>
                    <div className="text-white/80 text-xs sm:text-sm">Pacientes Satisfeitos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="hidden lg:block animate-on-scroll opacity-0 translate-x-6 transition-all duration-700 delay-500">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/10 rounded-2xl">
                  <Stethoscope className="w-8 h-8 text-up-mint mx-auto mb-2" />
                  <div className="text-4xl font-bold text-white mb-2">+10</div>
                  <div className="text-white/80 text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-2xl">
                  <Smile className="w-8 h-8 text-up-mint mx-auto mb-2" />
                  <div className="text-4xl font-bold text-up-mint mb-2">+5000</div>
                  <div className="text-white/80 text-sm">Pacientes Satisfeitos</div>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-2xl">
                  <div className="text-4xl font-bold text-white mb-2">2 em 1</div>
                  <div className="text-white/80 text-sm">Medicina Geral + Dentária</div>
                </div>
                <div className="text-center p-6 bg-white/10 rounded-2xl">
                  <Award className="w-8 h-8 text-up-mint mx-auto mb-2" />
                  <div className="text-4xl font-bold text-up-mint mb-2">100%</div>
                  <div className="text-white/80 text-sm">Compromisso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
