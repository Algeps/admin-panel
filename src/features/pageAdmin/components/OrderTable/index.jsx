import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  deleteOrders,
  changeStatusOrders,
} from '../../store/orders/ordersSlice';
import { getOrders } from '../../store/orders/ordersSelector';
import { Table } from 'src/shared/components/';
import { OrderTableHeader } from './OrderTableHeader/OrderTableHeader';
import { OrderTableBody } from './OrderTableBody/OrderTableBody';
import { OrderTableFooter } from './OrderTableFooter/OrderTableFooter';
import { useEffect } from 'react';

const init = [];

export const OrderTable = () => {
  const dispatch = useDispatch();
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

  const handleDeleteRowsClick = () => {
    dispatch(deleteOrders({ ids: selectedRows }));
  };

  const handleStatusChange = (status) => {
    dispatch(changeStatusOrders({ ids: selectedRows, status: status }));
  };

  useEffect(() => {
    return () => {
      handleSelectedRowsReset();
    };
  }, [orders]);

  return (
    <Table>
      <OrderTableHeader
        isAllRowsSelected={
          selectedRows.length === orders.length && selectedRows.length > 0
        }
        onSelectedRows={handleSelectedRows}
        onSelectedRowsReset={handleSelectedRowsReset}
      ></OrderTableHeader>
      <OrderTableBody
        selectedRows={selectedRows}
        orders={orders}
        onSelectedRow={handleSelectedRow}
        onSelectedRowReset={handleSelectedRowReset}
      ></OrderTableBody>
      <OrderTableFooter
        onDeleteRowsClick={handleDeleteRowsClick}
        numberOfRow={numberOfRow}
        numberOfSelectedRows={selectedRows.length}
        onStatusChange={handleStatusChange}
      ></OrderTableFooter>
    </Table>
  );
};
