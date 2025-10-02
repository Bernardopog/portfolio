import { AboutViewTypes } from "@/types/AboutViewTypes";
import { ReactNode } from "react";
import { IoBook, IoCodeSlash, IoPeople, IoPerson } from "react-icons/io5";
import { techList } from "./techList";

interface IAboutCardData {
  title: string;
  icon: ReactNode;
  view: AboutViewTypes;
  delay: number;
  description: string | ReactNode;
}

const AboutMeDescription = () => (
  <p className="whitespace-pre-line">
    <span className="inline-block">
      Desenvolvedor Front-end com aspiração de me tornar <b>Fullstack</b>. Sou
      movido pela curiosidade e pela vontade de transformar ideias em realidade.
      Adoro criar projetos e explorar novas tecnologias.
    </span>
    <br />
    <br />
    <span className="inline-block">
      Fora do código, sou fã de uma boa partida de xadrez, maratonas de séries e
      jogos de estratégia e administração. Gosto de desafios que exigem
      raciocínio e planejamento, tanto na tela quanto na vida real.
    </span>
  </p>
);

const HardskillDescription = () => {
  const filteredTechList = techList.filter((tech) => tech.main);
  return (
    <>
      <p>Principais Tecnologias:</p>
      <ul className="grid grid-cols-2 mt-4 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTechList.map((tech) => (
          <li
            key={tech.name}
            className="group flex items-center p-1 rounded-lg border capitalize duration-300 ease-in-out text-shark-900 border-black/25 dark:text-shark-100 dark:border-white/25 hover:border-black/50 dark:hover:border-white/50"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="flex-1 text-center">{tech.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

const SoftskillDescription = () => (
  <div>
    <p>
      Minhas habilidades interpessoais que desenvolvi ajudando outros devs na
      prática, colaborando com outros desenvolvedores no site{" "}
      <a
        href="https://www.frontendmentor.io/profile/Bernardopog"
        target="_blank"
        className="underline"
        onClick={(ev) => ev.stopPropagation()}
      >
        <b>Frontend Mentor</b>
      </a>
      .
    </p>
    <br />
    <ul className="list-disc pl-6 py-2 border rounded-lg border-black/25 dark:border-white/25">
      <li>
        <b>Comunicação clara</b>
      </li>
      <li>
        <b>Empatia</b>
      </li>
      <li>
        <b>Colaboração</b>
      </li>
    </ul>
    <br />
    <p>
      Estas habilidades são pilares do meu crescimento, dentro e fora do código.
    </p>
  </div>
);

const AcademicDescription = () => (
  <p>
    Sou autodidata e venho construindo minha base técnica através de cursos,
    trilhas e graduação em Gestão de TI.
    <br />
    Aprendo tanto na prática quanto em ambientes formais, sempre buscando
    evoluir como desenvolvedor.
  </p>
);

export const aboutSections: IAboutCardData[] = [
  {
    title: "Sobre Mim",
    icon: <IoPerson className="text-2xl" />,
    view: "about",
    delay: 150,
    description: <AboutMeDescription />,
  },
  {
    title: "Hardskill",
    icon: <IoCodeSlash className="text-2xl" />,
    view: "hard",
    delay: 300,
    description: <HardskillDescription />,
  },
  {
    title: "Softskill",
    icon: <IoPeople className="text-2xl" />,
    view: "soft",
    delay: 450,
    description: <SoftskillDescription />,
  },
  {
    title: "Acadêmico",
    icon: <IoBook className="text-2xl" />,
    view: "academic",
    delay: 600,
    description: <AcademicDescription />,
  },
];
