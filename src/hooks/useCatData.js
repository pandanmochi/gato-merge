/**
 * This hook includes relevant cat data.
 * @returns Initial cats, all unlockable cats and their combinations.
 */
export const useCatData = () => {
    const initialCats = ['el-gato', 'maxwell', 'hehe', 'crying'];
    
    const combinations = {
        'el-gato, happy': 'standing',
        'el-gato, maxwell': 'spoingus',
        'el-gato, hehe': 'happy',
        'el-gato, grumpy': 'sus',
        'huh, maxwell': 'dissociated',
        'hehe, maxwell': 'melvin',
        'spoingus, sus': 'vibing',
        'banana, crying': 'banana-crying',
        'crying, hehe': 'crying-thumbs',
        'olli, sus': 'huh',
        'smudge, vibing': 'apple',
        'apple, bop': 'apple-cat',
        'bop, olli': 'biting',
        'crying, melvin': 'super-crying',
        'nyan, standing': 'smurf',
        'milk-face, standing': 'full-of-soup',
    };

    return {
        initialCats,
        combinations,
    };
};
