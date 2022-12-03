import styles from './OrderTableHeader.module.css';
import stylesRow from '../RowMarkup.module.css';
import classNames from 'classnames';

import {
  Checkbox,
  Icon,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'src/shared/components';

export const OrderTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableCell className={stylesRow.headerCell}>
          <Checkbox />
        </TableCell>

        <TableCell className={classNames(stylesRow.headerCell, stylesRow.id)}>
          #
        </TableCell>

        <TableHeaderCell
          className={classNames(stylesRow.headerCell, stylesRow.date)}
        >
          Дата
          <Icon iconName='vArrow' className={styles.arrowIcon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={classNames(stylesRow.headerCell, stylesRow.status)}
        >
          Статус
          <Icon iconName='vArrow' className={styles.arrowIcon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={classNames(stylesRow.headerCell, stylesRow.positions)}
        >
          Позиций
          <Icon iconName='vArrow' className={styles.arrowIcon} />
        </TableHeaderCell>

        <TableHeaderCell
          className={classNames(stylesRow.headerCell, stylesRow.sum)}
        >
          Сумма
          <Icon iconName='vArrow' className={styles.arrowIcon} />
        </TableHeaderCell>
        <TableCell
          className={classNames(stylesRow.headerCell, stylesRow.fullName)}
        >
          ФИО покупателя
        </TableCell>
      </TableRow>
    </TableHeader>
  );
};
