import { icons } from '../icons/index';
import classNames from 'classnames';
import styles from './Icon.module.css';

export const Icon = ({ className, iconName }) => {
  const IconComponent = icons[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={classNames(styles._, className)} />;
};
