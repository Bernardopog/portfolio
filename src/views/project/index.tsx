'use client';

import { useState } from 'react';
import { ProjectExpanded, ProjectIntro } from '@/components/layout/project';
import type { ProjectViewTypes } from '@/types/aliases/ProjectViewTypes';

export default function ProjectPage() {
  const [currentView, setCurrentView] = useState<ProjectViewTypes>('none');
  return (
    <section
      className={`grid grid-cols-[1fr] h-[calc(100dvh-3rem-2rem)] duration-500 ease-in-out md:h-[calc(100dvh-2rem)] ${currentView === 'none' ? 'grid-rows-[1fr_0fr]' : 'grid-rows-[0fr_1fr]'}`}
    >
      <ProjectIntro setCurrentView={setCurrentView} currentView={currentView} />
      <ProjectExpanded
        setCurrentView={setCurrentView}
        currentView={currentView}
      />
    </section>
  );
}
