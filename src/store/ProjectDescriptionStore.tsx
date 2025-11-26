import { create } from 'zustand';

interface IProjectDescriptionStore {
  isChallengeOpen: boolean;
  isDescriptionOpen: boolean;
  isFeaturesOpen: boolean;
  isFuturePlansOpen: boolean;
  isHighlightsOpen: boolean;
  isLearningsOpen: boolean;
  isTechStackOpen: boolean;

  toggleField: (field: keyof IProjectDescriptionStore) => void;
  closeAll: () => void;
  openAll: () => void;
}

export const useProjectDescriptionStore = create<IProjectDescriptionStore>(
  (set) => ({
    isChallengeOpen: true,
    isDescriptionOpen: true,
    isFeaturesOpen: true,
    isFuturePlansOpen: true,
    isHighlightsOpen: true,
    isLearningsOpen: true,
    isTechStackOpen: true,

    toggleField: (field) =>
      set((state) => ({
        [field]: !state[field],
      })),

    closeAll: () =>
      set(() => ({
        isChallengeOpen: false,
        isDescriptionOpen: false,
        isFeaturesOpen: false,
        isFuturePlansOpen: false,
        isHighlightsOpen: false,
        isLearningsOpen: false,
        isTechStackOpen: false,
      })),

    openAll: () =>
      set(() => ({
        isChallengeOpen: true,
        isDescriptionOpen: true,
        isFeaturesOpen: true,
        isFuturePlansOpen: true,
        isHighlightsOpen: true,
        isLearningsOpen: true,
        isTechStackOpen: true,
      })),
  }),
);
