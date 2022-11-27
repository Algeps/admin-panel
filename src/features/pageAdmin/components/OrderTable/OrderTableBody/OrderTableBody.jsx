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
  onEditOrderClick = noop,
}) => {
  const [selectOrder, setSelectOrder] = useState({});
  const [isOpenForm, setIsOpenForm] = useState(false);
  const handleClickRow = (order) => {
    setSelectOrder(order);
    setIsOpenForm((val) => !val);
  };
  const handleCloseEditFormClick = () => {
    setIsOpenForm((val) => !val);
  };

  const handleChecked = (id) => {
    return ({ target: { checked } }) => {
      return checked ? onSelectedRow(id) : onSelectedRowReset(id);
    };
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
            onClick={() => handleClickRow(order)}
          >
            <TableCell className={stylesRow.headerCell}>
              <Checkbox
                checked={selectedRows.includes(order.id)}
                onChange={handleChecked(order.id)}
              />
            </TableCell>

            <TableCell
              className={classNames(stylesRow.headerCell, stylesRow.id)}
            >
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
              {getCorrectDisplayRuSum(String(order.sum))}
            </TableCell>

            <TableCell
              className={classNames(stylesRow.headerCell, stylesRow.fullName)}
            >
              {order.customer}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {isOpenForm && (
        <OrderForm
          selectOrder={selectOrder}
          onEditOrderClick={onEditOrderClick}
          onCloseEditFormClick={handleCloseEditFormClick}
        />
      )}
    </>
  );
};
