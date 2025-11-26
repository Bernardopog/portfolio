import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '@/components/ui';
import type { IAboutPageProps } from '@/types/interfaces/IAboutPageProps';

export default function AboutExpandedHeader({
  currentView,
  changeCurrentView,
}: IAboutPageProps) {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    switch (currentView) {
      case 'none':
        setTitle('');
        break;
      case 'about':
        setTitle('Sobre mim');
        break;
      case 'hard':
        setTitle('Hardskill');
        break;
      case 'soft':
        setTitle('Softskill');
        break;
      case 'academic':
        setTitle('Acadêmico');
        break;
      default:
        break;
    }
  }, [currentView]);

  return (
    <header className='flex justify-between items-center w-full'>
      <h2 className='font-bold text-2xl text-shark-950 dark:text-shark-50'>
        {title}
      </h2>
      <Button
        label='Voltar'
        action={() => changeCurrentView('none')}
        icon={<IoArrowBack className='text-xl' />}
        ariaLabel='Voltar'
        className='btn-default btn-default-color self-end'
      />
    </header>
  );
}
