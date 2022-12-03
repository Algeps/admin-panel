import classNames from 'classnames';
import {
  Button,
  ButtonSizeTypes,
  ButtonColorTypes,
} from 'src/shared/components';

import { useState } from 'react';

import styles from './OrderTableDeleteRowDropdown.module.css';

export const DropdownDeleteRow = ({ className }) => {
  const blockClassName = classNames(styles._, className);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((val) => !val);
  };

  return (
    <div className={blockClassName}>
      <Button
        nameIcon='bin'
        size={ButtonSizeTypes.sizeSlim}
        color={ButtonColorTypes.colorRed}
        onClick={toggleDropdown}
      >
        <span>Удалить</span>
      </Button>
      {isOpen && (
        <div className={styles.overlay}>
          <span>Удалить n записей?</span>
          <Button
            size={ButtonSizeTypes.sizeSlim}
            color={ButtonColorTypes.colorClearBlue}
          >
            <span>Удалить</span>
          </Button>
          <Button size={ButtonSizeTypes.sizeSlim} onClick={toggleDropdown}>
            <span>Отмена</span>
          </Button>
        </div>
      )}
    </div>
  );
};
