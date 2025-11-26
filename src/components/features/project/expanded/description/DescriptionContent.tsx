import type { ReactNode } from 'react';
import DescriptionContentController from './DescriptionContentController';

export default function DescriptionContent({
  description,
}: {
  description: ReactNode;
}) {
  return (
    <section className='project-expanded-card group flex flex-col gap-2 min-h-0 max-h-full p-2 overflow-y-auto scrollbar-base sm:row-span-2'>
      <DescriptionContentController />
      {description}
    </section>
  );
}
