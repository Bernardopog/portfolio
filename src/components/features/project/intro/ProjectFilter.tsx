'use client';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { SubSectionTech } from '@/components/features/project';
import { Inert } from '@/components/shared';
import { Radio } from '@/components/ui';
import type { TechFieldType } from '@/types/aliases/TechFieldType';
import ProjectFilterBySource from './ProjectFilterBySource';
import ProjectFilterByTech from './ProjectFilterByTech';

export default function ProjectFilter() {
  const radioList: { id: TechFieldType; label: string }[] = [
    { id: 'frontend', label: 'Front end' },
    { id: 'backend', label: 'Back end' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'tools', label: 'Ferramentas' },
  ];

  const [subSectionOpen, setSubSectionOpen] = useState<boolean>(false);
  const [listToShow, setListToShow] = useState<number>(0);

  const toggleFilter = useRef<HTMLButtonElement>(null);

  const t = useTranslations('Projects');

  return (
    <div className='flex flex-col relative w-full'>
      <section
        className={`flex flex-col items-center w-full mt-4 p-2 gap-4 bg-gradient-to-b from-shark-50 to-shark-100 dark:from-shark-900 dark:to-shark-950 ease-in-out duration-300 md:flex-row ${
          subSectionOpen ? 'rounded-t-lg' : 'rounded-lg'
        }`}
      >
        <ProjectFilterByTech
          subSectionOpen={subSectionOpen}
          setSubSectionOpen={setSubSectionOpen}
          toggleFilter={toggleFilter}
        />
        <ProjectFilterBySource />
      </section>

      <Inert
        isVisible={subSectionOpen}
        className={`absolute top-[100%] z-50 rounded-b-lg bg-shark-100 duration-300 ease-in-out overflow-hidden dark:bg-shark-950 w-full md:w-full transition-[max-height,padding] ${
          subSectionOpen ? 'max-h-64 p-1' : 'max-h-0 p-0'
        }`}
      >
        <section className='grid grid-cols-2 gap-y-1 md:flex md:items-center md:gap-4'>
          {radioList.map((radioData, idx) => (
            <Radio
              key={radioData.id}
              id={radioData.id}
              name='tech'
              label={
                radioData.id === 'tools'
                  ? t(
                      `FilterType.${radioData.id[0].toUpperCase()}${radioData.id.slice(1)}`,
                    )
                  : radioData.label
              }
              state={listToShow === idx}
              setState={() => setListToShow(idx)}
            />
          ))}
        </section>
        <div className='overflow-clip h-12 mt-1'>
          {radioList.map((radioData) => (
            <SubSectionTech
              key={radioData.id}
              listToShow={listToShow}
              desiredField={radioData.id}
              stopSelection={() => {
                toggleFilter.current?.focus();
              }}
            />
          ))}
        </div>
      </Inert>
    </div>
  );
}
