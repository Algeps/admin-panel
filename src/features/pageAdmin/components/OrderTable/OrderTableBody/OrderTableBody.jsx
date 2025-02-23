import classNames from 'classnames';
import { useState } from 'react';

import styles from './OrderTableBody.module.css';
import {
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from 'src/shared/components';
import { StatusTableCell } from './StatusTableCell/StatusTableCell';
import { OrderForm } from '../../OrderForm/OrderForm';
import stylesRow from '../RowMarkup.module.css';
import { getCorrectDisplayRuSum, getRuDateTimeFormat } from 'src/shared/utils';

const noop = () => {};

export const OrderTableBody = ({
  orders = {},
  onSelectedRow = noop,
  onSelectedRowReset = noop,
  selectedRows = [],
}) => {
  const [selectOrder, setSelectOrder] = useState(null);

  const handleClickRow = (order) => {
    setSelectOrder(order);
  };

  const handleChecked =
    (id) =>
    ({ target: { checked } }) => {
      return checked ? onSelectedRow(id) : onSelectedRowReset(id);
    };

  return (
    <>
      <TableBody className={styles._}>
        {orders.map((order) => (
          <TableRow
            key={order.id}
            className={classNames(styles.row, {
              [styles.selected]: selectedRows.includes(order.id),
            })}
          >
            <TableCell>
              <label className={stylesRow.headerCell}>
                <Checkbox
                  checked={selectedRows.includes(order.id)}
                  onChange={handleChecked(order.id)}
                />
              </label>
            </TableCell>

            <TableCell
              className={classNames(stylesRow.headerCell, stylesRow.id)}
              onClick={() => handleClickRow(order.id)}
            >
              {order.orderNumber}
            </TableCell>

            <TableCell
              className={classNames(stylesRow.headerCell, stylesRow.date)}
              onClick={() => handleClickRow(order.id)}
            >
              {getRuDateTimeFormat(order.date)}
            </TableCell>

            <StatusTableCell
              status={order.status}
              className={classNames(stylesRow.headerCell, stylesRow.status)}
              onClick={() => handleClickRow(order.id)}
            ></StatusTableCell>

            <TableCell
              className={classNames(stylesRow.headerCell, stylesRow.positions)}
              onClick={() => handleClickRow(order.id)}
            >
              {order.amount}
            </TableCell>

            <TableCell
              className={classNames(stylesRow.headerCell, stylesRow.sum)}
              onClick={() => handleClickRow(order.id)}
            >
              {getCorrectDisplayRuSum(String(order.sum))}
            </TableCell>

            <TableCell
              className={classNames(stylesRow.headerCell, stylesRow.fullName)}
              onClick={() => handleClickRow(order.id)}
            >
              {order.customer}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {selectOrder && (
        <OrderForm selectOrder={selectOrder} onSelectedRow={handleClickRow} />
      )}
    </>
  );
};
