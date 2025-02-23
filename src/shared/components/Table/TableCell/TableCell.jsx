import styles from './TableCell.module.css';
import classNames from 'classnames';

export const TableCell = ({ className, children, ...props }) => {
  return (
    <div className={classNames(styles._, className)} {...props}>
      {children}
    </div>
  );
};
