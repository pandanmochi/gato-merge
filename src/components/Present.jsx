import { useRef } from 'react';
import { useGatoStore } from '../stores/gato';

export const Present = ({ index }) => {
  const {
    setShowNewCatWindow,
    getPresentToOpen,
    addToMenu,
    setNewCatName,
    removeMenuItem,
    setNewCatIsFinal,
    addToUnlockedCats,
  } = useGatoStore();
  const itemRef = useRef(null);

  const handleClick = () => {
    const newCat = getPresentToOpen();
    removeMenuItem(index);
    addToMenu(newCat);
    addToUnlockedCats(newCat);
    setNewCatName(newCat);
    setNewCatIsFinal(false);
    setShowNewCatWindow(true);
  };

  return (
    <div
      onClick={handleClick}
      className="flex h-32 flex-row items-center space-x-3"
    >
      <div className="h-28 w-28 p-3">
        <img
          src={`/gato-merge/assets/images/gift.png`}
          className="object-contain"
          alt="present"
          title="Icon created by Eucalyp"
          ref={itemRef}
        />
      </div>
      <span className="text-center" /> open me!
    </div>
  );
};
