import { createSlice } from '@reduxjs/toolkit';
import { ORDERS } from 'src/features/PageAdmin/mocks/orders';

const initialState = {
  orders: ORDERS,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
});

export const ordersReducer = ordersSlice.reducer;
