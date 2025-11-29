import { FaBook } from 'react-icons/fa6';
import WorkInProgress from '@/components/ui/WorkInProgress';

export default function AcademicSubpage() {
  return (
    <WorkInProgress
      icon={<FaBook />}
      content='Está subseção está em construção, em breve terá mais detalhes sobre minha jornada e paixões, dentro e fora do código.'
    />
  );
}
