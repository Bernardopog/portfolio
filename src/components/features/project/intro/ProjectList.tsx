'use client';
import { type Dispatch, type SetStateAction, useMemo } from 'react';
import ProjectCard from '@/components/shared/project/ProjectCard';
import { projectList } from '@/data/content/project/projectList';
import { useProjectFilterStore } from '@/store/ProjectFilterStore';
import type { ProjectViewTypes } from '@/types/aliases/ProjectViewTypes';

interface IProjectListProps {
  setCurrentView: Dispatch<SetStateAction<ProjectViewTypes>>;
}

export default function ProjectList({ setCurrentView }: IProjectListProps) {
  const filterTechList = useProjectFilterStore((s) => s.filterTechList);

  const filteredList = useMemo(() => {
    const filteredProjectList = projectList.filter((proj) => {
      return filterTechList.every((tech) => proj.techs.includes(tech));
    });
    return filteredProjectList;
  }, [filterTechList]);

  return (
    <main className='flex-1 grid grid-cols-1 max-h-[calc(100dvh-8rem-3rem)] gap-2 my-2 pb-24 overflow-x-hidden overflow-y-auto scrollbar-base sm:grid-cols-2 md:pb-12 lg:grid-cols-3 xl:grid-cols-4'>
      {filteredList.length > 0 ? (
        filteredList.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            setCurrentView={setCurrentView}
          />
        ))
      ) : (
        <p>Não há nenhum projeto que use todas essas techs selecionadas</p>
      )}
    </main>
  );
}
