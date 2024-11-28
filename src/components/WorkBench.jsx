import { Item } from './Item';

export const WorkBench = ({ items, onItemDrop }) => {
    /**
     * Handles drop events triggered by items dropped over the working area.
     */
    const handleDrop = (event) => {
        event.preventDefault();
        const name = event.dataTransfer.getData('text/plain');
        const { clientX: x, clientY: y } = event;

        // If there is a name associated with the drop then pass the relevant information to the app.
        if (name) {
            onItemDrop({ name, x, y });
        }
    };

    return (
        <div
            id="drop-zone"
            className="grid h-screen grid-flow-col grid-cols-5 grid-rows-4 items-center py-7 pl-12"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
        >
            {items.map((item, key) => (
                <Item
                    key={`workbench-item-${key}`}
                    isCatMenu={false}
                    name={item}
                />
            ))}
        </div>
    );
};
