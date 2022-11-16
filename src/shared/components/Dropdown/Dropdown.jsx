import { useState } from 'react';
import React from 'react';

import styles from './Dropdown.module.css';
import classNames from 'classnames';

export const Dropdown = ({
  trigger = {},
  overlay = '',
  childrenClassNames = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((val) => !val);
  };

  const cloneTrigger = React.cloneElement(trigger, { onClick: toggleDropdown });

  return (
    <div className={styles._}>
      {cloneTrigger}
      {isOpen && (
        <div className={classNames(styles.overlay, childrenClassNames.overlay)}>
          {overlay}
        </div>
      )}
    </div>
  );
};
