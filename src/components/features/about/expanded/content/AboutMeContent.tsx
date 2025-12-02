import { useTranslations } from 'next-intl';
import { FaToolbox } from 'react-icons/fa6';
import WorkInProgress from '@/components/ui/WorkInProgress';

export default function AboutMeSubpage() {
  const t = useTranslations('AboutMe');

  return <WorkInProgress icon={<FaToolbox />} content={t('WIP.About')} />;
}
