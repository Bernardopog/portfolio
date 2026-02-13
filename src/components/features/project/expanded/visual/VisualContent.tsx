'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { Inert } from '@/components/shared';
import { useProjectExpandedSectionStore } from '@/store/ProjectExpandedSectionStore';
import type { IMedia } from '@/types/interfaces/IProject';
import { VisualContentCarouselController, VisualContentHeader } from '.';

interface IVisualContent {
  media: IMedia;
  alt: string;
  mediaIndex: number;
  setMediaIndex: Dispatch<SetStateAction<number>>;
}

export interface IVisualContentChildrenProps {
  isShowingOverlay: boolean;
  media: IMedia;
}

export default function VisualContent({
  media,
  alt,
  mediaIndex,
  setMediaIndex,
}: IVisualContent) {
  const [mediaToShow, setMediaToShow] = useState<'image' | 'video'>('image');
  const [isShowingOverlay, setIsShowingOverlay] = useState(false);

  const hasToResizeImage = useProjectExpandedSectionStore(
    (s) => s.hasToResizeImage,
  );

  const t = useTranslations('Projects.Expanded');

  return (
    <figure
      className={`group project-expanded-card relative min-h-64 overflow-clip sm:col-span-1 ${hasToResizeImage && 'md:col-span-3 md:row-span-2'}`}
    >
      {/** biome-ignore lint/a11y/useSemanticElements: <Needed to avoid hydratation error> */}
      <div
        role='button'
        tabIndex={0}
        className='absolute inset-0 z-10 size-full cursor-pointer'
        onClick={() => setIsShowingOverlay(!isShowingOverlay)}
        onKeyDown={(e) =>
          e.key === 'Enter' && setIsShowingOverlay(!isShowingOverlay)
        }
        onMouseEnter={() => setIsShowingOverlay(true)}
        onMouseLeave={() => setIsShowingOverlay(false)}
        aria-label={isShowingOverlay ? t('CloseOverlay') : t('OpenOverlay')}
        aria-pressed={isShowingOverlay}
      >
        <Inert isVisible={isShowingOverlay}>
          <div
            className={`absolute inset-0 size-full bg-black/80 duration-300 ease-in-out ${isShowingOverlay ? 'opacity-100' : 'opacity-0'}`}
          >
            <VisualContentHeader
              isShowingOverlay={isShowingOverlay}
              media={media}
              setMediaToShow={setMediaToShow}
            />
            {(media.images || media.videos) && (
              <VisualContentCarouselController
                isShowingOverlay={isShowingOverlay}
                media={media}
                mediaIndex={mediaIndex}
                setMediaIndex={setMediaIndex}
              />
            )}
          </div>
        </Inert>
      </div>
      {mediaToShow === 'image' && (
        <Image
          src={media.images ? media.images[mediaIndex] : media.thumb}
          alt={alt}
          loading='lazy'
          placeholder='blur'
          quality={100}
          fill
          className='rounded-lg'
        />
      )}
      {mediaToShow === 'video' && media.videos && (
        <video
          src={media.videos[mediaIndex]}
          autoPlay
          loop
          muted
          playsInline
          className='rounded-lg'
        />
      )}
    </figure>
  );
}
