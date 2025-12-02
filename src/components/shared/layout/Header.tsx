import { LanguageDropdown, ThemeToggler } from './';

interface IHeaderProps {
  darkMode: boolean;
  startLocale: 'pt' | 'en';
}

export default function Header({ darkMode, startLocale }: IHeaderProps) {
  return (
    <header className='flex items-center justify-end relative top-0 z-50 w-full h-12 px-4 gap-4 bg-white/5 dark:bg-black/5'>
      <LanguageDropdown startLocale={startLocale} />
      <ThemeToggler darkMode={darkMode} />
    </header>
  );
}
