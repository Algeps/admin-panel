import { Button, ButtonColorTypes, ButtonSizeTypes } from '../../shared';

const Header = () => (
  <header className='page-header'>
    <span className='page-header__text'>Список заказов</span>
    <Button
      text='Светлая тема'
      iconName='sun'
      buttonSizeType={ButtonSizeTypes.sizeBig}
      buttonColorTypes={ButtonColorTypes.colorClearBlue}
      className='button_change_theme'
    />
  </header>
);

export default Header;
