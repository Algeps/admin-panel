import classNames from 'classnames';
import styles from './Checkbox.module.css';
import { Icon } from '../Icon/Icon';

const noop = () => {};

export const Checkbox = ({ className, checked, onChange = noop }) => {
  const blockClass = classNames(styles._, className);
  return (
    <label className={blockClass}>
      <input
        className={styles.input}
        type='checkbox'
        onChange={onChange}
        checked={checked}
      />
      <Icon className={styles.icon} iconName='checkmark' />
    </label>
  );
};
