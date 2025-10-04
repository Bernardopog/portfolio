import { getTechByField, ITech } from "@/data/techList";
import React, { ReactElement } from "react";

const TechCard = ({ tech }: { tech: ITech }) => {
  return (
    <li className="flex flex-col items-center justify-center w-full h-20 rounded-lg border shadow-lg border-black/10 ease-in-out duration-300 backdrop-blur-2xl dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10">
      <span className="text-3xl xs:text-4xl">
        {React.isValidElement(tech.icon)
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            React.cloneElement(tech.icon as ReactElement<any>, {
              className: "tech",
            })
          : tech.icon}
      </span>
      <p className="capitalize text-center text-gradient text-sm xs:text-base md:font-medium">
        {tech.name}
      </p>
    </li>
  );
};

export default function TechList() {
  return (
    <ul className="grid grid-cols-5 md:grid-cols-10 absolute bottom-0 min-w-screen w-full mb-2 px-2 gap-x-2">
      {getTechByField("frontend").map((tech) => (
        <TechCard key={tech.name} tech={tech} />
      ))}
    </ul>
  );
}
