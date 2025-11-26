'use client';
import { useState } from 'react';
import { MdArrowDropDown, MdCode } from 'react-icons/md';
import { techIconMap } from '@/data/content/techIconMap';
import type { TechNameType } from '@/types/aliases/TechNameType';

interface ITechStack {
  tech: TechNameType;
  reason: string;
}

export default function TechStack({ techList }: { techList: ITechStack[] }) {
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
            Tecnologias
          </span>
          <span className='text-xl'>{<MdCode />}</span>
        </h3>
        <MdArrowDropDown
          className={`text-3xl duration-300 ease-in-out ${isListShowing ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        className={`flex flex-col rounded-lg gap-2 duration-300 ease-in-out border-black/5 dark:border-white/5 ${isListShowing ? 'max-h-100 p-1 pb-4 mt-1 border overflow-y-auto scrollbar-base' : 'max-h-0 p-0 mt-0 overflow-clip'}`}
      >
        {techList.map((techItem, idx) => (
          <li
            className='flex items-center gap-2'
            // biome-ignore lint/suspicious/noArrayIndexKey: <Static List>
            key={idx}
            title={techItem.tech}
          >
            <span className='p-1 border rounded-lg text-2xl border-black/25 dark:border-white/25'>
              {techIconMap[techItem.tech]}
            </span>
            <p className='text-sm'>{techItem.reason}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
