import clsx from 'clsx';

/**
 * Item consisting of cat image and label.
 * @param {Object} props
 * @param {string} props.name
 * @param {boolean} props.isCatMenu
 */
export const Item = ({ name, isCatMenu = false }) => {
    return (
        <div className="flex h-32 flex-row items-center space-x-3">
            <img
                src={`/src/assets/png/${name}.png`}
                className={clsx('h-32 w-32 border-4 border-yellow-500')}
                alt={`Cat ${name}`}
            />
            {isCatMenu && <span className="text-center">{name}</span>}
        </div>
    );
};
