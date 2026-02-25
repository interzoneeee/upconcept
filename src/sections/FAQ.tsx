import { useEffect, useRef } from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
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

  const faqs = [
    {
      question: 'Preciso de marcação prévia para a primeira consulta?',
      answer: 'Sim, recomendamos a marcação prévia para garantir o melhor atendimento. Pode marcar através do nosso formulário online, pelo telefone 233 109 109, ou pelo WhatsApp. Para urgências, aceitamos walk-ins consoante disponibilidade.',
    },
    {
      question: 'Quais são os preços das consultas?',
      answer: 'Os preços variam conforme a especialidade: Consulta de Medicina Dentária (€40-60), Medicina Geral (€50), Fisioterapia (€45), Nutrição (€45). Para tratamentos mais complexos como implantes ou ortodontia, disponibilizamos orçamentos personalizados gratuitos.',
    },
    {
      question: 'Aceitam seguros de saúde e convénios?',
      answer: 'Sim, temos convénio com as principais seguradoras de saúde (Médis, Multicare, AdvanceCare) e aceitamos ADSE. Também aceitamos o Cartão de Saúde CVP. Recomendamos confirmar as condições específicas do seu plano antes da consulta.',
    },
    {
      question: 'Como devo preparar-me para a primeira consulta dentária?',
      answer: 'Recomendamos: 1) Escovar os dentes antes da consulta, 2) Chegar 10 minutos antes para preencher a ficha de admissão, 3) Trazer exames dentários anteriores se existirem, 4) Informar sobre medicação regular ou alergias. A primeira consulta inclui avaliação completa e plano de tratamento.',
    },
    {
      question: 'Qual o prazo de cancelamento ou alteração de marcação?',
      answer: 'Pedimos que cancelem ou alterem com pelo menos 24 horas de antecedência. Cancelamentos em cima da hora ou faltas sem aviso prévio podem estar sujeitos a taxa de 50% do valor da consulta. Entendemos que imprevistos acontecem - contacte-nos o mais cedo possível.',
    },
    {
      question: 'Estão abertos aos domingos e feriados?',
      answer: 'Sim! Estamos abertos TODOS os dias do ano: Segunda a Sábado das 9h às 20h, Domingos e Feriados das 10h às 19h. Para urgências fora deste horário, temos linha de atendimento telefónico disponível.',
    },
  ];

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-up-cream"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-flex items-center gap-2 px-4 py-2 bg-white text-up-teal rounded-full text-sm font-semibold mb-4 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Perguntas Frequentes
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-100 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Tudo o que precisa de{' '}
            <span className="text-gradient">saber</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-200 text-base sm:text-lg text-gray-600">
            Respostas às dúvidas mais comuns. Se não encontrar o que procura, 
            contacte-nos diretamente.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-300">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl border-none shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                  <span className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-up-teal transition-colors pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-500 mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Estamos aqui para ajudar.
          </p>
          <a 
            href="#contactos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contactos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-up-teal text-white rounded-full font-medium hover:bg-up-teal-dark transition-colors tap-target"
          >
            Contactar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
