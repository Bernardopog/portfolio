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

interface ITech {
  name: string;
  icon: ReactNode;
}

const techs: ITech[] = [
  {
    name: "html",
    icon: <SiHtml5 className="tech" />,
  },
  {
    name: "css",
    icon: <SiCss3 className="tech" />,
  },
  {
    name: "sass",
    icon: <SiSass className="tech" />,
  },
  {
    name: "tailwind",
    icon: <SiTailwindcss className="tech" />,
  },
  {
    name: "javascript",
    icon: <SiJavascript className="tech" />,
  },
  {
    name: "typescript",
    icon: <SiTypescript className="tech" />,
  },
  {
    name: "react",
    icon: <SiReact className="tech" />,
  },
  {
    name: "next",
    icon: <SiNextdotjs className="tech" />,
  },
  {
    name: "vue",
    icon: <SiVuedotjs className="tech" />,
  },
  {
    name: "nuxt",
    icon: <SiNuxtdotjs className="tech" />,
  },
];

const TechCard = ({ tech }: { tech: ITech }) => {
  return (
    <li className="flex flex-col items-center justify-center w-full h-20 rounded-lg border shadow-lg border-black/10 ease-in-out duration-300 backdrop-blur-2xl dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10">
      <span className="text-3xl xs:text-4xl">{tech.icon}</span>
      <p className="capitalize text-center text-gradient text-sm xs:text-base md:font-medium">
        {tech.name}
      </p>
    </li>
  );
};

export default function TechList() {
  return (
    <ul className="grid grid-cols-5 md:grid-cols-10 absolute bottom-0 min-w-screen w-full mb-2 px-2 gap-x-2">
      {techs.map((tech) => (
        <TechCard key={tech.name} tech={tech} />
      ))}
    </ul>
  );
}
