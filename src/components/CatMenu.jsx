import { Item } from './Item';

export const CatMenu = ({ selectableCats }) => {
    return (
        <div className="h-screen flex-row space-y-2 overflow-y-scroll border-l-2 border-yellow-400 bg-green-900 p-3">
            {selectableCats.map((cats, index) => (
                <Item key={`item-${index}`} name={cats} isCatMenu={true} />
            ))}
        </div>
    );
};
