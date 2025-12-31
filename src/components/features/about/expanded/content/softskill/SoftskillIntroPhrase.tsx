'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function SoftskillIntroPhrase() {
  const t = useTranslations('AboutMe.Expanded.Softskill');
  const [selectedPhrase, setSelectedPhrase] = useState<string | null>(null);

  const phrases = ['Phrase1', 'Phrase2', 'Phrase3', 'Phrase4', 'Phrase5'];

  useEffect(() => {
    const value = phrases[Math.floor(Math.random() * phrases.length)];
    setSelectedPhrase(value);
  }, []);

  return (
    <>
      {selectedPhrase && (
        <p className='text-center text-lg  font-bold text-shark-900 dark:text-shark-100 md:text-xl'>
          {t(`Phrases.${selectedPhrase}`)}
        </p>
      )}
    </>
  );
}
