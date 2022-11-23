import {
  Button,
  Dropdown,
  ButtonSizeTypes,
  ButtonColorTypes,
  Input,
} from 'src/shared/components';

import classNames from 'classnames';
import styles from './DropdownNumberPage.module.css';
import { useState } from 'react';

export const DropdownNumberPage = ({ className }) => {
  const [pageNumber, setPageNumber] = useState('');
  const createHandleChange = (setter) => [
    ({ target: { value } }) => setter(value),
    () => setter(''),
  ];
  const [onPageNumberChange, onPageNumberReset] =
    createHandleChange(setPageNumber);

  return (
    <Dropdown
      trigger={
        <Button
          size={ButtonSizeTypes.sizeSlim}
          color={ButtonColorTypes.colorClearBlue}
        >
          <span>#</span>
        </Button>
      }
      overlay={
        <>
          <span>Номер страницы</span>
          <Input
            placeholder='Введите'
            value={pageNumber}
            onChange={onPageNumberChange}
            onReset={onPageNumberReset}
          />
        </>
      }
      childrenClassNames={{ overlay: classNames(styles.overlay) }}
    />
  );
};
