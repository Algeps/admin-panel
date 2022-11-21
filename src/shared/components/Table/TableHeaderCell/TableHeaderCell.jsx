import styles from './TableHeaderCell.module.css';
import classNames from 'classnames';

export const TableHeaderCell = ({ className, children, ...props }) => {
  return (
    <button className={classNames(styles._, className)} {...props}>
      {children}
    </button>
  );
};
