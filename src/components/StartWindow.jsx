import { Window } from './Window';

export const StartWindow = ({ onClose }) => {
  return (
    <div className="absolute top-24 z-30 flex w-full items-center justify-center px-96">
      <Window
        windowTitle="hello"
        tabColor="bg-gato-yellow-2"
        bgColor="bg-gato-yellow-1"
        closeButton={true}
        onClose={onClose}
      >
        <div className="flex flex-col px-12 py-10">
          <h1 className="text-center text-xl font-bold">
            Welcome to gato-merge!
          </h1>
          <p className="my-4">
            gato-merge is a game where you try to merge together two cats to
            acquire another cat. New cats unlock new combinations, which will
            eventually lead you to the final cats!
          </p>
          <h2 className="my-4 font-semibold">Tips for playing</h2>
          <ul className="list-decimal pl-8">
            <li>
              You will start with a set of base cats. Try merging the base cats
              with each other before involving new cats!
            </li>
            <li>
              Cats that are no longer needed for combinations will retire from
              the menu.
            </li>
            <li>
              Sometimes, you will receive a present inside your menu after
              unlocking a cat.
            </li>
            <li>
              Unlocked cats can be found in your library, where you can read
              more about them.
            </li>
          </ul>
          <p className="my-4">Have fun playing!</p>
          <div className="h-20 w-full text-center">
            <button
              onClick={onClose}
              className="mt-4 rounded-md border-2 border-gato-blue-2 bg-gato-violet px-6 py-2 shadow-gato-2 hover:mt-5 hover:shadow-none"
            >
              start
            </button>
          </div>
        </div>
      </Window>
    </div>
  );
};
