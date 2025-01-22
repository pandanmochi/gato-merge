import { create } from 'zustand';

export const useLibraryStore = create((set) => {
  return {
    showLibraryWindow: false,
    showSelection: true,
    showAbout: false,
    currentAboutCat: '',

    setShowLibraryWindow: (show) => set({ showLibraryWindow: show }),
    setShowSelection: (show) => set({ showSelection: show }),
    setShowAbout: (show) => set({ showAbout: show }),
    setCurrentAboutCat: (name) => set({ currentAboutCat: name }),
  };
});
