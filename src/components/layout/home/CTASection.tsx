'use client';

import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';

interface ICTASectionProps {
  onToAbout: () => void;
  onToProject: () => void;
}

export default function CTASection({
  onToAbout,
  onToProject,
}: ICTASectionProps) {
  const t = useTranslations('Home');

  return (
    <div className='flex mt-8 gap-x-2 min-w-fit'>
      <Button label={t('CTAAbout')} action={() => onToAbout()} />
      <Button label={t('CTAProject')} action={() => onToProject()} />
    </div>
  );
}
