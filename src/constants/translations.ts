export type Language = 'en' | 'pt';

export const translations: Record<Language, Record<string, string>> = {
    en: {
        // Nav
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',

        // Hero
        'hero.greeting': 'Hello, I am',
        'hero.role': 'Full Stack Developer',
        'hero.description': 'Building digital experiences with modern technologies. Focused on performance, accessibility, and user-centric design.',
        'hero.cta': 'Contact Me',
        'hero.projects': 'View Work',
        'hero.linkedin': 'LinkedIn',
        'hero.github': 'GitHub',
        'hero.email': 'Email',

        // About
        'about.breadcrumb': 'home / user / about',
        'about.title': 'About Me',
        'about.intro.1': 'I am',
        'about.intro.role': 'Software Engineering Graduate',
        'about.intro.2': 'developing robust solutions. My philosophy revolves around clean code, user-centric design, and continuous learning.',
        'about.description': 'I specialize in building scalable web applications that prioritize performance and accessibility.',
        'about.photo_placeholder': '[Photo]',

        // Skills
        'skills.title': 'Technical Skills',
        'skills.frontend.title': 'Front-end',
        'skills.frontend.items': 'React / TypeScript / Next.js / Tailwind',
        'skills.styles.title': 'Styles',
        'skills.styles.items': 'CSS3 / SASS / Styled-Components / Framer Motion',
        'skills.backend.title': 'Back-end',
        'skills.backend.items': 'Node.js / Python / C# / PostgreSQL',
        'skills.devops.title': 'DevOps',
        'skills.devops.items': 'Docker / AWS / CI/CD / Linux',

        // Projects
        'projects.title': 'Selected Projects',
        'projects.view_all': 'View all',
        'projects.read_more': 'Read more',
        'projects.1.title': 'E-Commerce Platform',
        'projects.1.desc': 'A full-featured online store with payments.',
        'projects.2.title': 'Task Management',
        'projects.2.desc': 'Productivity tool for remote teams.',
        'projects.3.title': 'Financial Dashboard',
        'projects.3.desc': 'Real-time data visualization and analytics.',

        // Footer
        'footer.copyright': 'Developer Portfolio. Built with React.'
    },
    pt: {
        // Nav
        'nav.about': 'Sobre',
        'nav.projects': 'Projetos',
        'nav.skills': 'Habilidades',
        'nav.contact': 'Contato',

        // Hero
        'hero.greeting': 'Olá, eu sou',
        'hero.role': 'Desenvolvedor Full Stack',
        'hero.description': 'Construindo experiências digitais com tecnologias modernas. Focado em performance, acessibilidade e design centrado no usuário.',
        'hero.cta': 'Entre em Contato',
        'hero.projects': 'Ver Projetos',
        'hero.linkedin': 'LinkedIn',
        'hero.github': 'GitHub',
        'hero.email': 'Email',

        // About
        'about.breadcrumb': 'início / usuário / sobre',
        'about.title': 'Sobre Mim',
        'about.intro.1': 'Eu sou',
        'about.intro.role': 'Graduado em Engenharia de Software',
        'about.intro.2': 'desenvolvendo soluções robustas. Minha filosofia gira em torno de código limpo, design centrado no usuário e aprendizado contínuo.',
        'about.description': 'Eu me especializo na construção de aplicações web escaláveis que priorizam desempenho e acessibilidade.',
        'about.photo_placeholder': '[Foto]',

        // Skills
        'skills.title': 'Habilidades Técnicas',
        'skills.frontend.title': 'Front-end',
        'skills.frontend.items': 'React / TypeScript / Next.js / Tailwind',
        'skills.styles.title': 'Estilos',
        'skills.styles.items': 'CSS3 / SASS / Styled-Components / Framer Motion',
        'skills.backend.title': 'Back-end',
        'skills.backend.items': 'Node.js / Python / C# / PostgreSQL',
        'skills.devops.title': 'DevOps',
        'skills.devops.items': 'Docker / AWS / CI/CD / Linux',

        // Projects
        'projects.title': 'Projetos Selecionados',
        'projects.view_all': 'Ver todos',
        'projects.read_more': 'Ler mais',
        'projects.1.title': 'Plataforma de E-Commerce',
        'projects.1.desc': 'Uma loja online completa com pagamentos.',
        'projects.2.title': 'Gerenciamento de Tarefas',
        'projects.2.desc': 'Ferramenta de produtividade para times remotos.',
        'projects.3.title': 'Dashboard Financeiro',
        'projects.3.desc': 'Visualização de dados e análises em tempo real.',

        // Footer
        'footer.copyright': 'Portfólio de Desenvolvedor. Construído com React.'
    }
};
