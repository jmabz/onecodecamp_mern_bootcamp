# Lessons Learned

## React Component Lifecycle
1. Initialization
    - A component's state and properties are defined here.
2. Mounting
    - All logic and effects are applied here; this takes place when a component is added to the screen.
3. Unmounting
    - Occurs when the component is removed from the screen, cleanup logic is to take place here.
4. Updating
    - Changes towards state and properties occur in this phase.

## State
In React, the state is an object containing a component's data, and when it's changed, the component re-renders in response.

## React Hooks
Functions that let you act upon React state and lifecycle events within function-based components.
One of the most commonly-used hooks is the `useState()` hook, which lets your component observe its data or properties as defined.