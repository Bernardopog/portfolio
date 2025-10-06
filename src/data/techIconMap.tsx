import { ReactNode } from "react";
import {
  SiCss3,
  SiHtml5,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDotnet,
  SiExpo,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { TechNameType } from "@/types/TechNameType";

export type ITechIconMap = {
  [K in TechNameType]: ReactNode;
};

export const techIconMap: ITechIconMap = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  sass: <SiSass />,
  tailwind: <SiTailwindcss />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  react: <SiReact />,
  next: <SiNextdotjs />,
  vue: <SiVuedotjs />,
  nuxt: <SiNuxtdotjs />,
  node: <SiNodedotjs />,
  express: <SiExpress />,
  nest: <SiNestjs />,
  postgresql: <SiPostgresql />,
  mongodb: <SiMongodb />,
  prisma: <SiPrisma />,
  csharp: <SiDotnet />,
  dotnet: <SiDotnet />,
  "asp.net": <SiDotnet />,
  "react native": <SiReact />,
  expo: <SiExpo />,
  nativewind: <SiTailwindcss />,
  git: <SiGit />,
  figma: <SiFigma />,
};
