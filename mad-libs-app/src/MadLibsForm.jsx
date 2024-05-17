import React, { useState } from "react";

/** MadLibs Form Component
 * 
 * This component renders a form with inputs for each word type needed to complete the story. In a addition it should have a selection field with the story titles to choose from.
 * 
 * Props:
 * - stories: an array of objects with the following keys: title, text, words.
 * - selectStory: a function that will be called when the form is submitted. It should take in an object with the following keys: title, text, words.
 * 
 * State:
 * - formData: an object with the following keys: title, words.
 */
const MadLibsForm = ({ stories, selectStory }) => {
    // State
    const [formData, setFormData] = useState({ title: "", words: {} });
    // Handlers
    // handleChange: updates the formData object when a user types in an input field.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            words: {
                ...data.words,
                [name]: value,
            },
        }));
    };
    // handleSubmit: calls the selectStory function with the story object when the form is submitted.
    const handleSubmit = (e) => {
        e.preventDefault();
        const story = stories.find((story) => story.title === formData.title);
        selectStory({ ...story, words: formData.words });
    };
    // handleStoryChange: updates the formData object when a user selects a story.
    const handleStoryChange = (e) => {
        // access the value of the selected story
        const { value } = e.target;
        // find the selected story
        const story = stories.find((story) => story.title === value);
        // set the formData object with the selected story
        setFormData((data) => ({...data, title: value, words: { ...story.words }}));
    };
    // By default, the form should start on the first story.
    if (!formData.title && stories.length) {
        setFormData((data) => ({ ...data, title: stories[0].title }));
    }
    // Render
    return (
        <form className="MadLibsForm center" onSubmit={handleSubmit}>
            <label htmlFor="title">Select a Story:</label>
            <select
                id="title"
                name="title"
                value={formData.title}
                onChange={handleStoryChange}
            >
                <option value="">--Please choose a story--</option>
                {stories.map((story) => (
                    <option key={story.title} value={story.title}>
                        {story.title}
                    </option>
                ))}
            </select>
            {formData.title && (
                <>
                    <h2>{formData.title}</h2>
                    {stories.find((story) => story.title === formData.title).words.map((word) => (
                        <div key={word} className="MadLibsForm-word">
                            <label htmlFor={word}>{word}</label>
                            <input
                                type="text"
                                id={word}
                                name={word}
                                value={formData.words[word] || ""}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <button className="btn">Submit</button>
                </>
            )}
        </form>
    );
};

export default MadLibsForm;