//?PLAN
/*
Make a random nonsensical joke generator

-Joke structure: What do you call a {adj} {noun} that is {verb} {adverb} past a {location-noun}? - {number} {adj} {noun}

-create 3 arrays of adjectives nouns verbs adverbs location-nouns

-choose randomly from these arrays

-print joke the get input then say punchline

*/

const adjectives = [
    "happy",
    "sad",
    "angry",
    "excited",
    "calm",
    "beautiful",
    "ugly",
    "tall",
    "short",
    "fat",
    "thin",
    "strong",
    "weak",
    "smart",
    "stupid",
    "kind",
    "cruel",
    "funny",
    "serious",
    "quiet",
    "loud",
    "fast",
    "slow",
    "big",
    "small",
    "old",
    "young",
    "good",
    "bad",
    "new",
    "old",
    "green",
    "blue",
    "red",
    "yellow",
    "purple",
    "orange",
    "white",
    "black",
    "grey",
];
const adverbs = [
    "quickly",
    "slowly",
    "happily",
    "sadly",
    "angrily",
    "fearfully",
    "hopefully",
    "dreamily",
    "thoughtfully",
    "carefully",
    "loudly",
    "quietly",
    "softly",
    "hardly",
    "fast",
    "slow",
    "well",
    "badly",
    "really",
    "truly",
    "always",
    "never",
    "often",
    "sometimes",
    "usually",
    "rarely",
    "seldom",
    "frequently",
    "occasionally",
    "constantly",
    "continuously",
    "gradually",
    "suddenly",
    "rapidly",
    "slowly",
    "smoothly",
    "roughly",
    "easily",
    "difficultly",
    "perfectly",
    "completely",
    "totally",
    "partly",
    "mostly",
    "nearly",
    "almost",
    "very",
    "extremely",
    "incredibly",
];

const concreteNouns = [
    "table",
    "chair",
    "book",
    "pen",
    "door",
    "car",
    "tree",
    "house",
    "phone",
    "computer",
    "mountain",
    "river",
    "cloud",
    "sun",
    "moon",
    "dog",
    "cat",
    "bird",
    "fish",
    "snake",
    "apple",
    "banana",
    "orange",
    "grape",
    "pear",
    "water",
    "fire",
    "earth",
    "air",
    "stone",
    "glass",
    "metal",
    "wood",
    "plastic",
    "rubber",
    "shirt",
    "pants",
    "hat",
    "shoes",
    "watch",
];

const locations = [
    "city",
    "town",
    "village",
    "country",
    "state",
    "province",
    "island",
    "continent",
    "mountain",
    "valley",
    "desert",
    "forest",
    "ocean",
    "river",
    "lake",
    "park",
    "beach",
    "field",
    "farm",
    "school",
    "hospital",
    "restaurant",
    "airport",
    "stadium",
];
const verbs = [
    "run",
    "walk",
    "jump",
    "swim",
    "fly",
    "talk",
    "eat",
    "sleep",
    "think",
    "dream",
    "love",
    "hate",
    "cry",
    "laugh",
    "sing",
    "dance",
    "play",
    "work",
    "study",
    "read",
    "write",
    "draw",
    "paint",
    "build",
    "create",
    "destroy",
    "help",
    "hurt",
    "give",
    "take",
    "find",
    "lose",
    "know",
    "believe",
    "hope",
    "fear",
    "try",
    "fail",
    "succeed",
    "grow",
    "change",
    "improve",
    "decline",
    "begin",
    "end",
];

//What do you call a {adj} {noun} that is {verb} {adverb} past a {location-noun}? - {number} {adj} {noun}

const getRandomElement = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

const createRndJoke = () => {
    let location = getRandomElement(locations);
    let punchNoun = getRandomElement(nouns);
    if (punchNoun[punchNoun.length - 1] === "y") {
        punchNoun = punchNoun.slice(punchNoun.length - 1) + "ies";
    } else if (
        punchNoun[punchNoun.length - 1] !== "s" &&
        punchNoun[punchNoun.length - 1] !== "es" &&
        punchNoun[punchNoun.length - 1] !== "ies"
    ) {
        punchNoun += "s";
    }
    return [
        `What do you call a ${getRandomElement(adjectives)} ${getRandomElement(
            nouns
        )} that ${getRandomElement(verbs)}s ${getRandomElement(adverbs)} past ${
            location[0] === "a" ? "an" : "a"
        } ${location}`,
        `${Math.floor(Math.random() * 100) + 2} ${getRandomElement(
            adjectives
        )} ${punchNoun}s! 🤣👌👍`,
    ];
};

console.log(createRndJoke());
