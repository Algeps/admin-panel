import classNames from 'classnames';
import { Input, Button, Color, Searchbar, Icon } from '../../shared';
import styles from './Filter.module.css';

const noop = () => {};

export const Filter = ({ isOpen, onShowFilterButtonClick = noop }) => (
  <div className={styles._}>
    <div className={styles.main}>
      <div className={classNames(styles.group, styles.group_main)}>
        <Searchbar
          className={styles.searchbar}
          iconNameBefore='search'
          placeholder='Номер заказа или ФИО'
        />
        <Button
          color={isOpen ? Color.colorBlue : Color.colorClearBlue}
          onClick={onShowFilterButtonClick}
        >
          <Icon iconName='filter' />
          <span>Фильтры</span>
        </Button>
        <Button color={Color.colorClearBlue}>
          <span>Сбросить фильтры</span>
        </Button>
      </div>
      <Button color={Color.colorClearBlue}>
        <Icon iconName='refresh' />
        <span>Загрузка</span>
      </Button>
    </div>
    {isOpen && (
      <div className={styles.extended}>
        <div className={classNames(styles.group, styles.group_extended)}>
          <Input
            className={classNames(
              styles.data_registration,
              styles['data_registration-from']
            )}
            labelText='Дата оформления'
            placeholder='dd.mm.yyyy'
            textPrefix='c'
            initValue='20.01.2021'
          />
          <Input
            className={styles.data_registration}
            placeholder='dd.mm.yyyy'
            textPrefix='по'
          />
        </div>
        <div className={classNames(styles.group, styles.group_extended)}>
          <Input
            type='button'
            className={styles.order_status}
            labelText='Статус заказа'
            initValue='Любой'
          />
        </div>
        <div className={classNames(styles.group, styles.group_extended)}>
          <Input
            labelText='Сумма заказа'
            className={styles.order_amount}
            placeholder='₽'
            textPrefix='от'
            initValue='5000'
          />
          <Input
            className={styles.order_amount}
            placeholder='₽'
            textPrefix='до'
          />
        </div>
        <Button color={Color.colorClearBlue}>
          <span>Применить</span>
        </Button>
      </div>
    )}
  </div>
);
