import {
  ITechExplain,
  techExplainMap,
} from "@/data/aboutSpecificTechExplainMap";
import { techIconMap } from "@/data/techIconMap";
import { ReactNode, useEffect, useState } from "react";

interface ITechExplainWithIcon extends ITechExplain {
  icon: ReactNode;
}

export default function ExplainCard({ tech }: { tech: string }) {
  const [techExplain, setTechExplain] = useState<ITechExplainWithIcon | null>(
    null
  );

  useEffect(() => {
    if (tech) {
      const icon = techIconMap[tech as keyof typeof techIconMap];
      console.log("==>", tech, icon);
      const data = {
        ...techExplainMap[tech as keyof typeof techExplainMap],
        icon,
      };

      setTechExplain(data);
    } else {
      setTechExplain(null);
    }
  }, [tech]);

  if (!techExplain) return null;

  return (
    <article className="flex flex-col items-center flex-1 relative min-h-96 m-1 p-4 pb-8 rounded-lg gap-8 overflow-y-auto text-shark-900 dark:text-shark-100">
      <header className="flex flex-col justify-center items-center">
        <span className="text-8xl">{techExplain?.icon}</span>
        <h3 className="font-bold text-2xl">{techExplain?.title}</h3>
        <span className="font-medium capitalize text-shark-800 dark:text-shark-200">
          {techExplain?.field}
        </span>
        <ul className="flex mt-2 gap-2">
          {techExplain?.categories.map((techCat) => (
            <li
              key={techCat}
              className="text-sm capitalize border rounded-lg p-1 border-black/25 dark:border-white/25"
            >
              {techCat}
            </li>
          ))}
        </ul>
      </header>
      <div className="max-h-32">
        <span className="text-sm">{techExplain?.description}</span>
      </div>
      <article className="hidden w-full max-w-80 h-45 rounded-lg bg-shark-900 dark:bg-shark-100 md:block">
        <span className="text-center text-shark-50 dark:text-shark-950">
          Placeholder
        </span>
      </article>
      <footer className="absolute bottom-0 w-full p-1 border rounded-lg text-center text-shark-800 border-black/25 dark:text-shark-200 dark:border-white/25">
        Placeholder
      </footer>
    </article>
  );
}
