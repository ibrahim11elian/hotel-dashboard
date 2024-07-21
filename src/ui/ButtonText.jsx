const ButtonText = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-sm border-none bg-transparent text-center font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700 active:text-blue-700"
    >
      {children}
    </button>
  );
};

export default ButtonText;
