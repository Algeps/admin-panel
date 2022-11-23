import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter, resetAllFilters } from '../../store/filters/filtersSlice';
import {
  Input,
  Button,
  ButtonColorTypes,
  Searchbar,
} from 'src/shared/components';
import { DropdownStatusContainer } from '../DropdownStatus/DropdownStatus';
import styles from './Filter.module.css';

const orderStatusSwitch = {
  new: false,
  calculation: false,
  confirmed: false,
  postponed: false,
  completed: false,
  canceled: false,
};

export const FilterContainer = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [mainSearch, setMainSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startAmount, setStartAmount] = useState('');
  const [endAmount, setEndAmount] = useState('');
  const [statuses, setStatuses] = useState(orderStatusSwitch);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleShowFilterButtonClick = () => {
    setIsOpen((current) => !current);
  };

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
      setSelectedStatuses([]);
      setStatuses(statuses);
    },
  ];

  const handleChangeStatusChoose = (status) =>
    selectedStatuses.includes(status)
      ? setSelectedStatuses(selectedStatuses.filter((e) => e !== status))
      : setSelectedStatuses([...selectedStatuses, status]);

  const handleResetAllFiltersClick = () => {
    handleMainSearchReset();
    handleStartDateReset();
    handleEndDateReset();
    handleStartAmountReset();
    handleEndAmountReset();
    handleStatusReset();
    dispatch(resetAllFilters());
  };

  useEffect(() => {
    dispatch(setFilter({ key: 'mainSearch', value: mainSearch }));
  }, [mainSearch]);

  const handleApplyFilterOnClick = () => {
    dispatch(setFilter({ key: 'dateFrom', value: startDate }));
    dispatch(setFilter({ key: 'dateTo', value: endDate }));
    dispatch(setFilter({ key: 'statuses', value: selectedStatuses }));
    dispatch(setFilter({ key: 'amountFrom', value: startAmount }));
    dispatch(setFilter({ key: 'amountTo', value: endAmount }));
  };

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
      onResetAllFiltersClick={handleResetAllFiltersClick}
      onStatusChange={handleStatusChange}
      onChangeStatusChoose={handleChangeStatusChoose}
      statuses={statuses}
      onApplyFilterOnClick={handleApplyFilterOnClick}
    />
  );
};

const Filter = ({
  onShowFilterButtonClick,
  isOpen,
  onMainSearchChange,
  onMainSearchReset,
  mainSearch,
  onStartDateChange,
  onStartDateReset,
  startDate,
  onEndDateChange,
  onEndDateReset,
  endDate,
  onStartAmountChange,
  onStartAmountReset,
  startAmount,
  onEndAmountChange,
  onEndAmountReset,
  endAmount,
  onResetAllFiltersClick,
  onStatusChange,
  onChangeStatusChoose,
  statuses,
  onApplyFilterOnClick,
}) => (
  <div className={styles._}>
    <div className={styles.main}>
      <div className={classNames(styles.group, styles.groupMain)}>
        <Searchbar
          className={styles.searchbar}
          placeholder='Номер заказа или ФИО'
          value={mainSearch}
          onChange={onMainSearchChange}
          onReset={onMainSearchReset}
        />
        <Button
          color={
            isOpen
              ? ButtonColorTypes.colorBlue
              : ButtonColorTypes.colorClearBlue
          }
          onClick={onShowFilterButtonClick}
          nameIcon='filter'
        >
          <span>Фильтры</span>
        </Button>
        <Button
          color={ButtonColorTypes.colorClearBlue}
          onClick={onResetAllFiltersClick}
        >
          <span>Сбросить фильтры</span>
        </Button>
      </div>
      <Button color={ButtonColorTypes.colorClearBlue} nameIcon='refresh'>
        <span>Загрузка</span>
      </Button>
    </div>
    {isOpen && (
      <div className={styles.extended}>
        <div className={classNames(styles.group, styles.groupExtended)}>
          <Input
            className={classNames(
              styles.dataRegistration,
              styles.dataRegistrationFrom
            )}
            labelText='Дата оформления'
            placeholder='dd.mm.yyyy'
            prefix={<span>с</span>}
            value={startDate}
            onChange={onStartDateChange}
            onReset={onStartDateReset}
          />
          <Input
            className={styles.dataRegistration}
            placeholder='dd.mm.yyyy'
            prefix={<span>по</span>}
            value={endDate}
            onChange={onEndDateChange}
            onReset={onEndDateReset}
          />
        </div>
        <div className={classNames(styles.group, styles.groupExtended)}>
          <DropdownStatusContainer
            className={styles.orderStatus}
            onChangeStatusChoose={onChangeStatusChoose}
            onStatusChange={onStatusChange}
            statuses={statuses}
          />
        </div>
        <div className={classNames(styles.group, styles.groupExtended)}>
          <Input
            labelText='Сумма заказа'
            className={styles.orderAmount}
            placeholder='₽'
            prefix={<span>от</span>}
            value={startAmount}
            onChange={onStartAmountChange}
            onReset={onStartAmountReset}
          />
          <Input
            className={styles.orderAmount}
            placeholder='₽'
            prefix={<span>до</span>}
            value={endAmount}
            onChange={onEndAmountChange}
            onReset={onEndAmountReset}
          />
        </div>
        <Button
          color={ButtonColorTypes.colorClearBlue}
          onClick={onApplyFilterOnClick}
        >
          <span>Применить</span>
        </Button>
      </div>
    )}
  </div>
);
