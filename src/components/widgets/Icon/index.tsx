type IconProps = {
  onClick?: VoidFunction;
  className?: string;
};

type ValueProps = IconProps & {
  value: React.ElementType;
  children?: null;
};

type ChildrenProps = IconProps & {
  children: React.ReactElement;
  value?: null;
};

const Icon = ({
  value: IconComponent,
  className,
  onClick,
  children,
}: ValueProps | ChildrenProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  if (children)
    return (
      <div onClick={onClick} className={`pointer-cursor ${className}`}>
        {children}
      </div>
    );

  return (
    <IconComponent
      onClick={handleClick}
      className={`pointer-cursor ${className || ''}`}
    />
  );
};

export default Icon;
