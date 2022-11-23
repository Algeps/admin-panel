import { ReactComponent as IcoAbort } from './assets/abort.svg';
import { ReactComponent as IcoBin } from './assets/bin.svg';
import { ReactComponent as IcoCheckmark } from './assets/checkmark.svg';
import { ReactComponent as IcoDot } from './assets/dot.svg';
import { ReactComponent as IcoFilter } from './assets/filter.svg';
import { ReactComponent as IcoLocked } from './assets/locked.svg';
import { ReactComponent as IcoMoon } from './assets/moon.svg';
import { ReactComponent as IcoPencil } from './assets/pencil.svg';
import { ReactComponent as IcoRefresh } from './assets/refresh.svg';
import { ReactComponent as IcoSearch } from './assets/search.svg';
import { ReactComponent as IcoSun } from './assets/sun.svg';
import { ReactComponent as IcoVArrow } from './assets/v_arrow.svg';
import { ReactComponent as IcoXLarge } from './assets/x-large.svg';
import { ReactComponent as IcoXMedium } from './assets/x-medium.svg';

import classNames from 'classnames';
import styles from './Icon.module.css';

const icons = {
  abort: IcoAbort,
  bin: IcoBin,
  checkmark: IcoCheckmark,
  dot: IcoDot,
  filter: IcoFilter,
  locked: IcoLocked,
  moon: IcoMoon,
  pencil: IcoPencil,
  refresh: IcoRefresh,
  search: IcoSearch,
  sun: IcoSun,
  vArrow: IcoVArrow,
  x_large: IcoXLarge,
  xMedium: IcoXMedium,
};

export const Icon = ({ className, iconName }) => {
  const IconComponent = icons[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={classNames(styles._, className)} />;
};
