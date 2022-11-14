import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
import styles from './Input.module.css';

const noop = () => {};

const Component = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

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
  className,
  ...props
}) => {
  const isButton = props.type === 'button';
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
  const prefixComponent = (
    <Component
      className={classNames(styles.insideArea, styles.insideAreaPrefix)}
    >
      {prefix}
    </Component>
  );
  const postfixComponent = (
    <Component
      className={classNames(styles.insideArea, styles.insideAreaPostfix, {
        [styles.iconTargetButton]: isButton,
      })}
    >
      {postfix}
    </Component>
  );

  const clearButtonClass = classNames(
    styles.insideArea,
    styles.insideAreaPostfix,
    styles.clearButton
  );
  const clearIconClass = classNames(styles.iconTargetClear);

  /* const iconButtonClass = classNames(
    styles.insideArea,
    styles.insideAreaPostfix,
    styles.iconTargetButton
  );*/

  const lockIconClass = classNames(
    styles.insideArea,
    styles.insideAreaPostfix,
    styles.iconTargetDisabled
  );

  return (
    <label className={blockClass}>
      {labelText && <div className={labelClass}>{labelText}</div>}
      <div className={areaClass}>
        {prefix && prefixComponent}
        <input
          className={inputClass}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          {...props}
        />
        {children}
        {postfix && postfixComponent}
        {isDisabled && <Icon iconName={'locked'} className={lockIconClass} />}
        {!isDisabled && !isButton && (
          <button className={clearButtonClass}>
            <Icon iconName={'xMedium'} className={clearIconClass} />
          </button>
        )}
      </div>
    </label>
  );
};
