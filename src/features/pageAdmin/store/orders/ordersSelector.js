import { createSelector } from '@reduxjs/toolkit';
import { PAGE_SIZE } from 'src/features/pageAdmin/PageAdmin.constants';

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
      (order) =>
        filteringBySum(Number(order.sum), amountFrom, amountTo) &&
        filteringByDate(order.date, dateFrom, dateTo) &&
        filteringByOrderNumber(order.orderNumber, filters.mainSearch) &&
        filteringByFullName(order.customer, filters.mainSearch) &&
        filteringByStatus(order.status, filters.statuses)
    );
    temp.sort((order1, order2) => sortingByField(order1, order2, filters));
    return { orders: pagination(temp, filters), numberOfRows: temp.length };
  }
);

const pagination = (orders, filters) => {
  const begin = PAGE_SIZE * (filters.pageNumber - 1);
  const end = PAGE_SIZE * filters.pageNumber;
  return orders.slice(begin, end);
};

const sortingByField = (order1, order2, filters) => {
  if (filters.sortColumn === 'date' || filters.sortColumn === 'status') {
    return order1[filters.sortColumn] > order2[filters.sortColumn]
      ? -filters.direction
      : filters.direction;
  }
  return Number(order1[filters.sortColumn]) > Number(order2[filters.sortColumn])
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
  const [date, month, year] = value.split('.');
  value = Date.parse(`${date}.${month}.${year}`);
  return value;
};
