import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter, resetAllFilters } from '../../store/filters/filtersSlice';
import { Filter } from './Filter';

const createHandleChangeAndReset = (setter) => [
  ({ target: { value } }) => setter(value),
  () => setter(''),
];

export const FilterContainer = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [mainSearch, setMainSearch] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [amountFrom, setAmountFrom] = useState('');
  const [amountTo, setAmountTo] = useState('');
  const [statuses, setStatuses] = useState([]);

  const handleShowFilterButtonClick = () => {
    setIsOpen((current) => !current);
  };

  const [handleMainSearchChange, handleMainSearchReset] =
    createHandleChangeAndReset(setMainSearch);
  const [handleDateFromChange, handleDateFromReset] =
    createHandleChangeAndReset(setDateFrom);
  const [handleDateToChange, handleDateToReset] =
    createHandleChangeAndReset(setDateTo);
  const [handleAmountFromChange, handleAmountFromReset] =
    createHandleChangeAndReset(setAmountFrom);
  const [handleAmountToChange, handleAmountToReset] =
    createHandleChangeAndReset(setAmountTo);

  const handleStatusChange = (status) => {
    statuses.includes(status)
      ? setStatuses(statuses.filter((e) => e !== status))
      : setStatuses([...statuses, status]);
  };
  const handleStatusReset = () => {
    setStatuses([]);
  };

  const handleResetAllFiltersClick = () => {
    handleMainSearchReset();
    handleDateFromReset();
    handleDateToReset();
    handleAmountFromReset();
    handleAmountToReset();
    handleStatusReset();
    dispatch(resetAllFilters());
  };

  useEffect(() => {
    dispatch(setFilter({ mainSearch }));
  }, [mainSearch]);

  const handleApplyFilterOnClick = () => {
    dispatch(
      setFilter({
        dateFrom,
        dateTo,
        statuses,
        amountFrom,
        amountTo,
      })
    );
  };

  return (
    <Filter
      onShowFilterButtonClick={handleShowFilterButtonClick}
      isOpen={isOpen}
      onMainSearchChange={handleMainSearchChange}
      onMainSearchReset={handleMainSearchReset}
      mainSearch={mainSearch}
      onDateFromChange={handleDateFromChange}
      onDateFromReset={handleDateFromReset}
      dateFrom={dateFrom}
      onDateToChange={handleDateToChange}
      onDateToReset={handleDateToReset}
      dateTo={dateTo}
      onAmountFromChange={handleAmountFromChange}
      onAmountFromReset={handleAmountFromReset}
      amountFrom={amountFrom}
      onAmountToChange={handleAmountToChange}
      onAmountToReset={handleAmountToReset}
      amountTo={amountTo}
      onResetAllFiltersClick={handleResetAllFiltersClick}
      onStatusChange={handleStatusChange}
      statuses={statuses}
      onApplyFilterOnClick={handleApplyFilterOnClick}
    />
  );
};
