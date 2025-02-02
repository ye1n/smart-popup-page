import React from "react";
import { icons } from "../constants/icons";
import PBIcon from "./PBIcon";

type Props = {
  placeholder?: string;
  value?: string;
  options: Array<{ label: string; value: string }>;
  width?: number;
  height?: number;
  align?: "left" | "center" | "right";
  className?: string;
  isRequired?: boolean;
  onChange?: (value: string) => void;
};

const PBDropdown: React.FC<Props> = ({
  placeholder = "",
  value,
  options,
  width,
  height,
  align = "center",
  className = "",
  isRequired = false,
  onChange,
}) => {
  return (
    <div
      className={`relative ${
        isRequired ? "bg-pb-custom-form-acc" : "bg-pb-custom-white"
      }`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "26px",
      }}
    >
      <select
        value={value}
        className={`block pr-[24px] pl-2 appearance-none w-full h-full outline-none text-xs text-pb-custom-black bg-transparent ${className} ${
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
      <PBIcon
        icon={icons.arrBottom}
        width={20}
        height={20}
        className="absolute transform -translate-y-1/2 pointer-events-none right-1 top-1/2"
      />
    </div>
  );
};

export default PBDropdown;
