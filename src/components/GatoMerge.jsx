import { CatMenu } from './CatMenu';
import { WorkBench } from './WorkBench';
import { useCatData } from '../hooks/useCatData';
import { useState, useRef } from 'react';

export const GatoMerge = () => {
    const { initialCats, combinations, unlockable } = useCatData();
    const [unlockedCats, setUnlockedCats] = useState(initialCats);
    const [workBenchItems, setWorkBenchItems] = useState([]);
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
            x >= rect.left &&
            x <= rect.right &&
            y >= rect.top &&
            y <= rect.bottom
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
            setWorkBenchItems((prevWorkBenchItems) => {
                const newWorkBenchItems = [...prevWorkBenchItems];
                newWorkBenchItems.splice(dragStartIndex, 1);
                return newWorkBenchItems;
            });
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
            setWorkBenchItems((prevWorkBenchItems) => [
                ...prevWorkBenchItems,
                name,
            ]);
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
            setUnlockedCats((prevUnlockedCats) => {
                if (!prevUnlockedCats.includes(comboVal)) {
                    if (unlockable[comboVal]) {
                        return [...prevUnlockedCats, comboVal, unlockable[comboVal]];
                    }
                    return [...prevUnlockedCats, comboVal];
                }
                return prevUnlockedCats;
            });
            setWorkBenchItems((prevWorkBenchItems) => {
                const newWorkBenchItems = [...prevWorkBenchItems];
                newWorkBenchItems[targetPosition] = comboVal;
                newWorkBenchItems.splice(startPosition, 1);
                return newWorkBenchItems;
            });
        }
    };

    return (
        <div className="flex min-h-screen w-screen flex-col bg-gato-blue-1 font-mono text-gato-blue-3">
            <div className="flex h-full w-full gap-6 p-6">
                <div ref={workBenchRef} className="w-3/4">
                    <WorkBench
                        items={workBenchItems}
                        onItemDrop={handleItemDrop}
                    />
                </div>
                <div className="w-1/4">
                    <CatMenu selectableCats={unlockedCats} />
                </div>
            </div>
        </div>
    );
};
