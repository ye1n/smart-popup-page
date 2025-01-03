interface Props {
  label?: string;
  id: string;
  defaultValue?: string;
  width?: string;
}

const LabeledInput: React.FC<Props> = ({
  label,
  id,
  defaultValue,
  width = "w-[150px]",
}) => (
  <div className="flex items-center gap-2">
    {label && (
      <label htmlFor={id} className="text-xs font-bold text-custom-black">
        {label}
      </label>
    )}
    <input
      id={id}
      defaultValue={defaultValue}
      className={`${width} h-[26px] outline-none text-center text-xs text-custom-black`}
    />
  </div>
);

export default LabeledInput;
