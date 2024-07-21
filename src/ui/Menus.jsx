import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

export default Menus;

const Menu = ({ children }) => (
  <div className="flex items-center justify-end">{children}</div>
);

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.scrollX + rect.x - rect.width * 4,
      y: window.scrollY + rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      onClick={handleClick}
      className="translate-x-2 rounded-sm border-none bg-none p-1 text-2xl transition-all duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-blue-600"
    >
      <HiEllipsisVertical />
    </button>
  );
}

const List = ({ children, id }) => {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;
  return createPortal(
    <ul
      ref={ref}
      className="absolute w-max rounded-md bg-white shadow-md"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {children}
    </ul>,
    document.body,
  );
};
const Button = ({ children, icon, onClick = () => {} }) => {
  const { close } = useContext(MenusContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className="flex w-full items-center gap-4 border-none bg-none p-3 text-left text-base text-gray-700 transition-all duration-200 hover:bg-gray-50"
      >
        {icon}
        {children}
      </button>
    </li>
  );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
