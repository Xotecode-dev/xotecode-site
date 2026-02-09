// GUIA DE INTEGRAÇÃO: Página de Projetos (Projects Page)
// ============================================================

// 1. ACESSAR A PÁGINA
// -------------------
// URL: /projetos
// Exemplo: https://xotecode.com/projetos

// 2. ESTRUTURA DE NAVEGAÇÃO
// --------------------------
// O Header foi atualizado para incluir um link "Projetos"
// 
// Header Menu:
// - Início
// - Serviços
// - Sobre Nós
// - Contato
// - [NEW] Projetos ← Nova opção
//
// Localização do código: src/components/Header.tsx (linha 15-17)

// 3. ADICIONAR NOVO PROJETO
// -------------------------
// 
// Passo 1: Abrir src/data/projects.ts
// 
// Passo 2: Adicionar novo objeto à array `projects`:
//
// {
//   id: 'seu-projeto-slug',
//   title: 'Nome do Projeto',
//   client: 'Nome do Cliente',
//   category: 'custom-software' | 'landing-page' | 'ecommerce' | 'branding',
//   image: 'URL da imagem (use placeholder: https://images.unsplash.com/...)',
//   technologies: ['React', 'Node.js', 'PostgreSQL'],
//   challenge: 'Descrição do desafio enfrentado pelo cliente',
//   solution: 'Como a XoteCode resolveu o problema',
//   results: [
//     'Resultado 1 em formato bullet point',
//     'Resultado 2',
//     'Resultado 3'
//   ],
//   metrics: [
//     { label: 'Métrica 1', value: '123%' },
//     { label: 'Métrica 2', value: '45%' },
//     { label: 'Métrica 3', value: '6,789' },
//     { label: 'Métrica 4', value: '4.8/5' }
//   ],
//   testimonial: {
//     text: 'O que o cliente disse sobre o projeto',
//     author: 'Nome do Responsável',
//     position: 'Cargo do Responsável'
//   }
// }
//
// Passo 3: Salvar e fazer deploy!

// 4. CATEGORIAS DISPONÍVEIS
// -------------------------
// 
// const categories = [
//   { id: 'all', label: 'Todos os Projetos' },
//   { id: 'custom-software', label: 'Software Personalizado' },
//   { id: 'landing-page', label: 'Landing Pages' },
//   { id: 'ecommerce', label: 'E-commerce' },
//   { id: 'branding', label: 'Branding' }
// ];
//
// Use uma dessas categorias no campo 'category' do projeto

// 5. IMAGENS - PLACEHOLDER vs REAL
// --------------------------------
// 
// Placeholder (Desenvolvimento):
// image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop'
//
// Real (Produção):
// image: '/images/projetos/seu-projeto.jpg'
//
// Recomendações:
// - Tamanho mínimo: 800x600px
// - Formato: JPG, PNG ou WebP
// - Otimizar com tinypng.com ou similar
// - Colocar em public/images/projetos/

// 6. MODAL DE CASE STUDY
// ----------------------
// 
// O modal abre automaticamente ao clicar no botão "Ver Case" do card
// Arquivo do modal: src/components/CaseStudyModal.tsx
//
// Estrutura automática:
// 1. Header com badge, título e fechar
// 2. Imagem principal
// 3. Seção "O Desafio"
// 4. Seção "A Solução" com tech stack
// 5. Seção "Resultados" com métricas e bullets
// 6. Seção "Depoimento" com quote do cliente
// 7. CTA para contato

// 7. CUSTOMIZAR CORES POR CATEGORIA
// ----------------------------------
// 
// Atualmente, as cores são automáticas por categoria:
// - Software: Azul (#3a8f94)
// - Landing: Laranja (#f27d13)
// - E-commerce: Verde (#80deac)
// - Branding: Vermelho (#ff6b6b)
//
// Para customizar, editar src/components/ProjectCard.tsx
// e src/components/CaseStudyModal.tsx

// 8. RESPONSIVIDADE
// -----------------
// 
// Grid de projetos se adapta automaticamente:
// - Mobile (< 640px): 1 coluna
// - Tablet (640px - 1024px): 2 colunas
// - Desktop (> 1024px): 3 colunas
//
// Modal também é responsivo:
// - Mobile: Full width com padding
// - Desktop: Max-width 3xl (centralizado)

// 9. SEO - BEST PRACTICES
// -----------------------
// 
// Para melhorar SEO da página /projetos:
//
// 1. Adicionar meta tags (em public/index.html):
//    <meta name="description" content="Veja nossos projetos realizados...">
//
// 2. Alt text nas imagens (já implementado):
//    <img alt="Unifoco Endemias - Sistema de Rastreamento">
//
// 3. Heading structure:
//    <h1> - Título da página
//    <h2> - Título de cada projeto (no modal)
//    <h3> - Subtítulos (Challenge, Solution, etc)
//
// 4. URLs semânticas:
//    /projetos - Página de listagem
//    /projetos?categoria=ecommerce - Com filtro
//
// 5. Schema markup (recomendado):
//    Implementar JSON-LD para ProjectsPage

// 10. PERFORMANCE
// ---------------
// 
// Otimizações já implementadas:
// ✓ Lazy loading de imagens
// ✓ Code splitting (página separada)
// ✓ CSS purge do Tailwind
// ✓ Compressão gzip habilitada
//
// Sugestões para melhorar:
// - Usar WebP para imagens
// - Implementar Image Optimization (Next.js Image ou similar)
// - Adicionar service worker para PWA
// - Implementar caching headers

// 11. FILTROS
// -----------
// 
// O sistema de filtros é totalmente funcional:
// 
// Implementação (src/pages/ProjectsPage.tsx):
// const [activeFilter, setActiveFilter] = useState('all');
// const filteredProjects = activeFilter === 'all'
//   ? projects
//   : projects.filter(project => project.category === activeFilter);
//
// Para modificar o comportamento, editar o hook useState e useEffect
// se necessário incluir persistência (URL params ou localStorage)

// 12. ANIMAÇÕES
// ---------------
// 
// Animações automáticas:
// 
// - Card hover: Zoom imagem 110%, border color change
// - Modal enter: Fade in com scale
// - Scroll reveal: Fade up ao entrar em viewport
//
// Para customizar, editar:
// - index.css (classes CSS)
// - Tailwind config (animações)
// - Componentes (className com animações)

// 13. INTEGRAÇÃO COM FORMS
// -------------------------
// 
// CTA no modal: "Quero um Projeto Semelhante"
// Comportamento: Scrolls para #contato na home
// 
// Para melhorar:
// - Passar dados do projeto para o formulário
// - Pré-popular campo "tipo_projeto"
// - Adicionar referência do projeto no email
//
// Código sugerido:
// <a href="/#contato" onClick={() => {
//   sessionStorage.setItem('referrer_project', projectId);
// }}>

// 14. TESTES
// -----------
// 
// Checklist de teste antes de deploy:
// 
// [ ] Todos os projetos aparecem na home
// [ ] Filtros funcionam corretamente
// [ ] Modal abre e fecha sem erros
// [ ] Responsividade OK em mobile
// [ ] Links de navegação funcionam
// [ ] Imagens carregam corretamente
// [ ] Console sem erros de TypeScript
// [ ] Build passa sem warnings

// 15. DEPLOYMENT
// ---------------
// 
// Deploy automático via GitHub Pages:
// npm run deploy
//
// Alternativas:
// - Vercel: vercel.com (recomendado)
// - Netlify: netlify.com
// - AWS Amplify: aws.amazon.com/amplify

console.log('🚀 Guia de integração carregado!');
