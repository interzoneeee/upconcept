import { useEffect, useRef } from 'react';
import { Check, MapPin, Phone, Mail, Clock } from 'lucide-react';

const About = () => {
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

  const differentials = [
    'Medicina Geral e Medicina Dentária no mesmo espaço',
    'Especialistas em Endodontia e cuidados dentários',
    'Atendimento familiar completo e personalizado',
    'Tecnologia de ponta e equipamentos modernos',
    'Aberto todos os dias, incluindo feriados',
    'Localização privilegiada no C.C. E.Leclerc',
  ];

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-up-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Image */}
          <div className="animate-on-scroll opacity-0 -translate-x-6 transition-all duration-700 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-medical">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" 
                  alt="Up Concept Clinic Interior" 
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 sm:-bottom-8 right-2 sm:-right-4 lg:-right-8 bg-white rounded-2xl p-4 sm:p-6 shadow-card max-w-[calc(100%-1rem)] sm:max-w-none">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-up-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">Horários</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Seg-Sáb: 9h-20h<br/>Dom: 10h-19h</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-up-teal/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 left-1/4 w-16 h-16 bg-up-mint/20 rounded-full -z-10" />
            </div>
          </div>

          {/* Right Content - Text */}
          <div>
            <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 bg-white text-up-teal rounded-full text-sm font-semibold mb-4 shadow-sm">
              Sobre Nós
            </span>
            
            <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Up Concept -{' '}
              <span className="text-gradient">Medicina Geral e Dentária</span>
            </h2>
            
            <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base sm:text-lg text-gray-600 mb-6">
              Localizada no Centro Comercial E.Leclerc na Figueira da Foz, a Up Concept 
              oferece o melhor de dois mundos: cuidados completos de{' '}
              <span className="font-semibold text-up-teal">Medicina Geral</span> para toda 
              a família e excelência em{' '}
              <span className="font-semibold text-up-teal">Medicina Dentária</span>, 
              incluindo especialização em endodontia.
            </p>
            
            <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-300 text-gray-600 mb-8">
              A nossa missão é proporcionar cuidados de saúde integrais num só lugar. 
              Seja para uma consulta de rotina, exames de saúde ou tratamentos dentários 
              avançados, a nossa equipa multidisciplinar está preparada para cuidar de si 
              e dos seus com dedicação e profissionalismo.
            </p>

            {/* Differentials */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-400 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-up-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-500 bg-white rounded-2xl p-4 sm:p-6 shadow-card">
              <h4 className="font-bold text-gray-900 mb-4">Contactos</h4>
              <div className="space-y-3">
                <a 
                  href="https://maps.google.com/?q=Lugar+dos+4+Caminhos+Loja+1+C.C.+E.LECLERC+Figueira+da+Foz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-600 hover:text-up-teal transition-colors"
                >
                  <MapPin className="w-5 h-5 text-up-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Lugar dos 4 Caminhos, Loja 1, C.C. E.LECLERC, Figueira da Foz</span>
                </a>
                <a 
                  href="tel:+351233109109" 
                  className="flex items-center gap-3 text-gray-600 hover:text-up-teal transition-colors"
                >
                  <Phone className="w-5 h-5 text-up-teal flex-shrink-0" />
                  <span className="text-sm">+351 233 109 109</span>
                </a>
                <a 
                  href="mailto:upclinic16@gmail.com" 
                  className="flex items-center gap-3 text-gray-600 hover:text-up-teal transition-colors"
                >
                  <Mail className="w-5 h-5 text-up-teal flex-shrink-0" />
                  <span className="text-sm">upclinic16@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
