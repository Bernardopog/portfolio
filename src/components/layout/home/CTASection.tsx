"use client";

import Button from "@/components/ui/Button";

interface ICTASectionProps {
  onToAbout: () => void;
  onToProject: () => void;
}

export default function CTASection({
  onToAbout,
  onToProject,
}: ICTASectionProps) {
  return (
    <div className="flex mt-8 gap-x-2 min-w-fit">
      <Button label="Sobre Mim" action={() => onToAbout()} />
      <Button label="Projetos" action={() => onToProject()} />
    </div>
  );
}
