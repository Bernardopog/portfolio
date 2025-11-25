'use client';

import { useState } from 'react';
import type { IProject } from '@/types/interfaces/IProject';
import { ControllerContent } from './controller';
import { DescriptionContent } from './description';
import { IntroContent } from './intro';
import { VisualContent } from './visual';

export default function ProjectExpandedContent({
  project,
}: {
  project: IProject;
}) {
  const [mediaIndex, setMediaIndex] = useState(0);

  return (
    <article className='grid grid-cols-1 grid-rows-[minmax(260px,1fr)_minmax(360px,1fr)_50vh_64px] h-full pb-8 mt-2 gap-2 overflow-y-auto scrollbar-base sm:grid-cols-2 sm:grid-rows-[1fr_1fr_64px] md:pl-10 md:pb-0 md:grid-cols-[1fr_1fr] md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)_64px] md:h-full md:max-h-[calc(100dvh-8rem)]'>
      <VisualContent
        media={project.media}
        alt={project.name}
        mediaIndex={mediaIndex}
        setMediaIndex={setMediaIndex}
      />
      {project && <IntroContent project={project} />}
      <DescriptionContent />
      <ControllerContent setMediaIndex={setMediaIndex} />
    </article>
  );
}
