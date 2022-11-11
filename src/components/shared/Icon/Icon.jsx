import { icons } from '../icons/index';

export const Icon = ({ className, iconName, ...props }) => {
  const IconComponent = icons[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} />;
};
