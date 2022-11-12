import { useState } from 'react';
import { Filter } from '../Filter/Filter';

export const FilterContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowFilterButtonClick = () => {
    setIsOpen((current) => !current);
  };

  return (
    <Filter
      onShowFilterButtonClick={handleShowFilterButtonClick}
      isOpen={isOpen}
    />
  );
};
