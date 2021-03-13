# React, Redux and Typescript playgroud

## Dependencies
`npm install --save-exact @types/react-redux@7.1.15 axios@0.21.1 react-redux@7.2.2 redux@4.0.5 redux-thunk@2.3.0`

## Big issues
1. Imports between files can turn into a mess very quickly
1.1. Keep imports centralized in one file "index"
2. Communicating types over to your components can be challenging
3. Type def files Redux, React-Redux and others are possibly over engineered

## References
* https://reactjs.org/docs/hooks-overview.html
* https://react-redux.js.org/using-react-redux/static-typing
* https://redux.js.org/recipes/usage-with-typescript