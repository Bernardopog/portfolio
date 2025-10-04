import Presentation from "@/components/HomePage/Presentation";
import TechList from "@/components/HomePage/TechList";
import Button from "@/ui/Button";

interface IMainSectionProps {
  onToAbout: () => void;
  onToProject: () => void;
}

export default function MainSection({
  onToAbout,
  onToProject,
}: IMainSectionProps) {
  return (
    <main className="flex flex-col items-center relative w-full h-[calc(100dvh-3rem-3rem)] md:h-[calc(100dvh-3rem)]">
      <Presentation />
      <div className="flex mt-8 gap-x-2 min-w-fit">
        <Button label="Sobre Mim" action={() => onToAbout()} />
        <Button label="Projetos" action={() => onToProject()} />
      </div>
      <TechList />
    </main>
  );
}
