import styles from './TableRow.module.css';
import classNames from 'classnames';

export const TableRow = ({ className, children, ...props }) => {
  return (
    <div className={classNames(styles._, className)} {...props}>
      {children}
    </div>
  );
};
