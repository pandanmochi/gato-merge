import PropTypes from 'prop-types';

export const Window = ({ children, windowTitle, tabColor, bgColor }) => {
    return (
        <div className="shadow-gato rounded-lg border-2 border-gato-blue-2">
            <div className={`rounded-t-md border-b-2 border-gato-blue-2 px-3 py-2 font-semibold ${ tabColor }`}>
                { windowTitle }
            </div>
            <div className={`rounded-b-md ${ bgColor }`}>{children}</div>
        </div>
    );
};

Window.propTypes = {
    children: PropTypes.node.isRequired,
    windowTitle: PropTypes.string,
    tabColor: PropTypes.string,
    bgColor: PropTypes.string,
};

Window.defaultProps = {
    tabColor: 'bg-gato-violet',
    bgColor: 'bg-gato-light-yellow',
};
