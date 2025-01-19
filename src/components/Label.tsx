type Props = {
  label: string;
  className?: string;
};

const Label: React.FC<Props> = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="w-0.5 h-[9px] bg-custom-black" />
      <p className="pt-1 text-xs font-bold text-custom-primary">{label}</p>
    </div>
  );
};

export default Label;
