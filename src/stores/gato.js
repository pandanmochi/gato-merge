import { create } from 'zustand';
import { useCatData } from '../hooks/useCatData';

export const useGatoStore = create((set, get) => {
  const { initialCats, combinations, unlockable } = useCatData();

  return {
    unlockedCats: initialCats,
    menu: initialCats,
    workBenchItems: [],
    presents: [],
    newCatName: '',
    showNewCatWindow: false,
    retiredCat: '',
    showRetiredWindow: false,
    combinations,
    unlockable,

    setMenu: (cats) => set({ menu: cats }),
    setNewCatName: (name) => set({ newCatName: name }),
    setRetiredCatName: (name) => set({ retiredCat: name }),
    setPresents: (presents) => set({ presents }),
    setShowNewCatWindow: (show) => set({ showNewCatWindow: show }),
    setShowRetiredWindow: (show) => set({ showRetiredWindow: show }),
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

    addToUnlockedCats: (name) => {
      const { unlockedCats } = get();
      set({ unlockedCats: [...unlockedCats, name] });
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

    hasChildrenLeft: (name) => {
      const { unlockedCats } = get();
      for (const key in combinations) {
        if (key.includes(name) && !unlockedCats.includes(combinations[key])) {
          return true;
        }
      }
      return false;
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
