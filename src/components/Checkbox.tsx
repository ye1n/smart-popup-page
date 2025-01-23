import React from "react";

interface CheckboxProps {
  checkedColor?: string;
  isChecked?: boolean;
  label?: string;
  className?: string;
  buttonStyle?: boolean;
  onClick: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checkedColor = "#222",
  isChecked = false,
  label = "",
  className = "",
  buttonStyle = false,
  onClick,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 ${className} ${
        buttonStyle
          ? "border border-custom-btn-line bg-custom-white shadow font-medium h-[24px] rounded px-2"
          : ""
      }`}
      onClick={onClick}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="8"
          cy="8"
          r="6.5"
          fill={isChecked ? checkedColor : "#BDBDBD"}
        />
        <path
          d="m5 8 2.778 2.5 2.722-5"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label && <p className="text-xs text-custom-black">{label}</p>}
    </button>
  );
};

export default Checkbox;
