import React, { useState } from "react";

type Props = {
  checkedColor?: string;
  isChecked?: boolean;
  label?: string;
  className?: string;
  buttonStyle?: boolean;
};

const PBCheckbox: React.FC<Props> = ({
  checkedColor = "#222",
  isChecked = false,
  label = "",
  className = "",
  buttonStyle = false,
}) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <button
      className={`flex items-center justify-center gap-1 ${className} ${
        buttonStyle
          ? "border border-pb-custom-btn-line bg-pb-custom-white shadow font-medium h-[24px] rounded px-2"
          : ""
      }`}
      onClick={() => {
        setChecked(!checked);
      }}
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
          fill={checked ? checkedColor : "#BDBDBD"}
        />
        <path
          d="m5 8 2.778 2.5 2.722-5"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label && <p className="text-xs text-pb-custom-black">{label}</p>}
    </button>
  );
};

export default PBCheckbox;
