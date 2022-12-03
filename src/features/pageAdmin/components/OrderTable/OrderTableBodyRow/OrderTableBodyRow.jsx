import { Checkbox, TableCell, TableRow } from 'src/shared/components';
import { StatusTableCell } from './StatusTableCell/StatusTableCell';
import stylesRow from '../RowMarkup.module.css';
import classNames from 'classnames';
import styles from './OrderTableBodyRow.module.css';
import { getRuDateTimeFormat, getCorrectDisplayRuSum } from 'src/shared/utils';

export const OrderTableBodyRow = ({
  orderNumber,
  date,
  status,
  sum,
  amount,
  customer,
}) => {
  return (
    <TableRow className={styles._}>
      <TableCell className={stylesRow.headerCell}>
        <Checkbox />
      </TableCell>

      <TableCell className={classNames(stylesRow.headerCell, stylesRow.id)}>
        {orderNumber}
      </TableCell>

      <TableCell className={classNames(stylesRow.headerCell, stylesRow.date)}>
        {getRuDateTimeFormat(date)}
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
        {getCorrectDisplayRuSum(sum)}
      </TableCell>

      <TableCell
        className={classNames(stylesRow.headerCell, stylesRow.fullName)}
      >
        {customer}
      </TableCell>
    </TableRow>
  );
};
