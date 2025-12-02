import { IoCodeSlash, IoHome, IoPerson } from 'react-icons/io5';

export const navbarMap = {
  about: {
    name: 'about',
    key: 'About',
    icon: <IoPerson className='text-2xl' />,
  },
  main: {
    name: 'main',
    key: 'Home',
    icon: <IoHome className='text-2xl' />,
  },
  project: {
    name: 'project',
    key: 'Project',
    icon: <IoCodeSlash className='text-2xl' />,
  },
};
