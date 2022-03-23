import React from "react";
import styles from "./spinner.module.css";

const Spinner = () => (
  <div className={styles.wrapper}>
    <div className={styles.elastic}></div>
  </div>
);

export default Spinner;
