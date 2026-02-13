import { useTranslations } from 'next-intl';
import { MdPhotoSizeSelectLarge } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { Button } from '@/components/ui';
import { useProjectExpandedSectionStore } from '@/store/ProjectExpandedSectionStore';
import type { IVisualContentChildrenProps } from './VisualContent';

interface IVisualContentHeaderProps extends IVisualContentChildrenProps {
  setMediaToShow: (mediaToShow: 'image' | 'video') => void;
}

export default function VisualContentHeader({
  isShowingOverlay,
  media,
  setMediaToShow,
}: IVisualContentHeaderProps) {
  const t = useTranslations('Projects.Expanded');
  const w = useTranslations('Words');

  const { hasToResizeImage, toggleResizeImage } =
    useProjectExpandedSectionStore(
      useShallow((s) => ({
        hasToResizeImage: s.hasToResizeImage,
        toggleResizeImage: s.toggleResizeImage,
      })),
    );

  return (
    <div
      className={`flex items-center justify-center absolute top-0 z-10 min-h-0 w-full gap-2 rounded-t-lg duration-300 ease-in-out bg-gradient-to-b from-black to-transparent ${isShowingOverlay ? 'h-16' : 'h-0'}`}
    >
      {(media.images || media.videos) && (
        <section className='flex items-center p-1 gap-2 rounded-lg shadow-md bg-white dark:bg-black'>
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
        </section>
      )}
      <section>
        <div className='p-1 rounded-lg shadow-md bg-white dark:bg-black'>
          <Button
            ariaLabel={`${hasToResizeImage ? `${t('RetractImage')}` : `${t('ExpandImage')}`}`}
            className={`btn-default btn-default-color ${isShowingOverlay ? 'opacity-100' : 'opacity-0'}`}
            icon={<MdPhotoSizeSelectLarge className='text-2xl' />}
            action={() => toggleResizeImage()}
          />
        </div>
      </section>
    </div>
  );
}
