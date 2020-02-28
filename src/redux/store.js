import { createStore, applyMiddleware } from 'redux';

// Local storage/sessions redux library
import { persistStore } from 'redux-persist';

// Middlewares logger from redux
import logger from 'redux-logger';

// Middlewares Saga for redux store
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
// checks wheather in develpoment or production to call logger middleware
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);