import { Dropdown, Icon, Input, Checkbox } from 'src/shared/components';
import styles from './DropdownStatus.module.css';
import classNames from 'classnames';

const noop = () => {};

export const DropdownStatus = ({
  statuses,
  className,
  onStatusChange = noop,
  onChangeStatusChoose = noop,
  ORDER_STATUSES,
  ...props
}) => {
  const blockClass = classNames(styles._, className);
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
    <Dropdown
      className={blockClass}
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
      {...props}
    />
  );
};
