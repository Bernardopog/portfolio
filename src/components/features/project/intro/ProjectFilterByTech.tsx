import { useTranslations } from 'next-intl';
import type { Dispatch, RefObject, SetStateAction } from 'react';
import { useShallow } from 'zustand/shallow';
import { techIconMap } from '@/data/content/techIconMap';
import { useProjectFilterStore } from '@/store/ProjectFilterStore';

interface IProjectFilterByTechProps {
  subSectionOpen: boolean;
  setSubSectionOpen: Dispatch<SetStateAction<boolean>>;
  toggleFilter: RefObject<HTMLButtonElement | null>;
}

export default function ProjectFilterByTech({
  subSectionOpen,
  setSubSectionOpen,
  toggleFilter,
}: IProjectFilterByTechProps) {
  const t = useTranslations('Projects');

  const { clearTechList, filterTechList } = useProjectFilterStore(
    useShallow((s) => ({
      clearTechList: s.clearTechList,
      filterTechList: s.filterTechList,
    })),
  );

  const handleSubSectionToOpen = () => {
    setSubSectionOpen(!subSectionOpen);
  };

  const handleClearSelectedTechs = () => {
    clearTechList();
  };

  return (
    <div className='relative flex flex-col items-center w-full gap-2 order-1 md:w-1/3 md:order-0'>
      <p className='text-center text-shark-900 dark:text-shark-100'>
        {t('Technologies')}
      </p>
      <button
        type='button'
        className='absolute right-2 top-2 text-xs cursor-pointer duration-300 ease-in-out text-shark-800/50 dark:text-shark-200/50 hover:text-shark-800 dark:hover:text-shark-200 md:text-sm'
        onClick={() => handleClearSelectedTechs()}
      >
        {t('Clear')}
      </button>
      <button
        type='button'
        className='w-full'
        onClick={() => handleSubSectionToOpen()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSubSectionToOpen();
          }
        }}
        aria-label={`${subSectionOpen ? t('CloseFilter') : t('OpenFilter')}`}
        ref={toggleFilter}
      >
        <ul className='grid grid-cols-5 w-full h-12 p-1 border rounded-lg gap-1 ease-in-out duration-300 cursor-pointer border-black/25 hover:border-black/50 dark:border-white/25 dark:hover:border-white/50'>
          {filterTechList.length > 0 ? (
            filterTechList.map((tech, idx) => (
              <li
                // biome-ignore lint/suspicious/noArrayIndexKey: <Static List>
                key={idx}
                className='flex items-center px-1 py-2 gap-1 rounded-lg border text-shark-800 border-black/15 animate-expand-horizontal overflow-hidden dark:text-shark-200 dark:border-white/15'
              >
                <span>{techIconMap[tech]}</span>
                <span className='text-xs capitalize truncate sm:text-sm'>
                  {tech}
                </span>
              </li>
            ))
          ) : (
            <li className='text-center col-span-5 text-shark-800/75 dark:text-shark-200/75'>
              {t('NoTechSelected')}
            </li>
          )}
        </ul>
      </button>
    </div>
  );
}
