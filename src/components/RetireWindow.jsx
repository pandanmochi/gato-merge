import PropTypes from 'prop-types';
import { Window } from './Window';

export const RetireWindow = ({ name, onClose }) => {
  return (
    <div className="absolute bottom-12 right-12 z-20 flex w-full items-end justify-end">
      <Window
        windowTitle="retirement-notice"
        tabColor="bg-gato-blue-4"
        bgColor="bg-gato-yellow-1"
        closeButton={true}
        onClose={onClose}
      >
        <div className="px-12 py-10">
          <div className="text-center text-xl font-medium">{name}</div>
          <img
            src={`/assets/images/cats/${name}.png`}
            className="h-32 w-32 object-contain"
          />
          <div className="text-center">retired</div>
          <div className="h-20 w-full text-center">
            <button
              onClick={onClose}
              className="mt-8 rounded-md border-2 border-gato-blue-2 bg-gato-yellow-2 px-6 py-2 shadow-gato-2 hover:mt-9 hover:shadow-none"
            >
              goodbye
            </button>
          </div>
        </div>
      </Window>
    </div>
  );
};

RetireWindow.propTypes = {
  name: PropTypes.string,
  onClose: PropTypes.func,
};
