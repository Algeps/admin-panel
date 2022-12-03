import styles from './TableHeader.module.css';
import classNames from 'classnames';

export const TableHeader = ({ className, children }) => {
  return <div className={classNames(styles._, className)}>{children}</div>;
};
