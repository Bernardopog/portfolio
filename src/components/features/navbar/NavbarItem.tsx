import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import Button from '@/components/ui/Button';
import type { ViewTypes } from '@/types/aliases/ViewTypes';

interface INavbarItemProps {
  icon: ReactNode;
  action: () => void;
  name: string;
  view: ViewTypes;
  label: string;
}

export default function NavbarItem({
  icon,
  action,
  name,
  view,
  label,
}: INavbarItemProps) {
  const t = useTranslations('Navbar');

  return (
    <li>
      <Button
        ariaLabel='Home'
        className={`flex items-center justify-center size-10 rounded-full border cursor-pointer duration-300 ease-in-out btn-default-color ${
          view === name &&
          'shadow-lg shadow-purple-heart-600/30 outline-1 outline-purple-600 dark:shadow-punch-600/30 dark:outline-punch-600/50'
        }`}
        action={() => action()}
        icon={icon}
        title={`${t('To')} ${label}`}
      />
    </li>
  );
}
