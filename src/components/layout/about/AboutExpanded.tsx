import AboutExpandedContent from '@/components/features/about/expanded/AboutExpandedContent';
import AboutExpandedHeader from '@/components/features/about/expanded/AboutExpandedHeader';
import { Inert } from '@/components/shared';
import type { IAboutPageProps } from '@/types/interfaces/IAboutPageProps';

export default function AboutPageSpecific({
  currentView,
  changeCurrentView,
}: IAboutPageProps) {
  return (
    <Inert
      className={`flex flex-col items-start place-items-center gap-4 scrollbar-base ${
        currentView !== 'none'
          ? 'h-[calc(100dvh-6rem)] pt-4 pb-8 px-4 overflow-y-auto md:h-full'
          : 'p-0 overflow-hidden'
      }`}
      isVisible={currentView !== 'none'}
    >
      <AboutExpandedHeader
        changeCurrentView={changeCurrentView}
        currentView={currentView}
      />
      <AboutExpandedContent currentView={currentView} />
    </Inert>
  );
}
