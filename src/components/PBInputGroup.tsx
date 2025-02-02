import React from "react";

type Props = {
  label?: string;
  className?: string;
  children: React.ReactNode;
};

const PBInputGroup: React.FC<Props> = ({ label, children, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {label && (
        <label className="text-xs font-bold text-pb-custom-black">
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

export default PBInputGroup;
