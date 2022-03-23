import React from "react";
import MoveIcon from "./moveIcon";
import { MoveProps } from "../../interface";
import styles from "./move.module.css";

const Move = ({ onMove }: MoveProps) => {
  return (
    <div className={styles.grid}>
      <div className={styles.empty}></div>
      <div className={styles.up}>
        <MoveIcon onBtnClick={() => onMove("up")} />
      </div>
      <div className={styles.empty}></div>

      <div className={styles.left}>
        <MoveIcon onBtnClick={() => onMove("left")} />
      </div>
      <div className={styles.empty}></div>

      <div className={styles.right}>
        <MoveIcon onBtnClick={() => onMove("right")} />
      </div>
      <div className={styles.empty}></div>
      <div className={styles.down}>
        <MoveIcon onBtnClick={() => onMove("down")} />
      </div>
      <div className={styles.empty}></div>
    </div>
  );
};

export default Move;
