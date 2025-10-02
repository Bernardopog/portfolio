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
      className={`flex flex-col items-start place-items-center h-full gap-4 overflow-hidden ${
        currentView !== "none" ? "pt-4 pb-8 px-4" : "p-0"
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
