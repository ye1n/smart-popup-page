type Props = {
  label: string;
  className?: string;
};

const PBLabel: React.FC<Props> = ({ label, className = "" }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <div className="w-0.5 h-[9px] bg-pb-custom-black" />
      <p className="text-xs font-bold text-pb-custom-primary">{label}</p>
    </div>
  );
};

export default PBLabel;
