import { AboutViewTypes } from "@/types/AboutViewTypes";
import { ReactNode } from "react";
import {
  AboutMeSubpage,
  AcademicSubpage,
  HardskillSubpage,
  SoftskillSubpage,
} from "@/layout/AboutPage/AboutSubpages";

type IAboutSpecificMap = {
  [K in AboutViewTypes]: ReactNode;
};

export const aboutSpecificMap: IAboutSpecificMap = {
  none: null,
  about: <AboutMeSubpage />,
  hard: <HardskillSubpage />,
  soft: <SoftskillSubpage />,
  academic: <AcademicSubpage />,
};
