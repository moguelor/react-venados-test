# React Venados App Test [Live Demo](https://moguelor.github.io/react-venados-test/)

Project created for show knowledge in react.js, 
the required issues you could find in the next [here](https://bitbucket.org/dacodes/pruebas/src/master/Android/):  


# Started Kit

The initial structure was created by [Create React App](https://github.com/facebook/create-react-app), it's very helpul and fast when start the project.

# Get Started

* `git clone https://github.com/jmoguelruiz/react-venados-test.git`
* `cd react-venados-test`
* `yarn install`
* `yarn start`

# Structure Folder

Is used the metodology called _"Structure By Features"_ for the organization of folders, I think that is the easy way for to manage big projects.

[More Info.](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

```bash
.
├── src                       # Main code.
│   ├── common                # Reusable code.
│       ├── components        # Reusable components in react.
├── pages                     # Each module of application, is commonly defined by the direction from react/router.
│   ├── home                  # Main page.
│       ├── actions           # Redux actions. List of the differents actions.
│           ├── index.js      # Main point entry for actions. 
│       ├── api               # Api actions.
│           ├── index.js      # Main point for api actions.
│       ├── components        # Local component by module.
│           ├── index.js      # Main point for components.
│       ├── actionTypes.js    # Constants to identify what actions we have.
│       ├── constants.js      # General constants.
│       ├── Container.js      # Smart component with redux.
│       ├── index.js          # Main point of module. (actions, reducer, Container, etc).
│       ├── reducer.js        # Reducer de redux.
│       ├── selectors.js      # Getters for the state de redux.
│   ├── configureStore        # Configuration of store de redux.
│   ├── index.js              # Application point entry.
```

# Libraries.

Some libraries used.

|               |               |              
| ------------- | ------------- 
| [react](https://reactjs.org/) 
| [redux](https://es.redux.js.org/) 
| [react-redux](https://github.com/reduxjs/react-redux) 
| [react-router](https://github.com/ReactTraining/react-router) 
| [connected-react-router](https://github.com/supasate/connected-react-router) 
| [reselect](https://github.com/reduxjs/reselect) 
| [react-motion](https://github.com/chenglou/react-motion) 
| [glamor](https://github.com/threepointone/glamor) 
| [redux-thunk](https://github.com/reduxjs/redux-thunk) 
| [redux-api-middleware](https://github.com/agraboso/redux-api-middleware) 
| [moment](https://momentjs.com/)
| [react-modal](https://github.com/reactjs/react-modal) 
| [prop-types](https://github.com/facebook/prop-types) 
| [immutability-helper](https://github.com/kolodny/immutability-helper) 
| [redux-immutable-state-invariant](https://github.com/leoasis/redux-immutable-state-invariant) 

