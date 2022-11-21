import {
  Button,
  Dropdown,
  ButtonSizeTypes,
  ButtonColorTypes,
  Input,
} from 'src/shared/components';

import classNames from 'classnames';
import styles from './DropdownNumberPage.module.css';
import { useContext } from 'react';
import { FilterContext } from 'src/features/PageAdmin';

export const DropdownNumberPage = ({ className }) => {
  const { pageNumber, onPageNumberChange, onPageNumberReset } =
    useContext(FilterContext);
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
