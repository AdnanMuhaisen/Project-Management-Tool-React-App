import { forwardRef, useRef } from "react";
import { useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={modal}>
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
