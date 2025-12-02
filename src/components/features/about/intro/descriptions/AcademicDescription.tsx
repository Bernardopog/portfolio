import { useTranslations } from 'next-intl';

export default function AcademicDescription() {
  const t = useTranslations('AboutMe');

  return (
    <p>
      {t.rich('CardAcademicDesc', {
        br: () => <br />,
      })}
    </p>
  );
}
