import { Button } from "@/components/atoms";
import styles from "./EventDeleteModal.module.css";

interface EventDeleteModalProps {
  onClose: () => void;
  onDelete: () => void;
}

export const EventDeleteModal = ({
  onClose,
  onDelete,
}: EventDeleteModalProps) => (
  <div className={styles.eventDeleteContainer}>
    <h2 className={styles.eventDeleteTitle}>Are you sure?</h2>
    <p>This action cannot be undone</p>

    <div className={styles.eventDeleteButtonGroup}>
      <Button className={styles.eventDeleteCancel} onClick={onClose}>
        Cancel
      </Button>

      <Button className={styles.eventDeleteConfirm} onClick={onDelete}>
        Delete
      </Button>
    </div>
  </div>
);
