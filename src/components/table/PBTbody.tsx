import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const PBTbody: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <tbody
      className={`border-b divide-y divide-pb-custom-form-line border-pb-custom-form-line ${className}`}
    >
      {children && children}
    </tbody>
  );
};

export default PBTbody;
