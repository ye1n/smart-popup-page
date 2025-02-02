import React from "react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const PBTr: React.FC<Props> = ({ children, className = "" }) => {
  return <tr className={`${className}`}>{children && children}</tr>;
};

export default PBTr;
