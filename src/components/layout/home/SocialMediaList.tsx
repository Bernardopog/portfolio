import { socialMediaList } from '@/data/content/socialMediaList';

export default function SocialMediaList() {
  return (
    <ul className='flex absolute top-46 p-2 gap-2 rounded-lg border border-black/10 dark:border-white/10 text-black md:flex-col md:left-[calc(100vw-3.5rem)] md:top-0'>
      {socialMediaList.map((socialMedia) => (
        <li
          key={socialMedia.name}
          className='text-shark-950 dark:text-shark-50'
        >
          <a
            aria-label={`Ir para ${socialMedia.name}`}
            href={socialMedia.href}
            target='_blank'
            className='flex items-center text-lg border p-2 rounded-full duration-300 ease-in-out border-black/25 hover:bg-black/10 dark:hover:bg-white/10 dark:border-white/25'
          >
            {socialMedia.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
