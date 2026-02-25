# Layout e Estrutura Visual

## Paleta de Cores

```
PRIMARY: #16807A (Teal)
- Light: #1E9D96
- Dark: #126b66
- Mint: #20B2AA

BACKGROUNDS:
- White: #FFFFFF
- Cream: #F5F9F8
- Light: #E8F6F5

TEXT:
- Primary: #111827
- Secondary: #4B5563
- Muted: #9CA3AF
```

---

## Estrutura da Pagina (Mobile-First)

```
[TOP BAR - Fixo]
Tel: 233 109 109 | Horario: Seg-Sab 9h-20h

[NAVIGATION - Fixa]
[LOGO] Menu Hamburguer (mobile)
Links: Inicio | Servicos | Sobre | Equipa | FAQ | Contactos

[HERO - 100vh]
- Background imagem + overlay teal
- Tag: Clinica Medica e Dentaria
- Titulo: "O seu sorriso e a nossa prioridade"
- Botoes: Marcar Consulta | Conhecer Servicos
- Badges: Equipa Especializada | Aberto Todos os Dias | Tecnologia
- Stats: +10 anos | +5000 pacientes (hidden mobile)

[SERVICES]
Secao 1: Medicina Dentaria (4 cards)
  - Medicina Dentaria Geral
  - Estetica Dental
  - Implantologia
  - Endodontia

Secao 2: Medicina Geral (4 cards)
  - Medicina Geral e Familiar
  - Analises Clinicas
  - Terapia da Fala
  - Fisioterapia

Secao 3: Bem-Estar e Desporto (4 cards)
  - Palmilhas Personalizadas
  - Nutricao
  - Personal Training
  - Pilates

CTA Box: "Precisa de ajuda?" + Botao

[ABOUT]
- Imagem clinica (esquerda)
- Card horario flutuante
- Texto sobre a clinica
- Lista de 6 diferenciais
- Card contactos

[TEAM]
- 4 cards de membros da equipa
- Stats: +10 | +15 | +5000 | 100%

[TESTIMONIALS]
- 3 cards de testemunhos
- Estrelas de rating
- Avatar + nome

[FAQ - Accordion]
- 6 perguntas frequentes
- Expandir/colapsar
- CTA Contactar

[CONTACT]
Coluna 1:
- Informacoes de contacto
- Mapa Google Maps

Coluna 2:
- Formulario de marcacao
- Campos: Nome, Email, Telefone, Servico
- Selecao data/hora (modal calendario)
- Mensagem opcional
- Botao Confirmar

[FOOTER]
4 colunas:
1. Brand + descricao + redes sociais
2. Links Rapidos
3. Servicos
4. Contactos + horario

Bottom: Copyright + Links legais
```

---

## Componentes Flutuantes (Z-index alto)

```
[CANTO SUPERIOR DIREITO]
ActivityToast - Notificacoes de atividade
"X marcou consulta agora mesmo"

[CANTO INFERIOR ESQUERDO]
SmartAssistant - Sugestoes contextuais
Baseado na seccao atual do scroll

[CANTO INFERIOR DIREITO]
AIChatbot - Botao flutuante
Abre chat com assistente virtual
```

---

## Breakpoints

```
Mobile: < 640px
- Menu hamburguer
- 1 coluna
- Textos pequenos
- Stats escondidos

Tablet: 640px - 1024px
- Menu desktop visivel
- 2 colunas
- Textos medios

Desktop: > 1024px
- Menu completo
- 4 colunas
- Todas animacoes
- Stats visiveis
```

---

## Animações Principais

1. Scroll-triggered fadeInUp
2. Header: Top bar esconde ao scrollar
3. Cards: Hover lift + shadow
4. Chatbot: Slide in from right
5. Toast: Slide in from right
6. FAQ: Accordion smooth expand

---

## Formularios

Marcacao de Consulta:
- Validacao: Nome, Email obrigatorios
- Data/Hora: Modal com calendario
- Servico: Dropdown agrupado por categoria
- Submit: Guarda no localStorage
- Feedback: Mensagem de sucesso
