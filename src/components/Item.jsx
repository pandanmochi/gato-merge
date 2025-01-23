import { useEffect, useRef } from 'react';

export const Item = ({
  name,
  isCatMenu = false,
  isLibrary = false,
  onClick,
}) => {
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

  const handleClick = () => {
    if (onClick) {
      onClick(name);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={
        'flex h-32 items-center space-x-3 hover:cursor-pointer ' +
        (isLibrary ? 'flex-col' : 'flex-row')
      }
    >
      <img
        src={`/assets/images/cats/${name}.png`}
        className={'h-28 w-28 object-contain'}
        alt={name}
        draggable={isLibrary ? false : true}
        ref={itemRef}
      />
      {(isCatMenu || isLibrary) && <div className="text-center">{name}</div>}
    </div>
  );
};
