import {
  projectImages as img,
  projectImagesCarousel as imgC,
} from '@/assets/constants/projectImages';
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
    point: 90,
    media: {
      thumb: img.plutoApp,
      images: {
        '0': imgC.plutoApp.plutoAppC1,
        '1': imgC.plutoApp.plutoAppC2,
        '2': imgC.plutoApp.plutoAppC3,
        '3': imgC.plutoApp.plutoAppC4,
        '4': imgC.plutoApp.plutoAppC5,
      },
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
      github: 'https://github.com/Bernardopog/pluto-app',
      live: 'https://pluto-app-beige.vercel.app/login',
    },
    info: {
      createdAt: new Date(2025, 4, 30),
      endedAt: new Date(2025, 10, 30),
      category: ['fullstack', 'frontend', 'backend'],
      status: 'completed',
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
              reason: 'Utilizado para armazenamento de dados.',
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
    point: 100,
    media: {
      thumb: img.kronosApp,
      images: {
        '0': imgC.kronosApp.kronosAppC1,
        '1': imgC.kronosApp.kronosAppC2,
        '2': imgC.kronosApp.kronosAppC3,
        '3': imgC.kronosApp.kronosAppC4,
        '4': imgC.kronosApp.kronosAppC5,
        '5': imgC.kronosApp.kronosAppC6,
      },
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
      'supabase',
    ],
    source: 'personal',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/kronos-app',
      live: 'https://kronos-app-frontend.vercel.app/',
    },
    info: {
      createdAt: new Date(2024, 11, 27),
      endedAt: new Date(2025, 11, 1),
      category: ['fullstack', 'frontend', 'backend'],
      status: 'completed',
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
            {
              tech: 'supabase',
              reason: 'Utilizado para fornecer um backend serverless robusto.',
            },
          ]}
        />
        <Highlights
          highlightList={[
            'Autenticação & Acesso',
            'Realtime com WebSocket',
            'Gestão de Time em Kanban',
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
            {
              name: 'Problemas com CORS (cross-domain)',
              category: 'fullstack',
              difficulty: 'high',
              difficultyReason:
                'Permitir comunicação entre domínios diferentes.',
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
            {
              learned: 'Criar proxy pra evitar cross-domain',
              tech: 'next',
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
    point: 20,
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
        <Description content='REST Counties é um desafio de nível 4 do site Frontend Mentor, o foco é implementar um sistema de filtragem por pesquisa ou regiões, alternância de temas e detalhes de cada país.' />
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
      createdAt: new Date(2024, 11, 6),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Social Dashboard é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de grid layout e alternância de tema.' />
        <TechStack
          techList={[
            {
              tech: 'next',
              reason:
                'Utilizado devido a aprensetar uma forma mais moderna de usar ReactJS e SSR.',
            },
            {
              tech: 'tailwind',
              reason: 'Utilizado devido a facilidade para criação de estilos.',
            },
            {
              tech: 'typescript',
              reason: 'Utilizado devido a garantia de segurança de tipos.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 10, 24),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Faq Accordion é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de responsividade, posicionamento de imagem e manipulação do DOM.' />
        <TechStack
          techList={[
            {
              tech: 'csharp',
              reason:
                'Utilizado como base para o Blazor e para o trabalho de lógica utilizando-se do paradigma orientado a objetos (POO).',
            },
            {
              tech: 'blazor',
              reason:
                'Utilizado pela primeira vez a fim de experimentar as capacidades do Blazor e C# no desenvolvimento web.',
            },
            {
              tech: 'tailwind',
              reason:
                'Utilizado a fim de facilitar a criação de estilos e experimentar como funcionaria com Blazor.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 10, 5),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Bento Grid é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de grid layout para criação de Bento Grid.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason:
                'Utilizado para garantir uma boa estrutura semântica e ajudar na acessibilidade.',
            },
            {
              tech: 'css',
              reason: 'Utilizado para a criação de estilos de forma simples.',
            },
            {
              tech: 'javascript',
              reason: 'Utilizado para criação de lógico no botão de links.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 8, 8),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='ToDo App é um desafio de nível 3 do site Frontend Mentor, onde o objetivo é praticar CRUD com criação, leitura, atualização e deleção de tarefas, utilização de Drag and Drop, persistência de dados no navegador (local storage) e também alternância de temas.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado a fim de experimentar como criar um CRUD apenas utilizando React.',
            },
            {
              tech: 'tailwind',
              reason: 'Utilizado para rápido desenvolvimento da estilização.',
            },
            {
              tech: 'typescript',
              reason:
                'Utilizado para garantir segurança de tipo na aplicação, e lógica de CRUD por de trás do to do list.',
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'Contact Form',
    media: {
      thumb: img.contactForm,
    },
    techs: ['vue', 'sass', 'typescript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/contact-form-vue',
      live: 'https://bernardopog.github.io/contact-form-vue/',
      source:
        'https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj',
    },
    info: {
      createdAt: new Date(2024, 4, 31),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Contact Form é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar validação de multi-campos de um formulário, indo de inputs a botões.' />
        <TechStack
          techList={[
            {
              tech: 'vue',
              reason:
                'Utilizado para facilitar a criação de componentes reutilizáveis, gestão de estados e reatividade.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'typescript',
              reason:
                'Utilizado para a criação da lógica de validação de email e garantir segurança de tipos.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e integração nativa com Vue',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 4, 31),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Calculator App é um desafio de nível 3 do site Frontend Mentor, onde o objetivo é praticar uso de lógica de programção com calculos matemáticos e alternância de temas.' />
        <TechStack
          techList={[
            {
              tech: 'vue',
              reason:
                'Utilizado devido a facilitar a criação de componentes reutilizáveis de forma simples.',
            },
            {
              tech: 'javascript',
              reason: 'Utilizado para a criação de lógica de cálculos.',
            },
            {
              tech: 'pinia',
              reason: 'Utilizado para gerenciamento de estados globais no Vue.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e integração nativa com Vue',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 4, 31),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Sunnyside Homepage é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de responsividade, trabalho com imagens e uso de javascript para criação de menu com renderização condicional.' />
        <TechStack
          techList={[
            {
              tech: 'vue',
              reason:
                'Utilizado devido a facilidade de criação de componentes, estilização e gerenciamento de estados.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'typescript',
              reason:
                'Utilizado para a experimentação com outros frameworks além de Angular e garantir segurança através de tipagem.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e integração nativa com Vue',
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'Pricing Component',
    media: {
      thumb: img.pricingComponent,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/pricing-component-react',
      live: 'https://bernardopog.github.io/pricing-component-react/',
      source:
        'https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC',
    },
    info: {
      createdAt: new Date(2024, 3, 28),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Pricing Component é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar construção de Layout.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para a criação da estrutura e semântica.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason:
                'Utilizado para criação da lógica de alteração de preços.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado para garantir uma maior perfomance de desenvolvimento.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 3, 25),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Multi Step Form é um desafio de nível 4 do site Frontend Mentor, onde o objetivo é praticar uso de Javascript, com lógica de renderização condicional e estados globais que se mantém pelo formulário.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason:
                'Utilizado para a criação de tags semânticas e garantia de acessibilidade.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason:
                'Utilizado para criação de lógica da validação de cada etapa do formulário.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado para garantir uma maior perfomance de desenvolvimento.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 3, 24),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Tip Calculator App é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de reforçar o HTML e CSS, praticar lógica de validação, type casting e matemática.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a garantir uma fácil manipulação de estados, criação de componentes e renderização condicional.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason:
                'Utilizado para a criação da lógica de cálculo de gorjeta.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'Expense Chart',
    media: {
      thumb: img.expenseChart,
    },
    techs: ['react', 'sass', 'javascript', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'light',
    links: {
      github: 'https://github.com/Bernardopog/expense-chart-react',
      live: 'https://bernardopog.github.io/expense-chart-react/',
      source:
        'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
    },
    info: {
      createdAt: new Date(2024, 3, 24),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Expense Chart é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar consumo de JSON.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a possibilidade de criação de componentes e modularidade.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason:
                'Utilizado para verificação da data a fim de criar uma estilização dinâmica entre as barras.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 3, 18),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Clipboard Landing Page é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar criação de uma landing page, focando principalmente em HTML e CSS.' />
        <TechStack
          techList={[
            {
              tech: 'python',
              reason:
                'Utilizado pela primeira vez a fim de entender como uma linguagem não web funcionaria nesse cenário.',
            },
            {
              tech: 'flask',
              reason:
                'Utilizado para experimentação de utilizar um framework de outra linguagem a fim de criar uma UI sem lógica.',
            },
            {
              tech: 'tailwind',
              reason: 'Utilizado para garantir uma rápida estilização.',
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'Time Tracking Dashboard',
    media: {
      thumb: img.timeTrackingDashboard,
    },
    techs: ['react', 'sass', 'vite'],
    source: 'frontendmentor',
    backgroundColor: 'dark',
    links: {
      github: 'https://github.com/Bernardopog/time-tracking-dashboard-react',
      live: 'https://bernardopog.github.io/time-tracking-dashboard-react/',
      source:
        'https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw',
    },
    info: {
      createdAt: new Date(2024, 3, 13),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Time Tracking Dashboard é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar grid layout e consumo de JSON.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a possibilidade de criação de componentes e modularidade.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 3, 11),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Advice Generator App é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de consumo de API.' />
        <TechStack
          techList={[
            {
              tech: 'solid',
              reason:
                'Utilizado pela primeira vez a fim de experimentar a diferença com React.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason:
                'Utilizado para realizar as buscas de dados na API através do fetch.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 3, 10),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Snap Homepage é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de criação de menu dropdown e layout.' />
        <TechStack
          techList={[
            {
              tech: 'vue',
              reason:
                'Utilizado para trabalhar com a manipulação de estados e renderização condicional dos menus.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason: 'Utilizado para a lógica de manipulação dos menus.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e integração nativa com Vue',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 3, 9),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='News Homepage é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de grid layout.' />
        <TechStack
          techList={[
            {
              tech: 'vue',
              reason:
                'Utilizado devido a simplicidade para criação de componentes.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason: 'Utilizado para trabalhar com a lógica do menu.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e integração nativa com Vue',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 3, 7),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Age Calculator é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso lógica de programação com cálculos de idade, validação de formulário e type casting.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a funcionalidade de criação de componentes e gestão de estados.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason: 'Utilizado para a criação da lógica de cálculo de idade.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 3, 10),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Huddle Landing Page é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de flexbox.' />
        <TechStack
          techList={[
            {
              tech: 'vue',
              reason:
                'Utilizado devido a simplicidade na criação de componentes e manipulação de estados.',
            },
            {
              tech: 'tailwind',
              reason: 'Utilizado a fim de experimentar a integração com Vue.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e integração nativa com Vue',
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'Easybank Landing Page',
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
      createdAt: new Date(2024, 2, 18),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Easybank Landing Page é um desafio de nível 3 do site Frontend Mentor, onde o objetivo criar uma landing page com menu.' />
        <TechStack
          techList={[
            {
              tech: 'angular',
              reason:
                'Utilizado devido a querer experimentar o Angular em um projeto básico, comparando-o ao React e Vue.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'typescript',
              reason:
                'Utilizado devido a ser um requisito obrigatório do Angular 17 mas também pela segurança de tipos.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 2, 14),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Sign-up Form é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar validação de formulário com múltiplos campos.' />
        <TechStack
          techList={[
            {
              tech: 'svelte',
              reason:
                'Utilizado devido a querer experimentar o Svelte em um projeto básico e ver quais os benefícios dele frente aos outros frameworks.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a ser uma ferramenta de desenvolvimento que suporta diversos frameworks front end.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 2, 12),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Article Preview é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de responsividade e manipulação do DOM com renderização condicional.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a reforçar o conhecimento de React com manipulação de estados e renderização condicional.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
  },
  {
    name: 'Single Price',
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
      createdAt: new Date(2024, 2, 12),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Single Price é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de Flexbox ou Grid Layout.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a criação de componentes e modularidade.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 2, 12),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Ping Coming Soon é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar criação de validação simples de formulário.' />
        <TechStack
          techList={[
            {
              tech: 'vue',
              reason:
                'Utilizado devido a alta legibilidade e facilidade de criação e manutenção de componentes.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'javascript',
              reason:
                'Utilizado para trabalhar com a parte lógica da validação de formulário.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e integração nativa com Vue',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 2, 11),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Testimonials Grid é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de Grid Layout.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado para a capacidade de criação de componentes de forma rápida e modular.',
            },
            {
              tech: 'styled-components',
              reason:
                'Utilizado devido a melhora na produtividade de desenvolvimento.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 2, 11),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Interactive Card Details é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é reforçar os conhecimentos em HTML e CSS com uso de position e tags semânticas e também de criar uma validação simples de formulário.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado para a capacidade de criação de componentes de forma rápida, modular e disponibilidade de estados para trabalhar com DOM.',
            },
            {
              tech: 'styled-components',
              reason:
                'Utilizado pela primeira vez a fim de experimentar os benefícios do CSS-IN-JS e aprender sobre a tecnologia.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 2, 11),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Notification Page é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é praticar uso de manipulação do DOM.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a capacidade de criação de componentes de forma rápida e modular.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 25),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Profile Card é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de responsividade.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a capacidade de criação de componentes de forma rápida e modular.',
            },
            {
              tech: 'tailwind',
              reason:
                'Utilizado devido a alta melhora na produtividade de desenvolvimento.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 25),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Stats Card é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de responsividade e base do HTML e CSS.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a capacidade de criação de componentes de forma rápida e modular.',
            },
            {
              tech: 'tailwind',
              reason:
                'Utilizado a fim de experimentar a integração com React e melhorar a produtividade de desenvolvimento.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 19),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Social Links Profile é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é criar um card com links para redes sociais, focando em uso de estados como ::hover.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a capacidade de criação de componentes de forma rápida e modular.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis, aninhamento, modularidade e experimentação em trabalhar com css modules usando sass.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 19),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Four Cards Section é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de Flexbox e/ou Grid Layout para a construção do layout.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a capacidade de criação de componentes de forma rápida e modular.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 18),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Base Apparel Coming Soon é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de CSS com position e validação simples de formulário.' />
        <TechStack
          techList={[
            {
              tech: 'vue',
              reason:
                'Utilizado pela primeira vez a fim de experimentar a tecnologia e entender suas diferenças com React.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção..',
            },
            {
              tech: 'javascript',
              reason:
                'Utilizado para trabalhar com a lógica das ações de validação do formulário.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e integração nativa com Vue',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 16),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Social Proof é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de Grid Layout e Flexbox.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason:
                'Utilizado devido a alta agilidade para construir aplicações e alta modularidade.',
            },
            {
              tech: 'tailwind',
              reason:
                'Utilizado pela primeira vez a fim de aprender sobre a tecnologia e seus benefícios.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 15),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Recipe Page é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de responsividade e principalmente uso de HTML semântico.' />
        <TechStack
          techList={[
            {
              tech: 'react',
              reason: 'Utilizado pela primeira vez para explorar a tecnologia.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis e aninhamento em prol de modularidade e fácil manutenção.',
            },
            {
              tech: 'vite',
              reason:
                'Utilizado devido a excelente perfomance de bundling, hot module replacement e capacidade de converter JSX em arquivo estático para leitura no navegador.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 15),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='FAQ Accordion é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de manipulação do DOM e renderização condicional.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para a criação da estrutura e semântica.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis em prol de modularidade.',
            },
            {
              tech: 'jquery',
              reason:
                'Utilizado devido a alta simplicidade para manipulação do DOM.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 15),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='NFT Card é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar reforçar o aprendizado com HTML e CSS, trazendo um overlay para simular uma renderização condicional.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para a criação da estrutura e semântica.',
            },
            {
              tech: 'less',
              reason:
                'Utilizado para facilitar a criação da estilização e utilização de mixins.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 14),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Blog Preview Card é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é reforçar uso de HTML e CSS trazendo estados para utilização de ::hover.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para a criação da estrutura e semântica.',
            },
            {
              tech: 'tailwind',
              reason:
                'Utilizado pela primeira vez a fim de entender a tecnologia e observar seus benefícios.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 14),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Order Summary Card é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é reforçar conhecimentos de HTML e CSS através da criação de um card que utiliza flexbox.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para a criação da estrutura e semântica.',
            },
            {
              tech: 'less',
              reason:
                'Utilizado pela primeira vez a fim de experimentar a tecnologia e observar as diferenças com o SASS.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2024, 1, 13),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Newsletter Signup é um desafio de nível 2 do site Frontend Mentor, onde o objetivo é o de praticar validação de email, manipulação do DOM com captura de input e renderização condicional.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para a criação da estrutura e semântica.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado para criação de variáveis em prol de modularidade.',
            },
            {
              tech: 'jquery',
              reason:
                'Utilizado devido a simplicidade para manipulação do DOM.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2023, 11, 10),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Rating Card é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de manipulação do DOM, renderização condicional e interatividade.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para a criação da estrutura e semântica.',
            },
            {
              tech: 'sass',
              reason:
                'Utilizado pela primeira vez a fim de obter experiência e conhecer a ferramenta.',
            },
            {
              tech: 'jquery',
              reason:
                'Utilizado pela primeira vez a fim de facilitar manipulação do DOM e estudar a tecnologia.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2023, 9, 25),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Three Column Preview Card é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de responsividade.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para estruturação do projeto.',
            },
            {
              tech: 'css',
              reason: 'Utilizado para a criação da estilização.',
            },
          ]}
        />
      </>
    ),
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
      createdAt: new Date(2023, 9, 22),
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Product Preview Card é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é praticar uso de flexbox e responsividade.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado para a criação de elementos semânticos.',
            },
            {
              tech: 'css',
              reason: 'Utilizado para dominar os fundamentos de estilização.',
            },
          ]}
        />
        <Challenges
          challengeList={[
            {
              name: 'Uso de Tags semânticas',
              category: 'frontend',
              difficulty: 'mid',
              difficultyReason:
                'Primeira vez utilizando e estudando sobre semântica no HTML.',
            },
          ]}
        />
        <Learnings
          learningsList={[
            {
              learned: 'Aprendi a usar tags semânticas.',
              tech: 'html',
            },
          ]}
        />
      </>
    ),
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
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='Results Summary é um desafio de nível 1 do site Frontend Mentor, onde o objetivo é criar uma interface de resumo de resultados e usar HTML, CSS e JSON para popular os dados.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado devido a ser a base de criação de projetos.',
            },
            {
              tech: 'css',
              reason:
                'Utilizado para dominar os fundamentos de estilização e a aplicação prática de Flexbox e responsividade.',
            },
          ]}
        />
        <Learnings
          learningsList={[
            {
              learned: 'Aprendi a usar Flexbox e alguns de seus elementos',
              tech: 'css',
            },
            {
              learned: 'Aprendi a usar seletores e ::hover',
              tech: 'css',
            },
          ]}
        />
      </>
    ),
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
      category: ['frontend'],
      status: 'completed',
    },
    description: (
      <>
        <Description content='QR Code é um desafio de nível 1 do site Frontend Mentor, o foco é servir como um desafio inicial para quem busca testar as habilidades com HTML e CSS.' />
        <TechStack
          techList={[
            {
              tech: 'html',
              reason: 'Utilizado a fim de praticar HTML.',
            },
            {
              tech: 'css',
              reason: 'Utilizado a fim de praticar CSS.',
            },
          ]}
        />
        <Learnings
          learningsList={[
            {
              learned: 'Aprendi a usar Media queries',
              tech: 'css',
            },
          ]}
        />
      </>
    ),
  },
];
