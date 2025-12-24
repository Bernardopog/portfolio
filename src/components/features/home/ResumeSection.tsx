'use client';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import { MdAutorenew, MdOutlineWork } from 'react-icons/md';
import { Button } from '@/components/ui';

export default function ResumeSection() {
  const t = useTranslations('Home');

  const [buttonToShow, setButtonToShow] = useState<'download' | 'view'>(
    'download',
  );
  const btn = useRef<HTMLButtonElement>(null);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.setAttribute('download', 'cv.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResumeView = () => window.open('/cv.pdf', '_blank');

  const handleSwitch = () => {
    setButtonToShow(buttonToShow === 'download' ? 'view' : 'download');
    btn.current?.focus();
  };

  return (
    <div className='flex items-center p-1 gap-1 rounded-lg border border-black/15 dark:border-white/15'>
      {buttonToShow === 'download' ? (
        <Button
          ref={btn}
          label={t('CTADownloadResume')}
          action={() => handleResumeDownload()}
          icon={<MdOutlineWork className='order-1 text-xl' />}
        />
      ) : (
        <Button
          ref={btn}
          label={t('CTAViewResume')}
          action={() => handleResumeView()}
          icon={<MdOutlineWork className='order-1 text-xl' />}
        />
      )}
      <Button
        ariaLabel={t('CTAResumeSwitcher')}
        action={() => handleSwitch()}
        icon={<MdAutorenew className='text-xl' />}
      />
    </div>
  );
}
