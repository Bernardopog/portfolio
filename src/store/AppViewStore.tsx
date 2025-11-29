import { create } from 'zustand';
import type { ViewTypes } from '@/types/aliases/ViewTypes';

interface IAppViewStore {
  currentView: ViewTypes;
  setCurrentView: (view: ViewTypes) => void;
}

export const useAppViewStore = create<IAppViewStore>((set) => ({
  currentView: 'main',
  setCurrentView: (view) => set({ currentView: view }),
}));
