import PropTypes from 'prop-types';

export const Window = ({
  children,
  windowTitle,
  tabColor,
  bgColor,
  closeButton = false,
  onClose,
}) => {
  return (
    <div
      className={`h-full rounded-lg border-2 border-gato-blue-2 shadow-gato ${bgColor ? bgColor : 'bg-gato-yellow-1'}`}
    >
      <div
        className={`flex items-center justify-between rounded-t-md border-b-2 border-gato-blue-2 px-3 py-2 font-semibold ${tabColor ? tabColor : 'bg-gato-violet'}`}
      >
        <div>{windowTitle}</div>
        {closeButton && (
          <div
            onClick={onClose}
            className="h-4 w-4 rounded-lg border-2 border-gato-blue-2 bg-gato-pink-2 hover:cursor-pointer"
          />
        )}
      </div>
      <div className={`h-full rounded-b-md`}>{children}</div>
    </div>
  );
};

Window.propTypes = {
  children: PropTypes.node.isRequired,
  windowTitle: PropTypes.string,
  tabColor: PropTypes.string,
  bgColor: PropTypes.string,
};
