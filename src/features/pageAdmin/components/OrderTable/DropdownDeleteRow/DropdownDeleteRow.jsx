import classNames from 'classnames';
import { useState } from 'react';

import {
  Button,
  ButtonSizeTypes,
  ButtonColorTypes,
} from 'src/shared/components';
import styles from './DropdownDeleteRow.module.css';

export const DropdownDeleteRow = ({
  className,
  numberOfSelectedRows,
  onDeleteRowsClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((val) => !val);
  };

  return (
    <div className={classNames(className, styles._)}>
      <Button
        nameIcon='bin'
        size={ButtonSizeTypes.sizeSlim}
        color={ButtonColorTypes.colorRed}
        onClick={toggleDropdown}
      >
        <span>Удалить</span>
      </Button>
      {isOpen && numberOfSelectedRows > 0 && (
        <div className={classNames(styles.overlay)}>
          <span>Удалить {numberOfSelectedRows} записей?</span>
          <Button
            size={ButtonSizeTypes.sizeSlim}
            color={ButtonColorTypes.colorClearBlue}
            onClick={onDeleteRowsClick}
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
