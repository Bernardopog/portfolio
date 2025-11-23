import { create } from 'zustand';
import type { IProject } from '@/types/interfaces/IProject';

interface IProjectSelectionStore {
  selectedProject: IProject | null;
  selectProject: (project: IProject | null) => void;
}

export const useProjectSelectionStore = create<IProjectSelectionStore>(
  (set) => ({
    selectedProject: null,
    selectProject: (project) => set({ selectedProject: project }),
  }),
);
