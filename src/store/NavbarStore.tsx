import { create } from 'zustand';

interface INavbarStore {
  isNavbarBlocked: boolean;
  blockNavbar: () => void;
  unblockNavbar: () => void;
}

export const useNavbarStore = create<INavbarStore>((set) => ({
  isNavbarBlocked: false,
  blockNavbar: () => set({ isNavbarBlocked: true }),
  unblockNavbar: () => set({ isNavbarBlocked: false }),
}));
