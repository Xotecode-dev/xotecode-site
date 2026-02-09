import PrataLoversImage from '../assets/img/prata lovers.png';
import AttosConsultoriaImage from '../assets/img/attos consultoria.png';
import UnifocoImage from '../assets/img/Unifoco.png';

export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'custom-software' | 'site-institucional' | 'landing-page' | 'ecommerce' | 'branding';
  image: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'prata-lovers',
    title: 'E-commerce de Joias - Prata Lovers',
    client: 'Prata Lovers',
    category: 'ecommerce',
    image: PrataLoversImage,
    technologies: ['React', 'PHP', 'Tailwind CSS', 'WhatsApp API', 'Lucide React'],
    challenge: 'A cliente necessitava de uma vitrine profissional para expor suas joias em prata 925, saindo das vendas informais por redes sociais para um catálogo organizado que facilitasse a escolha do cliente e a gestão de pedidos.',
    solution: 'Desenvolvimento de uma plataforma e-commerce "headless" focada em conversão via mensagem. O sistema permite navegação fluida, adição de produtos ao carrinho e finalização de pedido automatizada via WhatsApp, enviando a lista detalhada dos itens escolhidos diretamente para a proprietária.',
    results: [
      'Agilização no processo de atendimento e fechamento de pedidos',
      'Melhoria significativa na apresentação visual e credibilidade da marca',
      'Organização automática dos dados do pedido (produtos, tamanhos e valores)',
      'Interface otimizada para dispositivos móveis (Mobile First)'
    ],
    metrics: [
      { label: 'Performance (PageSpeed)', value: '97/100' },
      { label: 'Eficiência de Atendimento', value: '+70%' },
      { label: 'Gerenciamento de pedidos', value: '+80%' },
      { label: 'Retenção de Usuários', value: '45%' }
    ],
    testimonial: {
      text: 'O site transformou a forma como recebo meus pedidos. Agora meus clientes escolhem tudo com calma e eu recebo a lista pronta no WhatsApp, o que economiza muito tempo e profissionaliza meu negócio.',
      author: 'Proprietária',
      position: 'Fundadora - Prata Lovers'
    }
  },
  {
    id: 'attos-consultoria',
    title: 'Consultoria Especializada - Supply Chain & Logística',
    client: 'Attos Consultoria (Antônio Rodrigues Neto)',
    category: 'site-institucional',
    image: AttosConsultoriaImage,
    technologies: ['React', 'Tailwind CSS', 'SEO Estratégico'],
    challenge: 'Traduzir a vasta experiência executiva e acadêmica do consultor Antônio Rodrigues Neto em uma presença digital de alto impacto que transmitisse confiança para grandes indústrias e empresas do setor logístico.',
    solution: 'Criação de um site institucional de alta performance com design corporativo e sóbrio. A plataforma destaca soluções em planejamento de centros de distribuição, gestão de KPIs operacionais e capacitação profissional, utilizando uma arquitetura de informação focada em conversão B2B.',
    results: [
      'Posicionamento digital alinhado à senioridade do fundador',
      'Estruturação clara de serviços complexos (Supply Chain e engenharia)',
      'Otimização para busca orgânica (SEO) em termos técnicos do setor',
      'Site com carregamento ultra-rápido para melhor experiência do usuário'
    ],
    metrics: [
      { label: 'Performance (PageSpeed)', value: '99/100' },
      { label: 'Tempo de Carregamento', value: '< 1.2s' },
      { label: 'Retenção de Usuários', value: '+55%' },
      { label: 'Leads Qualificados', value: 'Crescente' }
    ],
    testimonial: {
      text: 'O site conseguiu refletir exatamente a nossa expertise, unindo tecnologia e um visual extremamente profissional que passa a segurança que nossos clientes corporativos exigem.',
      author: 'Antônio Rodrigues Neto',
      position: 'Diretor Executivo e Especialista em Logística'
    }
  },
  {
    id: 'unifoco-endemias',
    title: 'Unifoco Endemias – Gestão Inteligente de Saúde Pública',
    client: 'Setor Público (Foco Inicial: Ipu-CE)',
    category: 'custom-software',
    image: UnifocoImage,
    technologies: ['React', 'Next.js', '.NET 8.0', 'SQL Server', 'PWA (Offline-first)'],
    challenge: 'Substituir processos manuais e o uso de papel no combate a endemias (inicialmente Doença de Chagas), permitindo que agentes trabalhem em áreas remotas sem acesso imediato à internet.',
    solution: 'Desenvolvimento de um sistema integrado com suporte total à operação offline e sincronização inteligente de dados. A plataforma automatiza o cadastro de residências, o controle de borrifações e a gestão de focos de insetos diretamente no campo.',
    results: [
      'Digitalização completa dos fluxos de trabalho de campo',
      'Geração automatizada de relatórios semanais de produtividade',
      'Controle rigoroso de visitas e pendências de borrifação',
      'Sincronização segura de dados assim que o agente recupera conexão'
    ],
    metrics: [
      { label: 'Disponibilidade', value: '99%' },
      { label: 'Operação Offline', value: '100%' },
      { label: 'Tempo de Resposta', value: '< 2s' },
      { label: 'Usuários Simultâneos', value: '200+' }
    ],
    testimonial: {
      text: '',
      author: '',
      position: ''
    }
  }
];
