import { Window } from './Window';
import { Item } from './Item';

export const Library = ({ onClose, unlockedCats }) => {
  return (
    <div className="absolute top-20 z-30 flex h-4/5 w-full items-center justify-center">
      <Window
        windowTitle="library"
        tabColor="bg-gato-yellow-2"
        bgColor="bg-gato-yellow-1"
        closeButton={true}
        onClose={onClose}
      >
        <div className="grid grid-cols-4 items-center gap-10 px-12 py-10">
          {unlockedCats.map((cat, index) => {
            return <Item key={index} name={cat} isLibrary={true} />;
          })}
        </div>
      </Window>
    </div>
  );
};
