import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

// Using the compound component pattern

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWidowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWidowName) });
}

const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (openName !== name) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={() => close()}>
          <HiXMark />
        </Button>
        {cloneElement(children, { onCloseModal: close })}
      </StyledModal>
    </Overlay>,
    document.body,
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

// components styles
const StyledModal = React.forwardRef(function styledModal(props, ref) {
  return (
    <div
      ref={ref}
      className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-8 shadow-lg transition-all duration-500"
    >
      {props.children}
    </div>
  );
});

const Overlay = ({ children }) => {
  return (
    <div className="z-1000 fixed left-0 top-0 h-full w-full bg-opacity-50 backdrop-blur-sm transition-all duration-500">
      {children}
    </div>
  );
};

const Button = ({ children, onClick }) => {
  return (
    <button
      className="absolute right-4 top-3 translate-x-2 transform rounded-sm border-none bg-none p-1 text-xl font-bold text-gray-700 transition-all duration-200 hover:bg-gray-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
