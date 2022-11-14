import { Button, ButtonColorTypes, ButtonSizeTypes, Icon } from '../../shared';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles._}>
    <span className={styles.text}>Список заказов</span>
    <Button
      size={ButtonSizeTypes.sizeBig}
      color={ButtonColorTypes.colorClearBlue}
    >
      <Icon iconName='sun' />
      <span>Светлая тема</span>
    </Button>
  </header>
);

export default Header;
