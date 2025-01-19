type Props = {
  defaultValue?: string;
  width?: string;
};

const Input: React.FC<Props> = ({ defaultValue = "", width = "w-[150px]" }) => (
  <input
    defaultValue={defaultValue}
    className={`h-[26px] outline-none text-center text-xs text-custom-black ${width}`}
  />
);

export default Input;
