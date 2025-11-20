import { IoCodeSlash, IoHome, IoPerson } from 'react-icons/io5';

export const navbarMap = {
  about: {
    name: 'about',
    icon: <IoPerson className='text-2xl' />,
  },
  main: {
    name: 'main',
    icon: <IoHome className='text-2xl' />,
  },
  project: {
    name: 'project',
    icon: <IoCodeSlash className='text-2xl' />,
  },
};
