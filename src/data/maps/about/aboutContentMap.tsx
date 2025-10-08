import {
  AboutMeContent,
  AcademicContent,
  HardskillContent,
  SoftskillContent,
} from "@/components/features/about/expanded/content";
import { AboutViewTypes } from "@/types/aliases/AboutViewTypes";
import { ReactNode } from "react";

type IAboutSpecificMap = Record<AboutViewTypes, ReactNode>;

export const aboutContentMap: IAboutSpecificMap = {
  none: null,
  about: <AboutMeContent />,
  hard: <HardskillContent />,
  soft: <SoftskillContent />,
  academic: <AcademicContent />,
};
