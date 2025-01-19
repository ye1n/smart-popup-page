import React from "react";
import { icons } from "../constants/icons";
import Icon from "./Icon";

type Props = {
  placeholder?: string;
  value?: string;
  options: string[];
  width?: string;
  className?: string;
  isRequired?: boolean;
  onChange?: (value: string) => void;
};

const Dropdown: React.FC<Props> = ({
  placeholder = "",
  value,
  options,
  width = "",
  className = "",
  isRequired = false,
  onChange,
}) => {
  return (
    <div
      className={`relative h-[26px] ${
        isRequired ? "bg-custom-form-acc" : "bg-custom-white"
      }`}
    >
      <select
        value={value}
        className={`pr-5 appearance-none h-full outline-none text-center text-xs text-custom-black ${
          isRequired ? "bg-custom-form-acc" : "bg-custom-white"
        } ${width} ${className}`}
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
