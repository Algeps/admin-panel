import classNames from 'classnames';
import styles from './Button.module.css';

export const ButtonSizeTypes = {
  sizeBig: 'sizeBig',
  sizeSlim: 'sizeSlim',
};

export const ButtonColorTypes = {
  colorBlue: 'colorBlue',
  colorRed: 'colorRed',
  colorClearBlue: 'colorClearBlue',
  colorClearBlack: 'colorClearBlack',
};

export const Button = ({
  size = ButtonSizeTypes.sizeBig,
  color = ButtonColorTypes.colorBlue,
  children,
  ...props
}) => {
  const blockClass = classNames(styles._, {
    [styles.sizeBig]: size === ButtonSizeTypes.sizeBig,
    [styles.sizeSlim]: size === ButtonSizeTypes.sizeSlim,

    [styles.colorBlue]: color === ButtonColorTypes.colorBlue,
    [styles.colorRed]: color === ButtonColorTypes.colorRed,
    [styles.colorClearBlue]: color === ButtonColorTypes.colorClearBlue,
    [styles.colorClearBlack]: color === ButtonColorTypes.colorClearBlack,
  });
  return (
    <button className={blockClass} {...props}>
      {children}
    </button>
  );
};
