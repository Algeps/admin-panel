import { Table } from 'src/shared/components/';
import { OrderTableHeader } from './OrderTableHeader/OrderTableHeader';
import { OrderTableBody } from './OrderTableBody/OrderTableBody';
import { OrderTableFooter } from './OrderTableFooter/OrderTableFooter';

export const OrderTable = () => {
  return (
    <Table>
      <OrderTableHeader></OrderTableHeader>
      <OrderTableBody></OrderTableBody>
      <OrderTableFooter></OrderTableFooter>
    </Table>
  );
};
