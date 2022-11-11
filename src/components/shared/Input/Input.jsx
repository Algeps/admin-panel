import classnames from 'classnames';
import './input.css';
import './searchbar.css';

export const Input = ({
  placeholderText,
  labelText,
  className,
  initValue,
  children,
  ...props
}) => (
  <label className={classnames('input', className)}>
    <Label labelText={labelText} />
    <div className={classnames('input__area')}>
      <input
        type='text'
        className={classnames('input__input-field')}
        // value={initValue}
        placeholder={placeholderText}
      />
    </div>
  </label>
);
// решить проблемы

const Label = ({ labelText }) => {
  if (labelText !== undefined) {
    return <div className='input__label'>{labelText}</div>;
  }
};
