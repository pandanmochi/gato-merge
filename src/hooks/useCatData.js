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
    'huh, maxwell': 'dissociating',
    'hehe, maxwell': 'melvin',
    'spoingus, sus': 'vibing',
    'banana, crying': 'banana-crying',
    'crying, hehe': 'crying-thumbs',
    'olli, sus': 'huh',
    'smudge, vibing': 'apple',
    'apple, bop': 'apple-cat',
    'bop, olli': 'biting',
    'crying, melvin': 'super-crying',
    'crying, grumpy': 'smudge',
    'nyan, standing': 'smurf',
    'bop, crying': 'milk-face',
    'milk-face, standing': 'full-of-soup',
  };

  // Cats that are unlocked after a combination is made.
  const unlockable = {
    happy: 'grumpy',
    'apple-cat': 'banana',
    melvin: 'olli',
    smudge: 'nyan',
    smurf: 'bop',
  };

  const getFinalCats = () => {
    const catChildren = new Set(Object.values(combinations));
    const allCats = new Set();

    for (const key of Object.keys(combinations)) {
      const cats = key.split(', ');
      cats.forEach((cat) => allCats.add(cat));
    }

    const catsWithNoChildren = [...catChildren].filter(
      (cat) => !allCats.has(cat)
    );

    return catsWithNoChildren;
  };

  const finalCats = getFinalCats();

  // const catText = {
  //     'el-gato': 'standing',
  //     'standing': '',
  //     'maxwell': 'spoingus',
  //     'hehe': 'happy',
  //     'grumpy': 'sus',
  //     'huh': 'dissociated',
  //     'melvin': 'melvin',
  //     'spoingus': 'vibing',
  //     'banana': 'banana-crying',
  //     'crying': 'crying-thumbs',
  //     'sus': 'huh',
  //     'vibing': 'apple',
  //     'apple': 'apple-cat',
  //     'bop': 'biting',
  //     'olli': 'super-crying',
  //     'nyan': 'smurf',
  //     'smurf': '',
  //     'milk-face': 'full-of-soup',
  //     'full-of-soup': ''
  // }

  return {
    initialCats,
    combinations,
    unlockable,
    finalCats,
  };
};
