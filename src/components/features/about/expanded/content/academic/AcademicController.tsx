'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  MdCheckCircle,
  MdClose,
  MdMenu,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md';
import { Inert } from '@/components/shared';
import { Button } from '@/components/ui';

interface AcademicControllerProps {
  dates: number[];
  selectedDates: number[];
  isMobile: boolean;
  onFilterChange: (value: number[]) => void;
}

export default function AcademicController({
  dates,
  selectedDates,
  isMobile,
  onFilterChange,
}: AcademicControllerProps) {
  const [isControllerOpen, setIsControllerOpen] = useState(true);

  const t = useTranslations('Words');

  return (
    <div className='flex items-center lg:absolute lg:z-20 lg:top-1/2 lg:-translate-y-1/2 lg:right-1'>
      {!isMobile && (
        <Button
          action={() => setIsControllerOpen(!isControllerOpen)}
          ariaLabel={isControllerOpen ? t('Close') : t('Open')}
          className='btn-default-color absolute -top-4 right-0 z-10 border p-0.5 rounded-full lg:duration-300 lg:ease-in-out'
          icon={
            isControllerOpen ? (
              <MdClose className='text-2xl' />
            ) : (
              <MdMenu className='text-2xl' />
            )
          }
        />
      )}
      <Inert
        isVisible={isControllerOpen || isMobile}
        as={'section'}
        className={`rounded-lg backdrop-blur-xs shadow-lg border-black/15 text-shark-900 shadow-black/10 dark:border-white/15 dark:text-shark-100 dark:shadow-white/5 lg:duration-300 lg:ease-in-out ${isControllerOpen ? 'w-full lg:max-w-22 p-2 pt-0 border' : 'max-w-0 overflow-clip p-0'}`}
      >
        <h2 className='text-center my-2'>Filtro</h2>
        <ul className='flex gap-1 overflow-x-auto scrollbar-base lg:flex-col'>
          {dates.map((date) => {
            const isSlelected = selectedDates.includes(date);

            return (
              <li key={date}>
                <button
                  type='button'
                  aria-pressed={isSlelected}
                  onClick={() => {
                    if (selectedDates.includes(date)) {
                      onFilterChange(selectedDates.filter((d) => d !== date));
                      return;
                    }
                    onFilterChange([...selectedDates, date]);
                  }}
                  className={`flex items-center gap-2 border rounded-lg p-1 border-black/25 text-shark-900 cursor-pointer dark:border-white/25 dark:text-shark-100 hover:opacity-75 lg:duration-300 lg:ease-in-out ${isSlelected ? 'opacity-100' : 'opacity-50'}`}
                >
                  <span>
                    {isSlelected ? (
                      <MdCheckCircle />
                    ) : (
                      <MdOutlineRadioButtonUnchecked />
                    )}
                  </span>
                  <span>{date}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </Inert>
    </div>
  );
}
