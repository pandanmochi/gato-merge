import { Item } from './Item';
import { Window } from './Window';

export const CatMenu = ({ selectableCats }) => {
    return (
        <Window windowTitle="cat-menu">
            <div className="h-[calc(100vh-100px)] flex-row space-y-2 overflow-y-scroll p-3">
                {selectableCats.map((cats, index) => (
                    <Item key={`item-${index}`} name={cats} isCatMenu={true} />
                ))}
            </div>
        </Window>
    );
};
