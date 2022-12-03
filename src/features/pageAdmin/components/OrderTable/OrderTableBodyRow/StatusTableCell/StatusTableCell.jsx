import { Icon, TableCell } from 'src/shared/components';
import { FilterContext } from 'src/features/pageAdmin';
import { useContext } from 'react';
import classNames from 'classnames';
import styles from './StatusTableCell.module.css';

export const StatusTableCell = ({ status, className }) => {
  const { ORDER_STATUSES_ICON, ORDER_STATUSES } = useContext(FilterContext);
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
