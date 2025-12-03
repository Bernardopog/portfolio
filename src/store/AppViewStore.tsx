import { create } from 'zustand';
import type { ProjectViewTypes } from '@/types/aliases/ProjectViewTypes';
import type { ViewTypes } from '@/types/aliases/ViewTypes';

interface IAppViewStore {
  currentView: ViewTypes;
  setCurrentView: (view: ViewTypes) => void;

  projectSubview: ProjectViewTypes;
  setProjectSubview: (view: ProjectViewTypes) => void;
}

export const useAppViewStore = create<IAppViewStore>((set) => ({
  currentView: 'main',
  setCurrentView: (view) => set({ currentView: view }),

  projectSubview: 'none',
  setProjectSubview: (view) => set({ projectSubview: view }),
}));
