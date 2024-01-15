import { PropsWithChildren, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from "./Modal.module.css";

interface ModalProp extends PropsWithChildren {
  hideClose?: boolean;
  onClose?: () => void;
}

export const Modal = ({ onClose, hideClose, children }: ModalProp) => {
  useEffect(() => {
    const handleEscPress = ({ key }: any) => {
      if (onClose && key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscPress, false);

    return () => {
      document.removeEventListener("keydown", handleEscPress, false);
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalDialog}>
        {!hideClose && (
          <XMarkIcon className={styles.modalCloseBtn} onClick={onClose} />
        )}
        {children}
      </div>
    </div>
  );
};
