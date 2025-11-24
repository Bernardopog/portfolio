'use client';
import { useEffect, useState } from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { useShallow } from 'zustand/shallow';
import { Button } from '@/components/ui';
import { projectList } from '@/data/content/project/projectList';
import { useProjectSelectionStore } from '@/store/ProjectSelectionStore';

export default function ControllerContent() {
  const { selectedProject, selectProject } = useProjectSelectionStore(
    useShallow((s) => ({
      selectedProject: s.selectedProject,
      selectProject: s.selectProject,
    })),
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const target = selectedProject?.name;
    const currentIndex = projectList.findIndex(
      (project) => project.name === target,
    );
    setIndex(currentIndex);
  }, [selectedProject?.name]);

  const handleController = () => {
    return {
      back: () => {
        selectProject(projectList[index - 1]);
      },
      next: () => {
        selectProject(projectList[index + 1]);
      },
    };
  };

  return (
    <footer className='project-expanded-card flex justify-between items-center px-2 sm:col-span-2 md:col-span-1'>
      <Button
        label='Anterior'
        icon={<IoArrowBack />}
        action={() => {
          if (index === 0) return;
          else {
            setIndex(index - 1);
            handleController().back();
          }
        }}
        disabled={index === 0}
        className='btn-default border-black/25 text-shark-900 dark:border-white/25 dark:text-shark-100 hover:bg-black/10 dark:hover:bg-white/10 active:bg-black/20 active:shadow-base active:shadow-black/25 dark:active:bg-white/20 dark:active:shadow-white/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-shark-200 disabled:shadow-none dark:disabled:bg-shark-700'
      />
      <Button
        label='Próximo'
        icon={<IoArrowForward className='order-1' />}
        action={() => {
          if (index === projectList.length - 1) return;
          else {
            setIndex(index + 1);
            handleController().next();
          }
        }}
        disabled={index === projectList.length - 1}
        className='btn-default border-black/25 text-shark-900 dark:border-white/25 dark:text-shark-100 hover:bg-black/10 dark:hover:bg-white/10 active:bg-black/20 active:shadow-base active:shadow-black/25 dark:active:bg-white/20 dark:active:shadow-white/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-shark-200 disabled:shadow-none dark:disabled:bg-shark-700'
      />
    </footer>
  );
}
