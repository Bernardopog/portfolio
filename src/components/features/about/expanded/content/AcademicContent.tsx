'use client';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { Inert } from '@/components/shared';
import { academicCourses } from '@/data/content/about/academicCourses';
import { useCourseStore } from '@/store/BookStore';
import { useNavbarStore } from '@/store/NavbarStore';
import { AcademicController, Book, Course, CourseExpanded } from './academic';

export default function AcademicSubpage() {
  const [dates, setDates] = useState<number[]>([]);
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const { selectedCourse: selectedBook, selectCourse: selectBook } =
    useCourseStore(
      useShallow((s) => ({
        selectedCourse: s.selectedCourse,
        selectCourse: s.selectCourse,
      })),
    );
  const unblockNavbar = useNavbarStore((s) => s.unblockNavbar);

  useEffect(() => {
    const handleDates = () => {
      const start = 2023;
      const currentYear = new Date().getFullYear();

      const dateList: number[] = [start];

      for (let i = start; i < currentYear; i++) {
        dateList.push(new Date(i + 1, 0, 1).getFullYear());
      }

      setDates(dateList);
      setSelectedDates([currentYear]);
    };
    handleDates();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      selectBook(null);
      unblockNavbar();
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [selectBook, unblockNavbar]);

  const onFilterChange = (value: number[]) => {
    setSelectedDates(value);
    selectBook(null);
    unblockNavbar();
  };

  return (
    <>
      <Inert isVisible={selectedBook === null}>
        <AcademicController
          dates={dates}
          selectedDates={selectedDates}
          onFilterChange={onFilterChange}
          isMobile={isMobile}
        />
      </Inert>
      {isMobile ? (
        <>
          <Inert
            isVisible={selectedBook !== null}
            className={`flex items-center justify-center fixed left-0 top-0 z-50 h-full backdrop-blur-xs bg-black/50 ${selectedBook ? 'w-full cursor-pointer' : 'w-0 overflow-clip'}`}
            onClick={() => {
              selectBook(null);
              unblockNavbar();
            }}
          >
            <CourseExpanded />
          </Inert>
          <Inert
            as={'ul'}
            isVisible={selectedBook === null}
            className='grid grid-cols-1 gap-2 mt-2 xs:grid-cols-2 md:grid-cols-3 lg:m-0'
          >
            {academicCourses
              .filter((course) => selectedDates.includes(course.startYear))
              .map((course) => (
                <Course key={course.label} {...course} />
              ))}
          </Inert>
        </>
      ) : (
        <>
          {selectedBook && (
            <div className='fixed z-50 inset-0 backdrop-blur-xs bg-black/50 animate-book-selected-overlay'></div>
          )}
          <section className='flex relative size-full gap-1 text-white overflow-hidden'>
            {academicCourses.map((course) => {
              return (
                <Book
                  key={course.label}
                  {...course}
                  shouldShow={selectedDates.includes(course.startYear)}
                />
              );
            })}
          </section>
        </>
      )}
    </>
  );
}
