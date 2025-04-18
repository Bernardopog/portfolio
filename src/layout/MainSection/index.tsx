import Presentation from "@/components/Presentation";
import TechList from "@/components/TechList";
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
    <main className="flex flex-col items-center relative w-full h-[calc(100vh-3rem)]">
      <Presentation />
      <div className="flex mt-8 gap-x-2 min-w-fit">
        <Button label="Sobre Mim" action={() => onToAbout()} />
        <Button label="Projetos" action={() => onToProject()} />
      </div>
      <TechList />
    </main>
  );
}
