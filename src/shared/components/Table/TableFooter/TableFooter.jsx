import styles from './TableFooter.module.css';
import classNames from 'classnames';

export const TableFooter = ({ className, children }) => {
  return <div className={classNames(styles._, className)}>{children}</div>;
};
