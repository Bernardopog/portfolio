'use client';
import { useState } from 'react';
import {
  MdArrowDropDown,
  MdCalendarMonth,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from 'react-icons/md';

interface IPlan {
  name: string;
  completionDate?: Date;
}

export default function FuturePlans({ plans }: { plans: IPlan[] }) {
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
            Planos Futuros
          </span>
          <span className='text-xl'>{<MdCalendarMonth />}</span>
        </h3>
        <MdArrowDropDown
          className={`text-3xl duration-300 ease-in-out ${isListShowing ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        className={`flex flex-col rounded-lg gap-2 overflow-clip duration-300 ease-in-out border-black/5 dark:border-white/5 ${isListShowing ? 'max-h-100 p-1 mt-1 border' : 'max-h-0 p-0 mt-0'}`}
      >
        {plans.map((plan, index) => (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: <Static List>
            key={index}
            className='flex justify-between p-1 rounded-md text-sm duration-300 ease-out hover:bg-black/10 dark:hover:bg-white/10'
          >
            <p className='inline-flex items-center gap-2'>
              {plan.name}{' '}
              <span className='text-xl text-shark-900 dark:text-shark-100'>
                {plan.completionDate ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </span>
            </p>
            {plan.completionDate ? (
              <span>{plan.completionDate.toLocaleDateString('pt-BR')}</span>
            ) : (
              <span>--/--/----</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
