'use client';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { Inert } from '@/components/shared';
import { useCourseStore } from '@/store/BookStore';
import { useNavbarStore } from '@/store/NavbarStore';
import type { IBookContentProps } from '@/types/interfaces/ICourseContent';
import { BookPage } from '.';

export default function Book({
  label,
  description,
  stripesColors,
  hPosition,
  vPosition,
  shouldShow,
  className,
  instituiton,
  about,
}: IBookContentProps) {
  const [hideCape, setHideCape] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { selectedBook, selectBook } = useCourseStore(
    useShallow((s) => ({
      selectedBook: s.selectedCourse,
      selectBook: s.selectCourse,
    })),
  );
  const blockNavbar = useNavbarStore((s) => s.blockNavbar);

  useEffect(() => {
    if (selectedBook === label) {
      setTimeout(() => {
        setHideCape(true);
      }, 1500);
    } else {
      setHideCape(false);
    }
  }, [selectedBook, label]);

  return (
    <Inert
      isVisible={shouldShow}
      className={`absolute rounded-sm duration-1000 ease-[cubic-bezier(.48,1.23,.64,1)] overflow-hidden scale-75 ${hideCape ? 'min-w-[316px] w-9/10 max-w-[680px] h-120' : 'w-80 h-100'} ${
        shouldShow
          ? `${selectedBook === label ? `${hPosition === 'right' ? 'right-1/2 translate-1/2' : 'left-1/2 -translate-1/2'} ${vPosition === 'top' ? 'top-1/2 -translate-y-1/2' : 'bottom-1/2 translate-y-1/2'} z-50 shadow-[0_0_16px_4px] shadow-purple-heart-500/5 dark:shadow-punch-500/5 animate-book-open-cape scale-125` : `${className}`}`
          : `          
          ${hPosition === 'right' ? '-right-[50vw] -rotate-180' : '-left-[50vw] rotate-180'} 
          ${vPosition === 'top' ? '-top-[50vh]' : '-bottom-[50vh]'}
          `
      }`}
    >
      {!hideCape ? (
        <button
          type='button'
          className={`flex flex-col h-full p-4 border rounded-md bg-gradient-to-b from-shark-50 to-shark-100 border-black/25 dark:border-white/25 dark:from-shark-900 dark:to-shark-950 ${isAnimating ? 'cursor-default' : 'cursor-pointer'}`}
          onClick={() => {
            if (isAnimating || selectedBook) return;
            setIsAnimating(true);
            selectBook(label);
            blockNavbar();
            setTimeout(() => {
              setIsAnimating(false);
            }, 2000);
          }}
        >
          <div className='rounded-lg p-2 border text-xl border-black/90 text-shark-950 dark:border-white/90 dark:text-shark-50'>
            {label}
          </div>
          <div className='flex-1 mt-8 text-shark-800 dark:text-shark-200'>
            {description}
          </div>
          {stripesColors && (
            <div className='absolute bottom-4 -right-24 rotate-315'>
              <div className='flex flex-col items-end gap-1'>
                {stripesColors.map((color, index) => (
                  <div
                    // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable List>
                    key={index}
                    className='w-64 h-3'
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}
          <div className='text-shark-700 dark:text-shark-300'>
            {instituiton}
          </div>
        </button>
      ) : (
        <section className='flex flex-col h-full text-xs animate-book-showing-content bg-shark-50 dark:bg-shark-950 lg:flex-row'>
          <BookPage
            position='left'
            stripesColors={stripesColors}
            instituition={instituiton}
          >
            <h2 className='text-xl text-shark-950 '>Sobre o Curso</h2>
            <p className='text-xs text-shark-800 pr-12'>{about.aboutCourse}</p>
            {about.usedLanguages && (
              <>
                <h3 className='mt-4 text-lg text-shark-900'>
                  Linguagens utilizadas:
                </h3>
                <ul className='px-2 list-disc list-inside text-shark-800'>
                  {about.usedLanguages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </>
            )}
            {about.learned && (
              <>
                <h3 className='mt-4 text-lg text-shark-900'>
                  Conteúdo aprendido:
                </h3>
                <ul className='px-2 list-disc list-inside text-shark-800'>
                  {about.learned.map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                </ul>
              </>
            )}
          </BookPage>
          <BookPage position='right'>
            <h2 className='text-xl text-shark-950'>WIP</h2>
          </BookPage>
        </section>
      )}
    </Inert>
  );
}
