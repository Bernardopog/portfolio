import Image from 'next/image';
import type { IMedia } from '@/types/interfaces/IProject';

interface IVisualContent {
  media: IMedia;
  alt: string;
}

export default function VisualContent({ media, alt }: IVisualContent) {
  return (
    <figure className='project-expanded-card min-h-64 sm:col-span-1'>
      {media && (
        <Image
          src={media.thumb}
          alt={alt}
          loading='lazy'
          placeholder='blur'
          quality={100}
          fill
          className='rounded-lg'
        />
      )}
    </figure>
  );
}
