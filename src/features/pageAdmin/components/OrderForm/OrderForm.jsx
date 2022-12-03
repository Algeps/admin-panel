import { useState } from 'react';
import { updateOrder } from 'src/features/pageAdmin/store/orders/ordersSlice';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './OrderForm.module.css';
import {
  Button,
  ButtonSizeTypes,
  Dropdown,
  Input,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Radio,
  Icon,
  ButtonColorTypes,
} from 'src/shared/components';
import { ORDER_STATUSES } from '../../lib/orderStatus';
import { LOYALITY } from '../../lib/loyality';
import { getRuDateTimeFormat, getCorrectDisplayRuSum } from 'src/shared/utils';
import { useSelector } from 'react-redux';
import { getOrderById } from '../../store/orders/ordersSelector';

const createHandleChangeAndReset = (setter) => [
  ({ target: { value } }) => setter(value),
  () => setter(''),
];

const CONFIRMATION_CODE = '000';
const checkingConfirmationCode = (code) => CONFIRMATION_CODE === code;
const checkingCustomer = (customer) => customer.length > 0;

export const OrderForm = ({ selectOrder, onSelectedRow }) => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderById(selectOrder));

  const [customer, setCustomer] = useState(order.customer);
  const [status, setStatus] = useState(order.status);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isOpenDropdownClose, setIsOpenDropdownClose] = useState(false);
  const isChange = order.customer !== customer || order.status !== status;
  const confirmationCodeCorrect = checkingConfirmationCode(confirmationCode);
  const customerCorrect = checkingCustomer(customer);

  const [handleCustomerChange, handleCustomerReset] = [
    ({ target: { value } }) => setCustomer(value),
    () => setCustomer(''),
  ];
  const [handleConfirmationCodeChange, handleConfirmationCodeReset] =
    createHandleChangeAndReset(setConfirmationCode);
  const handleOpenDropdownClose = () => {
    setIsOpenDropdownClose((val) => !val);
  };

  let textError = '';
  if (!confirmationCodeCorrect && !customerCorrect) {
    textError = 'Неверное ФИО и код подтверждения!';
  } else if (!confirmationCodeCorrect && confirmationCode.length > 0) {
    textError = 'Неверный код подтверждения!';
  } else if (!checkingCustomer) {
    textError = 'Поле ФИО должно быть заполнено!';
  }

  const handleSaveClick = () => {
    if (confirmationCodeCorrect && customerCorrect) {
      dispatch(updateOrder({ ...order, customer, status }));
      onSelectedRow(null);
    }
  };
  return (
    <div className={styles.freeze}>
      <div className={styles._}>
        <div className={styles.header}>
          <span>Заявка #{order.orderNumber}</span>
          <div className={styles.dropdownClose}>
            <Button
              nameIcon='xLarge'
              size={ButtonSizeTypes.sizeSlim}
              onClick={() =>
                isChange ? handleOpenDropdownClose() : onSelectedRow(null)
              }
            ></Button>
            {isOpenDropdownClose && (
              <div className={styles.dropdownCloseOverlay}>
                <span>Есть несохраненные изменения</span>
                <Button
                  size={ButtonSizeTypes.sizeSlim}
                  color={ButtonColorTypes.colorClearBlue}
                  onClick={() => onSelectedRow(null)}
                >
                  <span>Сбросить</span>
                </Button>
                <Button
                  size={ButtonSizeTypes.sizeSlim}
                  onClick={() => {
                    handleOpenDropdownClose();
                  }}
                >
                  <span>Остаться</span>
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.body}>
          <Input
            labelText='Дата и время заказа'
            value={getRuDateTimeFormat(order.date)}
            disabled
          />
          <Input
            labelText='ФИО покупателя'
            value={customer}
            onChange={handleCustomerChange}
            onReset={handleCustomerReset}
            incorrect={!customerCorrect}
          />
          <Table className={styles.table}>
            <TableHeader>
              <TableRow>
                <TableHeaderCell
                  className={classNames(
                    styles.tableCell,
                    styles.tableCellArticleNumber
                  )}
                >
                  Артикул
                </TableHeaderCell>
                <TableHeaderCell
                  className={classNames(styles.tableCell, styles.tableCellName)}
                >
                  Наименование
                </TableHeaderCell>
                <TableHeaderCell
                  className={classNames(
                    styles.tableCell,
                    styles.tableCellPrice
                  )}
                >
                  Цена
                </TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.order.map((e) => (
                <TableRow key={e.vendorCode}>
                  <TableCell
                    className={classNames(
                      styles.tableCell,
                      styles.tableCellArticleNumber
                    )}
                  >
                    {e.vendorCode}
                  </TableCell>
                  <TableCell
                    className={classNames(
                      styles.tableCell,
                      styles.tableCellName
                    )}
                  >
                    {e.name}
                  </TableCell>
                  <TableCell
                    className={classNames(
                      styles.tableCell,
                      styles.tableCellPrice
                    )}
                  >
                    {getCorrectDisplayRuSum(String(e.price))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className={styles.tableFooter}>
              <span>Итоговая сумма:</span>
              <span>{getCorrectDisplayRuSum(String(order.sum))}</span>
            </TableFooter>
          </Table>
          <Input
            labelText='Уровень лояльности'
            value={LOYALITY[order.loyality]}
            disabled
          />
          <Dropdown
            trigger={
              <Input
                labelText='Статус заказа'
                value={ORDER_STATUSES[status]}
                postfix={
                  <Icon
                    iconName={'vArrow'}
                    className={styles.statusTriggerInputIconPostfix}
                  />
                }
                readOnly
              />
            }
            overlay={Object.entries(ORDER_STATUSES).map(([key, value]) => (
              <label
                key={key}
                className={classNames(styles.statusOverlayItem, {
                  [styles.statusOverlayItemSelected]: status === key,
                })}
              >
                <Radio
                  id={key}
                  className={styles.hiddenInput}
                  name='statusEditForm'
                  onChange={() => setStatus(key)}
                />
                <span>{value}</span>
              </label>
            ))}
            childrenClassNames={{ overlay: styles.statusOverlay }}
          />
          <Input
            labelText='Код подтверждения'
            value={confirmationCode}
            onChange={handleConfirmationCodeChange}
            onReset={handleConfirmationCodeReset}
            incorrect={!confirmationCodeCorrect}
          />
        </div>
        <div className={styles.footer}>
          {textError && (
            <span className={styles.footerErrorText}>{textError}</span>
          )}
          <Button nameIcon='checkmark' onClick={handleSaveClick}>
            <span>Сохранить</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
