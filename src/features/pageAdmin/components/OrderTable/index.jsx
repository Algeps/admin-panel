import { useSelector } from 'react-redux';
import { getOrders } from '../../store/orders/ordersSelector';

import { Table } from 'src/shared/components/';
import { OrderTableHeader } from './OrderTableHeader/OrderTableHeader';
import { OrderTableBody } from './OrderTableBody/OrderTableBody';
import { OrderTableFooter } from './OrderTableFooter/OrderTableFooter';

export const OrderTable = () => {
  const { orders, numberOfRows } = useSelector(getOrders);
  return (
    <Table>
      <OrderTableHeader />
      <OrderTableBody orders={orders} />
      <OrderTableFooter numberOfRow={numberOfRows} />
    </Table>
  );
};
