### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a JavaScript library for building user interfaces, particularly single-page applications. 
    You would use React when you want to build a fast, scalable, and simple web application. It allows you to create reusable UI components, which can significantly speed up your development process. React also uses a virtual DOM to improve performance by minimizing direct manipulation of the HTML DOM and batch updating changes.


- What is Babel?
    Babel is a popular tool for JavaScript that is mainly used to convert ECMAScript 2015+ (ES6+) code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. 


- What is JSX?
    JSX (JavaScript XML) is a syntax extension for JavaScript, primarily used with React to describe what the UI should look like. It might remind you of a template language, but it comes with the full power of JavaScript.

- How is a Component created in React?
    In React, a component can be created in two ways: as a function component or as a class component. A Function component is a JavaScript function that returns a React element. A class component is a more feature rich way to define a component. It is a class that extends React.Component.

- What are some difference between state and props?
    Both props and state are plain JavaScript objects that hold information, but they behave differently. Props are passed into a component from its parent and are read-only values. State on the other hand is managed within the component and has values that persist beyond renders.

- What does "downward data flow" refer to in React?
    "Downward data flow" in React refers to the concept that state is passed from parent components down to their child components through props. This means that a child component cannot directly modify its own props but can only be given new props by its parent component.

- What is a controlled component?
    In React, a "controlled component" is a component where the state of the form's input element data is handled by the state within the component. This means that every state mutation will have an associated handler function.


- What is an uncontrolled component?
    In React, an "uncontrolled component" is a component where the form data is handled by the DOM itself, not by the React component state. This means that instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.


- What is the purpose of the `key` prop when rendering a list of components?
    The `key` prop in React is used when rendering a list of components to give each component a unique identifier. It helps React identify which items have changed, are added, or are removed when the list changes.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Indecies can change if the order of values stored in an array shift, this makes the key of elements fluid which can lead to problems with identifying the proper element by key.

- Describe useEffect.  What use cases is it used for in React components?
    `useEffect` is a hook in React that allows you to perform side effects in function components. Side effects could be data fetching, subscriptions, or manually changing the DOM, among other things. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    `useRef` is a hook in React that allows you to create a mutable "ref" object whose `.current` property is initialized with the passed argument. The returned object will persist for the full lifetime of the component.


- When would you use a ref? When wouldn't you use one?
    Refs are useful in managing focus, text selection, media playback, triggering imperative animations and integrating with third-party DOM. They shouldn't be used if changes to the value are intended to lead to a re-render and they can't be used to share values between components.

- What is a custom hook in React? When would you want to write one?
    In React, a custom hook is a JavaScript function that starts with `use` and that may call other hooks. Custom hooks allow you to extract component logic into reusable functions.

    You would want to write a custom hook when you want to share logic between different components or to make your components simpler and easier to understand. 

    For example, you might have several components that fetch data from an API. Instead of duplicating the data fetching logic in each component, you can extract it into a custom hook.
