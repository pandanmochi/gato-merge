import { Item } from './Item';
import { Present } from './Present';
import { Window } from './Window';

export const CatMenu = ({ selectableCats }) => {
    return (
        <Window windowTitle="cat-menu">
            <div className="h-[calc(100vh-100px)] flex-row space-y-2 overflow-y-scroll p-3">
                {selectableCats.map((cat, index) => {
                    if (cat === 'present') {
                        return <Present key={index} index={index} />;
                    } else {
                        return (
                            <Item
                                key={index}
                                name={cat}
                                isCatMenu={true}
                            />
                        );
                    }
                })}
            </div>
        </Window>
    );
};
