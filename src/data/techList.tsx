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
} from "react-icons/si";

export interface ITech {
  name: string;
  icon: ReactNode;
  main: boolean;
}

export const techList: ITech[] = [
  {
    name: "html",
    icon: <SiHtml5 />,
    main: true,
  },
  {
    name: "css",
    icon: <SiCss3 />,
    main: true,
  },
  {
    name: "sass",
    icon: <SiSass />,
    main: true,
  },
  {
    name: "tailwind",
    icon: <SiTailwindcss />,
    main: true,
  },
  {
    name: "javascript",
    icon: <SiJavascript />,
    main: true,
  },
  {
    name: "typescript",
    icon: <SiTypescript />,
    main: true,
  },
  {
    name: "react",
    icon: <SiReact />,
    main: true,
  },
  {
    name: "next",
    icon: <SiNextdotjs />,
    main: true,
  },
  {
    name: "vue",
    icon: <SiVuedotjs />,
    main: false,
  },
  {
    name: "nuxt",
    icon: <SiNuxtdotjs />,
    main: false,
  },
];

export const getAllTechs = () => {
  return techList.map((tech) => tech.name);
};
export const getMainTechs = () => {
  return techList.filter((tech) => tech.main);
};
