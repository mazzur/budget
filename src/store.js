import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './state';
import API from './api/api.facade';

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(API))
  );

  if (module.hot) {
    module.hot.accept('./state/index.js', () => {
      const nextRootReducer = require('./state/index.js');
      store.replaceReducer(nextRootReducer);
    });
  }
