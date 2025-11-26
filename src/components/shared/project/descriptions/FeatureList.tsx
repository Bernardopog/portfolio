'use client';
import { useState } from 'react';
import { MdArrowDropDown, MdList } from 'react-icons/md';

export default function FeatureList({
  featureList,
}: {
  featureList: string[];
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
            Funcionalidades
          </span>
          <span className='text-xl'>{<MdList />}</span>
        </h3>
        <MdArrowDropDown
          className={`text-3xl duration-300 ease-in-out ${isListShowing ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        className={`flex flex-col rounded-lg gap-2 overflow-clip duration-300 ease-in-out list-inside list-disc border-black/5 dark:border-white/5 ${isListShowing ? 'max-h-100 p-1 mt-1 border' : 'max-h-0 p-0 mt-0'}`}
      >
        {featureList.map((feature, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <Static List>
          <li key={index} className='text-sm'>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
