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
  return (
    <div className='flex items-center gap-2'>
      <Radio
        id='main'
        name='main'
        label='Techs Principais'
        state={showOnlyMain}
        setState={() => {
          setShowOnlyMain(true);
        }}
      />
      <Radio
        id='not-main'
        name='main'
        label='Todas Techs'
        state={!showOnlyMain}
        setState={() => {
          setShowOnlyMain(false);
        }}
      />
    </div>
  );
}
