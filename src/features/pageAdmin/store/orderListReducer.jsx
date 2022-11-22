import { combineReducers } from 'redux';
import { ordersReducer } from './orders/ordersSlice';

export const orderListReducer = combineReducers({
  orders: ordersReducer,
});
