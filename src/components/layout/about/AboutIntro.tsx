import { IAboutPageProps } from "@/types/interfaces/IAboutPageProps";
import { Inert } from "@/components/shared";
import { AboutCard } from "@/components/features/about";
import { aboutDescriptionMap } from "@/data/maps/about/aboutDescriptionMap";

interface IAboutPageInitialProps extends IAboutPageProps {
  isVisible: boolean;
}

export default function AboutIntro({
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
        {aboutDescriptionMap.map((card, idx) => (
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
