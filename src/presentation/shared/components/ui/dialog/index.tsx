import { type HTMLAttributes } from "react";
import styles from "./Dialog.module.css";

interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function Dialog({ 
  isOpen, 
  onClose, 
  title, 
  className = "", 
  children, 
  ...props 
}: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={`${styles.dialog} ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {title && (
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <button 
              className={styles.closeButton} 
              onClick={onClose}
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

