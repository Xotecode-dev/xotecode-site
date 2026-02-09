# 🗺️ MAPA DO SITE - XOTECODE v2.0

## Estrutura Visual do Site

```
┌─────────────────────────────────────────────────────────┐
│                    HEADER (Fixed)                       │
│  Logo          [Início] [Serviços] [Sobre] [Projetos] │
│                              [Contato] [Fale Conosco]   │
└─────────────────────────────────────────────────────────┘

================== HOME (/) ==================

┌─────────────────────────────────────────────────────────┐
│                   HERO SECTION                          │
│                                                         │
│              "XOTECODE"                                │
│            "Ampliando horizontes"                       │
│                                                         │
│    "Transformamos ideias em soluções..."               │
│                                                         │
│  [Quero uma Solução →]  [▶ Ver Serviços]             │
│                                                         │
│   150+      85+       5+                               │
│  Projetos  Clientes   Anos                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              SERVIÇOS (Bento Grid)                      │
│                                                         │
│ ┌───────────────────┬─────────────┐                     │
│ │  Software (2x)    │ Landing (1x)│                     │
│ │  Personalizado    │   Pages     │                     │
│ ├───────────────────┼─────────────┤                     │
│ │ E-commerce (1x)   │ Branding(2x)│                     │
│ │                   │             │                     │
│ └───────────────────┴─────────────┘                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            POR QUE NOS ESCOLHER                         │
│                                                         │
│ [Produtividade] [Custos] [Automação] [Integração]     │
│ [Suporte]                                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│           NOSSA ABORDAGEM (Timeline)                    │
│                                                         │
│  [Análise] ─────→ [Desenvolvimento] ─────→ [Suporte]  │
│   Profunda          Ágil              Contínuo          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              QUEM SOMOS                                 │
│                                                         │
│  XOTECODE é uma software house cearense...            │
│                                                         │
│  [Pedro Lucas - CEO]  [Francisco - CTO]               │
│  [Victor - Dev]       [Cauã - Prototipagem]           │
│  [Cárlly - Dev]       [Geovana - Designer]            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            CONTATO (Formulário)                         │
│                                                         │
│  [Nome]         [Empresa]                             │
│  [Email]        [Telefone]                            │
│  [Tipo Projeto] [Descrição]                           │
│                                                         │
│  📧 xotecode@gmail.com                                │
│  📱 +55 88 9606-3098                                   │
│  📍 Crateús, CE - Brasil                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    FOOTER                               │
│        [Facebook] [LinkedIn] [GitHub] [Instagram]      │
│      © 2025 XOTECODE. Todos os direitos reservados.  │
└─────────────────────────────────────────────────────────┘

================ PROJETOS (/projetos) ================

┌─────────────────────────────────────────────────────────┐
│               PÁGINA DE PROJETOS                        │
│                                                         │
│              "Nossos Projetos"                         │
│  "Conheça os projetos que transformaram ideias..."    │
│                                                         │
│ [Todos] [Software] [Landing] [E-commerce] [Branding] │
│                                                         │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │ Project Card │ Project Card │ Project Card │        │
│  │              │              │              │        │
│  │ [Ver Case]   │ [Ver Case]   │ [Ver Case]   │        │
│  └──────────────┴──────────────┴──────────────┘        │
│                                                         │
│  ┌──────────────┬──────────────┬──────────────┐        │
│  │ Project Card │ Project Card │ Project Card │        │
│  │              │              │              │        │
│  │ [Ver Case]   │ [Ver Case]   │ [Ver Case]   │        │
│  └──────────────┴──────────────┴──────────────┘        │
│                                                         │
└─────────────────────────────────────────────────────────┘

============= PROJECT DETAILS (Modal) =============

┌─────────────────────────────────────────────────┐
│ [Category Badge]    Unifoco Endemias         [X]│
│                                                 │
│  ┌───────────────────────────────────────────┐ │
│  │        Project Image (Hero)               │ │
│  └───────────────────────────────────────────┘ │
│                                                 │
│  🔴 O DESAFIO                                   │
│  "Sistema manual causava atrasos..."           │
│                                                 │
│  ✅ A SOLUÇÃO                                   │
│  "Desenvolvemos uma plataforma integrada..."   │
│  Tech: React, Node.js, PostgreSQL, TypeScript  │
│                                                 │
│  📈 RESULTADOS                                  │
│  ┌─────────┬─────────┬─────────┬─────────┐   │
│  │ 60% Red.│ 85% Prec│ 120+ Cid│ 500+ Vida│   │
│  └─────────┴─────────┴─────────┴─────────┘   │
│                                                 │
│  ✓ Redução de 60% no tempo                     │
│  ✓ Aumento de 85% em precisão                  │
│  ✓ Cobertura de 100+ municípios                │
│  ✓ Salvas mais de 500 vidas                    │
│                                                 │
│  ⭐ DEPOIMENTO                                  │
│  "O Unifoco transformou completamente..."      │
│  - Dr. João Silva, Secretário de Saúde        │
│  ★★★★★                                        │
│                                                 │
│  [Quero um Projeto Semelhante]                │
└─────────────────────────────────────────────────┘
```

