import styles from './OrderTableFooter.module.css';
import classNames from 'classnames';

import { TableFooter } from 'src/shared/components';
import { DropdownDeleteRow } from '../DropdownDeleteRow/DropdownDeleteRow';
import { Pagination } from './Pagination/Pagination';
import { DropdownNumberPage } from '../DropdownNumberPage/DropdownNumberPage';
import { DropdownEditStatus } from '../DropdownEditStatus/DropdownEditStatus';

export const OrderTableFooter = ({
  numberOfRow,
  numberOfSelectedRows,
  onDeleteRowsClick,
  onStatusChange,
}) => {
  return (
    <TableFooter className={styles._}>
      <div className={styles.group}>
        <span className={styles.text}>
          Выбранно записей: {numberOfSelectedRows}
        </span>
        {numberOfSelectedRows > 0 && (
          <>
            <DropdownEditStatus onStatusChange={onStatusChange} />
            <DropdownDeleteRow
              numberOfSelectedRows={numberOfSelectedRows}
              onDeleteRowsClick={onDeleteRowsClick}
            />
          </>
        )}
      </div>
      <div className={classNames(styles.group, styles.pagination)}>
        <Pagination
          className={classNames(styles.group, styles.numberPageGroup)}
          numberOfRow={numberOfRow}
        />
        <DropdownNumberPage />
      </div>
    </TableFooter>
  );
};
