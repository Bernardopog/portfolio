import { useTranslations } from 'next-intl';
import { FaBook } from 'react-icons/fa6';
import WorkInProgress from '@/components/ui/WorkInProgress';

export default function AcademicSubpage() {
  const t = useTranslations('AboutMe');

  return <WorkInProgress icon={<FaBook />} content={t('WIP.Academic')} />;
}
