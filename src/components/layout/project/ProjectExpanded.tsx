import type { Dispatch, SetStateAction } from 'react';
import {
  ProjectExpandedContent,
  ProjectExpandedHeader,
} from '@/components/features/project/expanded';
import { Inert } from '@/components/shared';
import { useProjectSelectionStore } from '@/store/ProjectSelectionStore';
import type { ProjectViewTypes } from '@/types/aliases/ProjectViewTypes';

interface IProjectExpandedProps {
  currentView: ProjectViewTypes;
  setCurrentView: Dispatch<SetStateAction<ProjectViewTypes>>;
}

export default function ProjectExpanded({
  currentView,
  setCurrentView,
}: IProjectExpandedProps) {
  const selectedProject = useProjectSelectionStore((s) => s.selectedProject);

  return (
    <Inert
      isVisible={currentView !== 'none'}
      className={`relative ${
        currentView !== 'none'
          ? 'h-[calc(100dvh-8rem)] pt-4 pb-8 px-4 overflow-y-auto md:h-full'
          : 'p-0 overflow-hidden'
      }`}
    >
      {selectedProject && (
        <ProjectExpandedHeader
          setCurrentView={setCurrentView}
          projectName={selectedProject.name}
        />
      )}
      {selectedProject && <ProjectExpandedContent project={selectedProject} />}
    </Inert>
  );
}
