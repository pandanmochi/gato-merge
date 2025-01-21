import PropTypes from 'prop-types';
import { Window } from './Window';

export const NewCatWindow = ({ name, onClose, isFinal }) => {
  return (
    <div className="absolute top-20 z-30 flex w-full items-center justify-center">
      <Window
        windowTitle="new cat!"
        tabColor="bg-gato-yellow-2"
        bgColor="bg-gato-yellow-1"
      >
        <div className="flex flex-col items-center px-12 py-10">
          <div className="text-center text-xl font-medium">{name}</div>
          <img
            src={`src/assets/images/cats/${name}.png`}
            className="h-80 w-80 object-contain"
          />
          <div className="text-center">He is very sneaky</div>
          {isFinal && (
            <div className="text-center">{`${name} has no children and is a final cat!`}</div>
          )}
          <div className="h-20 w-full text-center">
            <button
              onClick={onClose}
              className="mt-8 rounded-md border-2 border-gato-blue-2 bg-gato-violet px-6 py-2 shadow-gato-2 hover:mt-9 hover:shadow-none"
            >
              nice
            </button>
          </div>
        </div>
      </Window>
    </div>
  );
};

NewCatWindow.propTypes = {
  name: PropTypes.string,
  onClose: PropTypes.func,
};
