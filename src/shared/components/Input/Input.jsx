import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import styles from './Input.module.css';
import React from 'react';

const noop = () => {};

export const Input = ({
  labelText = '',
  children,
  prefix = '',
  postfix = '',
  value = '',
  disabled = false,
  incorrect = false,
  onChange = noop,
  onReset = noop,
  className,
  ...props
}) => {
  const blockClass = classNames(
    styles._,
    styles.stylePrimary,
    {
      [styles.styleIncorrect]: incorrect,
      [styles.styleDisabled]: disabled,
      [styles.indent]: prefix,
    },
    className
  );
  const labelClass = classNames(styles.label);
  const areaClass = classNames(styles.area);
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

  const clonePostfix = React.cloneElement(postfix, {
    className: classNames(postfix?.props?.className, styles.postfix),
  });

  return (
    <label className={blockClass}>
      {labelText && <div className={labelClass}>{labelText}</div>}
      <div className={areaClass}>
        {prefix}
        <input
          className={inputClass}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        {children}
        {postfix && clonePostfix}
        {disabled && <Icon iconName={'locked'} className={lockIconClass} />}
        {!disabled && !postfix && value && (
          <button className={clearButtonClass} onClick={onReset}>
            <Icon iconName={'xMedium'} className={clearIconClass} />
          </button>
        )}
      </div>
    </label>
  );
};
