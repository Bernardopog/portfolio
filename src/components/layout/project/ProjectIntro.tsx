import {
  ProjectFilter,
  ProjectList,
} from '@/components/features/project/intro';
import { Inert } from '@/components/shared';
import type { ProjectViewTypes } from '@/types/aliases/ProjectViewTypes';

interface IProjectIntroProps {
  currentView: ProjectViewTypes;
}

export default function ProjectIntro({ currentView }: IProjectIntroProps) {
  return (
    <Inert
      isVisible={currentView === 'none'}
      className={`h-full duration-300 ease-in-out ${currentView === 'none' ? 'px-2' : 'p-0 overflow-hidden'}`}
    >
      <ProjectFilter />
      <ProjectList />
    </Inert>
  );
}
