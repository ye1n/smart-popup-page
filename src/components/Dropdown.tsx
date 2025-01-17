import React from "react";
import { icons } from "../constants/icons";
import Icon from "./Icon";

type Props = {
  placeholder?: string;
  value?: string;
  options: string[];
  width?: string;
  className?: string;
  onChange?: (value: string) => void;
};

const Dropdown: React.FC<Props> = ({
  placeholder = "",
  value,
  options,
  width = "",
  className = "",
  onChange,
}) => {
  return (
    <div className={`relative bg-custom-white h-[26px]`}>
      <select
        value={value}
        className={`pr-5 appearance-none h-full outline-none text-center text-xs text-custom-black ${width} ${className}`}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Icon
        icon={icons.arrBottom}
        width="20"
        height="20"
        className="absolute top-0 h-full right-1"
      />
    </div>
  );
};

export default Dropdown;
