import classNames from 'classnames';
import { useState } from 'react';
import { FilterContext } from '../../PageAdmin';
import { useContext } from 'react';
import {
  Input,
  Button,
  ButtonColorTypes,
  Searchbar,
} from 'src/shared/components';
import { DropdownStatusContainer } from '../DropdownStatus/DropdownStatus';
import styles from './Filter.module.css';

export const FilterContainer = () => {
  const {
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
    onClearAllFilters,
  } = useContext(FilterContext);
  const [isOpen, setIsOpen] = useState(true);
  const handleShowFilterButtonClick = () => {
    setIsOpen((current) => !current);
  };

  return (
    <Filter
      onShowFilterButtonClick={handleShowFilterButtonClick}
      isOpen={isOpen}
      onMainSearchChange={onMainSearchChange}
      onMainSearchReset={onMainSearchReset}
      mainSearch={mainSearch}
      onStartDateChange={onStartDateChange}
      onStartDateReset={onStartDateReset}
      startDate={startDate}
      onEndDateChange={onEndDateChange}
      onEndDateReset={onEndDateReset}
      endDate={endDate}
      onStartAmountChange={onStartAmountChange}
      onStartAmountReset={onStartAmountReset}
      startAmount={startAmount}
      onEndAmountChange={onEndAmountChange}
      onEndAmountReset={onEndAmountReset}
      endAmount={endAmount}
      onClearAllFilters={onClearAllFilters}
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
  onClearAllFilters,
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
          onClick={onClearAllFilters}
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
          <DropdownStatusContainer className={styles.orderStatus} />
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
        <Button color={ButtonColorTypes.colorClearBlue}>
          <span>Применить</span>
        </Button>
      </div>
    )}
  </div>
);
