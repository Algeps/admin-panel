import { Dropdown, Icon, Input, Checkbox } from 'src/shared/components';
import { FilterContext } from '../../PageAdmin';
import { useContext } from 'react';
import styles from './DropdownStatus.module.css';
import classNames from 'classnames';

export const DropdownStatusContainer = ({ className }) => {
  const { ORDER_STATUSES, onChangeStatusChoose, onStatusChange, statuses } =
    useContext(FilterContext);

  const dropdownClass = classNames(styles._, className);
  let selectedStatuses = Object.keys(statuses).filter((e) => statuses[e]);
  if (
    selectedStatuses.length === 0 ||
    selectedStatuses.length === Object.keys(statuses).length
  ) {
    selectedStatuses = 'Любой';
  } else {
    let res = '';
    for (let i = 0; i < selectedStatuses.length; ++i) {
      res += ORDER_STATUSES[selectedStatuses[i]] + ' ';
    }
    selectedStatuses = res;
  }
  return (
    <DropdownStatus
      dropdownClass={dropdownClass}
      onChangeStatusChoose={onChangeStatusChoose}
      onStatusChange={onStatusChange}
      selectedStatuses={selectedStatuses}
      statuses={statuses}
      ORDER_STATUSES={ORDER_STATUSES}
    />
  );
};

const DropdownStatus = ({
  dropdownClass,
  onChangeStatusChoose,
  onStatusChange,
  selectedStatuses,
  statuses,
  ORDER_STATUSES,
}) => {
  return (
    <Dropdown
      className={dropdownClass}
      trigger={
        <Input
          type='button'
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
              onChangeStatusChoose(value);
            }}
            checked={statuses[key]}
          />
          <span>{value}</span>
        </label>
      ))}
      childrenClassNames={{ overlay: styles.overlay }}
    />
  );
};
