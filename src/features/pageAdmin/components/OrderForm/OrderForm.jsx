import { useState } from 'react';
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
import {
  getRuDateTimeFormat,
  createHandleChangeAndReset,
  getCorrectDisplayRuSum,
} from 'src/shared/utils';

const CORRECT_MAP = {
  code: true,
  customer: true,
};

const CONFIRMATION_CODE = '000';

const checkingConfirmationCode = (code) =>
  CONFIRMATION_CODE === code ? true : false;

export const OrderForm = ({
  selectOrder,
  onEditOrderClick,
  onCloseEditFormClick,
}) => {
  const cloneSelectOrder = {};
  Object.assign(cloneSelectOrder, selectOrder);

  const [customer, setCustomer] = useState(selectOrder.customer);
  const [handleCustomerChange, handleCustomerReset] =
    createHandleChangeAndReset(setCustomer);
  const [selectedStatus, setSelectedStatus] = useState(cloneSelectOrder.status);

  const [confirmationCode, setConfirmationCode] = useState('');
  const [handleConfirmationCodeChange, handleConfirmationCodeReset] =
    createHandleChangeAndReset(setConfirmationCode);
  const [correct, setCorrect] = useState(CORRECT_MAP);
  const handleError = ({ code, customer }) => {
    const correctCode = checkingConfirmationCode(code);
    const correctCustomer = customer.length > 0 && /[а-яА-ЯЁё]/.test(customer);
    setCorrect(() => ({ customer: correctCustomer, code: correctCode }));
    return correctCode && correctCustomer;
  };
  const getTextError = () => {
    if (!correct.customer && !correct.code) {
      return 'Неверное ФИО и код потверждения!';
    } else if (!correct.code) {
      return 'Неверный код подтверждения!';
    } else {
      return 'Поле ФИО должно содержать кирилицу!';
    }
  };

  const [isOpenDropdownClose, setIsOpenDropdownClose] = useState(false);
  const handleOpenDropdownClose = () => {
    setIsOpenDropdownClose((val) => !val);
  };

  cloneSelectOrder.customer = customer;
  cloneSelectOrder.status = selectedStatus;
  const isChange =
    cloneSelectOrder.customer !== selectOrder.customer ||
    cloneSelectOrder.status !== selectOrder.status;
  return (
    <div className={styles.freeze}>
      <div className={styles._}>
        <div className={styles.header}>
          <span>Заявка #{cloneSelectOrder.orderNumber}</span>
          <div className={styles.dropdownClose}>
            <Button
              nameIcon='xLarge'
              size={ButtonSizeTypes.sizeSlim}
              onClick={() =>
                isChange ? handleOpenDropdownClose() : onCloseEditFormClick()
              }
            ></Button>
            {isOpenDropdownClose && isChange && (
              <div className={styles.dropdownCloseOverlay}>
                <span>Есть несохраненные изменения</span>
                <Button
                  size={ButtonSizeTypes.sizeSlim}
                  color={ButtonColorTypes.colorClearBlue}
                  onClick={() => onCloseEditFormClick()}
                >
                  <span>Сбросить</span>
                </Button>
                <Button
                  size={ButtonSizeTypes.sizeSlim}
                  onClick={() => {
                    Object.assign(cloneSelectOrder, selectOrder);
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
            value={getRuDateTimeFormat(cloneSelectOrder.date)}
            disabled
          />
          <Input
            labelText='ФИО покупателя'
            value={customer}
            onChange={handleCustomerChange}
            onReset={handleCustomerReset}
            incorrect={!correct.customer}
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
              {cloneSelectOrder.order.map((e) => (
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
              <span>
                {getCorrectDisplayRuSum(String(cloneSelectOrder.sum))}
              </span>
            </TableFooter>
          </Table>
          <Input
            labelText='Уровень лояльности'
            value={LOYALITY[cloneSelectOrder.loyality]}
            disabled
          />
          <Dropdown
            trigger={
              <Input
                labelText='Статус заказа'
                value={ORDER_STATUSES[cloneSelectOrder.status]}
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
                  [styles.statusOverlayItemSelected]: selectedStatus === key,
                })}
              >
                <Radio
                  id={key}
                  className={styles.hiddenInput}
                  name='statusEditForm'
                  onChange={() => setSelectedStatus(key)}
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
            incorrect={!correct.code}
          />
        </div>
        <div className={styles.footer}>
          {!Object.values(correct).reduce((acc, current) => acc && current) && (
            <span className={styles.footerErrorText}>{getTextError()}</span>
          )}
          <Button
            nameIcon='checkmark'
            onClick={() => {
              if (handleError({ customer, code: confirmationCode })) {
                onEditOrderClick(cloneSelectOrder);
                onCloseEditFormClick();
              }
            }}
          >
            <span>Сохранить</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
