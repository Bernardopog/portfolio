import type { IBookAbout } from "@/types/interfaces/ICourseContent";

export interface IBook {
  label: string;
  abbreviation?: string;
  instituiton: string;
  description: string;
  stripesColors?: string[];
  startYear: number;
  endYear?: number;
  hPosition: "left" | "right";
  vPosition: "top" | "bottom";
  className?: string;

  about: IBookAbout;
}

export const academicCourses: IBook[] = [
  {
    label: "Alura",
    instituiton: "Alura",
    description:
      "Alura's Front-End course focused on learn the basic of HTML, CSS and JavaScript.",
    stripesColors: ["#0028D8", "#1165DA"],
    startYear: 2023,
    endYear: 2024,
    hPosition: "left",
    vPosition: "bottom",
    className: "left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 rotate-8",
    about: {
      aboutCourse:
        "Diversos dos cursos que me ajudaram a aprender o necessário para atuar no mercado de desenvolvimento web (Front end).",
      learned: ["Algorítimos", "Estrutura de Dados", "Linguagem C"],
      usedLanguages: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Vue",
        "Sass",
        "Tailwind",
        "Bootstrap",
      ],
    },
  },
  {
    label: "Gestão da TI",
    instituiton: "Estácio",
    description:
      "Estácio's TI Manager course focused on learn the basic of Algorithims and how to manage teams.",
    stripesColors: ["#0AA2E5", "#48AA9E"],
    startYear: 2024,
    endYear: 2026,
    hPosition: "right",
    vPosition: "bottom",
    className:
      "right-1/4 bottom-1/2 translate-x-1/2 translate-y-1/2 -rotate-15",
    about: {
      aboutCourse:
        "A base acadêmica para preparação para a carreira de TI, onde o aprendi a ter visão estratégica necessária para atender os objetivos de uma empresa.",
      learned: ["Algorítimos"],
      usedLanguages: ["Python", "SQL"],
    },
  },
  {
    label: "CS50",
    instituiton: "Harvard",
    description:
      "CS50's Web Programming course focused on learn the basic of Algorithims and Data Structures.",
    stripesColors: ["#A01B2E", "#AA8838", "#eee"],
    startYear: 2024,
    hPosition: "left",
    vPosition: "top",
    className: "left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/4 -rotate-5",
    about: {
      aboutCourse:
        "Um curso voltado a introdução da ciência da computação, onde mais do que aprender sobre C ou Python, este curso moldou minha forma de entender algoritmos, entender a memória e o que está ocorrendo por de trás de cada linha de código.",
      learned: [
        "Algorítimos",
        "Estrutura de Dados",
        "Linguagem C",
        "Big O notation",
        "Algoritmos de Ordenação",
        "Ciência da Computação",
      ],
      usedLanguages: ["C", "Python", "JavaScript", "HTML", "CSS"],
    },
  },
  {
    label: "The Last Algorithms Course You'll Need",
    abbreviation: "TLACYN",
    instituiton: "Frontend Masters",
    description:
      "Frontend Masters's Web Programming course focused on learn the basic of Algorithims and Data Structures.",
    stripesColors: ["#BA2B27"],
    startYear: 2025,
    hPosition: "right",
    vPosition: "top",
    className: "right-1/3 top-1/2 translate-x-1/2 -translate-y-1/4 -rotate-5",
    about: {
      aboutCourse:
        "O 'The Last Algorithms Course You'll Need' é voltado para quem quer aprender sobre algoritmos, estrutura de dados e complexidade de algoritmos.",
      learned: ["Algorítimos", "Estrutura de Dados"],
      usedLanguages: ["JavaScript", "TypeScript"],
    },
  },
];
