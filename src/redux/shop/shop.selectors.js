import { createSelector } from 'reselect';

const selectShop = state => state.shop;

// memoize selector
export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.selectShopItems
  );