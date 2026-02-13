'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { MdCheck, MdClose, MdComment, MdPerson } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { Inert } from '@/components/shared';
import { Button } from '@/components/ui';
import { softskillComments } from '@/data/content/about/softskillComments';
import { useNavbarStore } from '@/store/NavbarStore';
import { AnimatedCounter, Comment, SoftskillIntroPhrase } from './softskill';

export default function SoftskillSubpage() {
  const [isEvidenceOpen, setIsEvidenceOpen] = useState(false);
  const [hasFetchError, setHasFetchError] = useState(false);
  const [FEMStats, setFEMStats] = useState<Record<string, number> | null>(null);
  const t = useTranslations('AboutMe.Expanded.Softskill');
  const { blockNavbar, unblockNavbar } = useNavbarStore(
    useShallow((s) => ({
      blockNavbar: s.blockNavbar,
      unblockNavbar: s.unblockNavbar,
    })),
  );

  useEffect(() => {
    const getStatsData = async () => {
      try {
        const res = await fetch('/api/stats');
        const data: { stats: Record<string, number> } = await res.json();
        setFEMStats(data.stats);
      } catch {
        setHasFetchError(true);
      }
    };
    getStatsData();
  }, []);

  const order = ['wallOfFame', 'mentorScore', 'helpfulComments', 'comments'];

  const FEMStatsArr: { name: string; value: number }[] = FEMStats
    ? order.map((key) => ({ name: key, value: FEMStats[key] }))
    : [];

  const handleEvidenceBarClose = () => {
    setIsEvidenceOpen(false);
    unblockNavbar();
  };

  return (
    <>
      <Inert
        isVisible={isEvidenceOpen}
        as='aside'
        className={`flex justify-end fixed right-0 top-0 z-50 h-full backdrop-blur-xs duration-300 ease-in-out overflow-clip cursor-pointer bg-black/25 ${isEvidenceOpen ? 'w-full' : 'w-0'}`}
        onClick={() => handleEvidenceBarClose()}
      >
        {/** biome-ignore lint/a11y/noStaticElementInteractions: <Necessary to avoid event propagation> */}
        <div
          className='w-80 p-4 bg-shark-100 dark:bg-shark-950 overflow-y-auto scrollbar-base cursor-auto xs:w-88'
          onClick={(ev) => ev.stopPropagation()}
          onKeyDown={(ev) => ev.stopPropagation()}
        >
          <h4 className='text-center text-lg font-medium text-shark-950 dark:text-shark-50'>
            {t('EvidenceSectionTitle')}
          </h4>
          <ul className='flex mt-1 gap-2 text-shark-950 dark:text-shark-50'>
            <a
              target='_blank'
              className='flex-1 flex items-center p-1 gap-2 rounded-lg border shadow-lg border-shark-950/15 dark:border-shark-50/15'
              href='https://www.frontendmentor.io/profile/Bernardopog'
              rel='noopener'
            >
              <MdPerson className='border p-1 text-3xl rounded-lg border-shark-950/25 dark:border-shark-50/25' />
              <span>Perfil</span>
            </a>
            <a
              target='_blank'
              className='flex-1 flex items-center p-1 gap-2 rounded-lg border shadow-lg border-shark-950/15 dark:border-shark-50/15'
              href='https://www.frontendmentor.io/profile/Bernardopog/comments'
              rel='noopener'
            >
              <MdComment className='border p-1 text-3xl rounded-lg border-shark-950/25 dark:border-shark-50/25' />
              <span>Comentários</span>
            </a>
          </ul>
          <ul className='flex flex-col mt-2 gap-2'>
            {softskillComments.map((comment) => (
              <Comment key={comment.title} {...comment} />
            ))}
          </ul>
          <Button
            className='btn-default-color absolute z-50 top-4 right-4 rounded-full text-2xl border ease-in-out duration-300'
            action={() => handleEvidenceBarClose()}
            icon={<MdClose />}
            ariaLabel={t('CloseEvidence')}
          />
        </div>
      </Inert>
      <Inert
        isVisible={!isEvidenceOpen}
        as='main'
        className='flex flex-col items-center w-full h-[calc(100vh-204px)] md:h-[calc(100vh-164px)] pb-48 gap-16 text-shark-950 dark:text-shark-50'
      >
        <SoftskillIntroPhrase />

        <article className='flex flex-col min-w-xs w-9/10 max-w-4xl relative gap-4 p-4 border rounded-lg shadow-md backdrop-blur-xs border-black/15 dark:border-white/15'>
          <h3 className='inline-block absolute -top-5 left-1/2 -translate-x-1/2 w-48 rounded-lg font-bold text-base text-center shadow-md bg-white dark:bg-black sm:w-64 sm:text-xl md:text-lg md:w-54'>
            Frontend Mentor
          </h3>
          <p className='my-4 text-center text-sm text-shark-800 dark:text-shark-200'>
            {t('SoftskillFrontendMentor')}
          </p>
          <section className='flex flex-col items-center'>
            {hasFetchError ? (
              <p className='text-lg font-medium text-shark-950 dark:text-shark-50'>
                {t('SoftskillFetchError')} Error
              </p>
            ) : (
              <ul className='grid grid-cols-1 w-full gap-2 mt-2 md:grid-cols-2 lg:grid-cols-3 '>
                {FEMStatsArr.map((stat) => {
                  return (
                    <li
                      key={stat.name}
                      className='flex flex-col items-center justify-center w-full p-2 border rounded-lg shadow-md backdrop-blur-xs border-black/15 dark:border-white/15 lg:first:col-span-3'
                    >
                      <p className='text-center uppercase font-bold text-sm sm:text-lg'>
                        {t(stat.name)}
                      </p>
                      {stat.value ? (
                        <AnimatedCounter target={stat.value} duration={5000} />
                      ) : (
                        <span className='text-xl sm:text-2xl lg:text-4xl font-black'>
                          0
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}

            <p className='mt-4 opacity-50 italic text-xs text-shark-950 dark:text-shark-50'>
              {t('SoftskillCardNote')}
            </p>

            <Button
              label={t('Evidence')}
              action={() => {
                setIsEvidenceOpen(true);
                blockNavbar();
              }}
              icon={<MdCheck />}
              className='btn-default btn-default-color mt-4'
              ariaLabel={t('OpenEvidence')}
              title={t('OpenEvidence')}
            />
          </section>
        </article>
      </Inert>
    </>
  );
}
