import classNames from 'classnames';
import { useState } from 'react';

import { Button, ButtonSizeTypes, Radio } from 'src/shared/components';
import styles from './DropdownEditStatus.module.css';
import { Dropdown } from 'src/shared/components';
import { ORDER_STATUSES } from 'src/features/pageAdmin/lib/orderStatus';

export const DropdownEditStatus = ({ className, onStatusChange }) => {
  const [selectedStatus, setSelectedStatus] = useState('');
  return (
    <Dropdown
      className={className}
      trigger={
        <Button size={ButtonSizeTypes.sizeSlim} nameIcon='pencil'>
          <span>Изменить статус</span>
        </Button>
      }
      overlay={Object.entries(ORDER_STATUSES).map(([key, value]) => (
        <label
          key={key}
          className={classNames(styles.overlayItem, {
            [styles.selectItem]: selectedStatus === key,
          })}
        >
          <Radio
            id={key}
            onChange={() => {
              onStatusChange(key);
              setSelectedStatus(key);
            }}
            className={styles.hiddenInput}
            name='statusFooterTable'
          />
          <span>{value}</span>
        </label>
      ))}
      childrenClassNames={{ overlay: styles.overlay }}
    />
  );
};
