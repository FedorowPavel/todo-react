import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

export function configureStore(initialStore) {
  return createStore(
    reducers,
    initialStore,
    compose(
      applyMiddleware(...getDefaultMiddleware()),
      window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
}
