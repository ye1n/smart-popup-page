type Props = {
  variant?:
    | "blue"
    | "white-outline-shadow"
    | "white-outline"
    | "icon-white-outline"
    | "gray"
    | "table-gray";
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick: () => void;
};

const PBButton: React.FC<Props> = ({
  variant = "blue",
  label,
  icon,
  iconPosition = "left",
  className = "",
  onClick,
}) => {
  const variantClass = {
    blue: "bg-pb-custom-btn-default text-pb-custom-white font-bold h-[24px] rounded px-2",
    "white-outline-shadow":
      "border border-pb-custom-btn-line text-pb-custom-black bg-pb-custom-white shadow font-medium h-[24px] rounded px-2",
    "white-outline":
      "border border-pb-custom-gray-4 text-pb-custom-gray-1 bg-pb-custom-white font-medium h-[24px] rounded px-2",
    "icon-white-outline":
      "border border-pb-custom-form-line bg-pb-custom-white w-[24px] h-[24px] flex items-center justify-center rounded",
    gray: "bg-pb-custom-gray-3 text-pb-custom-white font-bold h-[24px] rounded px-2",
    "table-gray":
      "bg-pb-custom-btn-inForm h-[18px] text-pb-custom-gray-1 text-[10px] px-1.5",
  };

  return (
    <button
      className={`flex items-center gap-1 outline-none ${variantClass[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && icon}
      {label && <p className="text-xs">{label}</p>}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default PBButton;
