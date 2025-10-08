import { TechFieldType } from "@/types/aliases/TechFieldType";
import { ReactNode } from "react";
import { FaTools } from "react-icons/fa";
import { FaDesktop, FaMobile, FaServer } from "react-icons/fa6";

export const techFieldDataList: {
  title: string;
  list: TechFieldType;
  icon: ReactNode;
}[] = [
  {
    title: "Front-end",
    list: "frontend",
    icon: <FaDesktop />,
  },
  {
    title: "Back-end",
    list: "backend",
    icon: <FaServer />,
  },
  {
    title: "Mobile",
    list: "mobile",
    icon: <FaMobile />,
  },
  {
    title: "Ferramentas",
    list: "tools",
    icon: <FaTools />,
  },
];
