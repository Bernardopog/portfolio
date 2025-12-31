export type SoftskillType = 'empathy' | 'communication' | 'colaboration';

export interface IComments {
  title: string;
  href: string;
  softskills: SoftskillType[];
}

export const softskillComments: IComments[] = [
  {
    title: 'Comentário 1',
    href: '#',
    softskills: ['colaboration', 'communication', 'empathy'],
  },
  {
    title: 'Comentário 2',
    href: '#',
    softskills: [],
  },
  {
    title: 'Comentário 3',
    href: '#',
    softskills: [],
  },
  {
    title: 'Comentário 4',
    href: '#',
    softskills: [],
  },
  {
    title: 'Comentário 5',
    href: '#',
    softskills: [],
  },
];
