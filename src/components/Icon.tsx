type Props = {
  icon: any;
  width?: number;
  height?: number;
  className?: string;
};

const Icon: React.FC<Props> = ({
  icon,
  width = 16,
  height = 16,
  className = "",
}) => {
  // svg
  if (typeof icon === "function") {
    const SVGIcon = icon;
    return <SVGIcon width={width} height={height} className={className} />;
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
      />
    );
  }

  return null;
};

export default Icon;
