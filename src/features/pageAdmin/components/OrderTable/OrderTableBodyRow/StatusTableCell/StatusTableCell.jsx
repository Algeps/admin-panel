import { Icon, TableCell } from 'src/shared/components';
import classNames from 'classnames';
import styles from './StatusTableCell.module.css';
import { ORDER_STATUSES } from 'src/features/PageAdmin/lib/orderStatus';
import { ORDER_STATUSES_ICON } from 'src/features/PageAdmin/lib/orderStatusIcon';

export const StatusTableCell = ({ status, className }) => {
  const blockClassName = classNames(className, {
    [styles.completed]: status === 'completed',
  });
  return (
    <TableCell className={blockClassName}>
      <Icon
        iconName={ORDER_STATUSES_ICON[status].iconName}
        style={{
          fill: `var(${ORDER_STATUSES_ICON[status].color})`,
          stroke: `var(${ORDER_STATUSES_ICON[status].color})`,
        }}
      ></Icon>
      {ORDER_STATUSES[status]}
    </TableCell>
  );
};
