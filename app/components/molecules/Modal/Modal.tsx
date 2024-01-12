import { PropsWithChildren, useEffect } from "react";
import styles from "./Modal.module.css";

interface ModalProp extends PropsWithChildren {
  isVisible: boolean;
  onClose: () => void;
}

export const Modal = ({ isVisible, onClose, children }: ModalProp) => {
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

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalDialog}>{children}</div>
    </div>
  );
};
