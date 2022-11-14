import classNames from 'classnames';
import styles from './Button.module.css';

export const Size = {
  sizeBig: 'sizeBig',
  sizeSlim: 'sizeSlim',
};

export const Color = {
  colorBlue: 'colorBlue',
  colorRed: 'colorRed',
  colorClearBlue: 'colorClearBlue',
  colorClearBlack: 'colorClearBlack',
};

export const Button = ({
  size = Size.sizeBig,
  color = Color.colorBlue,
  children,
  ...props
}) => {
  const blockClass = classNames(styles._, {
    [styles.sizeBig]: size === Size.sizeBig,
    [styles.sizeSlim]: size === Size.sizeSlim,

    [styles.colorBlue]: color === Color.colorBlue,
    [styles.colorRed]: color === Color.colorRed,
    [styles.colorClearBlue]: color === Color.colorClearBlue,
    [styles.colorClearBlack]: color === Color.colorClearBlack,
  });
  return (
    <button className={blockClass} {...props}>
      {children}
    </button>
  );
};
