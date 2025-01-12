import { CatMenu } from './CatMenu';
import { WorkBench } from './WorkBench';
import { useCatData } from '../hooks/useCatData';
import { useState, useRef } from 'react';

export const GatoMerge = () => {
    const { initialCats, combinations } = useCatData();
    const [unlockedCats, setUnlockedCats] = useState(initialCats);
    const [workBenchItems, setWorkBenchItems] = useState([]);
    const workBenchRef = useRef(null);

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
        const dropZone = document.querySelector('#drop-zone')
        const dropZoneChildren = Array.from(dropZone.children);
        const dropTargetIndex = dropZoneChildren.findIndex((child) => {
            console.log(child);
            const rect = child.getBoundingClientRect();
            return (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom
            );
        });
        const dragStartIndex = dropZoneChildren.findIndex((child) => {
            const rect = child.getBoundingClientRect();
            return (
                initialX >= rect.left &&
                initialX <= rect.right &&
                initialY >= rect.top &&
                initialY <= rect.bottom
            );
        });

        const trashcan = document.querySelector('#trashcan');
        const trashcanRect = trashcan.getBoundingClientRect();
        if (
            x >= trashcanRect.left &&
            x <= trashcanRect.right &&
            y >= trashcanRect.top &&
            y <= trashcanRect.bottom
        ) {
            setWorkBenchItems((prevWorkBenchItems) => {
                const newWorkBenchItems = [...prevWorkBenchItems];
                newWorkBenchItems.splice(dragStartIndex, 1);
                return newWorkBenchItems;
            });
            return;
        }

        if (
            dropTargetIndex !== -1 &&
            workBenchItems[dropTargetIndex] !== name
        ) {
            mergeCats(workBenchItems[dropTargetIndex], name, dropTargetIndex, dragStartIndex);
        } else if (dropTargetIndex === -1) {
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
        <div className="font-mono text-gato-blue-3 flex w-screen min-h-screen flex-col bg-gato-blue-1">
            <div className="flex h-full w-full p-6 gap-6">
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
