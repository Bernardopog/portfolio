import type { StaticImageData } from 'next/image';
import type { TechNameType } from '../aliases/TechNameType';

export type SourceType = 'personal' | 'frontendmentor';
type BgColorType = 'dark' | 'light';
type ChallengeCategory =
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'ui&ux'
  | 'accessibility'
  | 'performance'
  | 'security'
  | 'other';
type TechStack = {
  tech: TechNameType;
  reason: string;
};
export interface IChallenges {
  name: string;
  category: ChallengeCategory;
  difficulty: 'low' | 'mid' | 'high';
  difficultyReason?: string;
}
type Learnings = {
  learned: string;
  tech: TechNameType;
};
type FuturePlans = {
  name: string;
  completionDate?: Date;
};

export interface IDescription {
  content?: string;
  features?: string[];
  techs?: TechStack[];
  highlights?: string[];
  challenges?: IChallenges[];
  learnings?: Learnings[];
  futurePlans?: FuturePlans[];
}

export interface IMedia {
  thumb: StaticImageData;
  images?: Record<string, StaticImageData>;
  videos?: Record<string, string>;
}

export interface IProject {
  name: string;
  description?: IDescription;
  techs: TechNameType[];
  source: SourceType;
  backgroundColor: BgColorType;
  media: IMedia;
  point?: number; //? For ranking
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
