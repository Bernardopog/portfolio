import Button from "@/ui/Button";

interface IProjectsSectionProps {
  onToMain: () => void;
}

export default function ProjectsSection({ onToMain }: IProjectsSectionProps) {
  return (
    <section>
      Project
      <Button label="Voltar" action={() => onToMain()} />
    </section>
  );
}
