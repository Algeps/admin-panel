import classNames from 'classnames';
import {
  Input,
  Button,
  ButtonColorTypes,
  Searchbar,
} from 'src/shared/components';
import { DropdownStatus } from '../../DropdownStatus/DropdownStatus';
import styles from './Filter.module.css';

const noop = () => {};

export const Filter = ({
  onShowFilterButtonClick = noop,
  isOpen,
  onMainSearchChange = noop,
  onMainSearchReset = noop,
  mainSearch,
  onStartDateChange = noop,
  onStartDateReset = noop,
  startDate,
  onEndDateChange = noop,
  onEndDateReset = noop,
  endDate,
  onStartAmountChange = noop,
  onStartAmountReset = noop,
  startAmount,
  onEndAmountChange = noop,
  onEndAmountReset = noop,
  endAmount,
  onStatusChange = noop,
  onChangeStatusChoose = noop,
  ORDER_STATUSES,
  statuses = statuses,
  onClearAllFilters = noop,
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
          <DropdownStatus
            className={styles.orderStatus}
            statuses={statuses}
            onStatusChange={onStatusChange}
            onChangeStatusChoose={onChangeStatusChoose}
            ORDER_STATUSES={ORDER_STATUSES}
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
        <Button color={ButtonColorTypes.colorClearBlue}>
          <span>Применить</span>
        </Button>
      </div>
    )}
  </div>
);
