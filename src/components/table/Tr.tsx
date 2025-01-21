import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Tr: React.FC<Props> = ({ children, className = "" }) => {
  return <tr className={`h-[26px] ${className}`}>{children && children}</tr>;
};

export default Tr;
