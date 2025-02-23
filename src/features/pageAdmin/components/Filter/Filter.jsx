import classNames from 'classnames';

import {
  Input,
  Button,
  ButtonColorTypes,
  Searchbar,
} from 'src/shared/components';
import { DropdownStatus } from '../DropdownStatus/DropdownStatus';
import styles from './Filter.module.css';

export const Filter = ({
  onShowFilterButtonClick,
  isOpen,
  onMainSearchChange,
  onMainSearchReset,
  mainSearch,
  onDateFromChange,
  onDateFromReset,
  dateFrom,
  onDateToChange,
  onDateToReset,
  dateTo,
  onAmountFromChange,
  onAmountFromReset,
  amountFrom,
  onAmountToChange,
  onAmountToReset,
  amountTo,
  onResetAllFiltersClick,
  onStatusChange,
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
            value={dateFrom}
            onChange={onDateFromChange}
            onReset={onDateFromReset}
          />
          <Input
            className={styles.dataRegistration}
            placeholder='dd.mm.yyyy'
            prefix={<span>по</span>}
            value={dateTo}
            onChange={onDateToChange}
            onReset={onDateToReset}
          />
        </div>
        <div className={classNames(styles.group, styles.groupExtended)}>
          <DropdownStatus
            className={styles.orderStatus}
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
            value={amountFrom}
            onChange={onAmountFromChange}
            onReset={onAmountFromReset}
          />
          <Input
            className={styles.orderAmount}
            placeholder='₽'
            prefix={<span>до</span>}
            value={amountTo}
            onChange={onAmountToChange}
            onReset={onAmountToReset}
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
