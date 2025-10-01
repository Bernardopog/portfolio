import { IAboutPageProps } from "@/types/IAboutPageProps";
import Inert from "../Inert";
import { IoArrowBack } from "react-icons/io5";
import Button from "@/ui/Button";

export default function AboutPageSpecific({
  currentView,
  changeCurrentView,
}: IAboutPageProps) {
  return (
    <Inert
      className={`flex items-start place-items-center h-full gap-4 overflow-hidden ${
        currentView !== "none" ? "pt-4 pb-20 px-4" : "p-0"
      }`}
      isVisible={currentView !== "none"}
    >
      <header className="flex flex-row-reverse w-full">
        <Button
          label="Voltar"
          action={() => changeCurrentView("none")}
          icon={<IoArrowBack className="text-xl" />}
          ariaLabel="Voltar"
          className="btn-default btn-default-color self-end"
        />
      </header>
    </Inert>
  );
}
