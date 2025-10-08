import { projectList } from "@/data/content/project/projectList";
import { TechNameType } from "@/types/aliases/TechNameType";

export const getRandomProjectByTech = (tech: TechNameType) => {
  const filteredProjects = projectList.filter((project) =>
    project.techs.includes(tech)
  );
  const randomIndex = Math.floor(Math.random() * filteredProjects.length);
  return filteredProjects[randomIndex];
};
