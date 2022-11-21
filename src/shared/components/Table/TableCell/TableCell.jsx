import styles from './TableCell.module.css';
import classNames from 'classnames';

export const TableCell = ({ className, children }) => {
  return <div className={classNames(styles._, className)}>{children}</div>;
};
