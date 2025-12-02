'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import { Button } from '@/components/ui';
import Inert from '../Inert';

interface ILanguageDropdownProps {
  startLocale: 'pt' | 'en';
}

export default function LanguageDropdown({
  startLocale,
}: ILanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleLanguageChange = (language: 'pt' | 'en') => {
    document.cookie = `locale=${language}; path=/`;
    router.refresh();
  };

  return (
    <div className='flex flex-col items-end relative gap-2'>
      <Button
        action={() => setIsOpen(!isOpen)}
        ariaLabel={'Abrir menu de idiomas'}
        icon={<MdLanguage />}
        className='flex items-center text-2xl p-1 rounded-full duration-300 ease-in-out text-shark-950 hover:bg-black/10 dark:text-shark-50 dark:hover:bg-white/10'
      />
      <Inert
        as='ul'
        isVisible={isOpen}
        className={`absolute -bottom-20 border rounded-lg flex flex-col w-20 gap-2 overflow-clip duration-300 ease-in-out ${isOpen ? 'max-h-24 border-black/25 dark:border-white/25' : 'max-h-0 border-transparent'}`}
      >
        <li>
          <Button
            action={() => handleLanguageChange('pt')}
            label='Português'
            className={`btn-default-color cursor-pointer p-1 w-full duration-300 ease-in-out ${startLocale === 'pt' && 'bg-black/10 dark:bg-white/10'}`}
          />
        </li>
        <li>
          <Button
            action={() => handleLanguageChange('en')}
            label='English'
            className={`btn-default-color cursor-pointer p-1 w-full duration-300 ease-in-out ${startLocale === 'en' && 'bg-black/10 dark:bg-white/10'}`}
          />
        </li>
      </Inert>
    </div>
  );
}
