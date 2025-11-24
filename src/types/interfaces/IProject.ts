import type { StaticImageData } from 'next/image';
import type { TechNameType } from '../aliases/TechNameType';

type SourceType = 'personal' | 'frontendmentor';
type BgColorType = 'dark' | 'light';

export interface IProject {
  name: string;
  description?: string;
  image?: StaticImageData;
  techs: TechNameType[];
  source: SourceType;
  backgroundColor: BgColorType;
  links: {
    github: string;
    live: string;
    source?: string;
  };
  info: {
    createdAt: Date;
    endedAt?: Date;
    category: string[];
    status: 'in-progress' | 'completed';
    tagline?: string;
  };
}
