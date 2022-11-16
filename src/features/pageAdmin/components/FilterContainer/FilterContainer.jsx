import { useState } from 'react';
import { Filter } from '../Filter/Filter';

export const FilterContainer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mainSearch, setMainSearch] = useState('');
  const [startDate, setStartDate] = useState('20.01.2021');
  const [endDate, setEndDate] = useState('');
  const [startAmount, setStartAmount] = useState('5000');
  const [endAmount, setEndAmount] = useState('');

  const handleShowFilterButtonClick = () => {
    setIsOpen((current) => !current);
  };

  const createHandleChange =
    (setter) =>
    ({ target: { value } }) => {
      setter(value);
    };

  const createHandleReset =
    (setter) =>
    ({ target: { value } }) => {
      setter((value) => '');
    };

  const handleMainSearchChange = createHandleChange(setMainSearch);
  const handleMainSearchReset = createHandleReset(setMainSearch);

  const handleStartDateChange = createHandleChange(setStartDate);
  const handleStartDateReset = createHandleReset(setStartDate);

  const handleEndDateChange = createHandleChange(setEndDate);
  const handleEndDateReset = createHandleReset(setEndDate);

  const handleStartAmountChange = createHandleChange(setStartAmount);
  const handleStartAmountReset = createHandleReset(setStartAmount);

  const handleEndAmountChange = createHandleChange(setEndAmount);
  const handleEndAmountReset = createHandleReset(setEndAmount);

  return (
    <Filter
      onShowFilterButtonClick={handleShowFilterButtonClick}
      isOpen={isOpen}
      onMainSearchChange={handleMainSearchChange}
      onMainSearchReset={handleMainSearchReset}
      mainSearch={mainSearch}
      onStartDateChange={handleStartDateChange}
      onStartDateReset={handleStartDateReset}
      startDate={startDate}
      onEndDateChange={handleEndDateChange}
      onEndDateReset={handleEndDateReset}
      endDate={endDate}
      onStartAmountChange={handleStartAmountChange}
      onStartAmountReset={handleStartAmountReset}
      startAmount={startAmount}
      onEndAmountChange={handleEndAmountChange}
      onEndAmountReset={handleEndAmountReset}
      endAmount={endAmount}
    />
  );
};
