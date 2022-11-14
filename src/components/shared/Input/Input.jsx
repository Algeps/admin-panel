import classNames from 'classnames';
import { useState } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Input.module.css';

export const InputTypes = {
  primary: 'stylePrimary',
  incorrect: 'styleIncorrect',
  disabled: 'styleDisabled',
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
    [styles.stylePrimary]: inputType === InputTypes.primary,
    [styles.styleIncorrect]: inputType === InputTypes.incorrect,
    [styles.styleDisabled]: inputType === InputTypes.disabled,

    [className]: className,
  });
  const labelClass = classNames(styles.label);
  const areaClass = classNames(styles.area);
  const inputClass = classNames(styles.inputField);
  const textPrefixClass = classNames(
    styles.insideArea,
    styles.insideAreaPrefix
  );

  const clearButtonClass = classNames(
    styles.insideArea,
    styles.insideAreaPostfix,
    styles.clearButton
  );
  const clearIconClass = classNames(styles.iconTargetClear);

  const isButton = props.type === 'button';
  const iconButtonClass = classNames(
    styles.insideArea,
    styles.insideAreaPostfix,
    styles.iconTargetButton
  );

  const lockIconClass = classNames(
    styles.insideArea,
    styles.insideAreaPostfix,
    styles.iconTargetDisabled
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
