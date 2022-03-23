import React from "react";
import { MoveIconProps } from "../../interface";
import styles from "./moveIcon.module.css";

const MoveIcon = ({ onBtnClick }: MoveIconProps) => {
  return (
    <button className={styles.button} onClick={onBtnClick}>
      <svg
        className={styles.arrow}
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 32L14.2058 18.5L29.7942 18.5L22 32Z" fill="currentColor" />
      </svg>
    </button>
  );
};

export default MoveIcon;
