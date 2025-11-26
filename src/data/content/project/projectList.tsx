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
                'Utilizado para garantir segutura de tipos pela aplicação.',
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
    name: 'Social Dashboard',
    media: {
      thumb: img.dashboardApp,
    },
    techs: ['next', 'tailwind', 'typescript'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
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
      github: '#',
      live: '#',
      source: '#',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
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
      github: '#',
      live: '#',
      source: '#',
    },
    info: {
      createdAt: new Date(2000, 0, 1),
      category: ['fullstack'],
      status: 'completed',
    },
  },
];
