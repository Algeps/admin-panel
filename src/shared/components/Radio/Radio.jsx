import classNames from 'classnames';
import styles from './Radio.module.css';

export const Radio = ({ className, ...props }) => {
  return (
    <label className={classNames(styles._, className)}>
      <input type='radio' className={classNames(styles.input)} {...props} />
    </label>
  );
};
