import styles from './OrderTableFooter.module.css';
import classNames from 'classnames';

import { Button, TableFooter, ButtonSizeTypes } from 'src/shared/components';
import { DropdownDeleteRow } from '../DropdownDeleteRow/DropdownDeleteRow';
import { Pagination } from './Pagination/Pagination';
import { DropdownNumberPage } from '../DropdownNumberPage/DropdownNumberPage';

export const OrderTableFooter = ({
  numberOfRow,
  numberOfSelectedRows,
  onDeleteRowsClick,
}) => {
  return (
    <TableFooter className={styles._}>
      <div className={styles.group}>
        <span className={styles.text}>
          Выбранно записей: {numberOfSelectedRows}
        </span>
        <Button size={ButtonSizeTypes.sizeSlim} nameIcon='pencil'>
          <span>Изменить статус</span>
        </Button>
        <DropdownDeleteRow
          numberOfSelectedRows={numberOfSelectedRows}
          onDeleteRowsClick={onDeleteRowsClick}
        />
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
