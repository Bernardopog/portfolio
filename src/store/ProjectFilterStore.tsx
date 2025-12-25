import { create } from 'zustand';
import type { TechNameType } from '@/types/aliases/TechNameType';
import type { SourceType } from '@/types/interfaces/IProject';

interface IProjectFilterStore {
  filterTechList: TechNameType[];
  filterSource: SourceType | null;

  addToTechList: (tech: TechNameType) => void;
  removeFromTechList: (tech: TechNameType) => void;
  clearTechList: () => void;

  setFilterSource: (source: SourceType) => void;
}

export const useProjectFilterStore = create<IProjectFilterStore>()(
  (set, get) => ({
    filterTechList: [],
    filterSource: null,

    addToTechList: (tech) =>
      set((state) => ({ filterTechList: [...state.filterTechList, tech] })),
    removeFromTechList: (tech) =>
      set((state) => ({
        filterTechList: state.filterTechList.filter((t) => t !== tech),
      })),
    clearTechList: () => set({ filterTechList: [] }),

    setFilterSource: (source) =>
      set({ filterSource: source === get().filterSource ? null : source }),
  }),
);
