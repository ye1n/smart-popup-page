import React, { useState } from "react";

type Props = {
  checkedColor?: string;
  isChecked?: boolean;
  label?: string;
  className?: string;
  buttonStyle?: boolean;
};

const PBRadio: React.FC<Props> = ({
  checkedColor = "#0f54df",
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
          ? "border border-custom-btn-line bg-custom-white shadow font-medium h-[24px] rounded px-2"
          : ""
      }`}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m6 7.834 2 2 6.667-6.667"
          stroke={checked ? checkedColor : "#BDBDBD"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14 8.5v4.667a1.334 1.334 0 0 1-1.333 1.333H3.333A1.334 1.334 0 0 1 2 13.167V3.833A1.333 1.333 0 0 1 3.333 2.5h7.334"
          stroke={checked ? checkedColor : "#BDBDBD"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {label && <p className="text-xs text-custom-black">{label}</p>}
    </button>
  );
};

export default PBRadio;
