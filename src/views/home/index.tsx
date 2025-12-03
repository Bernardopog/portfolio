import {
  BetterProjects,
  CTASection,
  Presentation,
  SocialMediaList,
  TechList,
} from '@/components/layout/home';

interface IMainSectionProps {
  onToAbout: () => void;
  onToProject: () => void;
}

export default function HomePage({
  onToAbout,
  onToProject,
}: IMainSectionProps) {
  return (
    <main className='flex flex-col items-center relative w-full h-[calc(100dvh-3rem-3rem)] md:h-[calc(100dvh-3rem)]'>
      <Presentation />
      <CTASection onToAbout={onToAbout} onToProject={onToProject} />
      <SocialMediaList />
      <BetterProjects />
      <TechList />
    </main>
  );
}
