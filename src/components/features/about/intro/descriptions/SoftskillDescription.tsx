'use client';

import { useTranslations } from 'next-intl';

const softskillList = ['Communication', 'Empathy', 'Colaboration'];

export default function SoftskillDescription() {
  const t = useTranslations('AboutMe');

  return (
    <div>
      <p>
        {t.rich('CardSoftskillsDesc.Desc1', {
          a: (a) => (
            <a
              href='https://www.frontendmentor.io/profile/Bernardopog'
              target='_blank'
              className='underline font-medium'
              onClick={(ev) => ev.stopPropagation()}
              rel='noopener'
            >
              {a}
            </a>
          ),
        })}
      </p>
      <br />
      <ul className='list-disc pl-6 py-2 border rounded-lg border-black/25 dark:border-white/25'>
        {softskillList.map((softskill) => (
          <li key={softskill}>
            <b>{t(`CardSoftskillsDesc.${softskill}`)}</b>
          </li>
        ))}
      </ul>
      <br />
      <p>{t('CardSoftskillsDesc.Desc2')}</p>
    </div>
  );
}
