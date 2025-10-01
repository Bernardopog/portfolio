import AboutCard from "@/ui/AboutCard";
import { IoBook, IoCodeSlash, IoPeople, IoPerson } from "react-icons/io5";

export default function AboutSection() {
  return (
    <section className="relative overflow-y-auto">
      <div className="grid grid-cols-1 items-start place-items-center h-[calc(100dvh-3rem-3rem)] pt-4 pb-20 gap-4 overflow-y-auto sm:grid-cols-2 md:h-[calc(100dvh-3rem)]">
        <AboutCard
          className={"sm:self-start"}
          title="Sobre Mim"
          icon={<IoPerson className="text-2xl" />}
          animationDelay={150}
        />
        <AboutCard
          className={"sm:self-end"}
          title="Hardskill"
          icon={<IoCodeSlash className="text-2xl" />}
          animationDelay={300}
        />
        <AboutCard
          className={"sm:self-start"}
          title="Softskill"
          icon={<IoPeople className="text-2xl" />}
          animationDelay={450}
        />
        <AboutCard
          className={"sm:self-end"}
          title="Acadêmico"
          icon={<IoBook className="text-2xl" />}
          animationDelay={600}
        />
      </div>
    </section>
  );
}
