import Header from './components/Header/Header';
import { FilterContainer } from './components/Filter/Filter';
import { ORDER_STATUSES } from './lib/orderStatus';
import { ORDER_STATUSES_ICON } from './lib/orderStatusIcon';
import { ORDERS } from './mocks/orders';

import './index.css';
import { createContext, useState } from 'react';
import { OrderTable } from './components/OrderTable';
export const FilterContext = createContext('');

const orderStatusSwitch = {
  new: false,
  calculation: false,
  confirmed: false,
  postponed: false,
  completed: false,
  canceled: false,
};

const PageAdmin = () => {
  const [mainSearch, setMainSearch] = useState('');
  const [startDate, setStartDate] = useState('20.01.2021');
  const [endDate, setEndDate] = useState('');
  const [startAmount, setStartAmount] = useState('5000');
  const [endAmount, setEndAmount] = useState('');
  const [statuses, setStatuses] = useState(orderStatusSwitch);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const createHandleChange = (setter) => [
    ({ target: { value } }) => setter(value),
    () => setter(''),
  ];

  const [handleMainSearchChange, handleMainSearchReset] =
    createHandleChange(setMainSearch);

  const [handleStartDateChange, handleStartDateReset] =
    createHandleChange(setStartDate);

  const [handleEndDateChange, handleEndDateReset] =
    createHandleChange(setEndDate);

  const [handleStartAmountChange, handleStartAmountReset] =
    createHandleChange(setStartAmount);

  const [handleEndAmountChange, handleEndAmountReset] =
    createHandleChange(setEndAmount);

  const [handleStatusChange, handleStatusReset] = [
    (status) => {
      statuses[status] = !statuses[status];
      setStatuses(statuses);
    },
    () => {
      for (const key in statuses) {
        if (Object.prototype.hasOwnProperty.call(statuses, key)) {
          statuses[key] = false;
        }
      }
      handleChangeStatusChoose([]);
      setStatuses(statuses);
    },
  ];

  const handleChangeStatusChoose = (status) => {
    if (selectedStatuses.includes(status)) {
      selectedStatuses.splice(selectedStatuses.indexOf(status), 1);
    } else {
      selectedStatuses.push(status);
    }
    setSelectedStatuses([...selectedStatuses]);
  };

  const handleClearAllFilters = () => {
    handleMainSearchReset();
    handleStartDateReset();
    handleEndDateReset();
    handleStartAmountReset();
    handleEndAmountReset();
    handleStatusReset();
  };

  return (
    <FilterContext.Provider
      value={{
        onMainSearchChange: handleMainSearchChange,
        onMainSearchReset: handleMainSearchReset,
        mainSearch: mainSearch,
        onStartDateChange: handleStartDateChange,
        onStartDateReset: handleStartDateReset,
        startDate: startDate,
        onEndDateChange: handleEndDateChange,
        onEndDateReset: handleEndDateReset,
        endDate: endDate,
        onStartAmountChange: handleStartAmountChange,
        onStartAmountReset: handleStartAmountReset,
        startAmount: startAmount,
        onEndAmountChange: handleEndAmountChange,
        onEndAmountReset: handleEndAmountReset,
        endAmount: endAmount,
        ORDER_STATUSES,
        ORDER_STATUSES_ICON,
        onChangeStatusChoose: handleChangeStatusChoose,
        onStatusChange: handleStatusChange,
        statuses: statuses,
        onClearAllFilters: handleClearAllFilters,
        ORDERS,
      }}
    >
      <section className='section'>
        <Header />
        <FilterContainer />
        <OrderTable />
      </section>
    </FilterContext.Provider>
  );
};

export default PageAdmin;
