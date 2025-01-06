interface Props {
  label: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      className={"h-[26px] rounded bg-custom-btn-default outline-none px-2"}
      onClick={onClick}
    >
      <p className="text-xs font-bold text-white whitespace-nowrap">{label}</p>
    </button>
  );
};

export default Button;
