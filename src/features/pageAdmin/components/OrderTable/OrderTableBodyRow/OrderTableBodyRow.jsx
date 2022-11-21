import { Checkbox, TableCell, TableRow } from 'src/shared/components';
import { StatusTableCell } from './StatusTableCell/StatusTableCell';
import stylesRow from '../RowMarkup.module.css';
import classNames from 'classnames';

export const OrderTableBodyRow = ({
  orderNumber,
  date,
  status,
  sum,
  amount,
  customer,
}) => {
  const dateFormat =
    new Date(date).toLocaleDateString() +
    ', ' +
    new Date(date).toLocaleTimeString().slice(0, -3);
  return (
    <TableRow>
      <TableCell className={stylesRow.headerCell}>
        <Checkbox />
      </TableCell>

      <TableCell className={classNames(stylesRow.headerCell, stylesRow.id)}>
        {orderNumber}
      </TableCell>

      <TableCell className={classNames(stylesRow.headerCell, stylesRow.date)}>
        {dateFormat}
      </TableCell>

      <StatusTableCell
        status={status}
        className={classNames(stylesRow.headerCell, stylesRow.status)}
      ></StatusTableCell>

      <TableCell
        className={classNames(stylesRow.headerCell, stylesRow.positions)}
      >
        {amount}
      </TableCell>

      <TableCell className={classNames(stylesRow.headerCell, stylesRow.sum)}>
        {sum}
      </TableCell>

      <TableCell
        className={classNames(stylesRow.headerCell, stylesRow.fullName)}
      >
        {customer}
      </TableCell>
    </TableRow>
  );
};
