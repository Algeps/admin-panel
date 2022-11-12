import classNames from 'classnames';
import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Input.module.css';

export const InputTypes = {
  primary: 'style_primary',
  incorrect: 'style_incorrect',
  disabled: 'style_disabled',
};

export const Input = ({
  labelText = '',
  inputType = InputTypes.primary,
  className,
  initValue = '',
  children,
  textPrefix = '',
  ...props
}) => {
  const isDisabled = inputType === InputTypes.disabled;
  const blockClass = classNames(styles._, {
    [styles.style_primary]: inputType === InputTypes.primary,
    [styles.style_incorrect]: inputType === InputTypes.incorrect,
    [styles.style_disabled]: inputType === InputTypes.disabled,

    [className]: className,
  });
  const labelClass = classNames(styles.label);
  const areaClass = classNames(styles.area);
  const inputClass = classNames(styles['input-field']);
  const textPrefixClass = classNames(
    styles['inside-area'],
    styles['inside-area_prefix']
  );

  const clearButtonClass = classNames(
    styles['inside-area'],
    styles['inside-area_postfix'],
    styles['clear-button']
  );
  const clearIconClass = classNames(styles['icon_target-clear']);

  const isButton = props.type === 'button';
  const iconButtonClass = classNames(
    styles['inside-area'],
    styles['inside-area_postfix'],
    styles['icon_target-button']
  );

  const lockIconClass = classNames(
    styles['inside-area'],
    styles['inside-area_postfix'],
    styles['icon_target-disabled']
  );

  const [value, setValue] = useState(initValue);
  const handleInputChange = ({ target: { value } }) => {
    setValue(value);
  };
  const handleInputButtonClear = () => {
    setValue('');
  };

  return (
    <label className={blockClass}>
      {labelText && <div className={labelClass}>{labelText}</div>}
      <div className={areaClass}>
        {textPrefix && <span className={textPrefixClass}>{textPrefix}</span>}
        <input
          className={inputClass}
          {...props}
          value={value}
          onChange={handleInputChange}
          disabled={isDisabled}
        />
        {children}
        {isButton && <Icon iconName={'v_arrow'} className={iconButtonClass} />}
        {isDisabled && <Icon iconName={'locked'} className={lockIconClass} />}
        {!isDisabled && !isButton && value && (
          <button className={clearButtonClass} onClick={handleInputButtonClear}>
            <Icon iconName={'x_medium'} className={clearIconClass} />
          </button>
        )}
      </div>
    </label>
  );
};
