import { create } from 'zustand';
import { useGatoStore } from './gato';

export const useLibraryStore = create((set, get) => {
  return {
    showLibraryWindow: false,

    setShowLibraryWindow: (show) => set({ showLibraryWindow: show }),
  };
});
