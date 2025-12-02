import type { ReactNode } from 'react';
import { IoBook, IoCodeSlash, IoPeople, IoPerson } from 'react-icons/io5';
import {
  AboutMeDescription,
  AcademicDescription,
  HardskillDescription,
  SoftskillDescription,
} from '@/components/features/about/intro/descriptions';
import type { AboutViewTypes } from '@/types/aliases/AboutViewTypes';

interface IAboutCardData {
  key: string;
  icon: ReactNode;
  view: AboutViewTypes;
  delay: number;
  description: string | ReactNode;
}

export const aboutDescriptionMap: IAboutCardData[] = [
  {
    key: 'CardAbout',
    icon: <IoPerson className='text-2xl' />,
    view: 'about',
    delay: 150,
    description: <AboutMeDescription />,
  },
  {
    key: 'CardHardskills',
    icon: <IoCodeSlash className='text-2xl' />,
    view: 'hard',
    delay: 300,
    description: <HardskillDescription />,
  },
  {
    key: 'CardSoftskills',
    icon: <IoPeople className='text-2xl' />,
    view: 'soft',
    delay: 450,
    description: <SoftskillDescription />,
  },
  {
    key: 'CardAcademic',
    icon: <IoBook className='text-2xl' />,
    view: 'academic',
    delay: 600,
    description: <AcademicDescription />,
  },
];
