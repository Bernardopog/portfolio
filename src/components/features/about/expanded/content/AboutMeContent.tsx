import { FaToolbox } from 'react-icons/fa6';
import WorkInProgress from '@/components/ui/WorkInProgress';

export default function AboutMeSubpage() {
  return (
    <WorkInProgress
      icon={<FaToolbox />}
      content='Está subseção está em construção, em breve terá mais detalhes sobre minha jornada e paixões, dentro e fora do código.'
    />
  );
}
