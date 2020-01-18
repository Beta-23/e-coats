import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

// memoize selector
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);
  