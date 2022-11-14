import { Button, Color, Size, Icon } from '../../shared';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles._}>
    <span className={styles.text}>Список заказов</span>
    <Button size={Size.sizeBig} color={Color.colorClearBlue}>
      <Icon iconName='sun' />
      <span>Светлая тема</span>
    </Button>
  </header>
);

export default Header;
