import { create } from 'zustand';
import { useCatData } from '../hooks/useCatData';

export const useGatoStore = create((set, get) => {
  const { initialCats, combinations, unlockable } = useCatData();

  return {
    menu: initialCats,
    workBenchItems: [],
    presents: [],
    newCatName: '',
    showNewCatWindow: false,
    retiredCat: '',
    showRetiredwindow: false,
    combinations,
    unlockable,

    setMenu: (cats) => set({ menu: cats }),
    setNewCatName: (name) => set({ newCatName: name }),
    setPresents: (presents) => set({ presents }),
    setShowNewCatWindow: (show) => set({ showNewCatWindow: show }),
    setShowRetiredWindow: (show) => set({ showRetiredwindow: show }),
    setWorkBenchItems: (items) => set({ workBenchItems: items }),

    addToWorkbenchItems: (name) => {
      const { workBenchItems } = get();
      set({ workBenchItems: [...workBenchItems, name] });
    },

    removeWorkBenchItem: (index) => {
      const { workBenchItems } = get();
      const newWorkBenchItems = [...workBenchItems];
      newWorkBenchItems.splice(index, 1);
      set({ workBenchItems: newWorkBenchItems });
    },

    addToMenu: (name) => {
      const { menu, presents } = get();
      if (unlockable[name]) {
        set({ presents: [...presents, unlockable[name]] });
        set({ menu: [...menu, name, 'present'] });
      } else {
        set({ menu: [...menu, name] });
      }
    },

    removeFromMenu: (index) => {
      const { menu } = get();
      const newMenu = [...menu];
      if (newMenu[index]) {
        newMenu.splice(index, 1);
        set({ menu: newMenu });
      }
    },

    mergeItems: (startPosition, targetPosition, newCat) => {
      const { workBenchItems } = get();
      const newWorkBenchItems = [...workBenchItems];
      newWorkBenchItems[targetPosition] = newCat;
      newWorkBenchItems.splice(startPosition, 1);
      set({ workBenchItems: newWorkBenchItems });
    },

    getPresentToOpen: () => {
      const { presents } = get();
      const newPresents = [...presents];
      const cat = newPresents.shift();
      set({ presents: newPresents });
      return cat;
    },
  };
});
