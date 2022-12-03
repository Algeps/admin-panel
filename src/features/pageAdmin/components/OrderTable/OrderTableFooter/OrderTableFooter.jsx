import styles from './OrderTableFooter.module.css';
import classNames from 'classnames';

import {
  Button,
  TableFooter,
  ButtonSizeTypes,
  ButtonColorTypes,
} from 'src/shared/components';
import { DropdownDeleteRow } from '../OrderTableDeleteRowDropdown/OrderTableDeleteRowDropdown';
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
          {['1', '2', '3', '...', '18'].map((e) => (
            <Button
              key={e}
              size={ButtonSizeTypes.sizeSlim}
              color={
                e === '1'
                  ? ButtonColorTypes.colorBlue
                  : ButtonColorTypes.colorClearBlue
              }
            >
              <span>{e}</span>
            </Button>
          ))}
        </div>
        <DropdownNumberPage />
      </div>
    </TableFooter>
  );
};
