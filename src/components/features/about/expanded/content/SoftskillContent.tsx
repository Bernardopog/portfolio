import { useTranslations } from 'next-intl';
import { FaPeopleGroup } from 'react-icons/fa6';
import WorkInProgress from '@/components/ui/WorkInProgress';

export default function SoftskillSubpage() {
  const t = useTranslations('AboutMe');

  return (
    <WorkInProgress icon={<FaPeopleGroup />} content={t('WIP.Softskill')} />
  );
}
