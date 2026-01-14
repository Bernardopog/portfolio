import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useCourseStore } from '@/store/BookStore';

interface IBookPageProps {
  children: ReactNode;
  position: 'left' | 'right';
  stripesColors?: string[];
  instituition?: string;
}

export default function BookPage({
  children,
  position,
  stripesColors,
  instituition,
}: IBookPageProps) {
  const selectBook = useCourseStore((s) => s.selectCourse);

  const t = useTranslations('Words');

  return (
    <div
      className={`size-full p-1 bg-shark-950 ${position === 'left' ? 'pr-0' : 'pl-0'}`}
    >
      <article
        className={`size-full from-[#e3dbca] to-[#c0ae87] from-90% lg:h-[97.5%] lg:shadow-[0_14px_1px_rgba(54,51,44,0.25),0_10px_1px_rgba(84,81,74,0.5),0_6px_1px_rgba(114,111,104,0.75),0_2px_1px_rgba(144,141,134,1)] ${position === 'left' ? 'relative bg-gradient-to-b pl-2 lg:bg-gradient-to-r' : 'pl-8 bg-gradient-to-t lg:bg-gradient-to-l'}`}
      >
        {stripesColors && (
          <div
            className='hidden justify-center absolute right-2 h-1/5 w-8 rounded-b-full lg:flex'
            style={{ backgroundColor: stripesColors[0] }}
          >
            <div
              className='flex items-center justify-center h-[95%] w-[70%] rounded-b-full'
              style={{
                backgroundColor: stripesColors[stripesColors.length ? 1 : 0],
              }}
            >
              <span className='block font-medium text-xs text-center -rotate-90'>
                {instituition}
              </span>
            </div>
          </div>
        )}
        {position === 'right' && (
          <button
            type='button'
            className='group absolute right-1 top-1 size-8 bg-gradient-to-tr from-[#c0ae87] from-50% to-[#d1c4a8] to-50% cursor-pointer duration-300 ease-in-out hover:size-16'
            aria-label={t('Back')}
            title={t('Back')}
            onClick={() => selectBook(null)}
          >
            <MdArrowBack className='absolute top-0 right-0 text-3xl opacity-0 duration-100 ease-in-out group-hover:opacity-100' />
          </button>
        )}
        {children}
      </article>
    </div>
  );
}
