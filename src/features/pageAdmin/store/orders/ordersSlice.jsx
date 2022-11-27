import { createSlice } from '@reduxjs/toolkit';
import { ORDERS } from 'src/features/pageAdmin/mocks/orders';

const initialState = {
  orders: ORDERS,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    deleteOrders(state, { payload: { ids } }) {
      state.orders = state.orders.filter((e) => !ids.includes(e.id));
    },
    changeStatusOrders(state, { payload: { ids, status } }) {
      state.orders = state.orders.map((e) =>
        ids.includes(e.id) ? { ...e, status } : e
      );
    },
    updateOrder(state, { payload: { order } }) {
      state.orders[state.orders.findIndex((e) => e.id === order.id)] = order;
    },
  },
});

export const { deleteOrders, changeStatusOrders, updateOrder } =
  ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
