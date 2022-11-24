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
  },
});

export const { deleteOrders } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
