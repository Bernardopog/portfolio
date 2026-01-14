'use client';
import { useTranslations } from 'next-intl';
import { NavbarItem } from '@/components/features/navbar';
import { useNavbarSections } from '@/hooks/useNavbarPages';
import { useNavbarStore } from '@/store/NavbarStore';
import type { ViewTypes } from '@/types/aliases/ViewTypes';
import type { INavbarFunctions } from '@/types/interfaces/INavbarFunctions';
import Inert from '../Inert';

interface INavbarProps extends INavbarFunctions {
  view: ViewTypes;
}

export default function Navbar({
  onToMain,
  onToAbout,
  onToProject,
  view,
}: INavbarProps) {
  const pageList = useNavbarSections({ onToMain, onToAbout, onToProject });
  const t = useTranslations('Navbar');
  const isNavbarBlock = useNavbarStore((s) => s.isNavbarBlocked);

  return (
    <Inert
      as={'nav'}
      isVisible={!isNavbarBlock}
      className='absolute bottom-0 z-50 w-full h-12 rounded-t-lg border-t border-black/10 backdrop-blur-xs duration-300 ease-in-out dark:border-white/10 md:top-0 md:bottom-auto md:left-0 md:w-fit md:h-12 md:px-4 md:border md:rounded-none md:rounded-r-lg'
    >
      <ul className='flex items-center justify-center size-full gap-4 md:justify-start'>
        {pageList.map((item, index) => (
          <NavbarItem
            // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable list>
            key={index}
            icon={item.icon}
            action={item.action}
            view={view}
            name={item.name}
            label={t(item.key)}
          />
        ))}
      </ul>
    </Inert>
  );
}
