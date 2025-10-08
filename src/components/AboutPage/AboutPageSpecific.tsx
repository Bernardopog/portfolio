import { IAboutPageProps } from "@/types/IAboutPageProps";
import Inert from "../Inert";
import AboutPageSpecificHeader from "./AboutPageSpecificHeader";
import AboutPageSpecificContent from "./AboutPageSpecificContent";

export default function AboutPageSpecific({
  currentView,
  changeCurrentView,
}: IAboutPageProps) {
  return (
    <Inert
      className={`flex flex-col items-start place-items-center gap-4 ${
        currentView !== "none"
          ? "h-[calc(100dvh-6rem)] pt-4 pb-8 px-4 overflow-y-auto md:h-full"
          : "p-0 overflow-hidden"
      }`}
      isVisible={currentView !== "none"}
    >
      <AboutPageSpecificHeader
        changeCurrentView={changeCurrentView}
        currentView={currentView}
      />
      <AboutPageSpecificContent currentView={currentView} />
    </Inert>
  );
}
