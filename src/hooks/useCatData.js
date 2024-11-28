/**
 * This hook includes relevant cat data.
 * @returns Initial cats, all unlockable cats and their combinations.
 */
export const useCatData = () => {
    const initialCats = ['el-gato', 'happy'];
    const allCats = ['el-gato', 'happy', 'standing'];
    const combinations = ['standing', ['el-gato', 'happy']];

    return {
        initialCats,
        allCats,
        combinations,
    };
};
