import Button from "@/ui/Button";

interface IProjectsSectionProps {
  onToMain: () => void;
}

export default function ProjectsSection({ onToMain }: IProjectsSectionProps) {
  return (
    <section className="overflow-hidden">
      Project
      <Button label="Voltar" action={() => onToMain()} />
    </section>
  );
}
