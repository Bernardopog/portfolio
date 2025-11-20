'use client';
import { useMemo } from 'react';
import ProjectCard from '@/components/shared/project/ProjectCard';
import { projectList } from '@/data/content/project/projectList';
import { useProjectFilterStore } from '@/store/ProjectFilterStore';

export default function ProjectList() {
  const filterTechList = useProjectFilterStore((s) => s.filterTechList);

  const filteredList = useMemo(() => {
    const filteredProjectList = projectList.filter((proj) => {
      return filterTechList.every((tech) => proj.techs.includes(tech));
    });
    return filteredProjectList;
  }, [filterTechList]);

  return (
    <main className='flex-1 grid grid-cols-1 max-h-[calc(100dvh-8rem-3rem)] gap-2 my-2 pb-24 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-shark-950 dark:scrollbar-thumb-shark-50 sm:grid-cols-2 md:pb-12 lg:grid-cols-3 xl:grid-cols-4'>
      {filteredList.length > 0 ? (
        filteredList.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))
      ) : (
        <p>Não há nenhum projeto que use todas essas techs selecionadas</p>
      )}
    </main>
  );
}
