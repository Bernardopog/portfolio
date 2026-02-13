export type SoftskillType =
  | 'Empathy'
  | 'Communication'
  | 'Didactics'
  | 'Mentoring'
  | 'Accessbility'
  | 'CleanCode'
  | 'Diplomacy'
  | 'CriticalThinking'
  | 'Performance';

export interface IComments {
  title: string;
  href: string;
  softskills: SoftskillType[]; //?Tags
  description: string;
}

export const softskillComments: IComments[] = [
  {
    title: 'Comment1.Title',
    href: 'https://www.frontendmentor.io/solutions/blog-preview-card-responsivo---html-semntico-flexbox-e-hover-effects-drDxt4yGt5',
    softskills: ['Mentoring', 'CleanCode'],
    description: 'Comment1.Description',
  },
  {
    title: 'Comment2.Title',
    href: 'https://www.frontendmentor.io/solutions/testimonials-grid-section-using-tailwind-ECd1QVIBjR',
    softskills: ['Accessbility', 'Didactics'],
    description: 'Comment2.Description',
  },
  {
    title: 'Comment3.Title',
    href: 'https://www.frontendmentor.io/solutions/responsive-page-to-get-advices-qjTpuLf3yP',
    softskills: ['CriticalThinking', 'CleanCode', 'Empathy'],
    description: 'Comment3.Description',
  },
  {
    title: 'Comment4.Title',
    href: 'https://www.frontendmentor.io/solutions/testimonials-grid-section-using-tailwind-ECd1QVIBjR',
    softskills: ['Diplomacy', 'CriticalThinking', 'Performance'],
    description: 'Comment4.Description',
  },
  {
    title: 'Comment5.Title',
    href: 'https://www.frontendmentor.io/solutions/ok-maybe-grids-are-cool-4I98hQpH6f',
    softskills: ['Mentoring', 'Communication', 'Empathy'],
    description: 'Comment5.Description',
  },
];
