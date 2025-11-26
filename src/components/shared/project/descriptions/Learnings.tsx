'use client';
import { useState } from 'react';
import { MdArrowDropDown, MdChecklist } from 'react-icons/md';
import { techIconMap } from '@/data/content/techIconMap';
import type { TechNameType } from '@/types/aliases/TechNameType';

interface ILearnings {
  learned: string;
  tech: TechNameType;
}

export default function Learnings({
  learningsList,
}: {
  learningsList: ILearnings[];
}) {
  const [isListShowing, setIsListShowing] = useState(true);

  return (
    <section className='p-1 rounded-lg border shadow-xl border-black/5 text-shark-800 dark:border-white/5 dark:text-shark-300'>
      <button
        type='button'
        className='flex justify-between w-full cursor-pointer'
        onClick={() => setIsListShowing(!isListShowing)}
      >
        <h3 className='inline-flex items-center gap-2'>
          <span className='font-medium text-lg text-shark-900 dark:text-shark-100'>
            Aprendizados
          </span>
          <span className='text-xl'>{<MdChecklist />}</span>
        </h3>
        <MdArrowDropDown
          className={`text-3xl duration-300 ease-in-out ${isListShowing ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        className={`flex flex-col rounded-lg gap-2 overflow-clip duration-300 ease-in-out border-black/5 dark:border-white/5 ${isListShowing ? 'max-h-100 p-1 mt-1 border' : 'max-h-0 p-0 mt-0'}`}
      >
        {learningsList.map((learnings, index) => (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: <Static List>
            key={index}
            className='flex justify-between p-1 rounded-md text-sm duration-300 ease-out hover:bg-black/10 dark:hover:bg-white/10'
          >
            <p>{learnings.learned} </p>
            <span className='flex items-center text-xl text-shark-500'>
              {techIconMap[learnings.tech]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
