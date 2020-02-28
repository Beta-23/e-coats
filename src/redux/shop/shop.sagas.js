import { takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

// Saga to handle async
export function* fetchCollectionsAsync() {
    yield console.log('I have fired');
}

export function* fetchCollectionsStart() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}