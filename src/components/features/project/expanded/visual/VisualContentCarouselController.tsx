import { useTranslations } from 'next-intl';
import type { Dispatch, SetStateAction } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Button } from '@/components/ui';
import type { IVisualContentChildrenProps } from './VisualContent';

interface IVisualContentCarouselControllerProps
  extends IVisualContentChildrenProps {
  mediaIndex: number;
  setMediaIndex: Dispatch<SetStateAction<number>>;
}

export default function VisualContentCarouselController({
  isShowingOverlay,
  media,
  mediaIndex,
  setMediaIndex,
}: IVisualContentCarouselControllerProps) {
  const w = useTranslations('Words');

  return (
    <div
      className={`flex items-center justify-center absolute bottom-0 z-10 min-h-0 w-full rounded-b-lg duration-300 ease-in-out bg-gradient-to-t from-black to-transparent ${isShowingOverlay ? 'h-16' : 'h-0'}`}
    >
      <section className='flex items-center px-2 py-1 gap-2 rounded-full shadow-md bg-white dark:bg-black'>
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
              idx === mediaIndex && 'shadow-base shadow-white bg-shark-400'
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
              idx === mediaIndex && 'shadow-base shadow-white bg-shark-400'
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
      </section>
    </div>
  );
}
