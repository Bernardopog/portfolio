import {
  ITechExplain,
  techExplainMap,
} from "@/data/aboutSpecificTechExplainMap";
import { techList } from "@/data/techList";
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
      const icon = techList.find(
        (item) => item.name.toLowerCase() === tech.toLowerCase()
      )?.icon;
      const data = {
        ...techExplainMap[tech as keyof ITechExplain],
        icon,
      };

      setTechExplain(data);
    } else {
      setTechExplain(null);
    }
  }, [tech]);

  if (!techExplain) return null;

  return (
    <article className="flex flex-col flex-1 m-1 p-4 rounded-lg gap-8 text-shark-900 dark:text-shark-100">
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
      <div>
        <span>{techExplain?.description}</span>
      </div>
    </article>
  );
}
