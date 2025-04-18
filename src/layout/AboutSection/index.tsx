import Button from "@/ui/Button";

interface IAboutSectionProps {
  onToMain: () => void;
}

export default function AboutSection({ onToMain }: IAboutSectionProps) {
  return (
    <section className="overflow-hidden">
      Sobre
      <Button label="Voltar" action={() => onToMain()} />
    </section>
  );
}
