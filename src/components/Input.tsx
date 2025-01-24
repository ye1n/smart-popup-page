type Props = {
  defaultValue?: string;
  width?: string;
  height?: string;
  align?: "left" | "center" | "right";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  isRequired?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({
  defaultValue = "",
  width = "w-full",
  height = "h-[26px]",
  align = "center",
  icon,
  iconPosition = "left",
  className = "",
  isRequired = false,
  ...props
}) => (
  <div
    className={`flex items-center px-1 ${className} ${width} ${height} ${
      isRequired ? "bg-custom-form-acc" : "bg-custom-white"
    }`}
  >
    {icon && iconPosition === "left" && icon}
    <input
      defaultValue={defaultValue}
      className={`placeholder:text-custom-gray-4 block px-1 outline-none text-xs text-custom-black w-full h-full ${
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

export default Input;
