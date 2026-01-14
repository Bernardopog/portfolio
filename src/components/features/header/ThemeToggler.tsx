'use client';

import { useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { useThemeStore } from '@/store/ThemeStore';

export default function ThemeToggler({ darkMode }: { darkMode: boolean }) {
  const { isDarkMode, setIsDarkMode, toggleTheme } = useThemeStore(
    useShallow((s) => ({
      isDarkMode: s.isDarkMode,
      setIsDarkMode: s.setIsDarkMode,
      toggleTheme: s.toggleTheme,
    })),
  );

  const handleThemeChange = () => {
    toggleTheme();
    document.cookie = `theme=${isDarkMode ? 'light' : 'dark'}; path=/`;
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode, setIsDarkMode]);

  return (
    <button
      type='button'
      className='flex items-center relative w-20 p-0.5 rounded-full border-2 shadow-lg shadow-black/15 cursor-pointer border-shark-900 dark:border-shark-100 dark:shadow-white/15'
      onClick={() => handleThemeChange()}
      aria-label='Alterar tema'
      title='Alterar tema'
    >
      <span className='absolute left-8 font-medium duration-300 ease-in-out text-shark-950 dark:text-shark-50 dark:left-2'>
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
      <div
        className='flex items-center justify-center size-6 rounded-full duration-300 ease-in-out transition-transform bg-shark-950 text-shark-50 dark:translate-x-[200%] dark:bg-shark-50 dark:text-shark-950 
        '
      >
        {isDarkMode ? (
          <MdDarkMode className='text-xl' />
        ) : (
          <MdLightMode className='text-xl' />
        )}
      </div>
    </button>
  );
}
