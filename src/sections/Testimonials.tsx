import { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Ana Rodrigues',
      role: 'Paciente',
      text: 'Excelente atendimento! A equipa é muito profissional e atenciosa. Fiz o branqueamento dentário e fiquei muito satisfeita com o resultado. Recomendo!',
      rating: 5,
    },
    {
      name: 'Miguel Ferreira',
      role: 'Paciente',
      text: 'Levo a minha família à Up Concept há mais de 3 anos. O atendimento é sempre impecável, e o facto de estarem abertos aos domingos é uma grande vantagem.',
      rating: 5,
    },
    {
      name: 'Sofia Martins',
      role: 'Paciente',
      text: 'Fiz implantes dentários e o resultado superou as minhas expetativas. O Dr. Carlos explicou todo o processo com paciência e o tratamento foi indolor.',
      rating: 5,
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-up-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 bg-white text-up-teal rounded-full text-sm font-semibold mb-4 shadow-sm">
            Testemunhos
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            O que os nossos{' '}
            <span className="text-gradient">pacientes dizem</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base sm:text-lg text-gray-600">
            A satisfação dos nossos pacientes é o nosso maior orgulho. 
            Conheça algumas das experiências partilhadas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700"
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full relative">
                {/* Quote Icon */}
                <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 bg-up-teal rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-up-light-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-up-teal font-bold text-sm sm:text-base">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
