import { NavbarItem } from '@/components/features/navbar';
import { useNavbarSections } from '@/hooks/useNavbarPages';
import type { ViewTypes } from '@/types/aliases/ViewTypes';
import type { INavbarFunctions } from '@/types/interfaces/INavbarFunctions';

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

  return (
    <nav className='absolute bottom-0 z-50 w-full h-12 rounded-t-lg border-t border-black/10 backdrop-blur-xs duration-300 ease-in-out dark:border-white/10 md:top-0 md:bottom-auto md:left-0 md:w-12 md:h-fit md:py-4 md:border md:rounded-none md:rounded-r-lg'>
      <ul className='flex items-center justify-center size-full gap-4 md:flex-col md:justify-start'>
        {pageList.map((item, index) => (
          <NavbarItem
            // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable list>
            key={index}
            icon={item.icon}
            action={item.action}
            view={view}
            name={item.name}
          />
        ))}
      </ul>
    </nav>
  );
}
