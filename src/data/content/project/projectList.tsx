import { projectImages as img } from '@/assets/constants/projectImages';
import {
  Challenges,
  Description,
  FeatureList,
  FuturePlans,
  Highlights,
  Learnings,
  TechStack,
} from '@/components/shared/project/descriptions';
import type { IProject } from '@/types/interfaces/IProject';

export const projectList: IProject[] = [
  {
    name: 'Pluto',
    media: {
      thumb: img.plutoApp,
    },
    techs: [
      'next',
      'tailwind',
      'zustand',
      'typescript',
      'prisma',
      'postgresql',
      'supabase',
    ],
    source: 'personal',
    backgroundColor: 'light',
    links: {
      github: '#',
      live: '#',
    },
    info: {
      createdAt: new Date(2025, 4, 30),
      category: ['fullstack', 'frontend', 'backend'],
      status: 'in-progress',
      tagline: 'Aplicação para gerenciamento financeiro.',
    },
    description: (
      <>
        <Description content='Pluto é um projeto fullstack com o objetivo de facilitar a gestão financeira, isso tudo através de uma UI/UX simples e acessível. Trazendo capacidade de gerenciar transações, poupança, orçamento e objetivos.' />
        <FeatureList
          featureList={[
            'Monitoramento',
            'Gerenciamento de Transação',
            'Gerenciamento de Poupança',
            'Gerenciamento de Orçamento',
            'Gerenciamento de Objetivos',
            'Autenticação',
            'Acesso',
            'Acessibilidade',
          ]}
        />
        <TechStack
          techList={[
            {
              tech: 'next',
              reason:
                'Utilizado devido a facilidade de criação de rotas, SSR, agilidade na construção da aplicação e API Routes a fim de evitar backend robusto.',
            },
            {
              tech: 'tailwind',
              reason:
                'Utilizado devido a alta velocidade de criação de componentes e estilização.',
            },
            {
              tech: 'zustand',
              reason:
                'Utilizado devido a simplicidade e escalabilidade frente a Context API.',
            },
            {
              tech: 'typescript',
              reason:
                'Utilizado para garantir segutura de tipos pela aplicação.',
            },
            {
              tech: 'prisma',
              reason:
                'Utilizado para abstrair queries e garantir integridade na aplicação.',
            },
            {
              tech: 'postgresql',
              reason: 'Utilizado para persistência dos dados.',
            },
            {
              tech: 'supabase',
              reason: 'Utilizado para fornecer um backend serverless robusto.',
            },
          ]}
        />
        <Highlights
          highlightList={[
            'Autenticação & Acesso',
            'UI & UX simples e acessível',
            'Arquitetura Organizada (DDD)',
          ]}
        />
        <Challenges
          challengeList={[
            { name: 'Autenticação', category: 'fullstack', difficulty: 'low' },
            { name: 'Acesso', category: 'fullstack', difficulty: 'low' },
            { name: 'Gráficos', category: 'frontend', difficulty: 'low' },
            { name: 'Organização DDD', category: 'backend', difficulty: 'low' },
            {
              name: 'Filtros de Transação',
              category: 'frontend',
              difficulty: 'mid',
            },
            { name: 'Acessibilidade', category: 'frontend', difficulty: 'mid' },
            {
              name: 'Design Responsivo',
              category: 'frontend',
              difficulty: 'high',
            },
          ]}
        />
        <Learnings
          learningsList={[
            {
              learned: 'Entendimento de Grid Layout',
              tech: 'css',
            },
            {
              learned: 'API Route',
              tech: 'next',
            },
            { learned: 'Organização em DDD', tech: 'typescript' },
            { learned: 'Utilização de Maps', tech: 'typescript' },
            {
              learned: 'Criação de gráficos com ApexChartJS e Recharts',
              tech: 'react',
            },
            { learned: 'Uso do Zustand', tech: 'zustand' },
            { learned: 'Integração com Supabase', tech: 'supabase' },
          ]}
        />
        <FuturePlans
          plans={[
            {
              name: 'Implementar mascote',
            },
            {
              name: 'Implementar conselhos',
            },
            {
              name: 'Integração com Testes',
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'Kronos',
    media: {
      thumb: img.kronosApp,
    },
    techs: [
      'turborepo',
      'typescript',
      'next',
      'tailwind',
      'nest',
      'socket.io',
      'prisma',
      'postgresql',
    ],
    source: 'personal',
    backgroundColor: 'dark',
    links: {
      github: '#',
      live: '#',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack', 'frontend', 'backend'],
      status: 'in-progress',
      tagline: 'Aplicação para gerenciamento de tarefas, kanbans e notas',
    },
    description: (
      <>
        <Description content='Kronos é um projeto fullstack com o objetivo de permitir que o usuário possa gerenciar Notas, Kanban e Tarefas. Com um sistema integrado de WebSocket que permite atualizações em tempo real que refletem para outros usuários de um mesmo time.' />
        <FeatureList
          featureList={[
            'Gerenciamento de Tarefas',
            'Gerenciamento de Notas',
            'Markup Customizado',
            'Gerenciamento de Kanban',
            'Comunicação em Tempo real',
            'Autenticação',
            'Acesso',
          ]}
        />
        <TechStack
          techList={[
            {
              tech: 'turborepo',
              reason:
                'Utilizado para facilitar o gerenciamento de monorepo, otimizar builds e abrir margem para expansão.',
            },
            {
              tech: 'typescript',
              reason:
                'Utilizado para garantir segurança de tipos pela aplicação.',
            },
            {
              tech: 'next',
              reason:
                'Utilizado devido a facilidade de criação de rotas dinâmicas, SSR e agilidade na construção da aplicação.',
            },
            {
              tech: 'tailwind',
              reason:
                'Utilizado devido a alta velocidade de criação de componentes e estilização.',
            },
            {
              tech: 'nest',
              reason:
                'Utilizado para construção de uma API robusta, escalável e de fácil manutenção.',
            },
            {
              tech: 'socket.io',
              reason: 'Utilizado para implementar comunicação em tempo real.',
            },
            {
              tech: 'prisma',
              reason:
                'Utilizado para abstrair queries e garantir integridade na aplicação.',
            },
            {
              tech: 'postgresql',
              reason: 'Utilizado para persistência dos dados.',
            },
          ]}
        />
        <Highlights
          highlightList={[
            'Autenticação & Acesso',
            'Realtime com WebSocket',
            'Rotas dinâmicas para Kanban',
            'Drag and Drop sem lib',
            'Markup Customizado',
            'Monorepo',
          ]}
        />
        <Challenges
          challengeList={[
            {
              name: 'Autenticação',
              category: 'fullstack',
              difficulty: 'mid',
              difficultyReason:
                'Primeira vez tendo que utilizar o middleware do NextJS e NestJS',
            },
            {
              name: 'Acesso',
              category: 'fullstack',
              difficulty: 'mid',
              difficultyReason:
                'Primeira vez trabalhando com proteção de rotas com NextJS e NestJS',
            },
            {
              name: 'WebSocket',
              category: 'fullstack',
              difficulty: 'mid',
              difficultyReason: 'Primeira vez trabalhando com WebSocket',
            },
            {
              name: 'Markup customizado (RegExp)',
              category: 'security',
              difficulty: 'high',
              difficultyReason:
                'Garantindo a segurança do parser de markup customizado para evitar XSS',
            },
            {
              name: 'Kanban com drag and drop',
              category: 'frontend',
              difficulty: 'high',
              difficultyReason:
                "Drag'n'Drop criado sem uso de libs específicas",
            },
            {
              name: 'Gerenciamento de Times',
              category: 'fullstack',
              difficulty: 'high',
              difficultyReason:
                'Gerenciar permissão de múltiplos usuários e garantir comunicação via WebSocket.',
            },
          ]}
        />
        <Learnings
          learningsList={[
            {
              learned: 'Implementar WebSocket com Socket.io',
              tech: 'socket.io',
            },
            {
              learned: 'Criar parser de markup customizado seguro',
              tech: 'typescript',
            },
            { learned: 'Implementar drag and drop sem lib', tech: 'next' },
            { learned: 'Autenticação e acesso com NextJS', tech: 'next' },
            { learned: 'Autenticação e acesso com NestJS', tech: 'nest' },
            { learned: 'Criar API com NestJS', tech: 'nest' },
            { learned: 'Gerenciar monorepo com Turborepo', tech: 'turborepo' },
            { learned: 'Gerenciar modelos com Prisma', tech: 'prisma' },
            {
              learned: 'Modelar banco de dados relacional',
              tech: 'postgresql',
            },
          ]}
        />
        <FuturePlans
          plans={[
            {
              name: 'Melhorar UI & UX',
            },
            {
              name: 'Melhorar Accessibilidade',
            },
            {
              name: 'Integração com Testes',
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'REST Countries',
    media: {
      thumb: img.restCountries,
    },
    techs: ['typescript', 'next', 'tailwind'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/rest-countries-api-next-ts',
      live: 'https://rest-countries-api-next-ts.vercel.app/',
      source:
        'https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca',
    },
    info: {
      createdAt: new Date(2024, 4, 5),
      endedAt: new Date(2024, 4, 5),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='REST Counties é um desafio d enível 4 do site Frontend Mentor, o foco é implementar um sistema de filtragem por pesquisa ou regiões, alternância de temas e detalhes de cada país.' />
        <FeatureList
          featureList={[
            'Filtro de pesquisa',
            'Filtro por regiões',
            'Alternância de temas',
            'Detalhes de cada país',
            'Consumo de API',
          ]}
        />
        <TechStack
          techList={[
            {
              tech: 'typescript',
              reason:
                'Utilizado para garantir segurança de tipos pela aplicação.',
            },
            {
              tech: 'next',
              reason:
                'Utilizado devido a facilidade de criação de rotas dinâmicas, SSR e agilidade na construção da aplicação.',
            },
            {
              tech: 'tailwind',
              reason:
                'Utilizado devido a alta velocidade de criação de componentes e estilização.',
            },
          ]}
        />
        <Highlights
          highlightList={['Consumo de API', 'Refatoração de Código legado']}
        />
        <Challenges
          challengeList={[
            {
              name: 'Tipagem',
              category: 'frontend',
              difficulty: 'low',
              difficultyReason:
                'Primeira vez tendo que utilizar tipagens com Typescript',
            },
            {
              name: 'Consumo de API',
              category: 'frontend',
              difficulty: 'mid',
              difficultyReason:
                'Primeira vez trabalhando com fetch de dados para buscar dados de uma API',
            },
            {
              name: 'Refatoração de Código',
              category: 'frontend',
              difficulty: 'mid',
              difficultyReason:
                'O código estava com muitas funcionalidades e estava dificil de entender.',
            },
            {
              name: 'Filtros e Buscas',
              category: 'frontend',
              difficulty: 'high',
              difficultyReason:
                'A época não se sabia como implementar filtros e buscas com facilidade.',
            },
          ]}
        />
        <Learnings
          learningsList={[
            {
              learned: 'Importância de tipagem e lints',
              tech: 'typescript',
            },
            {
              learned: 'Criação de filtros e buscas',
              tech: 'typescript',
            },
            {
              learned: 'Uso de SSG',
              tech: 'next',
            },
            {
              learned: 'Consumo de API',
              tech: 'next',
            },
          ]}
        />
        <FuturePlans
          plans={[
            {
              name: 'Consertar bug da página não carregar',
              completionDate: new Date(2025, 10, 28),
            },
            {
              name: 'Refatorar código',
              completionDate: new Date(2025, 10, 28),
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'Social Dashboard',
    media: {
      thumb: img.dashboardApp,
    },
    techs: ['next', 'tailwind', 'typescript'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/dashboard-app-next',
      live: 'https://bernardopog.github.io/dashboard-app-next/',
      source:
        'https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Faq Accordion 2',
    media: {
      thumb: img.faqAccordion2,
    },
    techs: ['csharp', 'blazor', 'tailwind'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/faq-accordion-blazor',
      live: 'https://bernardopog.github.io/faq-accordion-blazor/',
      source:
        'https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Bento Grid',
    media: {
      thumb: img.bentoGrid,
    },
    techs: ['html', 'css', 'javascript'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/vanilla-bento-grid',
      live: 'https://bernardopog.github.io/vanilla-bento-grid/',
      source: 'https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'ToDo App',
    media: {
      thumb: img.todoApp,
    },
    techs: ['react', 'tailwind', 'typescript'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/todo-app-react-tailwind',
      live: 'https://bernardopog.github.io/todo-app-react-tailwind/',
      source: 'https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Contact Form',
    media: {
      thumb: img.contactForm,
    },
    techs: ['vue', 'sass', 'typescript'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/contact-form-vue',
      live: 'https://bernardopog.github.io/contact-form-vue/',
      source:
        'https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Calculator App',
    media: {
      thumb: img.calculatorApp,
    },
    techs: ['vue', 'javascript', 'pinia', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/calculator-app-vue',
      live: 'https://bernardopog.github.io/calculator-app-vue/',
      source:
        'https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Sunnyside Homepage',
    media: {
      thumb: img.sunnysidePage,
    },
    techs: ['vue', 'sass', 'typescript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/sunnyside-agency-vue',
      live: 'https://bernardopog.github.io/sunnyside-agency-vue/',
      source:
        'https://www.frontendmentor.io/challenges/agency-landing-page-7yVs3B6ef',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Pricing Component',
    media: {
      thumb: img.pricingComponent,
    },
    techs: ['react', 'sass', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/pricing-component-react',
      live: 'https://bernardopog.github.io/pricing-component-react/',
      source:
        'https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Multi Step Form',
    media: {
      thumb: img.multiStepForm,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/multi-step-form-react',
      live: 'https://bernardopog.github.io/multi-step-form-react/',
      source:
        'https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Tip Calculator App',
    media: {
      thumb: img.tipCalculator,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/tip-calculator-app-react',
      live: 'https://bernardopog.github.io/tip-calculator-app-react/',
      source:
        'https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Expense Chart',
    media: {
      thumb: img.expenseChart,
    },
    techs: ['react', 'javascript', 'sass', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/expense-chart-react',
      live: 'https://bernardopog.github.io/expense-chart-react/',
      source:
        'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Clipboard Landing Page',
    media: {
      thumb: img.clipboardLandingPage,
    },
    techs: ['python', 'flask', 'tailwind'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github:
        'https://github.com/Bernardopog/clipboard-landing-page-python-flask',
      live: 'https://bernardopog.github.io/clipboard-landing-page-python-flask/',
      source:
        'https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Time Tracking Dashboard',
    media: {
      thumb: img.timeTrackingDashboard,
    },
    techs: ['react', 'javascript', 'sass', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/time-tracking-dashboard-react',
      live: 'https://bernardopog.github.io/time-tracking-dashboard-react/',
      source:
        'https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Advice Generator App',
    media: {
      thumb: img.adviceGenerator,
    },
    techs: ['solid', 'sass', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/advice-generator-app-solid',
      live: 'https://bernardopog.github.io/advice-generator-app-solid/',
      source:
        'https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Snap Homepage',
    media: {
      thumb: img.snapHomepage,
    },
    techs: ['vue', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/snap-homepage-dropdown-vue',
      live: 'https://bernardopog.github.io/snap-homepage-dropdown-vue/',
      source:
        'https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'News Homepage',
    media: {
      thumb: img.newsHomepage,
    },
    techs: ['vue', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/news-homepage-vue',
      live: 'https://bernardopog.github.io/news-homepage-vue/',
      source:
        'https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Age Calculator',
    media: {
      thumb: img.ageCalculator,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/age-calculator-app-react',
      live: 'https://bernardopog.github.io/age-calculator-app-react/',
      source:
        'https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Huddle Landing Page',
    media: {
      thumb: img.huddleLandingPage,
    },
    techs: ['vue', 'tailwind', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/huddle-landing-page-vue',
      live: 'https://bernardopog.github.io/huddle-landing-page-vue/',
      source:
        'https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Easybank Land Page',
    media: {
      thumb: img.easybankLandingPage,
    },
    techs: ['angular', 'sass', 'typescript'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/easybank-landing-page-angular17',
      live: 'https://bernardopog.github.io/easybank-landing-page-angular17/',
      source:
        'https://www.frontendmentor.io/challenges/digital-bank-landing-page-WaUhkoDN',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Intro Form',
    media: {
      thumb: img.introForm,
    },
    techs: ['svelte', 'sass', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/intro-signup-form-svelte',
      live: 'https://bernardopog.github.io/intro-signup-form-svelte/',
      source:
        'https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Article Preview',
    media: {
      thumb: img.articlePreview,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/article-preview-comp-react',
      live: 'https://bernardopog.github.io/article-preview-comp-react/',
      source:
        'https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Singe Price',
    media: {
      thumb: img.singlePrice,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/single-price-grid-react',
      live: 'https://bernardopog.github.io/single-price-grid-react/',
      source:
        'https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Ping Coming Soon',
    media: {
      thumb: img.pingComingSoon,
    },
    techs: ['vue', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/ping-coming-soon-page-vue',
      live: 'https://bernardopog.github.io/ping-coming-soon-page-vue/',
      source:
        'https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Testimonials Grid',
    media: {
      thumb: img.testimonialsGrid,
    },
    techs: ['react', 'styled-components', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/testimonials-grid-section-react',
      live: 'https://bernardopog.github.io/testimonials-grid-section-react/',
      source:
        'https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Interactive Card Details',
    media: {
      thumb: img.interactiveCardDetails,
    },
    techs: ['react', 'styled-components', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github:
        'https://github.com/Bernardopog/interactive-details-card-form-react',
      live: 'https://bernardopog.github.io/interactive-details-card-form-react/',
      source:
        'https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Notification Page',
    media: {
      thumb: img.notificationPage,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/notifications-page-react',
      live: 'https://bernardopog.github.io/notifications-page-react/',
      source:
        'https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Profile Card',
    media: {
      thumb: img.profileCard,
    },
    techs: ['react', 'tailwind', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/profile-component-card-react',
      live: 'https://bernardopog.github.io/profile-component-card-react/',
      source:
        'https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Stats Card',
    media: {
      thumb: img.statsCard,
    },
    techs: ['react', 'tailwind', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github:
        'https://github.com/Bernardopog/stats-preview-card-component-react',
      live: 'https://bernardopog.github.io/stats-preview-card-component-react/',
      source:
        'https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Social Links Profile',
    media: {
      thumb: img.socialLinks,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/social-links-profile-react',
      live: 'https://bernardopog.github.io/social-links-profile-react/',
      source:
        'https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Four Cards Section',
    media: {
      thumb: img.fourCardGrid,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/four-card-feature-section-react',
      live: 'https://bernardopog.github.io/four-card-feature-section-react/',
      source:
        'https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Base Apparel Coming Soon',
    media: {
      thumb: img.comingSoonPage,
    },
    techs: ['vue', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/base-apparel-coming-soon-vue',
      live: 'https://bernardopog.github.io/base-apparel-coming-soon-vue/',
      source:
        'https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Social Proof',
    media: {
      thumb: img.socialProof,
    },
    techs: ['react', 'tailwind', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/social-proof-react-tailwind',
      live: 'https://bernardopog.github.io/social-proof-react-tailwind/',
      source:
        'https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Recipe Page',
    media: {
      thumb: img.recipeCard,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/recipe-page-main-react',
      live: 'https://bernardopog.github.io/recipe-page-main-react/',
      source: 'https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'FAQ Accordion',
    media: {
      thumb: img.faqAccordion,
    },
    techs: ['html', 'sass', 'jquery'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/faq-accordion-sass-jquery',
      live: 'https://bernardopog.github.io/faq-accordion-sass-jquery/',
      source:
        'https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'NFT Card',
    media: {
      thumb: img.nftCard,
    },
    techs: ['html', 'less'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/nft-preview-card-less',
      live: 'https://bernardopog.github.io/nft-preview-card-less/',
      source:
        'https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Blog Preview Card',
    media: {
      thumb: img.blogPreview,
    },
    techs: ['html', 'tailwind'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/blog-preview-card-tailwind',
      live: 'https://bernardopog.github.io/blog-preview-card-tailwind/',
      source:
        'https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Order Summary Card',
    media: {
      thumb: img.orderSummaryCard,
    },
    techs: ['html', 'less'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/order-summary-card',
      live: 'https://bernardopog.github.io/order-summary-card/',
      source:
        'https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Newsletter Signup',
    media: {
      thumb: img.newsletterSignUp,
    },
    techs: ['html', 'sass', 'jquery'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/newsletter-signup-jquery',
      live: 'https://bernardopog.github.io/newsletter-signup-jquery/',
      source:
        'https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Rating Card',
    media: {
      thumb: img.ratingCard,
    },
    techs: ['html', 'sass', 'jquery'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github:
        'https://github.com/Bernardopog/interactive-rating-component-jquery',
      live: 'https://bernardopog.github.io/interactive-rating-component-jquery/',
      source:
        'https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Three Column Preview Card',
    media: {
      thumb: img.threeColumnPreview,
    },
    techs: ['html', 'css'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github:
        'https://github.com/Bernardopog/3-column-preview-card-component-main-r3ygoski',
      live: 'https://bernardopog.github.io/3-column-preview-card-component-main-r3ygoski/',
      source:
        'https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Product Preview Card',
    media: {
      thumb: img.productPreviewCard,
    },
    techs: ['html', 'css'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/product-preview',
      live: 'https://bernardopog.github.io/product-preview/',
      source:
        'https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'Results Summary',
    media: {
      thumb: img.resultSummary,
    },
    techs: ['html', 'css'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/summary-component',
      live: 'https://bernardopog.github.io/summary-component/',
      source:
        'https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV',
    },
    info: {
      createdAt: new Date(2023, 9, 22),
      endedAt: new Date(2023, 9, 22),
      category: ['fullstack'],
      status: 'completed',
    },
  },
  {
    name: 'QR Code',
    media: {
      thumb: img.qrCode,
    },
    techs: ['html', 'css'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/QR-Code-Frontend-Mentor',
      live: 'https://bernardopog.github.io/QR-Code-Frontend-Mentor/',
      source:
        'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H',
    },
    info: {
      createdAt: new Date(2023, 9, 5),
      endedAt: new Date(2023, 9, 5),
      category: ['fullstack'],
      status: 'completed',
    },
  },
];
