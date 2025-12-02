import type { ReactNode } from 'react';
import { FaTools } from 'react-icons/fa';
import { FaDesktop, FaMobile, FaServer } from 'react-icons/fa6';
import type { TechFieldType } from '@/types/aliases/TechFieldType';

export const techFieldDataList: {
  key?: string;
  title: string;
  list: TechFieldType;
  icon: ReactNode;
}[] = [
  {
    title: 'Front end',
    list: 'frontend',
    icon: <FaDesktop />,
  },
  {
    title: 'Back end',
    list: 'backend',
    icon: <FaServer />,
  },
  {
    title: 'Mobile',
    list: 'mobile',
    icon: <FaMobile />,
  },
  {
    key: 'Tools',
    title: 'Ferramentas',
    list: 'tools',
    icon: <FaTools />,
  },
];
