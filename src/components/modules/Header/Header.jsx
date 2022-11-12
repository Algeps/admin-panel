import { Button, ButtonColorTypes, ButtonSizeTypes } from '../../shared';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles._}>
    <span className={styles.text}>Список заказов</span>
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
