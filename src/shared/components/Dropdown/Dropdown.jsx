import { useState } from 'react';
import React from 'react';

import styles from './Dropdown.module.css';
import classNames from 'classnames';

export const Dropdown = ({
  className,
  trigger = {},
  overlay = '',
  childrenClassNames = {},
}) => {
  const blockClassName = classNames(styles._, className);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((val) => !val);
  };

  const cloneTrigger = React.cloneElement(trigger, {
    onClick: toggleDropdown,
    className: classNames(childrenClassNames.trigger, styles.trigger),
  });
  return (
    <div className={blockClassName}>
      {cloneTrigger}
      {isOpen && (
        <div className={classNames(styles.overlay, childrenClassNames.overlay)}>
          {overlay}
        </div>
      )}
    </div>
  );
};
