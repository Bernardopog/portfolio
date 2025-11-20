'use client';
import { useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { SubSectionTech } from '@/components/features/project';
import { Inert } from '@/components/shared';
import { Radio } from '@/components/ui';
import { techIconMap } from '@/data/content/techIconMap';
import { useProjectFilterStore } from '@/store/ProjectFilterStore';
import type { TechFieldType } from '@/types/aliases/TechFieldType';
import type { TechNameType } from '@/types/aliases/TechNameType';

export default function ProjectFilter() {
  const radioList: { id: TechFieldType; label: string }[] = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'tools', label: 'Ferramentas' },
  ];

  const [subSectionOpen, setSubSectionOpen] = useState<boolean>(false);
  const [listToShow, setListToShow] = useState<number>(0);

  const { clearTechList, filterTechList, addToTechList, removeFromTechList } =
    useProjectFilterStore(
      useShallow((s) => ({
        filterTechList: s.filterTechList,
        clearTechList: s.clearTechList,
        addToTechList: s.addToTechList,
        removeFromTechList: s.removeFromTechList,
      })),
    );

  const handleSubSectionToOpen = () => {
    setSubSectionOpen(!subSectionOpen);
  };

  const handleAddToSelectedTechs = (newTech: TechNameType) => {
    if (filterTechList.some((tech) => tech === newTech)) {
      removeFromTechList(newTech);
    } else if (filterTechList.length >= 5) {
      return;
    } else {
      addToTechList(newTech);
    }
  };

  const handleClearSelectedTechs = () => {
    clearTechList();
  };

  return (
    <div className='flex flex-col relative w-full'>
      <section
        className={`flex items-center w-full mt-4 p-2 bg-gradient-to-b from-shark-50 to-shark-100 dark:from-shark-900 dark:to-shark-950 ease-in-out duration-300 ${
          subSectionOpen ? 'rounded-t-lg' : 'rounded-lg'
        }`}
      >
        <div className='relative flex flex-col items-center w-full gap-2 md:w-1/3'>
          <p className='text-center text-shark-900 dark:text-shark-100'>
            Tecnologias
          </p>
          <button
            type='button'
            className='absolute right-2 top-2 text-xs cursor-pointer duration-300 ease-in-out text-shark-800/50 dark:text-shark-200/50 hover:text-shark-800 dark:hover:text-shark-200 md:text-sm'
            onClick={() => handleClearSelectedTechs()}
          >
            Limpar
          </button>
          <ul
            className='grid grid-cols-5 w-full h-12 p-1 border rounded-lg gap-1 ease-in-out duration-300 cursor-pointer border-black/25 hover:border-black/50 dark:border-white/25 dark:hover:border-white/50'
            onClick={() => handleSubSectionToOpen()}
          >
            {filterTechList.length > 0 ? (
              filterTechList.map((tech, idx) => (
                <li
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
                Nenhuma Tecnologia selecionada
              </li>
            )}
          </ul>
        </div>
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
              label={radioData.label}
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
              handleAddToSelectedTechs={handleAddToSelectedTechs}
              filterTechList={filterTechList}
            />
          ))}
        </div>
      </Inert>
    </div>
  );
}
