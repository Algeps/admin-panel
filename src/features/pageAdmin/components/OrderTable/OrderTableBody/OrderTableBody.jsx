import classNames from 'classnames';

import styles from './OrderTableBody.module.css';
import {
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from 'src/shared/components';
import { StatusTableCell } from './StatusTableCell/StatusTableCell';
import stylesRow from '../RowMarkup.module.css';

const noop = () => {};

const RUB = '\u{20BD}';
const getRuDateTimeFormat = (date) => {
  return (
    new Date(date).toLocaleDateString() +
    ', ' +
    new Date(date).toLocaleTimeString().slice(0, -3)
  );
};
const getCorrectDisplayRuSum = (number) => {
  return `${number.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}  ${RUB}`;
};

export const OrderTableBody = ({
  orders = {},
  onSelectedRow = noop,
  onSelectedRowReset = noop,
  selectedRows = [],
}) => {
  const handleChecked = (id) => {
    return ({ target: { checked } }) => {
      return checked ? onSelectedRow(id) : onSelectedRowReset(id);
    };
  };
  return (
    <TableBody className={styles._}>
      {orders.map((order) => (
        <TableRow
          key={order.id}
          className={classNames(styles.row, {
            [styles.selected]: selectedRows.includes(order.id),
          })}
        >
          <TableCell className={stylesRow.headerCell}>
            <Checkbox
              checked={selectedRows.includes(order.id)}
              onChange={handleChecked(order.id)}
            />
          </TableCell>

          <TableCell className={classNames(stylesRow.headerCell, stylesRow.id)}>
            {order.orderNumber}
          </TableCell>

          <TableCell
            className={classNames(stylesRow.headerCell, stylesRow.date)}
          >
            {getRuDateTimeFormat(order.date)}
          </TableCell>

          <StatusTableCell
            status={order.status}
            className={classNames(stylesRow.headerCell, stylesRow.status)}
          ></StatusTableCell>

          <TableCell
            className={classNames(stylesRow.headerCell, stylesRow.positions)}
          >
            {order.amount}
          </TableCell>

          <TableCell
            className={classNames(stylesRow.headerCell, stylesRow.sum)}
          >
            {getCorrectDisplayRuSum(order.sum)}
          </TableCell>

          <TableCell
            className={classNames(stylesRow.headerCell, stylesRow.fullName)}
          >
            {order.customer}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
