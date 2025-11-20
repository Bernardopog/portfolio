import type { ReactNode } from 'react';
import {
  AboutMeContent,
  AcademicContent,
  HardskillContent,
  SoftskillContent,
} from '@/components/features/about/expanded/content';
import type { AboutViewTypes } from '@/types/aliases/AboutViewTypes';

type IAboutSpecificMap = Record<AboutViewTypes, ReactNode>;

export const aboutContentMap: IAboutSpecificMap = {
  none: null,
  about: <AboutMeContent />,
  hard: <HardskillContent />,
  soft: <SoftskillContent />,
  academic: <AcademicContent />,
};
