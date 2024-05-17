// Object called stories that contains an array of objects with the following keys: title, text, words.
const story1 = {
    title: "Fairytale",
    text: "Once upon a time, there was a {adjective} princess named {name}. She lived in a {place} and had a {adjective} {animal} named {animalName}.",
    words: ["adjective", "name", "place", "animal", "animalName"],
};
const story2 = {
    title: "Mystery",
    text: "It was a dark and {adjective} night. {name} was walking down the street when they saw a {adjective} {animal}.",
    words: ["adjective", "name", "animal"],
};
const story3 = {
    title: "Sci-Fi",
    text: "In the year {year}, {name} traveled to {place} in a {vehicle}. They met a {adjective} {animal} named {animalName}.",
    words: ["year", "name", "place", "vehicle", "adjective", "animal", "animalName"],
};

const stories = [story1, story2, story3];

export default stories;