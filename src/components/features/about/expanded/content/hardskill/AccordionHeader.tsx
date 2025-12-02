import { useTranslations } from 'next-intl';
import type { Dispatch, SetStateAction } from 'react';
import { Radio } from '@/components/ui';

interface IAccordionHeaderProps {
  showOnlyMain: boolean;
  setShowOnlyMain: Dispatch<SetStateAction<boolean>>;
}

export default function AccordionHeader({
  showOnlyMain,
  setShowOnlyMain,
}: IAccordionHeaderProps) {
  const t = useTranslations('AboutMe');

  return (
    <div className='flex items-center gap-2'>
      <Radio
        id='main'
        name='main'
        label={t('Expanded.Hardskill.MainTechnologies')}
        state={showOnlyMain}
        setState={() => {
          setShowOnlyMain(true);
        }}
      />
      <Radio
        id='not-main'
        name='main'
        label={t('Expanded.Hardskill.AllTechnologies')}
        state={!showOnlyMain}
        setState={() => {
          setShowOnlyMain(false);
        }}
      />
    </div>
  );
}
