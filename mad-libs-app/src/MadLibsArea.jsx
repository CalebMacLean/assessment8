import React, { useState } from "react";
import MadLibsForm from "./MadLibsForm";
import MadLibsStory from "./MadLibsStory";

/** MadLibsArea Component
 * 
 * This component renders the MadLibs logo with the MadLibsForm component or the MadLibsStory component with the story's title.
 * 
 * Props:
 * - stories: an array of objects with the following keys: title, text, words.
 * 
 * State:
 * - story: an object with the following keys: title, text, words.
 */
function MadLibsArea({ stories }) {
    // State
    const [story, setStory] = useState(null);
    // Handlers
    const selectStory = (story) => {
        setStory(story);
    };
    const resetStory = () => {
        setStory(null);
    };
    // Render
    return (
        <div className="MadLibsArea center">
            <h1>{ story ? story.title : "Madlibs!"}</h1>
            {story ? (
                <MadLibsStory story={story} resetStory={resetStory} />
            ) : (
                <MadLibsForm stories={stories} selectStory={selectStory} />
            )}
        </div>
    )
};

export default MadLibsArea;