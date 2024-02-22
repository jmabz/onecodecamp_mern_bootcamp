# Lessons Learned

## React
React is a frontend library for UI development.

React introduces a virtual DOM, something like a lightweight copy of the real DOM where the inner workings of DOM manipulation would take place, before reflecting them into the real one. This increases performance when it comes to DOM manipulation.

React is component-based, which lets developers separate UI elements, working in isolation in that they don't interfere with unrelated ones, into smaller components that build a whole.

Putting the shadow DOM and component-based nature of React together, React gives you tools to build more reusable and performant code. 

As far as demand goes, React has been a popular choice for web developers and the job market alike.

### package.json & package-lock.json
These files list down metadata describing the project, along with libraries that the project relies on.

### React DOM
The bridge between React and the virtual DOM.

## Creating a React Project
While it's possible to create a React project from scratch, it's much easier to use a boilerplate and build from there. `create-react-app` makes that possible.

```bash
npx create-react-app <folder-name>
```

## JavaScript XML (JSX)
An extension to JS that allows writing HTML elements directly to JS, where these elements can be easily added to the DOM without having to use DOM manipulation functions (e.g. `createElement()` and `appendChild()`).

In its relation to React, it lets one easily build HTML elements there.

## Types of Components
React components come in two types: *functional* and *class* components. The former is more recommended since it's more concise. Furthermore, it is best to stick to one style of component in a given project.

```js
import React from 'react';

function FunctionalComponent() {
    return (
        <div className="functional-component">
            <p>I am a functional component!</p>
        </div>
    );
}

export default FunctionalComponent;
```

```js
import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return (
        <div className="class-component">
            <p>I am a class component!</p>
        </div>
    );
  }
}

export default ClassComponent;
```

## Component State
React components can hold data specific to its own purposes, called *states*. Say that you want to build a component that when you click a button within it, the number of times it has been clicked gets displayed on-screen. Internally, the number of clicks would be stored and represented as a state.

```js
import React from 'react';
import {useState} from 'react';

function SampleComponent() {
    const [timesClicked, setTimesClicked] = useState(0);

    function handleClick() {
        setTimesClicked(timesClicked + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p>The button has been clicked {timesClicked} times.</p>
        </div>
    );
}

export default SampleComponent;
```