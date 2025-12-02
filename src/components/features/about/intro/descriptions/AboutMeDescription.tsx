import { useTranslations } from 'next-intl';

export default function AboutMeDescription() {
  const t = useTranslations('AboutMe');

  return (
    <p className='whitespace-pre-line'>
      {t.rich('CardAboutDesc', {
        span: (s) => <span className='inline-block'>{s}</span>,
        strong: (s) => <strong>{s}</strong>,
        br: () => <br />,
      })}
    </p>
  );
}
