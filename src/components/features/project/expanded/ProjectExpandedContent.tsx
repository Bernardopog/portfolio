'use client';

import type { IProject } from '@/types/interfaces/IProject';

export default function ProjectExpandedContent({
  project,
}: {
  project: IProject;
}) {
  return (
    <article className='grid grid-cols-1 grid-rows-[0.5fr_0.5fr_1fr_64px] h-full mt-2 gap-2 overflow-y-auto sm:grid-cols-2 sm:grid-rows-[1fr_1fr_64px] md:pl-10 md:grid-cols-[1fr_1fr] md:grid-rows-[1fr_1fr_64px] md:h-[calc(100%-3.25rem)]'>
      <div className='project-expanded-card sm:col-span-2 md:col-span-1'>A</div>
      <div className='project-expanded-card animate-lits-a-bit md:row-start-2 md:row-end-4'>
        B
      </div>
      <div className='project-expanded-card md:row-span-2'>C</div>
      <div className='project-expanded-card sm:col-span-2 md:col-span-1'>D</div>
    </article>
  );
}
