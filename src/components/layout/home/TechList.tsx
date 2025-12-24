import { TechCard } from '@/components/features/home';
import { getIntroTechs } from '@/data/helpers/tech/techListHelpers';

export default function TechList() {
  return (
    <ul className='grid grid-cols-5 md:grid-cols-10 absolute bottom-0 min-w-screen w-full mb-2 px-2 gap-x-2 md:static'>
      {getIntroTechs().map((tech) => (
        <TechCard key={tech.name} tech={tech} />
      ))}
    </ul>
  );
}
