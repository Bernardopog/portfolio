'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { Button } from '@/components/ui';
import {
  academicCourses,
  type IBook,
} from '@/data/content/about/academicCourses';
import { useCourseStore } from '@/store/BookStore';
import { useNavbarStore } from '@/store/NavbarStore';

export default function CourseExpanded() {
  const [bookData, setBookData] = useState<IBook | null>(null);
  const { selectBook, selectedBook } = useCourseStore(
    useShallow((s) => ({
      selectBook: s.selectCourse,
      selectedBook: s.selectedCourse,
    })),
  );
  const unblockNavbar = useNavbarStore((s) => s.unblockNavbar);
  const t = useTranslations('Words');

  useEffect(() => {
    const getData = () =>
      academicCourses.find((book) => book.label === selectedBook);

    setBookData(getData() ?? null);
  }, [selectedBook]);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <Not needed>
    <article
      className='relative size-5/6 min-w-2xs p-1 rounded-lg bg-shark-100 text-shark-950 dark:bg-shark-900 dark:text-shark-50 cursor-auto'
      onClick={(ev) => ev.stopPropagation()}
    >
      <Button
        action={() => {
          selectBook(null);
          unblockNavbar();
        }}
        className='btn-default-color absolute top-1 right-1 p-1 rounded-full border text-xl'
        ariaLabel={t('Close')}
        icon={<MdClose />}
      />
      <section className='h-full scrollbar-base overflow-y-auto'>
        <h2 className='text-xl font-bold'>Sobre o curso</h2>
        <p className='mt-2 text-shark-900 dark:text-shark-100'>
          {bookData?.about.aboutCourse}
        </p>
        <div>
          <h3 className='text-lg font-bold'>Aprendizados:</h3>
          <ul className='list-disc list-inside'>
            {bookData?.about.learned?.map((learned, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable List>
              <li key={index} className='text-shark-800 dark:text-shark-200'>
                {learned}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-bold'>Linguagens Utilizadas:</h3>
          <ul className='list-disc list-inside'>
            {bookData?.about.usedLanguages?.map((languages, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable List>
              <li key={index} className='text-shark-800 dark:text-shark-200'>
                {languages}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
