import { create } from 'zustand';

interface IProjectExpandedSectionStore {
  hasToResizeImage: boolean;
  setHasToResizeImage: (value: boolean) => void;
  toggleResizeImage: () => void;
}

export const useProjectExpandedSectionStore =
  create<IProjectExpandedSectionStore>((set) => ({
    hasToResizeImage: false,
    setHasToResizeImage: (value) => set(() => ({ hasToResizeImage: value })),
    toggleResizeImage: () =>
      set((state) => ({ hasToResizeImage: !state.hasToResizeImage })),
  }));
