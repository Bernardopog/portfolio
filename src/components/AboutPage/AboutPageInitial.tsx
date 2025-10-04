import { aboutSections } from "@/data/aboutSectionsList";
import Inert from "../Inert";
import AboutCard from "@/ui/AboutCard";
import { IAboutPageProps } from "@/types/IAboutPageProps";

interface IAboutPageInitialProps extends IAboutPageProps {
  isVisible: boolean;
}

export default function AboutPageInitial({
  currentView,
  changeCurrentView,
  isVisible,
}: IAboutPageInitialProps) {
  return (
    <Inert
      className={`${
        currentView === "none"
          ? "pt-4 pb-20 overflow-y-auto"
          : "p-0 overflow-hidden"
      }`}
      isVisible={currentView === "none"}
    >
      <div className="grid grid-cols-1 items-start place-items-center h-full gap-4 sm:grid-cols-2">
        {aboutSections.map((card, idx) => (
          <AboutCard
            className={idx % 2 === 0 ? "sm:self-start" : "sm:self-end"}
            key={idx}
            title={card.title}
            icon={card.icon}
            animationDelay={card.delay}
            currentView={card.view}
            changeCurrentView={() => changeCurrentView(card.view)}
            isPageVisible={isVisible}
          >
            {card.description}
          </AboutCard>
        ))}
      </div>
    </Inert>
  );
}
