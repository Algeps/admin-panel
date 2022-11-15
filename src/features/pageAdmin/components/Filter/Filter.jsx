import classNames from 'classnames';
import {
  Input,
  Button,
  ButtonColorTypes,
  Searchbar,
  Icon,
} from 'src/shared/components';
import styles from './Filter.module.css';

const noop = () => {};

export const Filter = ({
  isOpen,
  onShowFilterButtonClick = noop,
  mainSearch,
  onMainSearchChange = noop,
  startDate,
  onStartDateChange = noop,
  endDate,
  onEndDateChange = noop,
  startAmount,
  onStartAmountChange = noop,
  endAmount,
  onEndAmountChange = noop,
}) => (
  <div className={styles._}>
    <div className={styles.main}>
      <div className={classNames(styles.group, styles.groupMain)}>
        <Searchbar
          className={styles.searchbar}
          iconNameBefore='search'
          placeholder='Номер заказа или ФИО'
          value={mainSearch}
          onChange={onMainSearchChange}
        />
        <Button
          color={
            isOpen
              ? ButtonColorTypes.colorBlue
              : ButtonColorTypes.colorClearBlue
          }
          onClick={onShowFilterButtonClick}
        >
          <Icon iconName='filter' />
          <span>Фильтры</span>
        </Button>
        <Button color={ButtonColorTypes.colorClearBlue}>
          <span>Сбросить фильтры</span>
        </Button>
      </div>
      <Button color={ButtonColorTypes.colorClearBlue}>
        <Icon iconName='refresh' />
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
          />
          <Input
            className={styles.dataRegistration}
            placeholder='dd.mm.yyyy'
            prefix={<span>по</span>}
            value={endDate}
            onChange={onEndDateChange}
          />
        </div>
        <div className={classNames(styles.group, styles.groupExtended)}>
          <Input
            type='button'
            className={styles.orderStatus}
            labelText='Статус заказа'
            postfix={<Icon iconName={'vArrow'} />}
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
          />
          <Input
            className={styles.orderAmount}
            placeholder='₽'
            prefix={<span>до</span>}
            value={endAmount}
            onChange={onEndAmountChange}
          />
        </div>
        <Button color={ButtonColorTypes.colorClearBlue}>
          <span>Применить</span>
        </Button>
      </div>
    )}
  </div>
);
