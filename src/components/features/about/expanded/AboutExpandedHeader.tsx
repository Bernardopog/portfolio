import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '@/components/ui';
import type { IAboutPageProps } from '@/types/interfaces/IAboutPageProps';

export default function AboutExpandedHeader({
  currentView,
  changeCurrentView,
}: IAboutPageProps) {
  const [title, setTitle] = useState<string>('');

  const tAboutMe = useTranslations('AboutMe');
  const tBack = useTranslations('Words');

  useEffect(() => {
    switch (currentView) {
      case 'none':
        setTitle('');
        break;
      case 'about':
        setTitle(tAboutMe('CardAbout'));
        break;
      case 'hard':
        setTitle(tAboutMe('CardHardskills'));
        break;
      case 'soft':
        setTitle(tAboutMe('CardSoftskills'));
        break;
      case 'academic':
        setTitle(tAboutMe('CardAcademic'));
        break;
      default:
        break;
    }
  }, [currentView, tAboutMe]);

  return (
    <header className='flex justify-between items-center w-full'>
      <h2 className='font-bold text-2xl text-shark-950 dark:text-shark-50'>
        {title}
      </h2>
      <Button
        label={tBack('Back')}
        action={() => changeCurrentView('none')}
        icon={<IoArrowBack className='text-xl' />}
        ariaLabel={tBack('Back')}
        className='btn-default btn-default-color self-end'
      />
    </header>
  );
}
