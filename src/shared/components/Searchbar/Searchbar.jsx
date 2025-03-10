import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import { Input } from '../Input/Input';
import styles from './Searchbar.module.css';

export const Searchbar = ({ iconNameBefore, className, ...props }) => {
  const blockClass = classNames(styles._, className);
  return (
    <Input
      type='text'
      className={blockClass}
      prefix={<Icon iconName='search' className={classNames(styles.icon)} />}
      {...props}
    />
  );
};
