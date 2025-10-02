import { TechFieldType } from "./techList";

type TechLevelType = "iniciante" | "intermediário" | "avançado";
type TechCategoryType =
  | "linguagem"
  | "estilização"
  | "estático"
  | "tipagem"
  | "framework"
  | "biblioteca"
  | "pré-processador"
  | "orm"
  | "banco de dados"
  | "ferramenta"
  | "fullstack"
  | "plataforma"
  | "relacional"
  | "não relacional"
  | "controle de versão"
  | "design"
  | "prototipação";

export interface ITechExplain {
  title: string;
  field: TechFieldType;
  categories: TechCategoryType[];
  description: string;
  level: TechLevelType;
}

interface ITechExplainMap {
  [key: string]: ITechExplain;
}

export const techExplainMap: ITechExplainMap = {
  html: {
    title: "HTML",
    field: "frontend",
    categories: ["linguagem", "estático"],
    description:
      "Linguagem de marcação de hipertexto usada para criar páginas web. Responsável por definir o conteúdo estrutural de uma página web, como textos, imagens, formulários, etc.",
    level: "intermediário",
  },
  css: {
    title: "CSS",
    field: "frontend",
    categories: ["linguagem", "estático", "estilização"],
    description:
      "Folha de estilo em cascata, ou Cascading Style Sheets, usada para estilizar elementos HTML e definir a apresentação de documentos HTML ou XML.",
    level: "intermediário",
  },
  javascript: {
    title: "JavaScript",
    field: "frontend",
    categories: ["linguagem", "estático"],
    description:
      "Linguagem de programação de alto-nível, usada principalmente para criar interfaces de usuário dinâmicas e interativas em websites e aplicativos.",
    level: "intermediário",
  },
  sass: {
    title: "Sass",
    field: "frontend",
    categories: ["pré-processador", "estilização"],
    description:
      "Sass (Syntactically Awesome Stylesheets) é um pré-processador CSS que adiciona funcionalidades como variáveis, mixins, funções e aninhamento, facilitando a escrita de estilos mais organizados e reutilizáveis.",
    level: "avançado",
  },
  tailwind: {
    title: "Tailwind CSS",
    field: "frontend",
    categories: ["framework", "estilização"],
    description:
      "Tailwind CSS é um framework utilitário para estilização, que permite aplicar estilos diretamente nos elementos HTML usando classes pré-definidas, promovendo agilidade e consistência no design.",
    level: "avançado",
  },
  typescript: {
    title: "TypeScript",
    field: "frontend",
    categories: ["linguagem", "tipagem"],
    description:
      "TypeScript é um superset do JavaScript que adiciona tipagem estática e recursos avançados de desenvolvimento, como interfaces, tipos genéricos e verificação de erros em tempo de compilação.",
    level: "intermediário",
  },
  react: {
    title: "React",
    field: "frontend",
    categories: ["biblioteca", "framework"],
    description:
      "React é uma biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas. Utiliza o conceito de Virtual DOM para otimizar atualizações na interface.",
    level: "intermediário",
  },
  next: {
    title: "NextJS",
    field: "frontend",
    categories: ["framework", "fullstack"],
    description:
      "Next.js é um framework baseado em React que oferece renderização híbrida (SSR, SSG), roteamento automático, otimização de performance e suporte nativo a API routes, ideal para aplicações web modernas.",
    level: "intermediário",
  },
  vue: {
    title: "Vue",
    field: "frontend",
    categories: ["framework"],
    description:
      "Vue.js é um framework progressivo para construção de interfaces de usuário. Focado na camada de visualização, permite criar aplicações reativas com uma sintaxe simples e flexível.",
    level: "intermediário",
  },
  nuxt: {
    title: "NuxtJS",
    field: "frontend",
    categories: ["framework", "fullstack"],
    description:
      "Nuxt.js é um framework baseado em Vue que facilita o desenvolvimento de aplicações universais, com suporte a SSR, geração estática, roteamento automático e estrutura modular.",
    level: "iniciante",
  },
  node: {
    title: "NodeJS",
    field: "backend",
    categories: ["linguagem"],
    description:
      "Node.js é um ambiente de execução JavaScript do lado do servidor. Permite construir aplicações escaláveis e rápidas, utilizando uma arquitetura orientada a eventos e não bloqueante.",
    level: "intermediário",
  },
  express: {
    title: "Express",
    field: "backend",
    categories: ["framework"],
    description:
      "Express é um framework minimalista para Node.js que facilita a criação de APIs e aplicações web. Oferece uma estrutura leve e flexível para lidar com rotas, middlewares e requisições HTTP.",
    level: "iniciante",
  },
  nestjs: {
    title: "NestJS",
    field: "backend",
    categories: ["framework"],
    description:
      "NestJS é um framework para Node.js que utiliza TypeScript e conceitos de arquitetura modular e orientada a objetos. Ideal para construir aplicações escaláveis e bem estruturadas.",
    level: "intermediário",
  },
  postgresql: {
    title: "PostgreSQL",
    field: "backend",
    categories: ["banco de dados", "relacional"],
    description:
      "PostgreSQL é um sistema de gerenciamento de banco de dados relacional open-source, conhecido por sua robustez, conformidade com padrões SQL e suporte a extensões avançadas como JSON e funções customizadas.",
    level: "iniciante",
  },
  mongodb: {
    title: "MongoDB",
    field: "backend",
    categories: ["banco de dados", "não relacional"],
    description:
      "MongoDB é um banco de dados NoSQL orientado a documentos, que armazena dados em formato BSON (similar ao JSON), oferecendo flexibilidade e escalabilidade para aplicações modernas.",
    level: "iniciante",
  },
  prisma: {
    title: "Prisma",
    field: "backend",
    categories: ["orm", "ferramenta"],
    description:
      "Prisma é um ORM moderno para Node.js e TypeScript que facilita o acesso a bancos de dados com tipagem estática, geração automática de queries e integração com múltiplos bancos relacionais.",
    level: "intermediário",
  },
  csharp: {
    title: "C#",
    field: "backend",
    categories: ["linguagem", "estático"],
    description:
      "C# é uma linguagem de programação moderna e orientada a objetos desenvolvida pela Microsoft, amplamente usada para desenvolvimento de aplicações desktop, web, mobile e jogos via Unity.",
    level: "intermediário",
  },
  ".net": {
    title: ".NET",
    field: "backend",
    categories: ["framework", "plataforma"],
    description:
      ".NET é uma plataforma de desenvolvimento da Microsoft que suporta múltiplas linguagens, incluindo C#, e permite criar aplicações web, desktop, mobile e serviços em nuvem com alta performance.",
    level: "iniciante",
  },
  "asp.net": {
    title: "ASP.NET",
    field: "backend",
    categories: ["framework"],
    description:
      "ASP.NET é um framework da Microsoft para construção de aplicações web robustas e escaláveis. Suporta múltiplos paradigmas como MVC, Web API e Razor Pages, integrando-se ao ecossistema .NET.",
    level: "iniciante",
  },
  "react native": {
    title: "React Native",
    field: "mobile",
    categories: ["framework", "biblioteca"],
    description:
      "React Native é um framework criado pelo Facebook para desenvolvimento de aplicativos móveis nativos utilizando JavaScript e React. Permite compartilhar lógica entre plataformas iOS e Android.",
    level: "intermediário",
  },
  expo: {
    title: "Expo",
    field: "mobile",
    categories: ["ferramenta", "framework"],
    description:
      "Expo é uma plataforma e conjunto de ferramentas que simplifica o desenvolvimento com React Native, oferecendo build automatizado, acesso a APIs nativas e preview instantâneo em dispositivos.",
    level: "intermediário",
  },
  nativewind: {
    title: "NativeWind",
    field: "mobile",
    categories: ["estilização", "ferramenta"],
    description:
      "NativeWind é uma biblioteca que traz a abordagem utilitária do Tailwind CSS para o React Native, permitindo estilização rápida e consistente com classes diretamente nos componentes.",
    level: "intermediário",
  },
  git: {
    title: "Git",
    field: "tools",
    categories: ["controle de versão", "ferramenta"],
    description:
      "Git é um sistema de controle de versão distribuído amplamente utilizado para gerenciar código-fonte. Permite rastrear alterações, colaborar em equipe e manter histórico de desenvolvimento.",
    level: "intermediário",
  },
  figma: {
    title: "Figma",
    field: "tools",
    categories: ["design", "prototipação"],
    description:
      "Figma é uma ferramenta de design colaborativo baseada em nuvem, usada para criar interfaces, protótipos e fluxos de usuário. Permite trabalho simultâneo entre designers e desenvolvedores.",
    level: "intermediário",
  },
};
