import type { StaticImageData } from 'next/image';
import type { TechNameType } from '../aliases/TechNameType';

type SourceType = 'personal' | 'frontendmentor';
type BgColorType = 'dark' | 'light';

export interface IMedia {
  thumb: StaticImageData;
  images?: Record<string, StaticImageData>;
  videos?: Record<string, string>;
}

export interface IProject {
  name: string;
  description?: string;
  techs: TechNameType[];
  source: SourceType;
  backgroundColor: BgColorType;
  media: IMedia;
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
