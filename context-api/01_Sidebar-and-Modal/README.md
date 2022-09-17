# Context API concepts

- Create context using React.createContext()
- Create a Provider component by returning the context provider wrapping the ```props.children``` and pass the values that should be exposed by the provider and also the functions to update the global state (if any)
- Wrap the Provider component around the components who want to subscribe to that state (**Note:** Only children of the Provider component has access to the exposed state)
- To subscribe use the ```useContext``` hook (there used to be a Consumer component for subscribing before but with hooks it is now recommended to use the useContext hook only)
    - Most often we use a custom hook that already subscribes to the created context and returns the global state ready to be used in the child components
- Start using the global state in the child components

## Guides followed

- [Official docs](https://reactjs.org/docs/context.html)
- [John Smilga React Course](https://www.youtube.com/watch?v=iZhV0bILFb0&t=29676s)
- [John Smilga React Projects](https://www.youtube.com/watch?v=ly3m6mv5qvg&list=PLnHJACx3NwAe5XQDk9xLgym7FF8Q4FYW7&index=7&t=18982s)
