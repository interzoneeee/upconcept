# 🚀 GUIA RÁPIDO DE DESENVOLVIMENTO

## Como iniciar o projeto

```bash
cd app
npm install      # Só na primeira vez
npm run dev      # Inicia servidor
```

Aceder a: `http://localhost:5173`

---

## 📁 Onde editar coisas específicas

### Textos/Conteúdo
| Secção | Ficheiro | Linha aprox. |
|--------|----------|-------------|
| Hero (título) | `src/sections/Hero.tsx` | ~72 |
| Serviços | `src/sections/Services.tsx` | ~38 (arrays) |
| Equipa | `src/sections/Team.tsx` | ~25 (array com fotos reais em `/images/`) |
| FAQ | `src/sections/FAQ.tsx` | ~26 (array) |
| Testemunhos | `src/sections/Testimonials.tsx` | ~25 (array) |
| Footer links | `src/sections/Footer.tsx` | ~6 (arrays) |

### Cores do site
Ficheiro: `tailwind.config.js`
```javascript
colors: {
  up: {
    teal: "#16807A",      // Cor principal
    "teal-light": "#1E9D96",
    "teal-dark": "#126b66",
    mint: "#20B2AA",
    cream: "#F5F9F8",
    "light-bg": "#E8F6F5",
  },
}
```

### Dados da clínica (contactos, horários)
Ficheiro: `src/sections/Contact.tsx` (~148)
```javascript
const contactInfo = [
  { icon: Phone, title: 'Telefone', content: '233 109 109', ... },
  { icon: Clock, title: 'Horário', content: '...', ... },
];
```

### Chatbot - Respostas
Ficheiro: `src/components/AIChatbot.tsx` (~44)
Função: `getBotResponse(userText)`

Adicionar nova resposta:
```javascript
if (lowerText.includes('palavra-chave')) {
  return {
    text: 'Resposta aqui',
    options: ['Opção 1', 'Opção 2'],
  };
}
```

---

## ➕ Como adicionar...

### Nova secção no menu
1. Editar `src/sections/Header.tsx` (~17):
```javascript
const navLinks = [
  { name: 'Novo Item', href: '#novaid' },
  // ...
];
```

2. Editar `src/sections/Footer.tsx` (~6)

3. Adicionar secção em `src/App.tsx`

### Novo serviço
Ficheiro: `src/sections/Services.tsx`

Procurar arrays:
- `dentalServices` (dentária)
- `medicalServices` (geral)
- `wellnessServices` (bem-estar)

Adicionar objeto:
```javascript
{
  icon: IconName,  // Importar do lucide-react
  title: 'Nome Serviço',
  description: 'Descrição aqui',
  color: 'bg-color-50 text-color-600', // Tailwind colors
}
```

### Nova pergunta no FAQ
Ficheiro: `src/sections/FAQ.tsx` (~26)

Adicionar ao array `faqs`:
```javascript
{
  question: 'Pergunta?',
  answer: 'Resposta completa aqui.',
}
```

---

## 🎨 Componentes UI disponíveis

Estão em `src/components/ui/`:
- `button.tsx` - Botões
- `card.tsx` - Cards
- `dialog.tsx` - Modais
- `accordion.tsx` - FAQ expandir/colapsar
- `input.tsx` - Inputs de formulário
- `textarea.tsx` - Textareas

Como usar:
```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

<Button>Texto</Button>
```

---

## 📱 Testar responsividade

Chrome DevTools (F12):
1. Clicar no ícone de telemóvel/tablet
2. Selecionar dimensões (iPhone, Galaxy, etc.)
3. Testar todas as secções

---

## ⚠️ Erros comuns

### "Port 5173 is in use"
Solução: O Vite usa automaticamente a próxima porta (5174, 5175...)

### Erros de build (TypeScript)
```bash
npm run build
```
Ver mensagens de erro - geralmente:
- Imports não usados
- Variáveis não usadas
- Tipos incorretos

### CSS não atualiza
- Verificar se classe Tailwind existe
- Reiniciar servidor se necessário

---

## 🔗 Links importantes

- **Documentação React:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Lucide Icons:** https://lucide.dev/icons

---

## 💡 Dicas

1. **Sempre fazer build antes de apresentar** - apanha erros TypeScript
2. **Testar no telemóvel** - usabilidade diferente
3. **Usar imagens Unsplash** - substituir URL mantendo `?w=1920&q=80`
4. **Manter consistência** - seguir padrões existentes

---

## 📞 Suporte

Se algo falhar:
1. Verificar console do browser (F12)
2. Verificar terminal do servidor
3. Confirmar todos os imports estão corretos
4. Verificar se node_modules existe (senão: `npm install`)
