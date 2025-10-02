import { aboutSections } from "@/data/aboutSectionsList";
import Inert from "../Inert";
import AboutCard from "@/ui/AboutCard";
import { IAboutPageProps } from "@/types/IAboutPageProps";

export default function AboutPageInitial({
  currentView,
  changeCurrentView,
}: IAboutPageProps) {
  return (
    <Inert
      className={`grid grid-cols-1 items-start place-items-center h-full gap-4 sm:grid-cols-2 ${
        currentView === "none"
          ? "pt-4 pb-20 overflow-y-auto"
          : "p-0 overflow-hidden"
      }`}
      isVisible={currentView === "none"}
    >
      {aboutSections.map((card, idx) => (
        <AboutCard
          className={idx % 2 === 0 ? "sm:self-start" : "sm:self-end"}
          key={idx}
          title={card.title}
          icon={card.icon}
          animationDelay={card.delay}
          currentView={card.view}
          changeCurrentView={() => changeCurrentView(card.view)}
        >
          {card.description}
        </AboutCard>
      ))}
    </Inert>
  );
}
