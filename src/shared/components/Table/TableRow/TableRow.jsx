import styles from './TableRow.module.css';
import classNames from 'classnames';

export const TableRow = ({ className, children }) => {
  return <div className={classNames(styles._, className)}>{children}</div>;
};
