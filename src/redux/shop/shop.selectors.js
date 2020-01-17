import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// memoize selector
export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
  );

  