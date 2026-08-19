export type Lang = 'pt' | 'en';
export type Bi = Record<Lang, string>;

export const PROFILE = {
  name: 'Nicolas Paiva',
  role: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' } as Bi,
  location: { pt: 'Ponta Grossa, PR — Brasil', en: 'Ponta Grossa, PR — Brazil' } as Bi,
  email: 'nicolastesla24@gmail.com',
  phone: '(42) 99973-6262',
  github: 'https://github.com/nicolasspaiva',
  linkedin: 'https://www.linkedin.com/in/nicolasspaiva',
  site: 'https://nicolaspaiva.dev.br',
};

/** Resolve um valor que pode ser texto fixo (nome próprio) ou bilíngue. */
export const resolve = (v: string | Bi, lang: Lang): string =>
  typeof v === 'string' ? v : v[lang];

export const STACK: { label: Bi; items: (string | Bi)[] }[] = [
  {
    label: { pt: 'Backend', en: 'Backend' },
    items: ['Node.js', 'APIs REST', 'Cloud Functions'],
  },
  {
    label: { pt: 'Frontend', en: 'Frontend' },
    items: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    label: { pt: 'Banco de dados', en: 'Databases' },
    items: ['PostgreSQL', 'SQL', 'Firestore'],
  },
  {
    label: { pt: 'Cloud e DevOps', en: 'Cloud & DevOps' },
    items: ['GCP', 'Docker', 'GitHub Actions', 'Git', 'CloudFlare', 'Ubuntu Server'],
  },
  {
    label: { pt: 'Testes', en: 'Testing' },
    items: ['Jest', 'Testing Library'],
  },
  {
    label: { pt: 'IA e automação', en: 'AI & automation' },
    items: ['Vertex AI', 'Genkit', 'Gemini', 'n8n'],
  },
  {
    label: { pt: 'Práticas', en: 'Practices' },
    items: [
      'Scrum',
      'Kanban',
      { pt: 'Code review', en: 'Code review' },
      { pt: 'Documentação técnica', en: 'Technical docs' },
    ],
  },
];

export type Experience = {
  company: string;
  role: Bi;
  place: string;
  /** ISO — fonte única para rótulo, duração e acumulado. */
  start: string;
  end: string | null;
  from: Bi;
  to: Bi;
  current: boolean;
  bullets: Bi[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: 'Rede de Postos Mahle',
    role: { pt: 'Analista de T.I.', en: 'IT Analyst' },
    place: 'Ponta Grossa, PR',
    start: '2024-07-01',
    end: null,
    from: { pt: 'Jul 2024', en: 'Jul 2024' },
    to: { pt: 'Atual', en: 'Present' },
    current: true,
    bullets: [
      {
        pt: 'Desenvolvi módulos no sistema interno para gestão de chamados, controle de SLA e inventário de ativos, com integração nativa ao Microsoft 365.',
        en: 'Built internal-system modules for ticket management, SLA control and asset inventory, with native Microsoft 365 integration.',
      },
      {
        pt: 'Migrei servidores locais Linux (Samba) para o Microsoft SharePoint junto às áreas de negócio das filiais, reduzindo custos de infraestrutura e melhorando a disponibilidade dos dados.',
        en: 'Migrated on-prem Linux (Samba) servers to Microsoft SharePoint alongside branch business teams, cutting infrastructure cost and improving data availability.',
      },
      {
        pt: 'Estruturei políticas de segurança e permissões de usuários, reduzindo o tempo de resposta em chamados técnicos.',
        en: 'Structured security policies and user permissions, reducing response time on technical tickets.',
      },
      {
        pt: 'Desenvolvi dashboard em Python (Plotly, Streamlit) para análise dos gastos de T.I., dando visibilidade estratégica à diretoria.',
        en: 'Built a Python dashboard (Plotly, Streamlit) for IT spend analysis, giving leadership strategic visibility.',
      },
    ],
  },
  {
    company: 'LP Brasil OSB',
    role: { pt: 'Assistente de T.I.', en: 'IT Assistant' },
    place: 'Ponta Grossa, PR',
    start: '2022-02-01',
    end: '2023-08-31',
    from: { pt: 'Fev 2022', en: 'Feb 2022' },
    to: { pt: 'Ago 2023', en: 'Aug 2023' },
    current: false,
    bullets: [
      {
        pt: 'Administrei acessos e permissões no Active Directory, garantindo conformidade com as políticas internas de segurança.',
        en: 'Managed Active Directory access and permissions, keeping compliance with internal security policy.',
      },
      {
        pt: 'Responsável por montagem, configuração e manutenção de hardware e software, e pelo suporte técnico presencial e remoto.',
        en: 'Responsible for hardware and software setup and maintenance, plus on-site and remote technical support.',
      },
    ],
  },
];

