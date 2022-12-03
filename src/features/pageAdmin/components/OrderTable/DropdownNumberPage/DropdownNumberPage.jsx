import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  ButtonSizeTypes,
  ButtonColorTypes,
  Input,
} from 'src/shared/components';
import styles from './DropdownNumberPage.module.css';
import { setFilter } from 'src/features/pageAdmin/store/filters/filtersSlice';
import { getPageNumber } from 'src/features/pageAdmin/store/filters/filtersSelector';

const createHandleChange = (setter) => [
  ({ target: { value } }) => setter(value),
  () => setter(''),
];

export const DropdownNumberPage = ({ className }) => {
  const dispatch = useDispatch();
  const currentNumberPage = useSelector(getPageNumber);
  const [pageNumber, setPageNumber] = useState(currentNumberPage);
  const [isOpen, setIsOpen] = useState(false);
  const [onPageNumberChange, onPageNumberReset] =
    createHandleChange(setPageNumber);

  const toggleDropdown = () => {
    setIsOpen((val) => !val);
  };

  useEffect(() => {
    dispatch(setFilter({ pageNumber }));
  }, [pageNumber]);

  return (
    <div className={classNames(styles._, className)}>
      <Button
        size={ButtonSizeTypes.sizeSlim}
        color={
          isOpen ? ButtonColorTypes.colorBlue : ButtonColorTypes.colorClearBlue
        }
        onClick={toggleDropdown}
      >
        <span>#</span>
      </Button>
      {isOpen && (
        <div className={classNames(styles.overlay)}>
          <span>Номер страницы</span>
          <Input
            placeholder='Введите'
            value={currentNumberPage}
            onChange={onPageNumberChange}
            onReset={onPageNumberReset}
          />
        </div>
      )}
    </div>
  );
};
