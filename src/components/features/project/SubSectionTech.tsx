import { techIconMap } from "@/data/content/techIconMap";
import { getTechByField } from "@/data/helpers/tech/techListHelpers";
import { TechFieldType } from "@/types/aliases/TechFieldType";
import { ReactNode } from "react";

interface ISubSectionTech {
  desiredField: TechFieldType;
  listToShow: number;
  handleAddToSelectedTechs: (newTech: {
    icon: ReactNode;
    name: string;
  }) => void;
  selectedTechs: { icon: ReactNode; name: string }[];
}

export default function SubSectionTech({
  listToShow,
  desiredField,
  handleAddToSelectedTechs,
  selectedTechs,
}: ISubSectionTech) {
  return (
    <ul
      style={{ transform: `translatey(${-100 * listToShow}%)` }}
      className="flex items-center size-full px-1 py-2 border rounded-lg gap-2 ease-in-out duration-300 overflow-y-hidden overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-shark-950 dark:scrollbar-thumb-shark-50 border-black/25 dark:border-white/25"
    >
      {getTechByField(desiredField).map((tech) => (
        <li key={tech.name}>
          <button
            type="button"
            className={`flex items-center py-1 px-2 rounded-lg border gap-1 min-w-32 cursor-pointer border-black/25 dark:border-white/25 hover:border-black/50 dark:hover:border-white/50 ${
              selectedTechs.some(
                (selectedTech) => selectedTech.name === tech.name
              )
                ? "bg-black/10 dark:bg-white/10"
                : ""
            }`}
            onClick={() =>
              handleAddToSelectedTechs({
                icon: techIconMap[tech.name],
                name: tech.name,
              })
            }
          >
            <span className="text-shark-900 dark:text-shark-100">
              {techIconMap[tech.name]}
            </span>
            <span className="capitalize text-shark-900 dark:text-shark-100">
              {tech.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
