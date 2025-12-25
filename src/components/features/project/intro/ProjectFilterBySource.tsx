'use client';
import { useTranslations } from 'next-intl';
import { FaUser } from 'react-icons/fa6';
import { SiFrontendmentor } from 'react-icons/si';
import { useShallow } from 'zustand/shallow';
import { useProjectFilterStore } from '@/store/ProjectFilterStore';
import type { SourceType } from '@/types/interfaces/IProject';

export default function ProjectFilterBySource() {
  const t = useTranslations('Projects');

  const { filterSource, setFilterSource } = useProjectFilterStore(
    useShallow((s) => ({
      filterSource: s.filterSource,
      setFilterSource: s.setFilterSource,
    })),
  );

  const options: SourceType[] = ['personal', 'frontendmentor'];

  return (
    <div className='flex flex-col items-center w-full gap-2 md:w-1/3'>
      <p className='text-center text-shark-900 dark:text-shark-100'>
        {t('Source')}
      </p>
      <ul className='flex items-center w-full h-12 border rounded-lg gap-1 p-1 border-black/25 dark:border-white/25'>
        {options.map((option) => (
          <li key={option} className='flex-1 h-full max-w-40'>
            <button
              type='button'
              className={`flex items-center size-full p-0.5 gap-1 border rounded-lg text-center text-xs capitalize border-black/15 text-shark-800 dark:border-white/15 dark:text-shark-200 sm:text-sm cursor-pointer ${filterSource === option ? 'bg-black/10 dark:bg-white/10' : ''}`}
              onClick={() => setFilterSource(option)}
            >
              {option === 'personal' && <FaUser />}
              {option === 'frontendmentor' && <SiFrontendmentor />}
              {t(`${option === 'personal' ? 'Personal' : 'Frontendmentor'}`)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
