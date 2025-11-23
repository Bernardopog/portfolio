import type { Dispatch, SetStateAction } from 'react';
import {
  ProjectFilter,
  ProjectList,
} from '@/components/features/project/intro';
import { Inert } from '@/components/shared';
import type { ProjectViewTypes } from '@/types/aliases/ProjectViewTypes';

interface IProjectIntroProps {
  currentView: ProjectViewTypes;
  setCurrentView: Dispatch<SetStateAction<ProjectViewTypes>>;
}

export default function ProjectIntro({
  currentView,
  setCurrentView,
}: IProjectIntroProps) {
  return (
    <Inert
      isVisible={currentView === 'none'}
      className={`h-full duration-300 ease-in-out ${currentView === 'none' ? 'px-2 md:pl-14' : 'p-0 overflow-hidden'}`}
    >
      <ProjectFilter />
      <ProjectList setCurrentView={setCurrentView} />
    </Inert>
  );
}
