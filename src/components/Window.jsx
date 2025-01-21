import PropTypes from 'prop-types';

export const Window = ({ children, windowTitle, tabColor, bgColor }) => {
  return (
    <div
      className={`h-full rounded-lg border-2 border-gato-blue-2 shadow-gato ${bgColor ? bgColor : 'bg-gato-yellow-1'}`}
    >
      <div
        className={`rounded-t-md border-b-2 border-gato-blue-2 px-3 py-2 font-semibold ${tabColor ? tabColor : 'bg-gato-violet'}`}
      >
        {windowTitle}
      </div>
      <div className={`rounded-b-md`}>{children}</div>
    </div>
  );
};

Window.propTypes = {
  children: PropTypes.node.isRequired,
  windowTitle: PropTypes.string,
  tabColor: PropTypes.string,
  bgColor: PropTypes.string,
};
