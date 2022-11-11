import classnames from 'classnames';
import { Icon } from '../Icon/Icon';

export const Searchbar = ({ iconNameBefore, textBefore }) => (
  <div>
    <TextBefore />
    <Icon
      iconName={iconNameBefore}
      className={classnames(
        'input__button-icon',
        'input__button-icon_position_beginning',
        'searchbar__searchbar-icon'
      )}
    />
  </div>
);

const TextBefore = (textBefore) => (
  <span className='input__button-icon input__button-icon_position_beginning searchbar__searchbar-text'>
    {textBefore}
  </span>
);
