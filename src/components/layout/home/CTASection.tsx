'use client';

import { useTranslations } from 'next-intl';
import { ResumeSection } from '@/components/features/home';
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
    <div className='flex flex-col items-center mt-6 gap-x-2 min-w-fit sm:flex-row'>
      <section className='flex items-center p-1 rounded-lg border gap-1 border-black/15 dark:border-white/15'>
        <Button label={t('CTAAbout')} action={() => onToAbout()} />
        <Button label={t('CTAProject')} action={() => onToProject()} />
      </section>
      <ResumeSection />
    </div>
  );
}
