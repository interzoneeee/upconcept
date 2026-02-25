import { useState, useEffect } from 'react';
import { Sparkles, X, Stethoscope, Smile, Activity, Apple, ChevronRight } from 'lucide-react';

interface Suggestion {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
}

const SmartAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [dismissed, setDismissed] = useState(false);

  const suggestions: Record<string, Suggestion[]> = {
    hero: [
      { icon: Smile, title: 'Medicina Dentária', description: 'Cuide do seu sorriso', href: '#servicos' },
      { icon: Stethoscope, title: 'Medicina Geral', description: 'Consultas familiares', href: '#servicos' },
      { icon: Activity, title: 'Fisioterapia', description: 'Reabilitação física', href: '#servicos' },
    ],
    servicos: [
      { icon: Apple, title: 'Nutrição', description: 'Planos alimentares', href: '#contactos' },
      { icon: Activity, title: 'Personal Training', description: 'Exercício personalizado', href: '#contactos' },
      { icon: Smile, title: 'Agendar avaliação', description: 'Marque já a sua consulta', href: '#contactos' },
    ],
    sobre: [
      { icon: Smile, title: 'Ver equipa', description: 'Conheça os nossos especialistas', href: '#equipa' },
      { icon: Stethoscope, title: 'Marcar consulta', description: 'Disponível todos os dias', href: '#contactos' },
    ],
    equipa: [
      { icon: Sparkles, title: 'Ver serviços', description: 'Todas as especialidades', href: '#servicos' },
      { icon: Smile, title: 'Agendar agora', description: 'Marque com a nossa equipa', href: '#contactos' },
    ],
    contactos: [
      { icon: Smile, title: 'Ligar agora', description: '233 109 109', href: 'tel:+351233109109' },
      { icon: Activity, title: 'Ver horários', description: 'Seg-Sáb: 9h-20h', href: '#' },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;

      const sections = ['hero', 'servicos', 'sobre', 'equipa', 'contactos'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + rect.height;

          if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
            if (currentSection !== section) {
              setCurrentSection(section);
              // Só mostra sugestões em secções específicas
              if (['hero', 'servicos', 'sobre', 'equipa', 'contactos'].includes(section)) {
                setTimeout(() => setIsVisible(true), 500);
              } else {
                setIsVisible(false);
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, dismissed]);

  // Esconde após 8 segundos
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, currentSection]);

  const handleDismiss = () => {
    setIsVisible(false);
    setDismissed(true);
    
    // Reativa após 1 minuto
    setTimeout(() => {
      setDismissed(false);
    }, 60000);
  };

  const handleClick = (href: string) => {
    if (href.startsWith('tel:')) {
      window.location.href = href;
    } else if (href !== '#') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsVisible(false);
  };

  const currentSuggestions = suggestions[currentSection] || [];

  if (!isVisible || currentSuggestions.length === 0) return null;

  return (
    <div className="fixed bottom-24 left-4 z-40 max-w-xs sm:max-w-sm">
      <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-medical rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-800">Sugestões para si</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Suggestions */}
        <div className="space-y-2">
          {currentSuggestions.map((suggestion, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(suggestion.href)}
              className="w-full flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-up-light-bg transition-colors group text-left tap-target"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <suggestion.icon className="w-5 h-5 text-up-teal" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800">{suggestion.title}</p>
                <p className="text-xs text-gray-500">{suggestion.description}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-up-teal group-hover:translate-x-1 transition-all" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-3">
          Assistente Inteligente • Up Concept
        </p>
      </div>
    </div>
  );
};

export default SmartAssistant;
