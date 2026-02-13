import { useTranslations } from 'next-intl';
import type { IComments } from '@/data/content/about/softskillComments';

export default function Comment({
  title,
  href,
  softskills,
  description,
}: IComments) {
  const t = useTranslations('AboutMe.Expanded.Softskill.EvidenceComments');
  const w = useTranslations('Words');

  return (
    <li className='shadow-lg rounded-lg overflow-hidden'>
      <a
        href={href}
        target='_blank'
        className='flex flex-col h-36 border p-2 rounded-lg bg-gradient-to-b from-white to-shark-100 border-black/15 dark:from-black dark:to-shark-950 dark:border-white/15'
      >
        <p className='text-shark-950 dark:text-shark-50'>{t(title)}</p>
        <p className='flex-1 pl-1 text-xs text-shark-800 dark:text-shark-100 xs:text-sm'>
          {t(description)}
        </p>
        <ul className='flex px-2 overflow-x-auto scrollbar-thin scrollbar-thumb-shark-950 scrollbar-track-transparent dark:scrollbar-thumb-shark-50'>
          {softskills.map((softskill) => (
            <li
              key={softskill}
              className='flex items-center gap-1 p-0.5 px-1 rounded-lg text-xs capitalize'
            >
              <span className='block size-2 rounded-full bg-purple-heart-600 dark:bg-punch-600'></span>
              <p className='text-shark-950 dark:text-shark-50'>
                {w(softskill)}
              </p>
            </li>
          ))}
        </ul>
      </a>
    </li>
  );
}
