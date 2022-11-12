import classnames from 'classnames';
import { Icon } from '../Icon/Icon';
import { Input } from '../Input/Input';
import styles from './Searchbar.module.css';

export const Searchbar = ({ iconNameBefore, className, ...props }) => {
  const blockClass = classnames(styles._, className);
  return (
    <Input type='text' className={blockClass} {...props}>
      <Icon iconName={iconNameBefore} className={classnames(styles.icon)} />
    </Input>
  );
};
