import styles from './OrderTableFooter.module.css';
import classNames from 'classnames';

import {
  Button,
  TableFooter,
  ButtonSizeTypes,
  ButtonColorTypes,
} from 'src/shared/components';
import { DropdownDeleteRow } from '../DropdownDeleteRow/DropdownDeleteRow';
import { DropdownNumberPage } from '../DropdownNumberPage/DropdownNumberPage';

export const OrderTableFooter = () => {
  return (
    <TableFooter className={styles._}>
      <div className={styles.group}>
        <span className={styles.text}>Выбранно записей: n</span>
        <Button size={ButtonSizeTypes.sizeSlim} nameIcon='pencil'>
          <span>Изменить статус</span>
        </Button>
        <DropdownDeleteRow />
      </div>
      <div className={styles.group}>
        <div className={classNames(styles.group, styles.numberPageGroup)}>
          <Button size={ButtonSizeTypes.sizeSlim}>
            <span>1</span>
          </Button>
          <Button
            size={ButtonSizeTypes.sizeSlim}
            color={ButtonColorTypes.colorClearBlue}
          >
            <span>2</span>
          </Button>
          <Button
            size={ButtonSizeTypes.sizeSlim}
            color={ButtonColorTypes.colorClearBlue}
          >
            <span>3</span>
          </Button>
          <Button
            size={ButtonSizeTypes.sizeSlim}
            color={ButtonColorTypes.colorClearBlue}
          >
            <span>...</span>
          </Button>
          <Button
            size={ButtonSizeTypes.sizeSlim}
            color={ButtonColorTypes.colorClearBlue}
          >
            <span>18</span>
          </Button>
        </div>
        <DropdownNumberPage />
      </div>
    </TableFooter>
  );
};
