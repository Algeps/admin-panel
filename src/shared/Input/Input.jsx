import classnames from 'classnames';
// import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './input.css';
import './searchbar.css';

const Input = ({ placeholderText, nameIcon, className, ...props }) => (
  <label className={classnames('input', className)}>
    <div className='input__area'>
      <input
        type='text'
        className='input__input-field'
        placeholder={placeholderText}
      />
      <Icon
        nameIcon={nameIcon}
        className='input__button-icon input__button-icon_position_beginning searchbar__searchbar-icon'
      />
    </div>
  </label>
);

export default Input;
