import type { StaticImageData } from 'next/image';
import type { TechNameType } from '../aliases/TechNameType';

type SourceType = 'personal' | 'frontendmentor';
type BgColorType = 'dark' | 'light';

export interface IProject {
  name: string;
  description?: string;
  link: string;
  image?: StaticImageData;
  techs: TechNameType[];
  source: SourceType;
  backgroundColor: BgColorType;
}
