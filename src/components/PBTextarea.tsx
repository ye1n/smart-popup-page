type Props = {
  className?: string;
  width?: number;
  height?: number;
  border?: boolean;
};

const PBTextarea: React.FC<Props> = ({
  className = "",
  width,
  height,
  border = false,
}) => {
  return (
    <textarea
      className={`custom-scrollbar block outline-none resize-none text-xs text-pb-custom-black p-2 ${className} ${
        border ? "border border-pb-custom-form-line border-t-[#333333]" : ""
      }`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
      }}
    />
  );
};

export default PBTextarea;
