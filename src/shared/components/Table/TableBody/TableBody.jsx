import styles from './TableBody.module.css';
import classNames from 'classnames';

export const TableBody = ({ className, children }) => {
  return <div className={classNames(styles._, className)}>{children}</div>;
};
