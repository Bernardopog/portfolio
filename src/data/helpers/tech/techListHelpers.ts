import { techList } from "@/data/content/tech/techList";
import { TechFieldType } from "@/types/aliases/TechFieldType";

export const getAllTechs = () => {
  return techList.map((tech) => tech.name);
};
export const getMainTechs = () => {
  return techList.filter((tech) => tech.main);
};
export const getTechByField = (field: TechFieldType) => {
  return techList.filter((tech) => tech.field === field);
};
export const getMainTechByField = (field: TechFieldType) => {
  return getTechByField(field).filter((tech) => tech.main);
};
export const getIntroTechs = () => {
  return techList.slice(0, 10);
};
