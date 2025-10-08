import {
  ITechExplain,
  techExplainMap,
} from "@/data/aboutSpecificTechExplainMap";
import { techIconMap } from "@/data/techIconMap";
import { getPercentage } from "@/utils/getPercentage";
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
    <>
      <article className="flex flex-col items-center flex-1 relative h-full max-h-80 m-1 p-4 pb-8 rounded-lg gap-8 overflow-y-auto text-shark-900 dark:text-shark-100 md:max-h-full">
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

        <div
          style={{
            backgroundImage: `conic-gradient(#333333 ${getPercentage(
              techExplain.level,
              5
            )}%,#d1d1d1 0%)`,
          }}
          className="flex items-center justify-center absolute top-2 right-2 w-16 min-h-16 rounded-full opacity-75 bg-shark-200 dark:bg-shark-950 md:size-20"
        >
          <div className="flex items-center justify-center size-12 rounded-full bg-white dark:bg-black md:size-16">
            <span className="font-bold text-shark-800 dark:text-shark-200 md:text-xl">
              {getPercentage(techExplain.level, 5)}%
            </span>
          </div>
        </div>

        <div className="max-h-32">
          <span className="text-sm">{techExplain?.description}</span>
        </div>
        <article className="w-full max-w-80 min-h-56 rounded-lg bg-shark-900 dark:bg-shark-100">
          <span className="text-center text-shark-50 dark:text-shark-950">
            Placeholder
          </span>
        </article>
      </article>
      <footer className="absolute bottom-0 w-full p-1 border rounded-lg text-center text-shark-800 border-black/25 dark:text-shark-200 dark:border-white/25">
        Placeholder
      </footer>
    </>
  );
}
