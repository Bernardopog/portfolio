import Image, { type StaticImageData } from 'next/image';

interface IVisualContent {
  img: StaticImageData | undefined;
  alt: string;
}

export default function VisualContent({ img, alt }: IVisualContent) {
  return (
    <figure className='project-expanded-card min-h-64 sm:col-span-2 md:col-span-1'>
      {img && (
        <Image
          src={img}
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
