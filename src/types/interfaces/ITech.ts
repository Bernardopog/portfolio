import type { TechFieldType } from '../aliases/TechFieldType';
import type { TechNameType } from '../aliases/TechNameType';

export interface ITech {
  name: TechNameType;
  main: boolean;
  field: TechFieldType;
}
