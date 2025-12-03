'use client';

import { IoArrowBack } from 'react-icons/io5';
import { Button } from '@/components/ui';
import { useAppViewStore } from '@/store/AppViewStore';
import { useProjectSelectionStore } from '@/store/ProjectSelectionStore';

export default function ProjectExpandedHeader({
  projectName,
}: {
  projectName: string | undefined;
}) {
  const selectProject = useProjectSelectionStore((s) => s.selectProject);
  const setProjectSubview = useAppViewStore((s) => s.setProjectSubview);

  const handleCloseProjectExpanded = () => {
    selectProject(null);
    setProjectSubview('none');
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
