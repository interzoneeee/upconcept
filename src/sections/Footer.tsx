import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Equipa', href: '#equipa' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contactos', href: '#contactos' },
  ];

  const services = [
    { name: 'Medicina Geral', href: '#servicos' },
    { name: 'Medicina Dentária', href: '#servicos' },
    { name: 'Endodontia', href: '#servicos' },
    { name: 'Análises Clínicas', href: '#servicos' },
    { name: 'Fisioterapia', href: '#servicos' },
    { name: 'Nutrição', href: '#servicos' },
    { name: 'Pilates & PT', href: '#servicos' },
    { name: 'Palmilhas', href: '#servicos' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo-icon.png" 
                  alt="Up Concept" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold block">Up Concept</span>
                <span className="text-xs text-gray-400">Geral e Dentária</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 sm:mb-6 leading-relaxed">
              Cuidamos da sua saúde em dois eixos: Medicina Geral para toda a família 
              e Medicina Dentária com especialização em endodontia.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/UPCONCEPTFIGUEIRADAFOZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-up-teal transition-colors tap-target"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/upconceptclinicafigfoz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-up-teal transition-colors tap-target"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-400 hover:text-up-teal transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(service.href); }}
                    className="text-gray-400 hover:text-up-teal transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contactos</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Lugar+dos+4+Caminhos+Loja+1+C.C.+E.LECLERC+Figueira+da+Foz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 sm:gap-3 text-gray-400 hover:text-up-teal transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span>Lugar dos 4 Caminhos, Loja 1, C.C. E.LECLERC, Figueira da Foz</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+351233109109"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-up-teal transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>+351 233 109 109</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:upclinic16@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-up-teal transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>upclinic16@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>Seg-Sáb: 9h-20h<br/>Dom/Feriados: 10h-19h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
              {currentYear} Up Concept - Medicina Geral e Dentária. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-500 hover:text-up-teal transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-500 hover:text-up-teal transition-colors">
                Termos de Utilização
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
