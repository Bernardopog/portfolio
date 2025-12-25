'use client';
import { useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { Inert } from '@/components/shared';
import { techIconMap } from '@/data/content/techIconMap';
import { getTechByField } from '@/data/helpers/tech/techListHelpers';
import { useProjectFilterStore } from '@/store/ProjectFilterStore';
import type { TechFieldType } from '@/types/aliases/TechFieldType';
import type { TechNameType } from '@/types/aliases/TechNameType';

interface ISubSectionTech {
  desiredField: TechFieldType;
  listToShow: number;
  stopSelection: () => void;
}

export default function SubSectionTech({
  listToShow,
  desiredField,
  stopSelection,
}: ISubSectionTech) {
  const listToViewMap: Record<string, TechFieldType> = {
    '0': 'frontend',
    '-100': 'backend',
    '-200': 'mobile',
    '-300': 'tools',
  };

  const { filterTechList, addToTechList, removeFromTechList } =
    useProjectFilterStore(
      useShallow((s) => ({
        filterTechList: s.filterTechList,
        clearTechList: s.clearTechList,
        addToTechList: s.addToTechList,
        removeFromTechList: s.removeFromTechList,
      })),
    );

  const [viewingList, setViewingList] = useState(0);

  const handleAddToSelectedTechs = (newTech: TechNameType) => {
    if (filterTechList.some((tech) => tech === newTech)) {
      removeFromTechList(newTech);
    } else if (filterTechList.length >= 5) {
      return;
    } else {
      addToTechList(newTech);
    }
  };

  useEffect(() => {
    const whatToView = -100 * listToShow;
    setViewingList(whatToView);
  }, [listToShow]);

  return (
    <Inert
      isVisible={listToViewMap[viewingList] === desiredField}
      as={'ul'}
      style={{ transform: `translatey(${-100 * listToShow}%)` }}
      className='flex items-center size-full px-1 py-2 border rounded-lg gap-2 ease-in-out duration-300 overflow-y-hidden overflow-x-auto scrollbar-base border-black/25 dark:border-white/25'
    >
      {getTechByField(desiredField).map((tech) => (
        <li key={tech.name}>
          <button
            type='button'
            className={`flex items-center py-1 px-2 rounded-lg border gap-1 min-w-32 cursor-pointer border-black/25 dark:border-white/25 hover:border-black/50 dark:hover:border-white/50 ${
              filterTechList.some((selectedTech) => selectedTech === tech.name)
                ? 'bg-black/10 dark:bg-white/10'
                : ''
            }`}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                stopSelection();
              }
            }}
            onClick={() => handleAddToSelectedTechs(tech.name)}
          >
            <span className='text-shark-900 dark:text-shark-100'>
              {techIconMap[tech.name]}
            </span>
            <span className='capitalize truncate text-shark-900 dark:text-shark-100'>
              {tech.name}
            </span>
          </button>
        </li>
      ))}
    </Inert>
  );
}
