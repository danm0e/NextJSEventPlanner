import { PropsWithChildren, useEffect } from "react";
import styles from "./Modal.module.css";

interface ModalProp extends PropsWithChildren {
  onClose: () => void;
}

export const Modal = ({ onClose, children }: ModalProp) => {
  useEffect(() => {
    const handleEscPress = ({ key }: any) => {
      if (key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscPress, false);

    return () => {
      document.removeEventListener("keydown", handleEscPress, false);
    };
  }, []);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalDialog}>{children}</div>
    </div>
  );
};
