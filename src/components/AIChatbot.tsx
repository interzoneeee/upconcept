import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  options?: string[];
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! Sou o assistente virtual da Up Concept. Oferecemos Medicina Geral e Medicina Dentária. Como posso ajudar?',
      isUser: false,
      options: ['Medicina Geral', 'Medicina Dentária', 'Ver serviços', 'Horários', 'Marcar consulta'],
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userText: string): { text: string; options?: string[] } => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('consulta') || lowerText.includes('marcar')) {
      return {
        text: 'Posso ajudar com a marcação! Qual especialidade procura?',
        options: ['Medicina Dentária', 'Medicina Geral', 'Fisioterapia', 'Nutrição', 'Outro'],
      };
    }
    
    if (lowerText.includes('preço') || lowerText.includes('custo') || lowerText.includes('valor')) {
      return {
        text: 'Os preços variam conforme o tratamento. Consulta de rotina: €40-60. Posso transferir para um especialista para um orçamento personalizado.',
        options: ['Orçamento personalizado', 'Ver todos os preços', 'Voltar'],
      };
    }
    
    if (lowerText.includes('horário') || lowerText.includes('funcionamento') || lowerText.includes('aberto')) {
      return {
        text: '🕐 Horários:\nSegunda a Sábado: 9h00 - 20h00\nDomingos e Feriados: 10h00 - 19h00',
        options: ['Marcar consulta', 'Outra dúvida'],
      };
    }
    
    if (lowerText.includes('serviço') || lowerText.includes('tratamento')) {
      return {
        text: 'Somos uma clínica 2 em 1: Medicina Geral e Medicina Dentária. Qual área procura?',
        options: ['Medicina Geral', 'Medicina Dentária', 'Ver todos os serviços'],
      };
    }
    
    if (lowerText.includes('geral') || lowerText.includes('médico') || lowerText.includes('médica')) {
      return {
        text: '🩺 Medicina Geral:\n• Consultas de rotina\n• Exames de saúde\n• Vacinação\n• Atestados médicos\n• Acompanhamento familiar',
        options: ['Marcar consulta geral', 'Outros serviços', 'Voltar'],
      };
    }
    
    if (lowerText.includes('dentária') || lowerText.includes('dentista') || lowerText.includes('dente')) {
      return {
        text: '🦷 Medicina Dentária:\n• Consultas de rotina\n• Limpezas profissionais\n• Branqueamento\n• Implantes\n• Ortodontia\n• Tratamento de canal',
        options: ['Marcar consulta dentária', 'Preços dentária', 'Voltar'],
      };
    }
    
    if (lowerText.includes('fisioterapia') || lowerText.includes('fisio')) {
      return {
        text: '💪 Fisioterapia:\n• Reabilitação física\n• Tratamento de lesões\n• Terapia manual\n• Exercício terapêutico',
        options: ['Marcar fisioterapia', 'Saber mais', 'Voltar'],
      };
    }
    
    if (lowerText.includes('nutrição') || lowerText.includes('nutricionista') || lowerText.includes('dieta')) {
      return {
        text: '🍎 Nutrição:\n• Consultas de nutrição\n• Planos alimentares\n• Controlo de peso\n• Nutrição desportiva',
        options: ['Marcar nutrição', 'Voltar'],
      };
    }
    
    if (lowerText.includes('localização') || lowerText.includes('morada') || lowerText.includes('onde')) {
      return {
        text: '📍 Estamos no Centro Comercial E.Leclerc, Figueira da Foz.\nLugar dos 4 Caminhos, Loja 1.\nFácil estacionamento!',
        options: ['Ver no mapa', 'Marcar consulta'],
      };
    }
    
    if (lowerText.includes('humano') || lowerText.includes('pessoa') || lowerText.includes('recepcionista')) {
      return {
        text: '📞 Pode contactar-nos diretamente:\nTel: 233 109 109\nEmail: upclinic16@gmail.com\nOu marque online!',
        options: ['Marcar online', 'Ligar agora'],
      };
    }
    
    if (lowerText.includes('olá') || lowerText.includes('ola') || lowerText.includes('oi')) {
      return {
        text: 'Olá! Em que posso ajudar? 😊',
        options: ['Marcar consulta', 'Ver serviços', 'Preços', 'Horários'],
      };
    }
    
    return {
      text: 'Peço desculpe, não percebi bem. Posso ajudar com:\n• Marcação de consultas\n• Informações sobre serviços\n• Preços\n• Horários',
      options: ['Marcar consulta', 'Ver serviços', 'Horários', 'Falar com humano'],
    };
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    
    const response = getBotResponse(inputValue);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        isUser: false,
        options: response.options,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInputValue('');
  };

  const handleOptionClick = (option: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: option,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    
    setTimeout(() => {
      let response: { text: string; options?: string[] };
      
      switch (option) {
        case 'Marcar consulta':
        case 'Marcar consulta dentária':
        case 'Marcar fisioterapia':
        case 'Marcar nutrição':
        case 'Marcar online':
          response = {
            text: 'Pode marcar a sua consulta no formulário abaixo. Vou abrir a secção de contactos para si!',
            options: ['Ir para contactos', 'Voltar'],
          };
          setTimeout(() => {
            document.querySelector('#contactos')?.scrollIntoView({ behavior: 'smooth' });
          }, 1000);
          break;
        case 'Ver no mapa':
          response = {
            text: 'Vou mostrar-lhe a localização no mapa.',
            options: ['Voltar'],
          };
          setTimeout(() => {
            document.querySelector('#contactos')?.scrollIntoView({ behavior: 'smooth' });
          }, 1000);
          break;
        case 'Ligar agora':
          response = {
            text: 'Pode ligar-nos para o 233 109 109. Estamos aqui para ajudar!',
            options: ['Voltar'],
          };
          window.location.href = 'tel:+351233109109';
          break;
        case 'Ver todos':
          response = {
            text: 'Todos os nossos serviços:\n🦷 Medicina Dentária\n🏥 Medicina Geral\n💪 Fisioterapia\n🍎 Nutrição\n🤸 Pilates\n🏃 Personal Training\n🦶 Palmilhas Personalizadas\n🗣️ Terapia da Fala',
            options: ['Marcar consulta', 'Voltar'],
          };
          break;
        default:
          response = getBotResponse(option);
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: response.text,
        isUser: false,
        options: response.options,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 tap-target ${
          isOpen ? 'bg-gray-800 rotate-0' : 'bg-up-teal hover:bg-up-teal-dark'
        }`}
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: isOpen ? '500px' : '0' }}
      >
        {/* Header */}
        <div className="bg-gradient-medical p-4 flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            {/* Online Badge */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-up-teal rounded-full animate-pulse" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold flex items-center gap-2">
              Assistente UP Concept
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-white/90 text-xs font-medium">Online agora</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-2 ${message.isUser ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.isUser ? 'bg-up-teal' : 'bg-gray-200'
              }`}>
                {message.isUser ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-gray-600" />
                )}
              </div>
              <div className={`max-w-[75%] ${message.isUser ? 'items-end' : 'items-start'}`}>
                <div className={`p-3 rounded-2xl text-sm whitespace-pre-line ${
                  message.isUser
                    ? 'bg-up-teal text-white rounded-br-none'
                    : 'bg-white text-gray-700 shadow-sm rounded-bl-none'
                }`}>
                  {message.text}
                </div>
                
                {/* Quick Options */}
                {message.options && !message.isUser && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {message.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        className="px-3 py-1.5 bg-up-light-bg text-up-teal text-xs rounded-full hover:bg-up-teal hover:text-white transition-colors tap-target"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escreva a sua mensagem..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 text-sm focus:outline-none focus:border-up-teal"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="rounded-full bg-up-teal hover:bg-up-teal-dark w-10 h-10"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Assistente Virtual • Up Concept
          </p>
        </div>
      </div>
    </>
  );
};

export default AIChatbot;