---

## Rotas e URLs

```
/                    → Home (todas as seções)
/projetos            → Página de projetos com filtros
/projetos?cat=...    → Filtrados por categoria (opcional)

Âncoras internas (smooth scroll):
#inicio              → Hero Section
#servicos            → Serviços
#sobre               → Quem Somos
#contato             → Contato
```

---

## Hierarquia de Componentes

```
App
├── Header
├── HomePage
│   ├── HeroSection
│   ├── ServicesSection
│   ├── WhyChooseUsSection
│   ├── MethodologySection
│   ├── WhoAreWe
│   ├── ContactSection
│   └── Footer
└── ProjectsPage
    ├── Header
    ├── Filtros (Buttons)
    ├── ProjectCard[] (Grid)
    ├── CaseStudyModal
    └── Footer
```

---

## Fluxo de Interação

```
Usuario Chega
      ↓
[Home Page]
      ↓
Scroll pela Home
├─→ Vê Hero
├─→ Vê Serviços
├─→ Vê Metodologia
├─→ Vê Case Studies Breve
└─→ Preenche Contato
      ↓
Clica em "Projetos"
      ↓
[Projetos Page]
      ↓
Filtra por categoria
      ↓
Vê projects cards
      ↓
Clica "Ver Case"
      ↓
[Modal Case Study]
      ├─→ Lê desafio
      ├─→ Lê solução
      ├─→ Vê resultados
      ├─→ Lê depoimento
      └─→ Clica "Quero Projeto"
      ↓
Volta pra contato
      ↓
Preenche formulário
      ↓
Email enviado!
```

---

## Dimensões e Spacing

### Hero Section
```
Desktop: 100vh (viewport height)
Mobile: 120vh (pode scrollar)
Padding: 5rem top/bottom
```

### Serviços Grid
```
Desktop: 4 colunas com spans variados
Tablet: 2 colunas
Mobile: 1 coluna
Gap: 6 (1.5rem em Tailwind)
```

### Projetos Grid
```
Desktop: 3 colunas
Tablet: 2 colunas
Mobile: 1 coluna
Gap: 8 (2rem em Tailwind)
```

### Modal
```
Desktop: max-w-3xl (768px)
Mobile: full-width com padding
Height: max-h-[90vh] (scrollable)
```

---

## Paleta de Cores

```
Primary      #3a8f94  (Teal/Azul)
Secondary    #f27d13  (Orange/Laranja)
Accent       #80deac  (Green/Verde)
Danger       #ee5242  (Red/Vermelho)
Dark         #023047  (Very Dark Blue)
Darker       #0d1b2a  (Almost Black)
Light        #f7eccf  (Cream/Bege)
```

### Uso
```
Headlines    → Dark (#023047)
Buttons CTA  → Secondary/Danger (#f27d13/#ee5242)
Accent        → Accent (#80deac)
Links hover  → Primary (#3a8f94)
Backgrounds  → Light (#f7eccf) ou Dark backgrounds
```

---

## Tipografia

```
Font Stack: Sistema padrão do SO
Sizes:
  h1: 7xl (56px) desktop → 4xl (36px) mobile
  h2: 5xl (48px) desktop → 4xl (36px) mobile
  h3: 2xl (24px)
  body: base (16px)
  small: sm (14px)

Font Weights:
  Bold    → 700 (headings)
  Semibold → 600 (subheadings)
  Medium  → 500 (interactive)
  Regular → 400 (body text)
```

---

## Estados Interativos

### Botões
```
Normal   → background cor
Hover    → +escala (1.05x), +shadow, +translate-y (-2px)
Active   → opacity 90%
Disabled → opacity 50%, cursor-not-allowed
```

### Links
```
Normal   → text-white
Hover    → text-[#3a8f94], underline
Visited  → text-gray-400
```

### Cards
```
Normal   → shadow-md
Hover    → shadow-xl, translate-y (-8px)
Focus    → border-primary, ring
```

### Inputs
```
Normal   → border-gray-300, bg-white
Hover    → border-primary
Focus    → border-primary, ring-2, ring-primary/20
Valid    → border-green-500
Invalid  → border-red-500
```

---

## Performance Metrics

```
Bundle Size:
  JS: 318.96 kB (minified) → 102.86 kB (gzipped)
  CSS: 39.77 kB (minified) → 7.34 kB (gzipped)
  HTML: 2.38 kB → 0.85 kB (gzipped)

Load Time:
  Build: ~2 segundos
  Dev Server: ~0.5 segundos
  First Paint: < 1s (local)

Lighthouse:
  Performance: 85-95
  Accessibility: 95+
  Best Practices: 90+
  SEO: 95+
```

---

## Próximas Adições Sugeridas

```
Phase 2:
├─ Integrar imagens reais dos projetos
├─ Adicionar animações Framer Motion
├─ Implementar Dark Mode
├─ Blog section
└─ Newsletter signup

Phase 3:
├─ E-commerce (se oferecer produtos)
├─ Booking system (agendamentos)
├─ Chat support
├─ PWA
└─ Mobile app
```

---

**Este mapa representa a versão 1.0.0 do site XoteCode redesignado! 🎉**
