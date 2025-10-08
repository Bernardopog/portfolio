import { TechNameType } from "@/types/aliases/TechNameType";
import { create } from "zustand";

interface IProjectFilterStore {
  filterTechList: TechNameType[];
  addToTechList: (tech: TechNameType) => void;
  removeFromTechList: (tech: TechNameType) => void;
  clearTechList: () => void;
}

export const useProjectFilterStore = create<IProjectFilterStore>()((set) => ({
  filterTechList: [],
  addToTechList: (tech) =>
    set((state) => ({ filterTechList: [...state.filterTechList, tech] })),
  removeFromTechList: (tech) =>
    set((state) => ({
      filterTechList: state.filterTechList.filter((t) => t !== tech),
    })),
  clearTechList: () => set({ filterTechList: [] }),
}));
