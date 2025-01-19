type Props = {
  icon: any;
  width?: string;
  height?: string;
  className?: string;
};

const Icon: React.FC<Props> = ({
  icon,
  width = "16",
  height = "16",
  className = "",
  ...props
}) => {
  // svg
  if (typeof icon === "function") {
    const SVGIcon = icon;
    return (
      <SVGIcon width={width} height={height} className={className} {...props} />
    );
  }

  // png
  if (typeof icon === "string") {
    return (
      <img
        src={icon}
        width={width}
        height={height}
        alt=""
        className={className}
        {...props}
      />
    );
  }

  return null;
};

export default Icon;
