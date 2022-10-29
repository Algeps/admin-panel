import icons from '../icons/index';

const Icon = ({ className, nameIcon, ...props }) => {
  const IconComponent = icons[nameIcon];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} />;
};

export default Icon;
