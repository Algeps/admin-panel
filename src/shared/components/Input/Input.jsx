import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import styles from './Input.module.css';

const noop = () => {};

export const InputTypes = {
  primary: 'stylePrimary',
  incorrect: 'styleIncorrect',
  disabled: 'styleDisabled',
};

export const Input = ({
  inputType = InputTypes.primary,
  labelText = '',
  children,
  prefix = '',
  postfix = '',
  value = '',
  onChange = noop,
  onReset = noop,
  className,
  ...props
}) => {
  const isButton = props.type === 'button';
  const isDisabled = inputType === InputTypes.disabled;
  const blockClass = classNames(styles._, {
    [styles.stylePrimary]: inputType === InputTypes.primary,
    [styles.styleIncorrect]: inputType === InputTypes.incorrect,
    [styles.styleDisabled]: inputType === InputTypes.disabled,
    [styles.indent]: prefix,

    [className]: className,
  });
  const labelClass = classNames(styles.label);
  const areaClass = classNames(styles.area, { [styles.inputButton]: isButton });
  const inputClass = classNames(styles.inputField);

  const clearButtonClass = classNames(
    styles.insideArea,
    styles.insideAreaPostfix,
    styles.clearButton
  );
  const clearIconClass = classNames(styles.iconTargetClear);

  const lockIconClass = classNames(
    styles.insideArea,
    styles.insideAreaPostfix,
    styles.iconTargetDisabled
  );

  return (
    <label className={blockClass}>
      {labelText && <div className={labelClass}>{labelText}</div>}
      <div className={areaClass}>
        {prefix}
        <input
          className={inputClass}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          {...props}
        />
        {children}
        {postfix}
        {isDisabled && <Icon iconName={'locked'} className={lockIconClass} />}
        {!isDisabled && !isButton && value && (
          <button className={clearButtonClass} onClick={onReset}>
            <Icon iconName={'xMedium'} className={clearIconClass} />
          </button>
        )}
      </div>
    </label>
  );
};
