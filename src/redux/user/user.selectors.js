import { createSelector } from 'reselect';

const selectUser = state => state.user;

// memoize selector
export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);