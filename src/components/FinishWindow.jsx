import { Window } from './Window';

export const FinishWindow = () => {
  return (
    <div className="absolute top-20 z-30 flex w-full items-center justify-center px-96">
      <Window
        windowTitle="new cat!"
        tabColor="bg-gato-yellow-2"
        bgColor="bg-gato-yellow-1"
        closeButton={true}
      >
        <div className="flex flex-col items-center px-12 py-10">
          <div className="text-center text-xl font-medium">
            You unlocked all cats!
          </div>
          <div className="my-4 text-center">Thank you for playing!</div>
        </div>
      </Window>
    </div>
  );
};
