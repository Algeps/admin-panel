import classnames from 'classnames';
import Icon from '../Icon/Icon';
import './button.css';

const Button = ({ text, nameIcon, className, ...props }) => {
  return (
    <button className={classnames('button', className)}>
      <Icon className='button__icon' nameIcon={nameIcon} />
      <span className='button__text'>{text}</span>
    </button>
  );
};

export default Button;
