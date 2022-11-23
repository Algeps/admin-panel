import { combineReducers } from 'redux';
import { filtersReducer } from './filters/filtersSlice';
import { ordersReducer } from './orders/ordersSlice';

export const orderListReducer = combineReducers({
  orders: ordersReducer,
  filters: filtersReducer,
});
