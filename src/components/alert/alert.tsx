import React from "react";
import { AlertProps } from "../../interface";
import styles from "./alert.module.css";

const Alert = ({ alertMsg, warning, onClose }: AlertProps) => (
  <div className={warning ? `${styles.warning}` : `${styles.notify}`}>
    <div className={styles.container}>
      <p className={styles.message}>{alertMsg}</p>
      <button
        className={warning ? `${styles.closeWarning}` : `${styles.closeNotify}`}
        onClick={onClose}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          className={styles.closeIcon}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="15.5564"
            width="22"
            height="2"
            rx="1"
            transform="rotate(-45 0 15.5564)"
            fill="currentColor"
          />
          <rect
            width="22"
            height="2"
            rx="1"
            transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.9707 15.5564)"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default Alert;
