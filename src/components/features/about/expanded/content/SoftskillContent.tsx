import { FaPeopleGroup } from 'react-icons/fa6';
import WorkInProgress from '@/components/ui/WorkInProgress';

export default function SoftskillSubpage() {
  return (
    <WorkInProgress
      icon={<FaPeopleGroup />}
      content='Está subseção está em construção, em breve terá mais detalhes como aplico essas habilidades.'
    />
  );
}
