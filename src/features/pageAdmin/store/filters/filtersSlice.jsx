import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainSearch: '',
  dateFrom: '',
  dateTo: '',
  amountFrom: '',
  amountTo: '',
  statuses: [],
  sortColumn: 'date',
  directionColumn: 1,
  numberOfPage: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, { payload: { key, value } }) {
      state[key] = value;
    },
    resetAllFilters() {
      return initialState;
    },
  },
});

export const { setFilter, resetAllFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
