import { TechFieldType } from "../aliases/TechFieldType";
import { TechNameType } from "../aliases/TechNameType";

export interface ITech {
  name: TechNameType;
  main: boolean;
  field: TechFieldType;
}
