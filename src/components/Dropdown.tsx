import React from "react";
import { icons } from "../constants/icons";
import Icon from "./Icon";

type Props = {
  placeholder?: string;
  value?: string;
  options: Array<{ label: string; value: string | number }>;
  width?: string;
  align?: "left" | "center" | "right";
  className?: string;
  isRequired?: boolean;
  onChange?: (value: string | number) => void;
};

const Dropdown: React.FC<Props> = ({
  placeholder = "",
  value,
  options,
  width = "w-full",
  align = "center",
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
        className={`block pr-[24px] pl-2 appearance-none h-full outline-none text-xs text-custom-black bg-transparent ${className} ${width} ${
          align === "left"
            ? "text-left"
            : align === "right"
            ? "text-right"
            : "text-center"
        }`}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} label={option.label} value={option.value} />
        ))}
      </select>
      <Icon
        icon={icons.arrBottom}
        width="20"
        height="20"
        className="absolute transform -translate-y-1/2 pointer-events-none right-1 top-1/2"
      />
    </div>
  );
};

export default Dropdown;
