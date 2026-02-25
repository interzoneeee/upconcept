import { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface Toast {
  id: number;
  name: string;
  action: string;
  time: string;
  avatar: string;
}

const ActivityToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  const names = [
    'Ana S.', 'Miguel F.', 'Sofia M.', 'Pedro C.', 'Inês R.', 
    'João L.', 'Mariana P.', 'Ricardo G.', 'Catarina B.', 'Tiago M.'
  ];
  
  const actions = [
    'marcou uma consulta de dentist',
    'agendou fisioterapia',
    'marcação para nutrição',
    'agendou avaliação',
    'marcou consulta geral',
  ];

  const generateToast = (): Toast => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    return {
      id: Date.now(),
      name: randomName,
      action: randomAction,
      time: 'agora mesmo',
      avatar: randomName.split(' ').map(n => n[0]).join(''),
    };
  };

  useEffect(() => {
    // Primeira notificação após 5 segundos
    const initialTimer = setTimeout(() => {
      if (isVisible) {
        setToasts([generateToast()]);
      }
    }, 5000);

    // Novas notificações a cada 25-40 segundos
    const interval = setInterval(() => {
      if (isVisible && Math.random() > 0.3) { // 70% chance de mostrar
        setToasts([generateToast()]);
        
        // Remove após 5 segundos
        setTimeout(() => {
          setToasts([]);
        }, 5000);
      }
    }, 25000 + Math.random() * 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isVisible]);

  const dismissToast = () => {
    setToasts([]);
    setIsVisible(false);
    
    // Reativa após 2 minutos
    setTimeout(() => {
      setIsVisible(true);
    }, 120000);
  };

  if (!isVisible || toasts.length === 0) return null;

  return (
    <div className="fixed top-24 right-4 z-40 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white rounded-xl shadow-lg p-4 pr-8 max-w-xs animate-slide-in-right border-l-4 border-up-teal tap-target"
        >
          <button
            onClick={dismissToast}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-up-light-bg rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-up-teal font-bold text-sm">{toast.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-800">
                <span className="font-semibold">{toast.name}</span> {toast.action}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span className="text-xs text-gray-500">{toast.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityToast;
