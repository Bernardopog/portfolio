'use client';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useShallow } from 'zustand/shallow';
import ProjectCard from '@/components/shared/project/ProjectCard';
import { projectList } from '@/data/content/project/projectList';
import { useProjectFilterStore } from '@/store/ProjectFilterStore';

export default function ProjectList() {
  const { filterTechList, filterSource } = useProjectFilterStore(
    useShallow((s) => ({
      filterTechList: s.filterTechList,
      filterSource: s.filterSource,
    })),
  );

  const t = useTranslations('Projects');

  const filteredList = useMemo(() => {
    const applyFilters = () => {
      const filteredProjectListByTech = projectList.filter((proj) => {
        return filterTechList.every((tech) => proj.techs.includes(tech));
      });
      if (!filterSource) return filteredProjectListByTech;
      const filteredProjectListBySource = filteredProjectListByTech.filter(
        (proj) => {
          return proj.source === filterSource;
        },
      );
      const res = filteredProjectListBySource;
      return res;
    };

    const filteredProjectList = applyFilters();
    return filteredProjectList;
  }, [filterTechList, filterSource]);

  return (
    <main className='flex-1 grid grid-cols-1 max-h-[calc(100dvh-8rem-3rem)] gap-2 my-2 pb-24 overflow-x-hidden overflow-y-auto scrollbar-base sm:grid-cols-2 md:pb-12 lg:grid-cols-3 xl:grid-cols-4'>
      {filteredList.length > 0 ? (
        filteredList.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))
      ) : (
        <p className='col-span-4 text-2xl text-center text-shark-950/75 dark:text-shark-50/75'>
          {t('NoProjects')}
        </p>
      )}
    </main>
  );
}
