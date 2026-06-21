export interface Project {
  id: string;
  name: string;
  status: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface AISDDDoc {
  name: string;
  description: string;
}

export interface Area {
  title: string;
  description: string;
  iconName: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export const portfolioData = {
  personal: {
    fullName: "Anderson Matheus Albuquerque",
    shortName: "Anderson Matheus",
    role: "OpsAI Systems Builder",
    subtitle: "Sistemas, automação e logística com IA aplicada",
    tagline: "Transformo experiência operacional em soluções digitais para roteirização, controle, produtividade e tomada de decisão.",
    aboutHeading: "Experiência real, soluções digitais",
    aboutText: "Sou Supervisor Operacional de Logística e desenvolvedor em formação prática, criando soluções para roteirização, controle operacional, automação de processos e desenvolvimento assistido por IA.\n\nMinha base vem da operação real: prazos, custos, rotas, coletas, entregas, performance e tomada de decisão diária. Uso essa vivência para construir ferramentas práticas, eficientes e orientadas a dados.",
  },
  links: {
    github: "https://github.com/andersonmatheusalbuquerque",
    linkedin: "https://linkedin.com/in/anderson-matheus-albuquerque", // customizable standard formats
    email: "mailto:andersonmatheusalbuquerque@gmail.com",
    emailRaw: "andersonmatheusalbuquerque@gmail.com"
  },
  areas: [
    {
      title: "Logística operacional",
      description: "Supervisão prática, otimização de fluxos, organização de carregamento e gestão ativa do dia a dia logístico.",
      iconName: "Truck"
    },
    {
      title: "Roteirização e performance",
      description: "Definição inteligente de caminhos, análise de tempos, custos de frete e aproveitamento máximo de frota.",
      iconName: "Layers"
    },
    {
      title: "Controle de custos",
      description: "Monitoramento detalhado de diárias, quilometragem, combustível e otimização financeira operacional.",
      iconName: "DollarSign"
    },
    {
      title: "Automação de processos",
      description: "Scripts, macros e robôs para eliminar digitação manual de relatórios e agilizar expedição.",
      iconName: "Cpu"
    },
    {
      title: "Sistemas internos",
      description: "Criação de ferramentas web e móveis sob medida para equipes operacionais de fretes e pátio.",
      iconName: "Database"
    },
    {
      title: "Desenvolvimento com IA",
      description: "Engenharia de especificações e uso inteligente de LLMs para acelerar codificação e análise de dados.",
      iconName: "Compass"
    }
  ] as Area[],
  projects: [
    {
      id: "semi-tms",
      name: "Sistema de Roteirização / Semi-TMS",
      status: "Em desenvolvimento",
      description: "Sistema para apoiar roteirização operacional, controle de entregas, coletas, custos, performance e programação diária de veículos.",
      highlights: [
        "Importação de relatórios",
        "Controle por rota, cidade e veículo",
        "Indicadores operacionais",
        "Apoio à decisão logística",
        "Organização da programação diária"
      ],
      tags: ["Logística", "Roteirização", "Performance", "Relatórios", "Operação"]
    },
    {
      id: "casa-em-dia",
      name: "Casa em Dia",
      status: "Em desenvolvimento",
      description: "Aplicativo Android para organização doméstica, lembretes recorrentes, histórico de tarefas e controle simples da rotina familiar.",
      highlights: [
        "Android",
        "Kotlin",
        "Banco local",
        "Lembretes",
        "Recorrência",
        "Histórico"
      ],
      tags: ["Android", "Kotlin", "Room", "Lembretes", "Rotina"]
    },
    {
      id: "aisdd-framework",
      name: "AISDD Framework",
      status: "Em desenvolvimento",
      description: "Framework para desenvolvimento de software com IA, focado em documentação persistente, continuidade entre sessões, rastreabilidade e redução de alucinações.",
      highlights: [
        "Spec-driven development",
        "Documentação como fonte da verdade",
        "Baixo consumo de contexto",
        "Compatível com múltiplas IAs",
        "Decisões rastreáveis"
      ],
      tags: ["IA", "SDD", "Documentação", "Automação", "Framework"]
    }
  ] as Project[],
  aisdd: {
    heading: "AISDD: desenvolvimento com IA sem perder controle",
    description: "AISDD é meu framework de desenvolvimento assistido por IA. Ele organiza projetos em documentos persistentes que registram regras, especificações, arquitetura, estado atual, próximas tarefas, decisões e critérios de aceite.",
    quote: "Este próprio portfólio pode evoluir seguindo o AISDD: cada mudança deve ter objetivo claro, escopo pequeno, aceite definido e documentação atualizada.",
    principles: [
      {
        title: "Documentação como fonte da verdade",
        desc: "Uma base central escrita alinha a visão do desenvolvedor e das IAs, evitando desvios."
      },
      {
        title: "Uma tarefa por ciclo",
        desc: "Foco integral em resolver um pequeno problema por vez para garantir precisão e estabilidade."
      },
      {
        title: "Mudanças incrementais",
        desc: "Implementação passo a passo com testes intermediários reduzem erros em cascata."
      },
      {
        title: "Preservação de funcionalidades existentes",
        desc: "Nunca reescrever sem validar o impacto no código que já funciona perfeitamente."
      },
      {
        title: "Arquitetura registrada",
        desc: "Definição explícita de padrões e tecnologias que o projeto adota e deve obedecer."
      },
      {
        title: "Estado atual documentado",
        desc: "Exposição exata das funcionalidades prontas e pendências mapeadas a cada passo."
      },
      {
        title: "Próximos passos claros",
        desc: "Planejamento estruturado para guiar a IA de forma sequencial, sem improvisos."
      },
      {
        title: "Decisões rastreáveis",
        desc: "Um log de decisões arquiteturais impede reversões ou discussões repetitivas."
      },
      {
        title: "Redução de alucinações",
        desc: "Contextos focados, prompts precisos e escopo restrito mantêm a IA no caminho certo."
      },
      {
        title: "Compatível com múltiplas IAs",
        desc: "Trabalhe de forma agnóstica com o Gemini, Claude ou GPT usando os mesmos documentos de guia."
      }
    ],
    documents: [
      { name: "PROJECT_RULES", description: "Diretrizes estritas e restrições técnicas globais" },
      { name: "PRODUCT_SPEC", description: "Escopo, objetivos e requisitos do produto" },
      { name: "ARCHITECTURE", description: "Esquema, tecnologias e fluxo de dados" },
      { name: "CURRENT_STATE", description: "Mapeamento do progresso atual e dos arquivos" },
      { name: "NEXT_TASK", description: "Definição exata do próximo incremento isolado" },
      { name: "ACCEPTANCE_CHECKS", description: "Critérios de aceite objetivos para validar a tarefa" },
      { name: "DECISIONS_LOG", description: "Histórico detalhado de escolhas técnicas" },
      { name: "HANDOFF", description: "Instruções de transição para a próxima sessão de IA" },
      { name: "KNOWN_ISSUES", description: "Registro de bugs ou comportamentos inesperados" },
      { name: "FILE_INDEX", description: "Mapeamento e finalidade de cada arquivo do projeto" },
      { name: "TEST_CHECKLIST", description: "Casos de teste manuais ou automatizados necessários" }
    ] as AISDDDoc[]
  },
  stack: [
    { label: "React", category: "frontend" },
    { label: "Vite", category: "frontend" },
    { label: "Tailwind CSS", category: "frontend" },
    { label: "Supabase", category: "backend" },
    { label: "Python", category: "languages" },
    { label: "Kotlin", category: "mobile" },
    { label: "Android", category: "mobile" },
    { label: "SQLite", category: "backend" },
    { label: "Firebase", category: "backend" },
    { label: "GitHub", category: "tools" },
    { label: "Excel", category: "logistics" },
    { label: "CSV", category: "logistics" },
    { label: "SSW", category: "logistics" },
    { label: "IA aplicada ao desenvolvimento", category: "methodology" }
  ],
  methods: [
    {
      number: "01",
      title: "Entender a dor real",
      description: "Diagnóstico direto do gargalo operacional diretamente no chão de fábrica ou no pátio logístico."
    },
    {
      number: "02",
      title: "Transformar processo em fluxo",
      description: "Desenhar as etapas e fluxos de dados de forma lógica antes de escrever qualquer linha de código."
    },
    {
      number: "03",
      title: "Documentar regras e contexto",
      description: "Uso rigoroso do AISDD para guiar a criação de assets sem risco de perder o rumo no desenvolvimento."
    },
    {
      number: "04",
      title: "Construir em ciclos pequenos",
      description: "Entregas rápidas de componentes focados e testáveis, diminuindo o índice de bugs."
    },
    {
      number: "05",
      title: "Testar com uso prático",
      description: "Colocar o software para rodar diante do cenário real de carga, rotas e tabelas de fretes."
    },
    {
      number: "06",
      title: "Evoluir sem quebrar",
      description: "Refatoração contínua, documentada e com validação rígida de retrocompatibilidade operacional."
    }
  ] as MethodStep[]
};
