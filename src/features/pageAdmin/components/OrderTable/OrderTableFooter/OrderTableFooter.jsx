import styles from './OrderTableFooter.module.css';
import classNames from 'classnames';

import { Button, TableFooter, ButtonSizeTypes } from 'src/shared/components';
import { DropdownDeleteRow } from '../OrderTableDeleteRowDropdown/OrderTableDeleteRowDropdown';
import { Pagination } from './Pagination/Pagination';
import { DropdownNumberPage } from '../DropdownNumberPage/DropdownNumberPage';

export const OrderTableFooter = ({ numberOfRow }) => {
  return (
    <TableFooter className={styles._}>
      <div className={styles.group}>
        <span className={styles.text}>Выбранно записей: n</span>
        <Button size={ButtonSizeTypes.sizeSlim} nameIcon='pencil'>
          <span>Изменить статус</span>
        </Button>
        <DropdownDeleteRow />
      </div>
      <div className={styles.group}>
        <Pagination
          className={classNames(styles.group, styles.numberPageGroup)}
          numberOfRow={numberOfRow}
        />
        <DropdownNumberPage />
      </div>
    </TableFooter>
  );
};
