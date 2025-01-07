import { CatMenu } from './components/CatMenu';
import { WorkBench } from './components/WorkBench';
import { useCatData } from './hooks/useCatData';
import { useState, useRef } from 'react';

const App = () => {
    const { initialCats, combinations } = useCatData();
    const [unlockedCats, setUnlockedCats] = useState(initialCats);
    const [workBenchItems, setWorkBenchItems] = useState([]);
    const workBenchRef = useRef(null);

    /**
     * Handles the drop of an item over the work bench area.
     * @param {Object} eventData
     * @param {string} eventData.name
     * @param {string} eventData.x
     * @param {string} eventData.y
     */
    const handleItemDrop = ({ name, x, y }) => {
        const workbench = workBenchRef.current.children[0];
        const workbenchChildren = Array.from(workbench.children);
        const dropTargetIndex = workbenchChildren.findIndex((child) => {
            console.log(child);
            const rect = child.getBoundingClientRect();
            return (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom
            );
        });

        if (
            dropTargetIndex !== -1 &&
            workBenchItems[dropTargetIndex] !== name
        ) {
            mergeCats(workBenchItems[dropTargetIndex], name, dropTargetIndex);
        } else {
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
     * @param {number} workBenchPosition
     */
    const mergeCats = (catA, catB, workBenchPosition) => {
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
                newWorkBenchItems[workBenchPosition] = comboVal;
                return newWorkBenchItems;
            });
        } else {
            setWorkBenchItems((prevWorkBenchItems) => [
                ...prevWorkBenchItems,
                catB,
            ]);
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

export default App;
