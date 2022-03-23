import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  btnName: string;
  onBtnClick: () => void;
  btnType: "button" | "submit" | "reset" | undefined;
}
const Button = ({ btnName, onBtnClick, btnType }: ButtonProps) => (
  <button type={btnType} className={styles.button} onClick={onBtnClick}>
    {btnName}
  </button>
);

export default Button;
