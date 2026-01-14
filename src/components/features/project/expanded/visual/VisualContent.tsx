'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { type Dispatch, type SetStateAction, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Inert } from '@/components/shared';
import { Button } from '@/components/ui';
import type { IMedia } from '@/types/interfaces/IProject';

interface IVisualContent {
  media: IMedia;
  alt: string;
  mediaIndex: number;
  setMediaIndex: Dispatch<SetStateAction<number>>;
}

export default function VisualContent({
  media,
  alt,
  mediaIndex,
  setMediaIndex,
}: IVisualContent) {
  const [mediaToShow, setMediaToShow] = useState<'image' | 'video'>('image');
  const [isShowingOverlay, setIsShowingOverlay] = useState(false);

  const t = useTranslations('Projects.Expanded');
  const w = useTranslations('Words');

  return (
    <figure className='group project-expanded-card relative min-h-64 overflow-clip sm:col-span-1'>
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
          {(media.images || media.videos) && (
            <div
              className={`absolute inset-0 size-full bg-black/80 duration-300 ease-in-out ${isShowingOverlay ? 'opacity-100' : 'opacity-0'}`}
            >
              <div
                className={`flex items-center justify-center absolute top-0 z-10 min-h-0 w-full gap-2 rounded-t-lg duration-300 ease-in-out bg-gradient-to-b from-black to-transparent ${isShowingOverlay ? 'h-16' : 'h-0'}`}
              >
                <Button
                  label={w('Image')}
                  action={(e) => {
                    e.stopPropagation();
                    setMediaToShow('image');
                  }}
                  disabled={!media.images}
                />
                <Button
                  label={w('Video')}
                  action={(e) => {
                    e.stopPropagation();
                    setMediaToShow('video');
                  }}
                  disabled={!media.videos}
                />
              </div>
              <div
                className={`flex items-center justify-center absolute bottom-0 z-10 min-h-0 w-full gap-2 rounded-b-lg duration-300 ease-in-out bg-gradient-to-t from-black to-transparent ${isShowingOverlay ? 'h-16' : 'h-0'}`}
              >
                <Button
                  ariaLabel={w('Previous')}
                  action={(e) => {
                    e.stopPropagation();
                    setMediaIndex(mediaIndex - 1);
                  }}
                  disabled={!media.images || mediaIndex === 0}
                  icon={<FaArrowLeft />}
                  className='btn-default-color min-w-fit p-2 border rounded-full text-sm ease-in-out duration-300 bg-white dark:bg-transparent'
                />
                {Object.keys(media.images ?? {}).map((_, idx) => (
                  <Button
                    // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable list>
                    key={idx}
                    className={`btn-default-color flex items-center justify-center size-6 border rounded-full text-xs ease-in-out duration-300 ${
                      idx === mediaIndex &&
                      'shadow-base shadow-white bg-shark-400'
                    }`}
                    action={(e) => {
                      e.stopPropagation();
                      setMediaIndex(idx);
                    }}
                    label={(idx + 1).toString()}
                  />
                ))}
                {Object.keys(media.videos ?? {}).map((_, idx) => (
                  <Button
                    // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable list>
                    key={idx}
                    className={`btn-default-color flex items-center justify-center size-6 border rounded-full text-xs ease-in-out duration-300 ${
                      idx === mediaIndex &&
                      'shadow-base shadow-white bg-shark-400'
                    }`}
                    action={(e) => {
                      e.stopPropagation();
                      setMediaIndex(idx);
                    }}
                    label={(idx + 1).toString()}
                  />
                ))}
                <Button
                  ariaLabel={w('Next')}
                  action={(e) => {
                    e.stopPropagation();
                    setMediaIndex(mediaIndex + 1);
                  }}
                  disabled={
                    !media.images ||
                    mediaIndex === Object.keys(media.images ?? {}).length - 1
                  }
                  icon={<FaArrowRight />}
                  className='btn-default-color min-w-fit p-2 border rounded-full text-sm ease-in-out duration-300 bg-white dark:bg-transparent'
                />
              </div>
            </div>
          )}
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
