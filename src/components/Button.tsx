type Props = {
  variant?: "blue" | "white-outline-shadow" | "white-outline" | "gray";
  label: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({
  variant = "blue",
  label,
  icon,
  iconPosition = "left",
  className = "",
  onClick,
}) => {
  const variantClass = {
    blue: "bg-custom-btn-default text-white font-bold",
    "white-outline-shadow":
      "border border-custom-grey-4 text-custom-grey-1 bg-white shadow font-medium",
    "white-outline":
      "border border-custom-grey-4 text-custom-grey-1 bg-white font-medium",
    gray: "bg-custom-grey-3 text-white font-bold",
  };

  return (
    <button
      className={`flex items-center gap-1 h-[24px] rounded outline-none px-2 pt-0.5 ${variantClass[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && icon}
      <p className="text-xs whitespace-nowrap">{label}</p>
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
