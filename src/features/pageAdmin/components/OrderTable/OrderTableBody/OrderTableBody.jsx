import styles from './OrderTableBody.module.css';
import { TableBody } from 'src/shared/components';
import { OrderTableBodyRow } from '../OrderTableBodyRow/OrderTableBodyRow';

export const OrderTableBody = ({ orders = {} }) => {
  return (
    <TableBody className={styles._}>
      {orders.map((order) => (
        <OrderTableBodyRow key={order.id} date={order.date} {...order} />
      ))}
    </TableBody>
  );
};
