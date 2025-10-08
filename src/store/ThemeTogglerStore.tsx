import { create } from "zustand";

interface IThemeTogglerStore {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;

  toggleTheme: () => void;
}

export const useThemeTogglerStore = create<IThemeTogglerStore>()((set) => ({
  isDarkMode: false,
  setIsDarkMode: (isDarkMode: boolean) => set({ isDarkMode }),
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
