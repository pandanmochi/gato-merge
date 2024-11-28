import { Item } from './Item';

/**
 * Item grid for displaying a number of items in a grid.
 * @param {string[]} workBenchCats
 * @param {() => void} onMerge Function to be called when two cats are merging.
 */
export const WorkBench = ({ workBenchCats, onMerge }) => {
    return (
        <div className="grid h-screen grid-flow-col grid-cols-5 space-x-2 p-7">
            {workBenchCats?.map((cat, index) => (
                <Item key={`item-${index}`} name={cat} />
            ))}
        </div>
    );
};
