import type {
  IComments,
  SoftskillType,
} from '@/data/content/about/softskillComments';

export default function Comment({ title, href, softskills }: IComments) {
  const sofskillColor = (softskill: SoftskillType) => {
    const colorMap = new Map<
      SoftskillType,
      { bg: string; circle: string; text?: string }
    >();

    colorMap.set('communication', { bg: 'bg-blue-200', circle: 'bg-blue-400' });
    colorMap.set('empathy', { bg: 'bg-red-200', circle: 'bg-red-400' });
    colorMap.set('colaboration', {
      bg: 'bg-emerald-200',
      circle: 'bg-emerald-400',
    });

    return colorMap.get(softskill);
  };

  return (
    <li className='shadow-lg rounded-lg overflow-hidden'>
      <a
        href={href}
        target='_blank'
        className='flex flex-col h-28 border p-2 rounded-lg bg-gradient-to-b from-white to-shark-100 border-black/15 dark:from-black dark:to-shark-950 dark:border-white/15'
      >
        <p className='flex-1 text-shark-950 dark:text-shark-50'>{title}</p>
        <ul className='flex px-2 gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-shark-950 scrollbar-track-transparent dark:scrollbar-thumb-shark-50'>
          {softskills.map((softskill) => {
            return (
              <li
                key={softskill}
                className={`flex items-center gap-2 p-0.5 px-1 rounded-lg text-xs capitalize ${sofskillColor(softskill)?.bg}`}
              >
                <span
                  className={`inline-block w-2 h-2 rounded-full ${sofskillColor(softskill)?.circle}`}
                ></span>
                <p className='text-shark-950'>{softskill}</p>
              </li>
            );
          })}
        </ul>
      </a>
    </li>
  );
}
