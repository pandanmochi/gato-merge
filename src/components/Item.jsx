import { useEffect, useRef } from 'react';

export const Item = ({ name, isCatMenu = false }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const handleDragStart = (event) => {
      // Attach item name to dataTransfer for later identification.
      event.dataTransfer.setData('text/plain', name);
      // Attach the item's x and y coordinates to the dataTransfer object.
      const { clientX: x, clientY: y } = event;
      if (isCatMenu) return;
      event.dataTransfer.setData('initialX', x);
      event.dataTransfer.setData('initialY', y);
    };

    // Listen to drag starts.
    const refCurrent = itemRef.current;
    refCurrent.addEventListener('dragstart', handleDragStart);

    // Remove the listener when unmounting the component.
    return () => {
      refCurrent.removeEventListener('dragstart', handleDragStart);
    };
  }, [name]);

  return (
    <div className="flex h-32 flex-row items-center space-x-3">
      <img
        src={`/src/assets/images/cats/${name}.png`}
        className="h-28 w-28 object-contain"
        alt={name}
        draggable={true}
        ref={itemRef}
      />
      {isCatMenu && <span className="text-center">{name}</span>}
    </div>
  );
};
