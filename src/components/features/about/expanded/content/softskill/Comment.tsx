import type { IComments } from '@/data/content/about/softskillComments';

export default function Comment({ title, href, softskills }: IComments) {
  return (
    <li className='shadow-lg rounded-lg overflow-hidden'>
      <a
        href={href}
        target='_blank'
        className='flex flex-col h-28 border p-2 rounded-lg bg-gradient-to-b from-white to-shark-100 border-black/15 dark:from-black dark:to-shark-950 dark:border-white/15'
      >
        <p className='flex-1 text-shark-950 dark:text-shark-50'>{title} #WIP</p>
        <ul className='flex px-2 gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-shark-950 scrollbar-track-transparent dark:scrollbar-thumb-shark-50'>
          {softskills.map((softskill) => {
            return (
              <li
                key={softskill}
                className='flex items-center gap-2 p-0.5 px-1 rounded-lg text-xs capitalize'
              >
                <span className='inline-block w-2 h-2 rounded-full bg-shark-400 dark:bg-shark-500'></span>
                <p className='text-shark-950 dark:text-shark-50'>{softskill}</p>
              </li>
            );
          })}
        </ul>
      </a>
    </li>
  );
}
