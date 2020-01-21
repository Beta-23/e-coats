import { createStore, applyMiddleware } from 'redux';

// Local storage/sessions redux library
import { persistStore } from 'redux-persist';

// Middlewares logger from redux
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];
// checks wheather in develpoment or production to call logger middleware
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);