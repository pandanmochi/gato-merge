import { Window } from './Window';
import { Item } from './Item';
import { About } from './About';
import { useLibraryStore } from '../stores/library';

export const Library = ({ onClose, unlockedCats }) => {
  const {
    showSelection,
    setShowSelection,
    showAbout,
    setShowAbout,
    currentAboutCat,
    setCurrentAboutCat,
  } = useLibraryStore();

  const handleItemClick = (name) => {
    setCurrentAboutCat(name);
    setShowSelection(false);
    setShowAbout(true);
  };

  const backToSelection = () => {
    setShowAbout(false);
    setShowSelection(true);
  };

  return (
    <div className="absolute top-20 z-30 flex h-4/5 items-center justify-center px-96">
      <Window
        windowTitle="library"
        tabColor="bg-gato-yellow-2"
        bgColor="bg-gato-yellow-1"
        closeButton={true}
        onClose={onClose}
      >
        <div className="">
          {showSelection && (
            <div className="grid grid-cols-4 items-center gap-10 px-12 py-10">
              {unlockedCats.map((cat, index) => {
                return (
                  <Item
                    key={index}
                    name={cat}
                    isLibrary={true}
                    onClick={handleItemClick}
                  />
                );
              })}
            </div>
          )}
          {showAbout && (
            <About name={currentAboutCat} onGoBack={backToSelection} />
          )}
        </div>
      </Window>
    </div>
  );
};
