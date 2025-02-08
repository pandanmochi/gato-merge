import { create } from 'zustand';
import { useCatData } from '../hooks/useCatData';

export const useGatoStore = create((set, get) => {
  const { initialCats, combinations, unlockable, finalCats } = useCatData();

  return {
    unlockedCats: initialCats,
    menu: initialCats,
    workBenchItems: [],
    presents: [],
    newCatName: '',
    newCatIsFinal: false,
    showNewCatWindow: false,
    retiredCatA: '',
    retiredCatB: '',
    showRetiredWindowA: false,
    showRetiredWindowB: false,
    showStartWindow: true,
    showFinishedWindow: false,
    combinations,
    unlockable,
    finalCats,

    setNewCatName: (name) => set({ newCatName: name }),
    setRetiredCatA: (name) => set({ retiredCatA: name }),
    setRetiredCatB: (name) => set({ retiredCatB: name }),
    setNewCatIsFinal: (isFinal) => set({ newCatIsFinal: isFinal }),
    setShowNewCatWindow: (show) => set({ showNewCatWindow: show }),
    setShowRetiredWindowA: (show) => set({ showRetiredWindowA: show }),
    setShowRetiredWindowB: (show) => set({ showRetiredWindowB: show }),
    setShowFinishedWindow: (show) => set({ showFinishedWindow: show }),
    setShowStartWindow: (show) => set({ showStartWindow: show }),

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

    removeNameFromWorkBench: (name) => {
      const { workBenchItems } = get();
      const newWorkBenchItems = workBenchItems.filter((cat) => cat !== name);
      set({ workBenchItems: newWorkBenchItems });
    },

    addToUnlockedCats: (name) => {
      const { unlockedCats, presents, menu } = get();
      set({ unlockedCats: [...unlockedCats, name] });
      if (unlockable[name]) {
        set({ presents: [...presents, unlockable[name]] });
        set({ menu: [...menu, 'present'] });
      }
    },

    addToMenu: (name) => {
      const { menu } = get();
      set({ menu: [...menu, name] });
    },

    removeMenuItem: (index) => {
      const { menu } = get();
      const newMenu = [...menu];
      if (newMenu[index]) {
        newMenu.splice(index, 1);
        set({ menu: newMenu });
      }
    },

    removeNameFromMenu: (name) => {
      const { menu } = get();
      const newMenu = menu.filter((cat) => cat !== name);
      set({ menu: newMenu });
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
