'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { HomeProjectCard } from '@/components/features/home';
import { projectList } from '@/data/content/project/projectList';
import type { IProject } from '@/types/interfaces/IProject';

export default function BetterProjects() {
  const [visibleNumber, setVisibleNumber] = useState(0);

  const t = useTranslations('Home');

  const personalProjects = projectList
    .filter((project): project is IProject & { point: number } => {
      return 'point' in project;
    })
    // biome-ignore lint/style/noNonNullAssertion: <At this point every project will have a point>
    .sort((a, b) => (a.point! > b.point! ? -1 : 1));

  const threeBestProjects = personalProjects.slice(0, 3);

  const handleCarouselChange = (dir: 'front' | 'back') => {
    if (dir === 'front') {
      setVisibleNumber(visibleNumber === 2 ? 0 : visibleNumber + 1);
    } else {
      setVisibleNumber(visibleNumber === 0 ? 2 : visibleNumber - 1);
    }
  };

  return (
    <div className='flex-1 hidden w-full max-w-[1540px] md:grid md:content-center pb-8'>
      <h2 className='mt-4 font-medium text-center text-2xl text-shark-900 dark:text-shark-100'>
        {t('BetterProjects')}
      </h2>
      <button
        type='button'
        onClick={() => handleCarouselChange('back')}
        className='flex items-center justify-center absolute z-50 cursor-pointer left-2 top-1/2 -transalte-1/2 size-8 rounded-lg text-4xl bg-shark-800 text-shark-50 dark:bg-shark-200 dark:text-shark-950'
        aria-label={t('PreviousProject')}
        title={t('PreviousProject')}
      >
        <MdArrowDropDown className='rotate-90' />
      </button>
      <button
        type='button'
        onClick={() => handleCarouselChange('front')}
        className='flex items-center justify-center absolute z-50 cursor-pointer right-2 top-1/2 -transalte-1/2 size-8 rounded-lg text-4xl bg-shark-800 text-shark-50 dark:bg-shark-200 dark:text-shark-950'
        aria-label={t('NextProject')}
        title={t('NextProject')}
      >
        <MdArrowDropDown className='rotate-270' />
      </button>
      <ol className='flex items-start justify-center relative w-full h-fit mt-4 gap-4'>
        {threeBestProjects.map((project, idx) => (
          <HomeProjectCard
            key={project.name}
            data={project}
            visibleNumber={visibleNumber}
            index={idx}
          />
        ))}
      </ol>
    </div>
  );
}
