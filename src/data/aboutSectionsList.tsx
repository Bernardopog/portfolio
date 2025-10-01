import { AboutViewTypes } from "@/types/AboutViewTypes";
import { ReactNode } from "react";
import { IoBook, IoCodeSlash, IoPeople, IoPerson } from "react-icons/io5";

interface IAboutCardData {
  title: string;
  icon: ReactNode;
  view: AboutViewTypes;
  delay: number;
  description: string | ReactNode;
}

export const aboutSections: IAboutCardData[] = [
  {
    title: "Sobre Mim",
    icon: <IoPerson className="text-2xl" />,
    view: "about",
    delay: 150,
    description: "Placeholder",
  },
  {
    title: "Hardskill",
    icon: <IoCodeSlash className="text-2xl" />,
    view: "hard",
    delay: 300,
    description: "Placeholder",
  },
  {
    title: "Softskill",
    icon: <IoPeople className="text-2xl" />,
    view: "soft",
    delay: 450,
    description: "Placeholder",
  },
  {
    title: "Acadêmico",
    icon: <IoBook className="text-2xl" />,
    view: "academic",
    delay: 600,
    description: "Placeholder",
  },
];
