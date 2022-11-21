import classNames from 'classnames';
import {
  Button,
  Dropdown,
  ButtonSizeTypes,
  ButtonColorTypes,
} from 'src/shared/components';

import styles from './DropdownDeleteRow.module.css';

export const DropdownDeleteRow = ({ className }) => {
  const toggle = (
    <Button
      nameIcon='bin'
      size={ButtonSizeTypes.sizeSlim}
      color={ButtonColorTypes.colorRed}
    >
      <span>Удалить</span>
    </Button>
  );
  return (
    <Dropdown
      className={className}
      trigger={toggle}
      overlay={
        <>
          <span>Удалить n записей?</span>
          <Button
            size={ButtonSizeTypes.sizeSlim}
            color={ButtonColorTypes.colorClearBlue}
          >
            <span>Удалить</span>
          </Button>
          <Button size={ButtonSizeTypes.sizeSlim}>
            <span>Отмена</span>
          </Button>
        </>
      }
      childrenClassNames={{ overlay: classNames(styles.overlay) }}
    />
  );
};
