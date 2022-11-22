import { configureStore } from '@reduxjs/toolkit';
import { orderListReducer } from './features/PageAdmin/';

export const store = configureStore({
  reducer: orderListReducer,
});
