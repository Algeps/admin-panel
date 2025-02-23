import classNames from 'classnames';

import { Dropdown, Icon, Input, Checkbox } from 'src/shared/components';
import styles from './DropdownStatus.module.css';
import { ORDER_STATUSES } from '../../lib/orderStatus';

const getRuSelectedStatuses = (statuses) => {
  return statuses.length === 0 ||
    statuses.length === Object.keys(ORDER_STATUSES).length
    ? 'Любой'
    : statuses.map((e) => ' ' + ORDER_STATUSES[e]);
};

export const DropdownStatus = ({ className, onStatusChange, statuses }) => {
  const selectedStatuses = getRuSelectedStatuses(statuses);
  return (
    <Dropdown
      className={classNames(styles._, className)}
      trigger={
        <Input
          readOnly
          labelText='Статус заказа'
          postfix={
            <Icon iconName={'vArrow'} className={styles.iconInputPostfix} />
          }
          value={selectedStatuses}
        />
      }
      overlay={Object.entries(ORDER_STATUSES).map(([key, value]) => (
        <label key={key} className={styles.overlayItem}>
          <Checkbox
            onChange={() => {
              onStatusChange(key);
            }}
            checked={statuses.includes(key)}
          />
          <span>{value}</span>
        </label>
      ))}
      childrenClassNames={{ overlay: styles.overlay }}
    />
  );
};
