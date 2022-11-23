import { createSelector } from '@reduxjs/toolkit';

const getOrderList = (state) => state.orders.orders;
const getFilters = (state) => state.filters;

export const getOrders = createSelector(
  [getOrderList, getFilters],
  (orders, filters) => {
    const dateFrom = convertToCorrectDate(filters.dateFrom);
    const dateTo = convertToCorrectDate(filters.dateTo);
    const amountFrom = Number(filters.amountFrom);
    const amountTo = Number(filters.amountTo);

    const temp = orders.filter(
      (e) =>
        filteringBySum(Number(e.sum), amountFrom, amountTo) &&
        filteringByDate(e.date, dateFrom, dateTo) &&
        filteringByOrderNumber(e.orderNumber, filters.mainSearch) &&
        filteringByFullName(e.customer, filters.mainSearch) &&
        filteringByStatus(e.status, filters.statuses)
    );
    temp.sort((e1, e2) => sortingByField(e1, e2, filters));
    return temp;
  }
);

const sortingByField = (e1, e2, filters) => {
  if (filters.sortColumn === 'date' || filters.sortColumn === 'status') {
    return e1[filters.sortColumn] > e2[filters.sortColumn]
      ? -filters.direction
      : filters.direction;
  }
  return Number(e1[filters.sortColumn]) > Number(e2[filters.sortColumn])
    ? -filters.direction
    : filters.direction;
};

const filteringByStatus = (status, filtersStatuses) =>
  filtersStatuses.length === 0
    ? true
    : filtersStatuses.some((e) => e === status);

const filteringByOrderNumber = (number, filter) =>
  filter && isNaN(filter) ? true : number.startsWith(filter);

const filteringByFullName = (fullName, filter) =>
  !isNaN(filter) ? true : fullName.startsWith(filter);

const filteringBySum = (sum, min, max) => {
  const res1 = min ? sum >= min : Number.MIN_SAFE_INTEGER;
  const res2 = max ? sum <= max : Number.MAX_SAFE_INTEGER;
  return res1 && res2;
};

const filteringByDate = (date, min, max) => {
  const res1 = !isNaN(min) ? Date.parse(date) >= min : true;
  const res2 = !isNaN(max) ? Date.parse(date) <= max : true;
  return res1 && res2;
};

const convertToCorrectDate = (value) => {
  value = value.split('.');
  value = Date.parse(`${value[2]}.${value[1]}.${value[0]}`);
  return value;
};
