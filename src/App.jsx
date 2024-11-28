import { WorkBench } from './components/WorkBench';
import { CatMenu } from './components/CatMenu';
import { useCatData } from './hooks/useCatData';
import { useState } from 'react';

const App = () => {
    const { initialCats, allCats, combinations } = useCatData();

    const [workBenchCats, setWorkBenchCats] = useState();
    const [unlockedCats, setUnlockedCats] = useState(initialCats);

    /**
     * Attempts to merge two cats.
     * @param {string} catA
     * @param {string} catB
     */
    const mergeCats = (catA, catB) => {};

    const handleMerge = (catA, catB) => {};

    return (
        <div className="flex h-screen w-screen flex-col bg-orange-950 text-white">
            <div className="flex h-full w-full">
                <div className="w-3/4">
                    <WorkBench
                        workBenchCats={workBenchCats}
                        onMerge={handleMerge}
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
