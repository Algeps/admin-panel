import { useSelector } from 'react-redux';
import { useState } from 'react';

import { getOrders } from '../../store/orders/ordersSelector';
import { Table } from 'src/shared/components/';
import { OrderTableHeader } from './OrderTableHeader/OrderTableHeader';
import { OrderTableBody } from './OrderTableBody/OrderTableBody';
import { OrderTableFooter } from './OrderTableFooter/OrderTableFooter';

const init = [];

export const OrderTable = () => {
  const [orders, numberOfRow] = useSelector(getOrders);
  const [selectedRows, setSelectedRows] = useState(init);
  const [handleSelectedRow, handleSelectedRowReset] = [
    (id) => {
      if (!selectedRows.includes(id)) {
        setSelectedRows([...selectedRows, id]);
      }
    },
    (id) => {
      setSelectedRows(selectedRows.filter((e) => e !== id));
    },
  ];
  const [handleSelectedRows, handleSelectedRowsReset] = [
    () => {
      setSelectedRows(orders.map((e) => e.id));
    },
    () => {
      setSelectedRows(init);
    },
  ];

  return (
    <Table>
      <OrderTableHeader
        onSelectedRows={handleSelectedRows}
        onSelectedRowsReset={handleSelectedRowsReset}
      ></OrderTableHeader>
      <OrderTableBody
        selectedRows={selectedRows}
        orders={orders}
        onSelectedRow={handleSelectedRow}
        onSelectedRowReset={handleSelectedRowReset}
      ></OrderTableBody>
      <OrderTableFooter numberOfRow={numberOfRow}></OrderTableFooter>
    </Table>
  );
};
