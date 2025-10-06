import { TechNameType } from "@/types/TechNameType";

export type TechFieldType = "frontend" | "backend" | "mobile" | "tools";

export interface ITech {
  name: TechNameType;
  main: boolean;
  field: TechFieldType;
}

export const techList: ITech[] = [
  {
    name: "html",
    main: true,
    field: "frontend",
  },
  {
    name: "css",
    main: true,
    field: "frontend",
  },
  {
    name: "sass",
    main: true,
    field: "frontend",
  },
  {
    name: "tailwind",
    main: true,
    field: "frontend",
  },
  {
    name: "javascript",
    main: true,
    field: "frontend",
  },
  {
    name: "typescript",
    main: true,
    field: "frontend",
  },
  {
    name: "react",
    main: true,
    field: "frontend",
  },
  {
    name: "next",
    main: true,
    field: "frontend",
  },
  {
    name: "vue",
    main: false,
    field: "frontend",
  },
  {
    name: "nuxt",
    main: false,
    field: "frontend",
  },
  {
    name: "node",
    main: true,
    field: "backend",
  },
  {
    name: "express",
    main: false,
    field: "backend",
  },
  {
    name: "nest",
    main: true,
    field: "backend",
  },
  {
    name: "postgresql",
    main: true,
    field: "backend",
  },
  {
    name: "mongodb",
    main: false,
    field: "backend",
  },
  {
    name: "prisma",
    main: true,
    field: "backend",
  },
  {
    name: "csharp",
    main: false,
    field: "backend",
  },
  {
    name: "dotnet",
    main: false,
    field: "backend",
  },
  {
    name: "asp.net",
    main: false,
    field: "backend",
  },
  {
    name: "react native",
    main: false,
    field: "mobile",
  },
  {
    name: "expo",
    main: false,
    field: "mobile",
  },
  {
    name: "nativewind",
    main: false,
    field: "mobile",
  },
  {
    name: "git",
    main: true,
    field: "tools",
  },
  {
    name: "figma",
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
