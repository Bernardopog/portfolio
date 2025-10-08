import { TechNameType } from "@/types/aliases/TechNameType";
import { IExplain } from "@/types/interfaces/IExplain";

type ITechExplainMap = Record<TechNameType, IExplain>;

export const aboutExplainMap: ITechExplainMap = {
  html: {
    title: "HTML",
    field: "frontend",
    categories: ["linguagem", "estático"],
    description:
      "Linguagem de marcação de hipertexto usada para criar páginas web. Responsável por definir o conteúdo estrutural de uma página web, como textos, imagens, formulários, etc.",
    level: 5,
  },
  css: {
    title: "CSS",
    field: "frontend",
    categories: ["linguagem", "estático", "estilização"],
    description:
      "Folha de estilo em cascata, ou Cascading Style Sheets, usada para estilizar elementos HTML e definir a apresentação de documentos HTML ou XML.",
    level: 5,
  },
  javascript: {
    title: "JavaScript",
    field: "frontend",
    categories: ["linguagem", "estático"],
    description:
      "Linguagem de programação de alto-nível, usada principalmente para criar interfaces de usuário dinâmicas e interativas em websites e aplicativos.",
    level: 4,
  },
  sass: {
    title: "Sass",
    field: "frontend",
    categories: ["pré-processador", "estilização"],
    description:
      "Sass (Syntactically Awesome Stylesheets) é um pré-processador CSS que adiciona funcionalidades como variáveis, mixins, funções e aninhamento, facilitando a escrita de estilos mais organizados e reutilizáveis.",
    level: 4,
  },
  tailwind: {
    title: "Tailwind CSS",
    field: "frontend",
    categories: ["framework", "estilização"],
    description:
      "Tailwind CSS é um framework utilitário para estilização, que permite aplicar estilos diretamente nos elementos HTML usando classes pré-definidas, promovendo agilidade e consistência no design.",
    level: 4,
  },
  typescript: {
    title: "TypeScript",
    field: "frontend",
    categories: ["linguagem", "tipagem"],
    description:
      "TypeScript é um superset do JavaScript que adiciona tipagem estática e recursos avançados de desenvolvimento, como interfaces, tipos genéricos e verificação de erros em tempo de compilação.",
    level: 4,
  },
  react: {
    title: "React",
    field: "frontend",
    categories: ["biblioteca", "framework"],
    description:
      "React é uma biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas. Utiliza o conceito de Virtual DOM para otimizar atualizações na interface.",
    level: 4,
  },
  next: {
    title: "NextJS",
    field: "frontend",
    categories: ["framework", "fullstack"],
    description:
      "Next.js é um framework baseado em React que oferece renderização híbrida (SSR, SSG), roteamento automático, otimização de performance e suporte nativo a API routes, ideal para aplicações web modernas.",
    level: 4,
  },
  vue: {
    title: "Vue",
    field: "frontend",
    categories: ["framework"],
    description:
      "Vue.js é um framework progressivo para construção de interfaces de usuário. Focado na camada de visualização, permite criar aplicações reativas com uma sintaxe simples e flexível.",
    level: 3,
  },
  nuxt: {
    title: "NuxtJS",
    field: "frontend",
    categories: ["framework", "fullstack"],
    description:
      "Nuxt.js é um framework baseado em Vue que facilita o desenvolvimento de aplicações universais, com suporte a SSR, geração estática, roteamento automático e estrutura modular.",
    level: 1,
  },
  node: {
    title: "NodeJS",
    field: "backend",
    categories: ["linguagem"],
    description:
      "Node.js é um ambiente de execução JavaScript do lado do servidor. Permite construir aplicações escaláveis e rápidas, utilizando uma arquitetura orientada a eventos e não bloqueante.",
    level: 2,
  },
  express: {
    title: "Express",
    field: "backend",
    categories: ["framework"],
    description:
      "Express é um framework minimalista para Node.js que facilita a criação de APIs e aplicações web. Oferece uma estrutura leve e flexível para lidar com rotas, middlewares e requisições HTTP.",
    level: 2,
  },
  nest: {
    title: "NestJS",
    field: "backend",
    categories: ["framework"],
    description:
      "NestJS é um framework para Node.js que utiliza TypeScript e conceitos de arquitetura modular e orientada a objetos. Ideal para construir aplicações escaláveis e bem estruturadas.",
    level: 3,
  },
  postgresql: {
    title: "PostgreSQL",
    field: "backend",
    categories: ["banco de dados", "relacional"],
    description:
      "PostgreSQL é um sistema de gerenciamento de banco de dados relacional open-source, conhecido por sua robustez, conformidade com padrões SQL e suporte a extensões avançadas como JSON e funções customizadas.",
    level: 2,
  },
  mongodb: {
    title: "MongoDB",
    field: "backend",
    categories: ["banco de dados", "não relacional"],
    description:
      "MongoDB é um banco de dados NoSQL orientado a documentos, que armazena dados em formato BSON (similar ao JSON), oferecendo flexibilidade e escalabilidade para aplicações modernas.",
    level: 1,
  },
  prisma: {
    title: "Prisma",
    field: "backend",
    categories: ["orm", "ferramenta"],
    description:
      "Prisma é um ORM moderno para Node.js e TypeScript que facilita o acesso a bancos de dados com tipagem estática, geração automática de queries e integração com múltiplos bancos relacionais.",
    level: 3,
  },
  csharp: {
    title: "C#",
    field: "backend",
    categories: ["linguagem", "estático"],
    description:
      "C# é uma linguagem de programação moderna e orientada a objetos desenvolvida pela Microsoft, amplamente usada para desenvolvimento de aplicações desktop, web, mobile e jogos via Unity.",
    level: 2,
  },
  dotnet: {
    title: ".NET",
    field: "backend",
    categories: ["framework", "plataforma"],
    description:
      ".NET é uma plataforma de desenvolvimento da Microsoft que suporta múltiplas linguagens, incluindo C#, e permite criar aplicações web, desktop, mobile e serviços em nuvem com alta performance.",
    level: 1,
  },
  "asp.net": {
    title: "ASP.NET",
    field: "backend",
    categories: ["framework"],
    description:
      "ASP.NET é um framework da Microsoft para construção de aplicações web robustas e escaláveis. Suporta múltiplos paradigmas como MVC, Web API e Razor Pages, integrando-se ao ecossistema .NET.",
    level: 1,
  },
  "react native": {
    title: "React Native",
    field: "mobile",
    categories: ["framework", "biblioteca"],
    description:
      "React Native é um framework criado pelo Facebook para desenvolvimento de aplicativos móveis nativos utilizando JavaScript e React. Permite compartilhar lógica entre plataformas iOS e Android.",
    level: 1,
  },
  expo: {
    title: "Expo",
    field: "mobile",
    categories: ["ferramenta", "framework"],
    description:
      "Expo é uma plataforma e conjunto de ferramentas que simplifica o desenvolvimento com React Native, oferecendo build automatizado, acesso a APIs nativas e preview instantâneo em dispositivos.",
    level: 1,
  },
  nativewind: {
    title: "NativeWind",
    field: "mobile",
    categories: ["estilização", "ferramenta"],
    description:
      "NativeWind é uma biblioteca que traz a abordagem utilitária do Tailwind CSS para o React Native, permitindo estilização rápida e consistente com classes diretamente nos componentes.",
    level: 2,
  },
  git: {
    title: "Git",
    field: "tools",
    categories: ["controle de versão", "ferramenta"],
    description:
      "Git é um sistema de controle de versão distribuído amplamente utilizado para gerenciar código-fonte. Permite rastrear alterações, colaborar em equipe e manter histórico de desenvolvimento.",
    level: 4,
  },
  figma: {
    title: "Figma",
    field: "tools",
    categories: ["design", "prototipação"],
    description:
      "Figma é uma ferramenta de design colaborativo baseada em nuvem, usada para criar interfaces, protótipos e fluxos de usuário. Permite trabalho simultâneo entre designers e desenvolvedores.",
    level: 2,
  },
  angular: {
    title: "Angular",
    field: "frontend",
    categories: ["framework", "dinâmico", "componentes"],
    description:
      "Framework JavaScript mantido pelo Google para construção de aplicações web dinâmicas e escaláveis. Utiliza arquitetura baseada em componentes e oferece ferramentas integradas como roteamento e injeção de dependência.",
    level: 2,
  },
  flask: {
    title: "Flask",
    field: "backend",
    categories: ["framework", "Python", "servidor"],
    description:
      "Framework web minimalista escrito em Python. Ideal para aplicações simples e rápidas, oferecendo flexibilidade e controle total sobre a estrutura do projeto.",
    level: 2,
  },
  blazor: {
    title: "Blazor",
    field: "frontend",
    categories: ["framework", "C#", "dinâmico"],
    description:
      "Framework da Microsoft que permite criar aplicações web interativas usando C# em vez de JavaScript. Funciona tanto no navegador (via WebAssembly) quanto no servidor.",
    level: 2,
  },
  "socket.io": {
    title: "Socket.IO",
    field: "backend",
    categories: ["biblioteca", "websocket", "comunicação"],
    description:
      "Biblioteca JavaScript que permite comunicação bidirecional em tempo real entre cliente e servidor. Muito usada em chats, jogos online e aplicações colaborativas.",
    level: 2,
  },
  "styled-components": {
    title: "Styled-Components",
    field: "frontend",
    categories: ["biblioteca", "estilização", "CSS-in-JS"],
    description:
      "Biblioteca para estilização de componentes em React usando CSS dentro do JavaScript. Permite criar estilos encapsulados e dinâmicos com facilidade.",
    level: 3,
  },
  jquery: {
    title: "jQuery",
    field: "frontend",
    categories: ["biblioteca", "dinâmico", "DOM"],
    description:
      "Biblioteca JavaScript que simplifica a manipulação do DOM, eventos, animações e requisições AJAX. Muito popular antes da ascensão dos frameworks modernos.",
    level: 3,
  },
  less: {
    title: "Less",
    field: "frontend",
    categories: ["pré-processador", "estilização", "CSS"],
    description:
      "Pré-processador CSS que adiciona funcionalidades como variáveis, mixins e funções, tornando o código mais organizado e reutilizável.",
    level: 3,
  },
  pinia: {
    title: "Pinia",
    field: "frontend",
    categories: ["biblioteca", "gerenciador de estado", "vue"],
    description:
      "Gerenciador de estado moderno para aplicações Vue.js. É leve, intuitivo e inspirado no padrão de composição do Vue 3.",
    level: 2,
  },
  python: {
    title: "Python",
    field: "backend",
    categories: ["linguagem", "geral", "versátil"],
    description:
      "Linguagem de programação de alto nível, conhecida por sua sintaxe simples e legibilidade. Usada em diversas áreas como desenvolvimento web, ciência de dados, automação e inteligência artificial.",
    level: 1,
  },
  solid: {
    title: "SolidJS",
    field: "frontend",
    categories: ["framework", "dinâmico", "componentes"],
    description:
      "Framework JavaScript reativo para construção de interfaces de usuário. Foca em desempenho e simplicidade, utilizando reatividade compilada para atualizações eficientes.",
    level: 2,
  },
  svelte: {
    title: "Svelte",
    field: "frontend",
    categories: ["framework", "dinâmico", "componentes"],
    description:
      "Framework JavaScript que compila os componentes para código altamente otimizado no momento da construção. Elimina a necessidade de virtual DOM e oferece excelente desempenho.",
    level: 2,
  },
  turborepo: {
    title: "Turborepo",
    field: "tools",
    categories: ["monorepo", "ferramenta", "build"],
    description:
      "Ferramenta moderna para gerenciamento de monorepos. Otimiza o processo de build e cache em projetos com múltiplos pacotes, facilitando a colaboração e escalabilidade.",
    level: 2,
  },
  vite: {
    title: "Vite",
    field: "tools",
    categories: ["ferramenta", "build", "frontend"],
    description:
      "Ferramenta de build e desenvolvimento frontend extremamente rápida. Utiliza ES modules e oferece hot module replacement eficiente para uma experiência de desenvolvimento ágil.",
    level: 3,
  },
  zustand: {
    title: "Zustand",
    field: "frontend",
    categories: ["biblioteca", "estado", "React"],
    description:
      "Biblioteca leve para gerenciamento de estado em aplicações React. Oferece uma API simples e direta, com suporte a atualizações reativas e persistência de dados.",
    level: 4,
  },
};
