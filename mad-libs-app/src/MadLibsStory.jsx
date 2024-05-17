import React from 'react';

/** MadLibs Story Component
 * 
 * This component renders a story with the words filled in.
 * 
 * Props:
 * - story: an object with the following keys: title, text, words.
 * - resetStory: a function that will be called when the story is reset.
 * 
 * State: none
 */
const MadLibsStory = ({ story, resetStory }) => {
    // Handlers
    // handleClick: calls the resetStory function when the reset button is clicked.
    const handleClick = () => {
        resetStory();
    };
    // Need to fill in the words in the story text.
    const { text, words } = story;
    // Need to split the text into an array of words.
    const textArray = text.split(" ");
    // Need to iterate over the textArray and replace the words with {} in story.text with the words from the story.words object.
    const filledText = textArray.map((word, idx) => {
        console.log(`Loop ${idx}: ${word}`);
        if (word.startsWith("{") && (word.endsWith("}") || word.endsWith("}.") || word.endsWith("},"))) {
            const key = word.endsWith("}") ? word.slice(1, -1) : word.slice(1, -2);
            console.log(`Loop ${idx}: ${word} is wrapped in {}`);
            console.log(`Loop ${idx}: key is ${key}`);
            return words[key];
        } else {
            return word;
        }
    });
    // Need to join the filledText array back into a string.
    const storyText = filledText.join(" ");
    // Render
    return (
        <div className='MadLibsStory'>
            <p>{storyText}</p>
            <button className='btn' onClick={handleClick}>Reset</button>
        </div>
    )
};

export default MadLibsStory;