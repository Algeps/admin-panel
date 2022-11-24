import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  getSortColumn,
  getDirection,
} from 'src/features/PageAdmin/store/filters/filtersSelector';
import { setFilter } from 'src/features/PageAdmin/store/filters/filtersSlice';

import styles from './OrderTableHeader.module.css';
import stylesRow from '../RowMarkup.module.css';
import classNames from 'classnames';

import {
  Checkbox,
  Icon,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'src/shared/components';

const noop = () => {};

const sortColumns = {
  date: 'date',
  status: 'status',
  amount: 'amount',
  sum: 'sum',
};

export const OrderTableHeader = ({
  isAllRowsSelected = false,
  onSelectedRows = noop,
  onSelectedRowsReset = noop,
}) => {
  const sortColumn = useSelector(getSortColumn);
  const direction = useSelector(getDirection);
  const dispatch = useDispatch();

  const handleChecked = ({ target: { checked } }) => {
    return checked ? onSelectedRows() : onSelectedRowsReset();
  };

  const handleSortColumn = (column) => {
    sortColumn === column
      ? dispatch(setFilter({ key: 'direction', value: -direction }))
      : dispatch(setFilter({ key: 'direction', value: 1 }));
    dispatch(setFilter({ key: 'sortColumn', value: column }));
  };
  return (
    <TableHeader>
      <TableRow>
        <TableCell className={stylesRow.headerCell}>
          <Checkbox onChange={handleChecked} checked={isAllRowsSelected} />
        </TableCell>

        <TableCell className={classNames(stylesRow.headerCell, stylesRow.id)}>
          #
        </TableCell>

        <TableHeaderCell
          className={classNames(stylesRow.headerCell, stylesRow.date, {
            [styles.isActive]: sortColumns.date === sortColumn,
          })}
          onClick={() => handleSortColumn(sortColumns.date)}
        >
          Дата
          <Icon
            iconName='vArrow'
            className={classNames(styles.arrowIcon, {
              [styles.rotateIcon]:
                sortColumns.date === sortColumn && direction === -1,
            })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={classNames(stylesRow.headerCell, stylesRow.status, {
            [styles.isActive]: sortColumns.status === sortColumn,
          })}
          onClick={() => handleSortColumn(sortColumns.status)}
        >
          Статус
          <Icon
            iconName='vArrow'
            className={classNames(styles.arrowIcon, {
              [styles.rotateIcon]:
                sortColumns.status === sortColumn && direction === -1,
            })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={classNames(stylesRow.headerCell, stylesRow.positions, {
            [styles.isActive]: sortColumns.amount === sortColumn,
          })}
          onClick={() => handleSortColumn(sortColumns.amount)}
        >
          Позиций
          <Icon
            iconName='vArrow'
            className={classNames(styles.arrowIcon, {
              [styles.rotateIcon]:
                sortColumns.amount === sortColumn && direction === -1,
            })}
          />
        </TableHeaderCell>

        <TableHeaderCell
          className={classNames(stylesRow.headerCell, stylesRow.sum, {
            [styles.isActive]: sortColumns.sum === sortColumn,
          })}
          onClick={() => handleSortColumn(sortColumns.sum)}
        >
          Сумма
          <Icon
            iconName='vArrow'
            className={classNames(styles.arrowIcon, {
              [styles.rotateIcon]:
                sortColumns.sum === sortColumn && direction === -1,
            })}
          />
        </TableHeaderCell>

        <TableCell
          className={classNames(stylesRow.headerCell, stylesRow.fullName)}
        >
          ФИО покупателя
        </TableCell>
      </TableRow>
    </TableHeader>
  );
};
