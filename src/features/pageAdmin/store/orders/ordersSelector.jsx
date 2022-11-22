import { createSelector } from '@reduxjs/toolkit';

const getOrderList = (state) => state.orders.orders;

export const getOrders = createSelector([getOrderList], (orders) => {
  return orders;
});
