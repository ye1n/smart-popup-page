interface Props {
  label: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button
      className={
        "rounded bg-custom-btn-default text-white outline-none text-xs font-bold px-2"
      }
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
