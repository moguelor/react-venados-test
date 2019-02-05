import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import createRootReducer from './pages/main/reducer';
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

export default function configureStore(preloadedState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        apiMiddleware
      ),
    ),
  )

  if (module.hot) {
    module.hot.accept('./pages/main/reducer', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store;
}