export type Project = {
  name: string;
  kind: Bi;
  period: Bi;
  status: 'shipped' | 'live';
  summary: Bi;
  bullets: Bi[];
  tech: string[];
  href?: string;
};

export const PROJECTS: Project[] = [
  {
    name: 'Sentinel AI',
    kind: { pt: 'Hackathon UNICESUMAR', en: 'UNICESUMAR Hackathon' },
    period: { pt: 'Ago — Set 2025', en: 'Aug — Sep 2025' },
    status: 'shipped',
    summary: {
      pt: 'Monitoramento industrial IoT com detecção de anomalias por IA, construído em equipe sob prazo de hackathon.',
      en: 'Industrial IoT monitoring with AI anomaly detection, built as a team under hackathon deadline.',
    },
    bullets: [
      {
        pt: 'Interface de monitoramento em React.js e TypeScript, consumindo APIs REST próprias em Node.js sobre Cloud Functions.',
        en: 'Monitoring interface in React.js and TypeScript, consuming in-house Node.js REST APIs on Cloud Functions.',
      },
      {
        pt: 'Persistência dos dados de sensores modelada em Firestore, com arquitetura serverless na Google Cloud.',
        en: 'Sensor data persistence modelled in Firestore, serverless architecture on Google Cloud.',
      },
      {
        pt: 'Detecção de anomalias via Vertex AI e automação de relatórios com IA generativa (Genkit e Gemini).',
        en: 'Anomaly detection through Vertex AI and report automation with generative AI (Genkit and Gemini).',
      },
    ],
    tech: ['React.js', 'TypeScript', 'Node.js', 'Firestore', 'GCP', 'Vertex AI', 'Genkit', 'Gemini'],
    href: 'https://github.com/nicolasspaiva/sentinel-AI',
  },
  {
    name: 'nicolaspaiva.dev.br',
    kind: { pt: 'Projeto próprio', en: 'Personal project' },
    period: { pt: '2025 — atual', en: '2025 — present' },
    status: 'live',
    summary: {
      pt: 'Este site. Portfólio construído do zero em React 19 e Vite, com internacionalização e sistema de design próprio.',
      en: 'This site. Portfolio built from scratch in React 19 and Vite, with i18n and its own design system.',
    },
    bullets: [
      {
        pt: 'Sistema de design em CSS puro sobre tokens, sem framework de UI.',
        en: 'Design system in plain CSS over tokens, no UI framework.',
      },
      {
        pt: 'Internacionalização PT/EN com Context API e persistência local.',
        en: 'PT/EN internationalisation with Context API and local persistence.',
      },
    ],
    tech: ['React 19', 'TypeScript', 'Vite', 'CSS'],
    href: 'https://github.com/nicolasspaiva/portfolio.black',
  },
];

export type Credential = { title: Bi; org: string; period: string };

export const EDUCATION: Credential[] = [
  {
    title: { pt: 'Bacharelado em Engenharia de Software', en: 'BSc in Software Engineering' },
    org: 'Unicesumar',
    period: '2022 — 2026',
  },
  {
    title: { pt: 'Google Cloud Computing Foundations', en: 'Google Cloud Computing Foundations' },
    org: 'Google Cloud',
    period: '2025',
  },
  {
    title: { pt: 'Curso Técnico em Python', en: 'Python Technical Course' },
    org: 'One Bit Code',
    period: '2023 — 2024',
  },
];

export const LANGUAGES: { name: Bi; level: Bi }[] = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Intermediário B2', en: 'Intermediate B2' } },
];

/** Períodos derivados da própria lista — impossível dessincronizar. */
export const tenures = () => EXPERIENCE.map(({ start, end }) => ({ from: start, to: end }));

/** Início do cargo em curso — alimenta o contador de uptime do hero. */
export const currentRoleStart = () => {
  const current = EXPERIENCE.find((e) => e.current) ?? EXPERIENCE[0];
  return new Date(`${current.start}T00:00:00`);
};
