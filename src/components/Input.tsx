type Props = {
  defaultValue?: string;
  width?: string;
  align?: "left" | "center" | "right";
  className?: string;
  isRequired?: boolean;
};

const Input: React.FC<Props> = ({
  defaultValue = "",
  width = "w-full",
  align = "center",
  className = "",
  isRequired = false,
}) => (
  <input
    defaultValue={defaultValue}
    className={`p-2 h-[26px] outline-none text-xs text-custom-black ${className} ${width} ${
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
