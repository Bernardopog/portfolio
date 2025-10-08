import { StaticImageData } from "next/image";
import { TechNameType } from "../aliases/TechNameType";

type SourceType = "personal" | "frontendmentor";

export interface IProject {
  name: string;
  description?: string;
  link: string;
  image?: StaticImageData;
  techs: TechNameType[];
  source: SourceType;
}
