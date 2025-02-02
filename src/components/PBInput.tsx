type Props = {
  defaultValue?: string;
  width?: number;
  height?: number;
  align?: "left" | "center" | "right";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  isRequired?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const PBInput: React.FC<Props> = ({
  defaultValue = "",
  width,
  height,
  align = "center",
  icon,
  iconPosition = "left",
  className = "",
  isRequired = false,
  ...props
}) => (
  <div
    className={`flex items-center px-1 ${className} ${
      isRequired ? "bg-custom-form-acc" : "bg-custom-white"
    }`}
    style={{
      width: width ? `${width}px` : "100%",
      height: height ? `${height}px` : "26px",
    }}
  >
    {icon && iconPosition === "left" && icon}
    <input
      defaultValue={defaultValue}
      className={`bg-transparent placeholder:text-custom-gray-4 block px-1 outline-none text-xs text-custom-black w-full h-full ${
        align === "left"
          ? "text-left"
          : align === "right"
          ? "text-right"
          : "text-center"
      }`}
      {...props}
    />
    {icon && iconPosition === "right" && icon}
  </div>
);

export default PBInput;
