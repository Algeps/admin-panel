import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainSearch: '',
  dateFrom: '',
  dateTo: '',
  amountFrom: '',
  amountTo: '',
  statuses: [],
  sortColumn: 'date',
  direction: 1,
  amount: '',
  pageNumber: 1,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, { payload: { key, value } }) {
      state.pageNumber = 1;
      state[key] = value;
    },
    resetAllFilters() {
      return initialState;
    },
  },
});

export const { setFilter, resetAllFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
