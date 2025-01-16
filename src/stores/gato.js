import { create } from 'zustand';
import { useCatData } from '../hooks/useCatData';

export const useGatoStore = create((set, get) => {
  const { initialCats, combinations, unlockable } = useCatData();

  return {
    unlockedCats: initialCats,
    newCatName: '',
    presents: [],
    showNewCatWindow: false,
    workBenchItems: [],
    combinations,
    unlockable,

    setUnlockedCats: (cats) => set({ unlockedCats: cats }),
    setNewCatName: (name) => set({ newCatName: name }),
    setPresents: (presents) => set({ presents }),
    setShowNewCatWindow: (show) => set({ showNewCatWindow: show }),
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

    addUnlockedCat: (name) => {
      const { unlockedCats, presents } = get();
      if(unlockable[name]) {
        set({ presents: [...presents, unlockable[name]] });
        set({ unlockedCats: [...unlockedCats, name, unlockable[name]]})
      } else {
        set({ unlockedCats: [...unlockedCats, name]})
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
      let { presents } = get();
      const cat = presents.shift();
      set({ presents: presents })
      return cat;
    },
  };
});
