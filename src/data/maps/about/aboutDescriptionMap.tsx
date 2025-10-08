import {
  AboutMeDescription,
  AcademicDescription,
  HardskillDescription,
  SoftskillDescription,
} from "@/components/features/about/intro/descriptions";
import { AboutViewTypes } from "@/types/aliases/AboutViewTypes";
import { ReactNode } from "react";
import { IoBook, IoCodeSlash, IoPeople, IoPerson } from "react-icons/io5";

interface IAboutCardData {
  title: string;
  icon: ReactNode;
  view: AboutViewTypes;
  delay: number;
  description: string | ReactNode;
}

export const aboutDescriptionMap: IAboutCardData[] = [
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
