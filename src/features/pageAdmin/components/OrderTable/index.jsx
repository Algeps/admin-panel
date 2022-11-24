import { useSelector } from 'react-redux';
import { getOrders } from '../../store/orders/ordersSelector';

import { Table } from 'src/shared/components/';
import { OrderTableHeader } from './OrderTableHeader/OrderTableHeader';
import { OrderTableBody } from './OrderTableBody/OrderTableBody';
import { OrderTableFooter } from './OrderTableFooter/OrderTableFooter';

export const OrderTable = () => {
  const [orders, numberOfRow] = useSelector(getOrders);
  return (
    <Table>
      <OrderTableHeader></OrderTableHeader>
      <OrderTableBody orders={orders}></OrderTableBody>
      <OrderTableFooter numberOfRow={numberOfRow}></OrderTableFooter>
    </Table>
  );
};
