import { projectImages as img } from '@/assets/constants/projectImages';
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
