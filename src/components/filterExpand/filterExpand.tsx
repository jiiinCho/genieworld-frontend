import React from "react";
import { FilterExpandProps } from "../../interface";
import CloseButton from "../closeButton/closeBtn";
import CheckIcon from "../icons/checkIcon";
import styles from "./filterExpand.module.css";

const FilterExpand = ({ onClose, onCategorySearch }: FilterExpandProps) => {
  return (
    <div className={styles.categoryList}>
      <div className={styles.categoryTitle}>
        <span>SELECT</span>
        <button className={styles.closeButton} onClick={onClose}>
          <CloseButton />
        </button>
      </div>
      <button
        className={styles.category}
        onClick={() => onCategorySearch("all")}
      >
        <span className={styles.check}>
          <CheckIcon />
        </span>
        All
      </button>
      <button
        className={styles.category}
        onClick={() => onCategorySearch("character")}
      >
        <span className={styles.check}>
          <CheckIcon />
        </span>
        GENIE
      </button>
      <button
        className={styles.category}
        onClick={() => onCategorySearch("furniture")}
      >
        <span className={styles.check}>
          <CheckIcon />
        </span>
        genieroom
      </button>
      <button
        className={styles.category}
        onClick={() => onCategorySearch("music")}
      >
        <span className={styles.check}>
          <CheckIcon />
        </span>
        music
      </button>
    </div>
  );
};

export default FilterExpand;
