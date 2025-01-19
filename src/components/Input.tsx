type Props = {
  defaultValue?: string;
  width?: string;
  className?: string;
  isRequired?: boolean;
};

const Input: React.FC<Props> = ({
  defaultValue = "",
  width = "",
  className = "",
  isRequired = false,
}) => (
  <input
    defaultValue={defaultValue}
    className={`h-[26px] outline-none text-center text-xs text-custom-black ${
      isRequired ? "bg-custom-form-acc" : "bg-custom-white"
    } ${className} ${width}`}
  />
);

export default Input;
