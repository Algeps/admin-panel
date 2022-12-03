import styles from './OrderTableBody.module.css';
import { useContext } from 'react';
import { FilterContext } from 'src/features/pageAdmin';
import { TableBody } from 'src/shared/components';
import { OrderTableBodyRow } from '../OrderTableBodyRow/OrderTableBodyRow';

export const OrderTableBody = () => {
  const { ORDERS } = useContext(FilterContext);
  return (
    <TableBody className={styles._}>
      {ORDERS.map((order) => (
        <OrderTableBodyRow
          key={order.id}
          date={Date.parse(order.date)}
          {...order}
        />
      ))}
    </TableBody>
  );
};
