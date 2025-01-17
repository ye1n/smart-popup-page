import React from "react";

type Props = {
  label?: string;
  className?: string;
  children: React.ReactNode;
};

const InputGroup: React.FC<Props> = ({ label, children, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {label && (
        <label className="text-xs font-bold text-custom-black whitespace-nowrap">
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

export default InputGroup;
