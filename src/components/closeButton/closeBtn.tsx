import React from "react";
import styles from "./closeBtn.module.css";

const CloseButton = () => (
  <svg
    width="100"
    height="100"
    className={styles.close}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      className={styles.rect}
      y="15.5564"
      width="22"
      height="2"
      rx="1"
      transform="rotate(-45 0 15.5564)"
      fill="currentColor"
    />
    <rect
      className={styles.rect}
      width="22"
      height="2"
      rx="1"
      transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.9707 15.5564)"
      fill="currentColor"
    />
  </svg>
);

export default CloseButton;
