import { Item } from './Item';
import { Window } from './Window';

export const WorkBench = ({ items, onItemDrop }) => {
  /**
   * Handles drop events triggered by items dropped over the working area.
   */
  const handleDrop = (event) => {
    event.preventDefault();
    const name = event.dataTransfer.getData('text/plain');
    const initialX = event.dataTransfer.getData('initialX');
    const initialY = event.dataTransfer.getData('initialY');
    const { clientX: x, clientY: y } = event;

    // If there is a name associated with the drop then pass the relevant information to the app.
    if (name) {
      onItemDrop({ name, x, y, initialX, initialY });
    }
  };

  return (
    <Window
      windowTitle="gato-merge"
      tabColor="bg-gato-pink-2"
      bgColor="bg-gato-pink-1"
    >
      <div className="h-[calc(100vh-100px)] p-7">
        <div
          id="drop-zone"
          className="relative grid h-[95%] grid-flow-col grid-cols-5 grid-rows-4 items-center rounded-md border-2 border-gato-blue-2 bg-blue-checkerboard bg-cover p-6 shadow-inner"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {items.map((item, key) => (
            <Item key={`workbench-item-${key}`} isCatMenu={false} name={item} />
          ))}
          <img
            id="trashcan"
            src="/src/assets/images/icons/trash-icon.svg"
            className="absolute bottom-4 right-4 h-12 w-12"
          />
        </div>
        <div className="">hello</div>
      </div>
    </Window>
  );
};
