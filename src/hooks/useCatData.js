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

  const catText = {
    'crying-thumbs':
      "They ask you how you are and you just have to say that you're fine when you're not really fine but you just can't get into it because they will never understand.",
    'el-gato': 'Die Katze.',
    standing: 'He committed several crimes.',
    maxwell: 'He looks well educated.',
    hehe: 'He is very sneaky',
    grumpy: 'Back to 2012.',
    huh: 'huh?',
    melvin: 'His name is Melvin.',
    spoingus: 'Spoingus behaved well this week.',
    banana: 'He gets bullied at school.',
    crying: 'Crying because he is stuck in this game.',
    sus: 'Feeling watched by you.',
    vibing: 'He is vibing.',
    apple: 'Can I come over and stare at you like this?',
    bop: 'Please do not get near him.',
    olli: 'He is very polite',
    nyan: 'Nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan nyan',
    smurf: 'We live, we love, we lie.',
    'milk-face': 'His Greed Was His Downfall',
    'full-of-soup': 'Please do not shake him.',
    biting: 'He meant well!',
    dissociating: 'He has no idea what you told him a minute ago.',
    smudge: '"They took my license but not my keys"',
    happy: '♫ happy happy happy ♫',
  };

  // slugs from www.knowyourmeme.com
  const about = {
    hehe: {
      slug: 'hehe-cat',
      text: 'Hehe Cat refers to a series of reaction images and image macros based on a video of a kitten staring at the camera with its mouth slightly ajar. The cat went viral on 9GAG in late July 2021 with a reaction image captioned "Hehe," with the "Not Hehe" reaction image and other macros spreading in the following months.',
    },
    maxwell: {
      slug: 'maxwell-the-cat-spinning-cat',
      text: "Maxwell the Cat, also known as Spinning Cat is a black-and-white tuxedo cat who achieved virality online in October and November 2022 after her model was first added to Garry's Mod and later used as source material for videos in which it spins around as various songs play, similar to the Horizontally Spinning Rat memes. The cat is also known as Dingus the Cat and Big Boobs, and its real name is Jess.",
    },
    'el-gato': {
      slug: 'el-gato-tiktok-sound',
      text: 'El Gato or El Cato refers to a misheard sound on TikTok from a clip in season three of the anime Demon Slayer where the character Sumo thanks Tengen Uzui and says "arigato" (thank you), leading people to think it said "el gato." As the sound spread in March 2022 on TikTok, it became associated with a trend featuring a paper cutout of a cat known as "munchkin cat papercraft," as well as other videos showing people\'s cats.',
    },
    crying: {
      slug: 'crying-cat',
      text: 'Crying Cat, also known as Sad Cat or Schmuserkadser, refers to a series of photoshopped images of cats with teary, glassy eyes to appear as though they are sad. The most common one used in memes is a photoshopped version of the Serious Cat meme, but most are typically used as reactions and image captions.',
    },
    'crying-thumbs': {
      slug: 'thumbs-up-crying-cat',
      text: 'Thumbs Up Crying Cat, also known as Thumbs Up Sad Cat, is a reaction image of a cat with photoshopped teary eyes giving a thumbs up. The image, akin to Crying Cat, is typically used to suggest sadness but with an added feeling of compliance signified by the thumbs up. Though the earliest crying cat was posted in 2014, the Thumbs Up Crying Cat was created in June 2019 and became popular on Reddit and Twitter.',
    },
    happy: {
      slug: 'happy-happy-happy-cat',
      text: 'Happy Happy Happy Cat refers to a viral video of a cat jumping behind a glass door. First appearing in 2015, versions of the clip have appeared on TikTok and YouTube, where it has been paired with the Happy Happy Happy sound effect and used in various edits and exploitables, often paired with other cats.',
    },
    grumpy: {
      slug: 'grumpy-cat',
      text: 'Grumpy Cat is the nickname given to Tardar Sauce, a snowshoe cat that rose to online fame after several pictures of her annoyed facial expressions were posted to Reddit in late September 2012.',
    },
    nyan: {
      slug: 'nyan-cat',
      text: 'Nyan Cat, also known as Pop Tart Cat, is an 8-bit animation depicting a cat with the body of a cherry Pop-Tart flying through outer space. While absurd themes like flying kittens and pastry cats have been around for some time, the surreal humor behind this particular combination has captivated YouTubers and online art communities, spawning fan illustrations as well as user-interface designs and homebrew games across multiple platforms.',
    },
    smudge: {
      slug: 'smudge-the-cat',
      text: 'Smudge the Cat, also known as Cat at Dinner Table and the handle @smudge_lord on Instagram , is a white cat who rose to fame online for appearing in a photograph seated in front of a salad plate from the Woman Yelling at a Cat meme, sometimes referred to as Confused Cat at Dinner.',
    },
    vibing: {
      slug: 'catjam-vibing-cat',
      text: 'CatJAM is a BetterTTV custom Twitch emote of a white cat rhythmically bobbing its head as if to the beat of a song. Originating from a viral video, the emote gained major success on Twitch after being enabled by multiple popular streamers, later gaining popularity as source material for memes in which the cat "vibes" to various music. The cat is also known as Vibing Cat.',
    },
    'banana-crying': {
      slug: 'sad-banana-cat',
      text: 'Sad Banana Cat refers to an image of a sad, usually crying cat in a banana suit that is often associated with the Happy Happy Happy Cat video trend.',
    },
    smurf: {
      slug: 'smurf-cat-шайлушай',
      text: 'Smurf Cat, Blue Mushroom Cat or We Live We Love We Lie, originally called Шайлушай or Shailushai in English, is a meme that began on the Russian speaking internet which gained popularity on TikTok in August 2023 in photo slideshows. The meme centers around an image of a blue, elf-like creature with a mushroom head and a cat\'s face, designed similarly to a Smurf. The creatures are called "шайлушай" in the Impact font captions, which is basically a gibberish word in Russian but is similar to the word "\u0448\u0430\u043b\u043e\u043f\u0430\u0439" which translates to "the scamp" meaning "little scoundrel" in Russian. They\'re depicted walking through a forest with a snail hanging from a stick (similar to a bindle). The predominant TikTok sound was the song "The Spectre" by Alan Walker, specifically the lyrics "We live. We love. We lie." The original image of the creature was created by artist Nate Hallinan in 2011, titled "Smurf Sighting." In September 2023, the Arabic Strawberry Elephant meme began going viral on TikTok in videos pitting it against the Smurf cat in powerscaling edits, spawning usage of other food-animal hybrids like the Pineapple Owl and Blueberry Cat.',
    },
    'full-of-soup': {
      slug: 'full-of-soup-cat',
      text: 'Full of Soup Cat refers to an image of a kitten with a large belly being held with one arm upright, captioned "Full of soup" with an arrow pointing at its swollen stomach. Starting in February 2022, the image has been used as source material for exploitable image macro memes, being humorously edited and captioned with the Full of X phrasal template.',
    },
    apple: {
      slug: 'cat-with-apples',
      text: 'Cat With Apples, also known as Apple Cat, refers to multiple photos of a white cat holding apples, varying from one apple to two apples, as well as other fruits like oranges and limes. The photos spread on social media sites like Twitter / X in early 2024, originally coming from videos on the TikTok account Good night_Meow (@goodnight.meowstar). The images trended with captions that ironically complained text "His greed," exemplified by the two apples, such as "His Greed Sickens Me" and "His Greed Was His Downfall."',
    },
    bop: {
      slug: 'pop-cat',
      text: 'Pop Cat refers to a series of videos that use two images of a cat named Oatmeal, one with its mouth closed, and the other photoshopped as if the cat is holding it wide open in the shape of an O. The images have been used to create videos in which the cat lip syncs various songs, similar to Baby Eats Camera memes.',
    },
    olli: {
      slug: 'polite-cat',
      text: 'Polite Cat, also known as He Looks Very Polite, refers to a reaction image of a cat named Ollie looking at the camera with what has been described as a "polite" expression. The image is also associated with a series of photoshop exploitables featuring mock text message conversations between a landlord and a prospective renter. Instagram user @Khan_Amon_Ra[9] has claimed ownership of the cat.',
    },
    huh: {
      slug: 'huh-cat',
      text: 'Huh? Cat is an exploitable video meme format depicting a confused or shocked-looking cat making a "huh?" sound. with its mouth open and eyes wide The clip was uploaded to TikTok in early 2023 and is often used alongside object-labeling captions text situations in which a person feels confused and lost.',
    },
    biting: {
      slug: 'cat-biting-owner-and-feeling-regret',
      text: "Cat Biting Owner And Feeling Regret refers to a viral video of a cat biting its owner's arm, to which the owner asks \"Why are you doing this?\" The cat then slowly lets its owner's arm go, as if it were really wondering why it had just attacked its owner. The video has been the subject of multiple remixes and parodies in which people imagine what was going through the cat's mind.",
    },
    dissociating: {
      slug: 'black-cat-zoning-out',
      text: 'Black Cat Zoning Out, also known as Black Cat Zoned Out or Staring Black Cat, refers to a video of a black cat staring blankly at a tan-colored cat which meme creators associated with "zoning out," pairing the video with captions related to losing focus or dissociating. The meme template trended mostly on TikTok in 2023, where creators used a greenscreen template to edit the cats over various backgrounds that coincided with the given caption. Also, TikTokers predominantly used the TikTok sound and song "aquatic ambience" by scizzie. The original video was filmed by a Japanese TikToker in March 2023.',
    },
  };

  return {
    initialCats,
    combinations,
    unlockable,
    finalCats,
    about,
    catText,
  };
};
