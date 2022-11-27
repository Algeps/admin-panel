import { useSelector, useDispatch } from 'react-redux';

import styles from './Pagination.module.css';
import { PAGE_SIZE } from 'src/features/pageAdmin/lib/pageAdmin.constants';
import { getPageNumber } from 'src/features/pageAdmin/store/filters/filtersSelector';
import { setFilter } from 'src/features/pageAdmin/store/filters/filtersSlice';
import {
  Button,
  ButtonSizeTypes,
  ButtonColorTypes,
} from 'src/shared/components';

const ELLIPSIS = '...';

const getMassiveOfNumbers = (numberOfElements, currentNumber) => {
  const temp = [];
  if (numberOfElements <= 5) {
    for (let i = 0; i < numberOfElements; ++i) {
      temp[i] = i + 1;
    }
  } else if (currentNumber <= 2) {
    for (let i = 0; i < 3; ++i) {
      temp[i] = i + 1;
    }
    temp.push(ELLIPSIS, numberOfElements);
  } else if (currentNumber === 3) {
    for (let i = 0; i < 4; ++i) {
      temp[i] = i + 1;
    }
    temp.push(ELLIPSIS, numberOfElements);
  } else if (currentNumber >= 4 && currentNumber < numberOfElements - 2) {
    temp.push(
      1,
      ELLIPSIS,
      currentNumber - 1,
      currentNumber,
      currentNumber + 1,
      ELLIPSIS,
      numberOfElements
    );
  } else if (currentNumber >= 4 && currentNumber < numberOfElements - 1) {
    temp.push(
      1,
      ELLIPSIS,
      numberOfElements - 3,
      numberOfElements - 2,
      numberOfElements - 1,
      numberOfElements
    );
  } else {
    temp.push(
      1,
      ELLIPSIS,
      numberOfElements - 2,
      numberOfElements - 1,
      numberOfElements
    );
  }
  return temp;
};

export const Pagination = ({ className, numberOfRow }) => {
  const dispatch = useDispatch();
  const currentNumberPage = Number(useSelector(getPageNumber));
  const numberOfPage = Math.ceil(numberOfRow / PAGE_SIZE);

  const massiveNumbers = getMassiveOfNumbers(numberOfPage, currentNumberPage);
  const handleSwitchPageOnClick = (e) => {
    dispatch(setFilter({ key: 'pageNumber', value: e }));
  };
  return (
    <div className={className}>
      {massiveNumbers.map((e, index) =>
        e != ELLIPSIS ? (
          <Button
            key={index}
            size={ButtonSizeTypes.sizeSlim}
            color={
              e === currentNumberPage
                ? ButtonColorTypes.colorBlue
                : ButtonColorTypes.colorClearBlue
            }
            onClick={() => handleSwitchPageOnClick(e)}
          >
            <span>{e}</span>
          </Button>
        ) : (
          <span key={index} className={styles.elipsis}>
            {e}
          </span>
        )
      )}
    </div>
  );
};
