'use client';
import Image from 'next/image';
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FaPlus, FaUser } from 'react-icons/fa6';
import { SiFrontendmentor } from 'react-icons/si';
import { techIconMap } from '@/data/content/techIconMap';
import { useProjectSelectionStore } from '@/store/ProjectSelectionStore';
import type { ProjectViewTypes } from '@/types/aliases/ProjectViewTypes';
import type { IProject } from '@/types/interfaces/IProject';
import { Inert } from '../../shared';

interface IProjectCardProps {
  project: IProject;
  outOfProjectPage?: boolean;
  setCurrentView: Dispatch<SetStateAction<ProjectViewTypes>>;
}

export default function ProjectCard({
  project,
  outOfProjectPage,
  setCurrentView,
}: IProjectCardProps) {
  const selectProject = useProjectSelectionStore((s) => s.selectProject);

  const [isOpen, setIsOpen] = useState(false);
  const [almostHide, setAlmostHide] = useState(false);
  const [shouldBeVisible, setShouldBeVisible] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outOfProjectPage) return;
    const node = cardRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!node) return;
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          if (ratio >= 0.4) {
            setAlmostHide(false);
            setShouldBeVisible(true);
          } else if (ratio >= 0.1) {
            setAlmostHide(true);
          } else {
            setShouldBeVisible(false);
          }
        });
      },
      {
        threshold: [0.1, 0.4],
      },
    );

    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [outOfProjectPage]);

  return (
    <article
      ref={cardRef}
      key={project.name}
      className='relative min-w-56 h-56 rounded-lg shadow-base shadow-black/15 opacity-75 duration-300 ease-in-out hover:opacity-100 dark:shadow-white/15 hover:shadow-black/25 dark:hover:shadow-white/30 md:min-w-xs'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type='button'
        className={`flex items-center justify-center absolute inset-0 rounded-lg cursor-pointer ${isOpen ? '-z-10' : 'z-10'}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        aria-label={`${isOpen ? `Fechar detalhes do projeto ${project.name}` : `Abrir detalhes do projeto ${project.name}`}`}
        title={`${isOpen ? `Fechar detalhes do projeto ${project.name}` : `Abrir detalhes do projeto ${project.name}`}`}
        aria-pressed={isOpen}
      ></button>
      <Inert
        isVisible={shouldBeVisible && !almostHide && isOpen}
        className={`relative size-full rounded-lg border-4 bg-shark-100 text-shark-950 border-shark-200 dark:bg-shark-900 dark:text-shark-50 dark:border-shark-900 animate-move-in ${
          almostHide ? 'animate-move-out' : ''
        }`}
      >
        <header
          className={`flex justify-between absolute top-0 z-20 h-fit w-full overflow-clip ease-in-out duration-300 ${
            isOpen ? 'max-h-8 opacity-100' : 'max-h-0 opacity-25'
          }`}
        >
          <div
            className='p-2 rounded-br-lg bg-shark-200 dark:bg-shark-900'
            title={`Fonte: ${project.source}`}
          >
            {project.source === 'personal' && <FaUser />}
            {project.source === 'frontendmentor' && <SiFrontendmentor />}
          </div>
          <span className='p-2 pt-0 rounded-bl-lg bg-shark-200 dark:bg-shark-900'>
            {project.name}
          </span>
        </header>
        {!outOfProjectPage && (
          <button
            type='button'
            className={`group flex items-center justify-center absolute inset-0 z-10 p-2 rounded-lg cursor-pointer duration-300 ease-in-out bg-gradient-to-b backdrop-blur-xs from-shark-50/25 to-shark-100/25 dark:from-shark-900/25 dark:to-shark-950/25 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => {
              if (isOpen) {
                setCurrentView('details');
                selectProject(project);
              } else setCurrentView('none');
            }}
            aria-label='Abrir projeto'
            title='Clique para ver mais'
          >
            <FaPlus
              className={`text-4xl duration-700 ease-out opacity-0 group-hover:rotate-180 group-hover:opacity-100 group-focus:rotate-180 group-focus:opacity-100 ${project.backgroundColor === 'dark' ? 'text-shark-50' : 'text-shark-950'}`}
            />
          </button>
        )}
        {(project.image && shouldBeVisible) ||
        (project.image && outOfProjectPage) ? (
          <Image
            loading='lazy'
            placeholder='blur'
            className='size-full rounded-lg select-none duration-300 ease-in-out'
            alt={project.name}
            src={project.image}
            width={320}
            height={224}
            quality={75}
          />
        ) : null}
        <footer
          className={`absolute bottom-0 z-20 h-fit w-full overflow-clip ease-in-out duration-300 ${
            isOpen ? 'max-h-8 opacity-100' : 'max-h-0 opacity-25'
          }`}
        >
          <ul className='flex justify-around items-center w-full p-1 gap-2 bg-shark-200 dark:bg-shark-900'>
            {project.techs.map((tech) => (
              <li
                key={tech}
                className='flex items-center justify-center flex-1 rounded-lg p-1 border border-black/25 dark:border-white/25'
              >
                {techIconMap[tech]}
              </li>
            ))}
          </ul>
        </footer>
      </Inert>
    </article>
  );
}
