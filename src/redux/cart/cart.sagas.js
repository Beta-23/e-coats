import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

// cart saga
export function* clearCartOnSignOut() {
  yield put(clearCart());
};

// Listener
export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
};