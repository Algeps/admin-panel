import classnames from 'classnames';
import { Icon } from '../Icon/Icon';
import styles from './Button.module.css';

export const ButtonSizeTypes = {
  sizeBig: 'size_big',
  sizeSlim: 'size_slim',
};

export const ButtonColorTypes = {
  colorBlue: 'color_blue',
  colorRed: 'color_red',
  colorClearBlue: 'color_clear-blue',
  colorClearBlack: 'color_clear-black',
};

export const Button = ({
  buttonSizeType = ButtonSizeTypes.sizeBig,
  buttonColorTypes = ButtonColorTypes.colorBlue,
  text = '',
  iconName = '',
  className,
  inInput = false,
  ...props
}) => {
  const blockClass = classnames(styles._, {
    [styles.size_big]: buttonSizeType === ButtonSizeTypes.sizeBig,
    [styles.size_slim]: buttonSizeType === ButtonSizeTypes.sizeSlim,

    [styles.color_blue]: buttonColorTypes === ButtonColorTypes.colorBlue,
    [styles.color_red]: buttonColorTypes === ButtonColorTypes.colorRed,
    [styles['color_clear-blue']]:
      buttonColorTypes === ButtonColorTypes.colorClearBlue,
    [styles['color_clear-black']]:
      buttonColorTypes === ButtonColorTypes.colorClearBlack,
    [className]: className,
  });
  return (
    <button className={blockClass} {...props}>
      {iconName && (
        <Icon className={classnames(styles.icon)} iconName={iconName} />
      )}
      {text && <span className={classnames(styles.text)}>{text}</span>}
    </button>
  );
};
