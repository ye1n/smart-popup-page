type Props = {
  defaultValue?: string;
  width?: string;
  height?: string;
  align?: "left" | "center" | "right";
  className?: string;
  isRequired?: boolean;
};

const Input: React.FC<Props> = ({
  defaultValue = "",
  width = "w-full",
  height = "h-[26px]",
  align = "center",
  className = "",
  isRequired = false,
}) => (
  <input
    defaultValue={defaultValue}
    className={`px-2 block outline-none text-xs text-custom-black ${className} ${width} ${height} ${
      isRequired ? "bg-custom-form-acc" : "bg-custom-white"
    } ${
      align === "left"
        ? "text-left"
        : align === "right"
        ? "text-right"
        : "text-center"
    }`}
  />
);

export default Input;
