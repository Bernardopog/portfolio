import React, { type ReactElement } from 'react';
import { techIconMap } from '@/data/content/techIconMap';
import type { ITech } from '@/types/interfaces/ITech';

interface ITechCardProps {
  tech: ITech;
}

export default function TechCard({ tech }: ITechCardProps) {
  return (
    <li className='flex flex-col items-center justify-center w-full h-20 rounded-lg border shadow-lg border-black/10 ease-in-out duration-300 backdrop-blur-2xl dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10'>
      <span className='text-3xl xs:text-4xl'>
        {React.isValidElement(techIconMap[tech.name])
          ? // biome-ignore lint/suspicious/noExplicitAny: <Needed to clone React with generic props>
            React.cloneElement(techIconMap[tech.name] as ReactElement<any>, {
              className: 'tech',
            })
          : techIconMap[tech.name]}
      </span>
      <p className='capitalize text-center text-gradient text-sm xs:text-base md:font-medium'>
        {tech.name}
      </p>
    </li>
  );
}
