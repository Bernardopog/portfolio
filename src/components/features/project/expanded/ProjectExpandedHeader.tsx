'use client';

import { IoArrowBack } from 'react-icons/io5';
import { Button } from '@/components/ui';
import { useProjectSelectionStore } from '@/store/ProjectSelectionStore';
import type { ProjectViewTypes } from '@/types/aliases/ProjectViewTypes';

export default function ProjectExpandedHeader({
  setCurrentView,
  projectName,
}: {
  setCurrentView: React.Dispatch<React.SetStateAction<ProjectViewTypes>>;
  projectName: string | undefined;
}) {
  const selectProject = useProjectSelectionStore((s) => s.selectProject);

  const handleCloseProjectExpanded = () => {
    selectProject(null);
    setCurrentView('none');
  };

  return (
    <header className='flex justify-between items-center sticky top-0 z-20 w-full'>
      <h2 className='font-bold text-lg text-shark-950 dark:text-shark-50 sm:text-xl md:text-2xl'>
        Projeto | {projectName}
      </h2>
      <Button
        label='Voltar'
        action={() => handleCloseProjectExpanded()}
        icon={<IoArrowBack className='text-xl' />}
        ariaLabel='Voltar'
        className='btn-default btn-default-color self-end'
      />
    </header>
  );
}
