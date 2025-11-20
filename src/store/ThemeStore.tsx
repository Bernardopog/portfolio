import { create } from 'zustand';

interface IThemeStore {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;

  toggleTheme: () => void;
}

export const useThemeStore = create<IThemeStore>()((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
