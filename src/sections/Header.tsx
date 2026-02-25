import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Equipa', href: '#equipa' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contactos', href: '#contactos' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-up-teal text-white py-2 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+351233109109" className="flex items-center gap-1.5 hover:text-up-light-bg transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">233 109 109</span>
            </a>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Seg-Sáb: 9h-20h | Dom: 10h-19h</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <span>Lugar dos 4 Caminhos, Loja 1, C.C. E.LECLERC, Figueira da Foz</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'top-0 bg-white/95 backdrop-blur-md shadow-card' 
            : 'top-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/logo-icon.png" 
                  alt="Up Concept" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
              <div className={`hidden sm:block transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <span className="text-lg lg:text-xl font-bold block leading-tight">Up Concept</span>
                <span className="text-xs opacity-80">Geral e Dentária</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-up-teal hover:bg-up-light-bg' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button 
                onClick={() => scrollToSection('#contactos')}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-up-teal text-white hover:bg-up-teal-dark shadow-medical' 
                    : 'bg-white text-up-teal hover:bg-up-light-bg'
                }`}
              >
                Marcar Consulta
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors tap-target ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="px-4 py-3 rounded-lg text-gray-700 hover:text-up-teal hover:bg-up-light-bg font-medium transition-colors tap-target flex items-center"
                >
                  {link.name}
                </a>
              ))}
              <Button 
                onClick={() => scrollToSection('#contactos')}
                className="mt-2 w-full bg-up-teal text-white hover:bg-up-teal-dark rounded-full py-3 tap-target"
              >
                Marcar Consulta
              </Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
