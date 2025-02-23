import { Icon, TableCell } from 'src/shared/components';
import classNames from 'classnames';
import styles from './StatusTableCell.module.css';
import { ORDER_STATUSES } from 'src/features/pageAdmin/lib/orderStatus';

const STATUS_ICON = {
  completed: 'checkmark',
  canceled: 'abort',
};

export const StatusTableCell = ({ status, className, ...props }) => {
  const blockClassName = classNames(className, {
    [styles.new]: status === 'new',
    [styles.calculation]: status == 'calculation',
    [styles.confirmed]: status === 'confirmed',
    [styles.postponed]: status === 'postponed',
    [styles.completed]: status === 'completed',
    [styles.canceled]: status === 'canceled',
  });
  return (
    <TableCell className={blockClassName} {...props}>
      <Icon iconName={STATUS_ICON[status] || 'dot'}></Icon>
      {ORDER_STATUSES[status]}
    </TableCell>
  );
};
