export interface IBookAbout {
  aboutCourse: string;
  usedLanguages?: string[];
  learned?: string[];
}
interface ICourseContent {
  label: string;
  description: string;
  stripesColors?: string[];
  className?: string;
  instituiton: string;
  about: IBookAbout;
}

export interface ICourseContentProps extends ICourseContent {
  abbreviation?: string;
  startYear: number;
  endYear?: number;
}

export interface IBookContentProps extends ICourseContentProps {
  vPosition: "top" | "bottom";
  hPosition: "left" | "right";
  shouldShow: boolean;
}
