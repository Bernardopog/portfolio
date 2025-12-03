'use client';

import { ProjectExpanded, ProjectIntro } from '@/components/layout/project';
import { useAppViewStore } from '@/store/AppViewStore';

export default function ProjectPage() {
  const projectSubview = useAppViewStore((s) => s.projectSubview);

  return (
    <section
      className={`grid grid-cols-[1fr] h-[calc(100dvh-3rem-2rem)] duration-500 ease-in-out md:h-[calc(100dvh-2rem)] ${projectSubview === 'none' ? 'grid-rows-[1fr_0fr]' : 'grid-rows-[0fr_1fr]'}`}
    >
      <ProjectIntro currentView={projectSubview} />
      <ProjectExpanded currentView={projectSubview} />
    </section>
  );
}
