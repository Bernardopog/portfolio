import { create } from 'zustand';

interface ICourseStore {
  selectedCourse: string | null;
  selectCourse: (course: string | null) => void;
}

export const useCourseStore = create<ICourseStore>()((set) => ({
  selectedCourse: null,
  selectCourse: (course: string | null) => set({ selectedCourse: course }),
}));
