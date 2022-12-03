import { configureStore } from '@reduxjs/toolkit';
import { orderListReducer } from './features/pageAdmin/';

export const store = configureStore({
  reducer: orderListReducer,
});
