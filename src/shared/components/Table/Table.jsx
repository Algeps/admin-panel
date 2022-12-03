import styles from './Table.module.css';
import classNames from 'classnames';

export const Table = ({ className, children }) => {
  return <div className={classNames(styles._, className)}>{children}</div>;
};
