import { create } from 'zustand';

interface ILocaleStore {
  locale: 'pt' | 'en';
  changeLocale: (locale: 'pt' | 'en') => void;
}

export const useLocaleStore = create<ILocaleStore>()((set) => ({
  locale: 'pt',
  changeLocale: (locale) => set({ locale }),
}));
