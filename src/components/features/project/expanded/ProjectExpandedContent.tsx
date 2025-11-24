'use client';

import type { IProject } from '@/types/interfaces/IProject';
import { ControllerContent } from './controller';
import { IntroContent } from './intro';
import { VisualContent } from './visual';

export default function ProjectExpandedContent({
  project,
}: {
  project: IProject;
}) {
  return (
    <article className='grid grid-cols-1 grid-rows-[0.5fr_0.5fr_1fr_64px] h-full mt-2 gap-2 overflow-y-auto sm:grid-cols-2 sm:grid-rows-[1fr_1fr_64px] md:pl-10 md:grid-cols-[1fr_1fr] md:grid-rows-[1fr_1fr_64px] md:h-[calc(100%-3.25rem)]'>
      <VisualContent media={project.media} alt={project.name} />
      {project && <IntroContent project={project} />}
      <div className='project-expanded-card sm:row-span-2'>C</div>
      <ControllerContent />
    </article>
  );
}
