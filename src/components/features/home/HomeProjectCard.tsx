import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FaCode, FaEye, FaFileLines } from 'react-icons/fa6';
import { useShallow } from 'zustand/shallow';
import { Inert } from '@/components/shared';
import { Button } from '@/components/ui';
import { techIconMap } from '@/data/content/techIconMap';
import { useAppViewStore } from '@/store/AppViewStore';
import { useProjectSelectionStore } from '@/store/ProjectSelectionStore';
import type { IProject } from '@/types/interfaces/IProject';

interface IHomeProjectCardProps {
  data: IProject;
  visibleNumber: number;
  index: number;
}

export default function HomeProjectCard({
  data,
  visibleNumber,
  index,
}: IHomeProjectCardProps) {
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  const t = useTranslations('Home');

  const { currentView, setCurrentView, setProjectSubview } = useAppViewStore(
    useShallow((s) => ({
      currentView: s.currentView,
      setCurrentView: s.setCurrentView,
      setProjectSubview: s.setProjectSubview,
    })),
  );
  const selectProject = useProjectSelectionStore((s) => s.selectProject);

  const handleSeeDetails = () => {
    selectProject(data);
    setCurrentView('project');
    setProjectSubview('details');
  };

  return (
    <li
      className={`flex-1 grid grid-cols-1 grid-rows-1 max-w-fit rounded-lg shadow-lg overflow-hidden duration-300 ease-in-out ${visibleNumber === index ? 'group relative opactiy-100 blur-none' : 'absolute -z-20 opacity-30 scale-75 dark:opacity-10'} ${visibleNumber + 1 === index && 'left-[calc(100%-552px)]'} ${visibleNumber - 1 === index && 'left-0'} ${visibleNumber === 0 && index === 2 && 'left-0'} ${visibleNumber === 2 && index === 0 && 'left-[calc(100%-552px)]'}`}
      onMouseEnter={() => {
        setIsHoveringCard(true);
      }}
      onMouseLeave={() => {
        setIsHoveringCard(false);
      }}
    >
      {currentView === 'main' && (
        <figure className='col-start-1 col-end-2 row-start-1 row-end-2'>
          <Image
            loading='lazy'
            placeholder='blur'
            alt={data.name}
            src={data.media.thumb}
            width={552}
            quality={50}
          />
        </figure>
      )}
      <div className='absolute inset-0 size-full backdrop-brightness-50 opacity-0 duration-300 ease-in-out group-hover:opacity-100 bg-white/25 dark:bg-black/25'>
        <Inert
          as='article'
          isVisible={visibleNumber === index && isHoveringCard}
          className='grid grid-cols-[min-content_repeat(3,minmax(0,1fr))] grid-rows-[min-content_repeat(2,minmax(0,1fr))_min-content] size-full'
        >
          <header className='col-start-2 col-end-5 row-start-1 row-end-2 px-2 bg-shark-100 dark:bg-shark-950'>
            <h3 className='font-bold text-lg text-shark-950 dark:text-shark-50'>
              {data.name}{' '}
              <span className='font-normal italic text-sm text-shark-800 dark:text-shark-200'>
                - {data.info.tagline}
              </span>
            </h3>
          </header>
          <ul className='col-start-1 col-end-2 row-start-1 row-end-5 flex flex-col justify-center p-1 gap-2 bg-shark-100 text-shark-900 dark:bg-shark-950'>
            {data.techs.map((tech) => (
              <li
                key={tech}
                className='p-0.5 rounded-lg border text-xl text-shark-800 border-white/25 dark:text-shark-50'
              >
                {techIconMap[tech]}
              </li>
            ))}
          </ul>
          <section className='col-start-2 col-end-5 row-start-2 row-end-4 flex items-center justify-center gap-2'>
            <div className='grid grid-cols-2 grid-rows-2 items-center p-1 rounded-lg gap-2 bg-shark-100 dark:bg-shark-950'>
              <a
                href={data.links.github}
                target='_blank'
                className='btn-default btn-default-color flex items-center justify-between gap-2 text-sm md:text-base'
              >
                {t('SeeCode')}
                <FaCode className='text-lg' />
              </a>
              <a
                href={data.links.live}
                target='_blank'
                className='btn-default btn-default-color flex items-center justify-between gap-2 text-sm md:text-base'
              >
                {t('SeeLive')}
                <FaEye className='text-lg' />
              </a>
              <Button
                label={t('SeeDetails')}
                action={handleSeeDetails}
                icon={<FaFileLines className='order-1 text-lg' />}
                className='btn-default btn-default-color justify-between col-span-2'
              />
            </div>
          </section>
          <footer className='flex justify-end col-start-2 col-end-5 row-start-4 row-end-5 px-2 text-sm bg-shark-100 text-shark-900 dark:bg-shark-950 dark:text-shark-200'>
            {t('Source')}:{' '}
            {data.source === 'personal' ? t('Personal') : 'Frontend Mentor'}
          </footer>
        </Inert>
      </div>
    </li>
  );
}
