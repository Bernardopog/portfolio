'use client';
import { MdArrowDropDown, MdOutlineShortText } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { useProjectDescriptionStore } from '@/store/ProjectDescriptionStore';

export default function Description({ content }: { content: string }) {
  const { toggleField, isDescriptionOpen } = useProjectDescriptionStore(
    useShallow((s) => ({
      toggleField: s.toggleField,
      isDescriptionOpen: s.isDescriptionOpen,
    })),
  );

  return (
    <section className='p-1 rounded-lg border shadow-xl border-black/5 text-shark-800 dark:border-white/5 dark:text-shark-300'>
      <button
        type='button'
        className='flex justify-between w-full cursor-pointer'
        onClick={() => toggleField('isDescriptionOpen')}
      >
        <h3 className='inline-flex items-center gap-2'>
          <span className='font-medium text-lg text-shark-900 dark:text-shark-100'>
            Descrição
          </span>
          <span className='text-xl'>{<MdOutlineShortText />}</span>
        </h3>
        <MdArrowDropDown
          className={`text-3xl duration-300 ease-in-out ${isDescriptionOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <p
        className={`flex flex-col rounded-lg gap-2 overflow-clip duration-300 ease-in-out border-black/5 dark:border-white/5 ${isDescriptionOpen ? 'max-h-100 p-1 mt-1 border' : 'max-h-0 p-0 mt-0'}`}
      >
        {content}
      </p>
    </section>
  );
}
