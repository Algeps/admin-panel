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

  const handleStartDateChange = createHandleChange(setStartDate);
  const handleEndDateChange = createHandleChange(setEndDate);
  const handleStartAmountChange = createHandleChange(setStartAmount);
  const handleEndAmountChange = createHandleChange(setEndAmount);
  const handleMainSearchChange = createHandleChange(setMainSearch);

  return (
    <Filter
      onShowFilterButtonClick={handleShowFilterButtonClick}
      onMainSearchChange={handleMainSearchChange}
      onStartDateChange={handleStartDateChange}
      onEndDateChange={handleEndDateChange}
      onStartAmountChange={handleStartAmountChange}
      onEndAmountChange={handleEndAmountChange}
      isOpen={isOpen}
      mainSearch={mainSearch}
      startDate={startDate}
      endDate={endDate}
      startAmount={startAmount}
      endAmount={endAmount}
    />
  );
};
