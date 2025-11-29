'use client';
import { type ReactNode, useEffect, useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import ProjectCard from '@/components/shared/project/ProjectCard';
import { Button } from '@/components/ui';
import { techIconMap } from '@/data/content/techIconMap';
import { getRandomProjectByTech } from '@/data/helpers/project/projectListHelpers';
import { aboutExplainMap } from '@/data/maps/about/aboutExplainMap';
import { useAppViewStore } from '@/store/AppViewStore';
import { useProjectFilterStore } from '@/store/ProjectFilterStore';
import { useThemeStore } from '@/store/ThemeStore';
import type { TechNameType } from '@/types/aliases/TechNameType';
import type { IExplain } from '@/types/interfaces/IExplain';
import type { IProject } from '@/types/interfaces/IProject';
import { getPercentage } from '@/utils/getPercentage';

interface IExplainWithIcon extends IExplain {
  icon: ReactNode;
}

export default function ExplainCard({ tech }: { tech: TechNameType }) {
  const [techExplain, setTechExplain] = useState<IExplainWithIcon | null>(null);
  const [randomProject, setRandomProject] = useState<IProject | null>(null);

  const [knowledgeExplain, setKnowledgeExplain] = useState<string>('');

  const isDarkMode = useThemeStore((s) => s.isDarkMode);
  const { addToTechList, clearTechList, filterTechList } =
    useProjectFilterStore(
      useShallow((s) => ({
        filterTechList: s.filterTechList,
        addToTechList: s.addToTechList,
        removeFromTechList: s.removeFromTechList,
        clearTechList: s.clearTechList,
      })),
    );
  const setCurrent = useAppViewStore((s) => s.setCurrentView);

  useEffect(() => {
    if (tech) {
      const icon = techIconMap[tech as keyof typeof techIconMap];
      const data = {
        ...aboutExplainMap[tech as keyof typeof aboutExplainMap],
        icon,
      };

      switch (data.level) {
        case 1:
          setKnowledgeExplain(
            'Tive contato e estudei, mas ainda não apliquei em projeto real',
          );
          break;
        case 2:
          setKnowledgeExplain(
            'Usei em projeto pontual, com apoio ou sem domínio completo',
          );
          break;
        case 3:
          setKnowledgeExplain(
            'Apliquei em mais de um projeto e entendo bem o fluxo',
          );
          break;
        case 4:
          setKnowledgeExplain(
            'Uso com frequência e resolvo problemas com autonomia',
          );
          break;
        case 5:
          setKnowledgeExplain(
            'Uso em projetos próprios e tenho domínio suficiente para ensinar',
          );
          break;
        default:
          break;
      }
      setTechExplain(data);
      setRandomProject(getRandomProjectByTech(tech));
    } else {
      setTechExplain(null);
    }
  }, [tech]);

  if (!techExplain) return null;

  return (
    <>
      <article className='flex flex-col items-center flex-1 relative h-full max-h-80 m-1 p-4 pb-8 rounded-lg gap-8 overflow-y-auto text-shark-900 scrollbar-base dark:text-shark-100 md:max-h-full'>
        <header className='flex flex-col justify-center items-center'>
          <span className='text-8xl'>{techExplain?.icon}</span>
          <h3 className='font-bold text-2xl'>{techExplain?.title}</h3>
          <span className='font-medium capitalize text-shark-800 dark:text-shark-200'>
            {techExplain?.field}
          </span>
          <ul className='flex mt-2 gap-2'>
            {techExplain?.categories.map((techCat) => (
              <li
                key={techCat}
                className='text-sm capitalize border rounded-lg p-1 border-black/25 dark:border-white/25'
              >
                {techCat}
              </li>
            ))}
          </ul>
        </header>

        <div
          style={{
            backgroundImage: `conic-gradient(${
              isDarkMode ? '#D1D1D1' : '#333333'
            } ${getPercentage(techExplain.level, 5)}%,${
              isDarkMode ? '#333333' : '#D1D1D1'
            } 0%)`,
          }}
          className='flex items-center justify-center absolute top-2 right-2 w-16 min-h-16 rounded-full opacity-75 bg-shark-200 dark:bg-shark-950 md:size-20'
        >
          <button
            type='button'
            className='absolute inset-0 z-10 bg-red-600 rounded-full opacity-0 md:hidden'
            onClick={() => alert(knowledgeExplain)}
          ></button>

          <div
            className='flex items-center justify-center size-12 rounded-full cursor-help bg-white dark:bg-black md:size-16'
            title={knowledgeExplain}
          >
            <span className='font-bold text-shark-800 dark:text-shark-200 md:text-xl'>
              {getPercentage(techExplain.level, 5)}%
            </span>
          </div>
        </div>

        <div className='max-h-32'>
          <span className='text-sm'>{techExplain?.description}</span>
        </div>
        {randomProject ? (
          <ProjectCard
            key={randomProject.name}
            project={randomProject}
            outOfProjectPage
          />
        ) : (
          <div className='flex items-center justify-center w-full max-w-96 min-h-56 rounded-lg italic text-xl text-center font-medium bg-shark-100 text-shark-800/75 dark:bg-shark-800 dark:text-shark-100/75'>
            Ainda não há projetos com essa tecnologia
          </div>
        )}
      </article>
      <footer className='flex justify-center absolute bottom-0 w-full p-1 border rounded-lg text-center text-shark-800 border-black/25 dark:text-shark-200 dark:border-white/25'>
        <Button
          action={() => {
            if (filterTechList.length >= 1) clearTechList();
            addToTechList(tech);
            setCurrent('project');
          }}
          label='Ver ptojetos com essa Tecnologia'
          icon={<MdArrowBack className='rotate-180 order-1' />}
          title='Ver ptojetos com essa Tecnologia'
        />
      </footer>
    </>
  );
}
