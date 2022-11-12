import classNames from 'classnames';
import { Input, Button, ButtonColorTypes, Searchbar } from '../../shared';
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
          buttonColorTypes={
            isOpen
              ? ButtonColorTypes.colorBlue
              : ButtonColorTypes.colorClearBlue
          }
          onClick={onShowFilterButtonClick}
          text='Фильтры'
          iconName='filter'
        />
        <Button
          buttonColorTypes={ButtonColorTypes.colorClearBlue}
          text='Сбросить фильтры'
        />
      </div>
      <Button
        text='Загрузка'
        iconName='refresh'
        buttonColorTypes={ButtonColorTypes.colorClearBlue}
        className='button_active_load'
      />
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
        <Button
          buttonColorTypes={ButtonColorTypes.colorClearBlue}
          text='Применить'
        />
      </div>
    )}
  </div>
);
