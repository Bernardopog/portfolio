'use client';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { useShallow } from 'zustand/shallow';
import { Button } from '@/components/ui';
import { projectList } from '@/data/content/project/projectList';
import { useProjectSelectionStore } from '@/store/ProjectSelectionStore';

export default function ControllerContent({
  setMediaIndex,
}: {
  setMediaIndex: Dispatch<SetStateAction<number>>;
}) {
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
    setMediaIndex(0);
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
      />
    </footer>
  );
}
