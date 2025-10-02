import { ReactNode } from "react";

import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDotnet,
  SiExpo,
  SiGit,
  SiFigma,
} from "react-icons/si";

export type TechFieldType = "frontend" | "backend" | "mobile" | "tools";

export interface ITech {
  name: string;
  icon: ReactNode;
  main: boolean;
  field: TechFieldType;
}

export const techList: ITech[] = [
  {
    name: "html",
    icon: <SiHtml5 />,
    main: true,
    field: "frontend",
  },
  {
    name: "css",
    icon: <SiCss3 />,
    main: true,
    field: "frontend",
  },
  {
    name: "sass",
    icon: <SiSass />,
    main: true,
    field: "frontend",
  },
  {
    name: "tailwind",
    icon: <SiTailwindcss />,
    main: true,
    field: "frontend",
  },
  {
    name: "javascript",
    icon: <SiJavascript />,
    main: true,
    field: "frontend",
  },
  {
    name: "typescript",
    icon: <SiTypescript />,
    main: true,
    field: "frontend",
  },
  {
    name: "react",
    icon: <SiReact />,
    main: true,
    field: "frontend",
  },
  {
    name: "next",
    icon: <SiNextdotjs />,
    main: true,
    field: "frontend",
  },
  {
    name: "vue",
    icon: <SiVuedotjs />,
    main: false,
    field: "frontend",
  },
  {
    name: "nuxt",
    icon: <SiNuxtdotjs />,
    main: false,
    field: "frontend",
  },
  {
    name: "node",
    icon: <SiNodedotjs />,
    main: true,
    field: "backend",
  },
  {
    name: "express",
    icon: <SiExpress />,
    main: false,
    field: "backend",
  },
  {
    name: "nestjs",
    icon: <SiNestjs />,
    main: true,
    field: "backend",
  },
  {
    name: "postgresql",
    icon: <SiPostgresql />,
    main: true,
    field: "backend",
  },
  {
    name: "mongodb",
    icon: <SiMongodb />,
    main: false,
    field: "backend",
  },
  {
    name: "prisma",
    icon: <SiPrisma />,
    main: true,
    field: "backend",
  },
  {
    name: "csharp",
    icon: <SiDotnet />,
    main: false,
    field: "backend",
  },
  {
    name: ".NET",
    icon: <SiDotnet />,
    main: false,
    field: "backend",
  },
  {
    name: "ASP.NET",
    icon: <SiDotnet />,
    main: false,
    field: "backend",
  },
  {
    name: "react native",
    icon: <SiReact />,
    main: false,
    field: "mobile",
  },
  {
    name: "expo",
    icon: <SiExpo />,
    main: false,
    field: "mobile",
  },
  {
    name: "nativewind",
    icon: <SiTailwindcss />,
    main: false,
    field: "mobile",
  },
  {
    name: "git",
    icon: <SiGit />,
    main: true,
    field: "tools",
  },
  {
    name: "figma",
    icon: <SiFigma />,
    main: false,
    field: "tools",
  },
];

export const getAllTechs = () => {
  return techList.map((tech) => tech.name);
};
export const getMainTechs = () => {
  return techList.filter((tech) => tech.main);
};
export const getTechByField = (field: TechFieldType) => {
  return techList.filter((tech) => tech.field === field);
};
