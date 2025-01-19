type Props = {
  defaultValue?: string;
  width?: string;
  className?: string;
};

const Input: React.FC<Props> = ({
  defaultValue = "",
  width = "w-[150px]",
  className = "",
}) => (
  <input
    defaultValue={defaultValue}
    className={`h-[26px] outline-none text-center text-xs text-custom-black ${className} ${width}`}
  />
);

export default Input;
