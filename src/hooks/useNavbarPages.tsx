'use client';
import { navbarMap } from '@/data/maps/navbar/navbarMap';
import type { INavbarFunctions } from '@/types/interfaces/INavbarFunctions';

export function useNavbarSections({
  onToMain,
  onToAbout,
  onToProject,
}: INavbarFunctions) {
  return [
    {
      ...navbarMap.about,
      action: onToAbout,
    },
    {
      ...navbarMap.main,
      action: onToMain,
    },
    {
      ...navbarMap.project,
      action: onToProject,
    },
  ];
}
