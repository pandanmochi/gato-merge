import { CatMenu } from './CatMenu';
import { WorkBench } from './WorkBench';
import { useRef } from 'react';
import { NewCatWindow } from './NewCatWindow';
import { useGatoStore } from '../stores/gato';
import { RetireWindow } from './RetireWindow';
import { useLibraryStore } from '../stores/library';
import { Library } from './Library';

export const GatoMerge = () => {
  const {
    workBenchItems,
    addToWorkbenchItems,
    removeWorkBenchItem,
    removeNameFromWorkBench,
    mergeItems,
    newCatName,
    newCatIsFinal,
    setNewCatIsFinal,
    setNewCatName,
    showNewCatWindow,
    setShowNewCatWindow,
    retiredCatA,
    retiredCatB,
    setRetiredCatA,
    setRetiredCatB,
    showRetiredWindowA,
    showRetiredWindowB,
    setShowRetiredWindowA,
    setShowRetiredWindowB,
    hasChildrenLeft,
    menu,
    addToMenu,
    removeNameFromMenu,
    addToUnlockedCats,
    presents,
    combinations,
    finalCats,
    unlockedCats,
  } = useGatoStore();

  const { showLibraryWindow, setShowLibraryWindow } = useLibraryStore();

  const workBenchRef = useRef(null);

  /**
   * Checks if a point is inside the rectangle containing the element.
   * @param {Element} element
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  const isInsideRect = (element, x, y) => {
    const rect = element.getBoundingClientRect();
    return (
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    );
  };

  /**
   * Handles the drop of an item over the work bench area.
   * @param {Object} eventData
   * @param {string} eventData.name
   * @param {number} eventData.x
   * @param {number} eventData.y
   * @param {number?} eventData.initialX
   * @param {number?} eventData.initialY
   */
  const handleItemDrop = ({ name, x, y, initialX, initialY }) => {
    const dropZone = document.querySelector('#drop-zone');
    const trashcan = document.querySelector('#trashcan');

    const dropZoneChildren = Array.from(dropZone.children);

    // Find the index of the drop target
    const dropTargetIndex = dropZoneChildren.findIndex((child) => {
      return isInsideRect(child, x, y);
    });

    // Find the index of the item being dragged
    const dragStartIndex = dropZoneChildren.findIndex((child) => {
      return isInsideRect(child, initialX, initialY);
    });

    // If the item is dropped over the trashcan, remove it from the workbench.
    if (
      isInsideRect(trashcan, x, y) &&
      isInsideRect(dropZone, initialX, initialY)
    ) {
      removeWorkBenchItem(dragStartIndex);
      return;
    }

    if (dropTargetIndex !== -1) {
      mergeCats(
        workBenchItems[dropTargetIndex],
        name,
        dropTargetIndex,
        dragStartIndex
      );
    } else if (
      dropTargetIndex === -1 &&
      !isInsideRect(dropZone, initialX, initialY)
    ) {
      addToWorkbenchItems(name);
    }
  };

  /**
   * Attempts to merge two cats into one.
   * @param {string} catA
   * @param {string} catB
   * @param {number} targetPosition
   */
  const mergeCats = (catA, catB, targetPosition, startPosition) => {
    console.log(catA, catB, targetPosition);
    const comboKey = [catA, catB].sort().join(', ');
    const comboVal = combinations[comboKey];

    if (typeof comboVal === 'string') {
      mergeItems(startPosition, targetPosition, comboVal);

      if (!menu.includes(comboVal)) {
        if (!finalCats.includes(comboVal)) {
          addToMenu(comboVal);
          setNewCatIsFinal(false);
          console.log(newCatIsFinal);
        } else {
          setNewCatIsFinal(true);
          removeNameFromWorkBench(comboVal);
        }
        addToUnlockedCats(comboVal);
        setNewCatName(comboVal);
        setShowNewCatWindow(true);

        if (!hasChildrenLeft(catA)) {
          setRetiredCatA(catA);
          setShowRetiredWindowA(true);
          removeNameFromMenu(catA);
          removeNameFromWorkBench(catA);
          console.log(`${catA} has no children left`);
        }

        if (!hasChildrenLeft(catB)) {
          setRetiredCatB(catB);
          setShowRetiredWindowB(true);
          removeNameFromMenu(catB);
          removeNameFromWorkBench(catB);
          console.log(`${catB} has no children left`);
        }
      }
    }
  };

  /**
   * Closes the new cat window.
   * @returns {void}
   * */
  const closeNewCatWindow = () => {
    setShowNewCatWindow(false);
  };

  /**
   * Closes the retired Cat window A.
   * @returns {void}
   * */
  const closeRetiredWindowA = () => {
    setShowRetiredWindowA(false);
  };

  /**
   * Closes the retired cat window B.
   * @returns {void}
   * */
  const closeRetiredWindowB = () => {
    setShowRetiredWindowB(false);
  };

  /**
   * Opens the library window.
   * @returns {void}
   * */
  const openLibrary = () => {
    setShowLibraryWindow(true);
  };

  /**
   * Closes the library window.
   * @returns {void}
   * */
  const closeLibrary = () => {
    setShowLibraryWindow(false);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col bg-gato-blue-1 font-mono text-gato-blue-3">
      <div className="flex h-full w-full gap-6 p-6">
        <div ref={workBenchRef} className="w-3/4">
          <WorkBench
            items={workBenchItems}
            onItemDrop={handleItemDrop}
            onOpenLibrary={openLibrary}
          />
        </div>
        <div className="w-1/4">
          <CatMenu selectableCats={menu} presents={presents} />
        </div>
        {showNewCatWindow && (
          <NewCatWindow
            name={newCatName}
            onClose={closeNewCatWindow}
            isFinal={newCatIsFinal}
          />
        )}
        {showRetiredWindowA && (
          <RetireWindow name={retiredCatA} onClose={closeRetiredWindowA} />
        )}
        {showRetiredWindowB && (
          <RetireWindow name={retiredCatB} onClose={closeRetiredWindowB} />
        )}
        {showLibraryWindow && (
          <Library unlockedCats={unlockedCats} onClose={closeLibrary} />
        )}
      </div>
    </div>
  );
};
