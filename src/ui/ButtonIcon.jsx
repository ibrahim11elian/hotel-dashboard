import { cloneElement } from "react";

function ButtonIcon({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-sm border-none bg-none p-1.5 text-2xl transition duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
    >
      {cloneElement(children, { className: "text-blue-600" })}
    </button>
  );
}

export default ButtonIcon;
