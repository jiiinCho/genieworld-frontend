import React from "react";
import styles from "./backgroundItem.module.css";
interface BackgroundItemProps {
  component: JSX.Element | undefined;
}
const BackgroundItem = ({ component }: BackgroundItemProps) => (
  <div className={styles.item}>{component}</div>
);
export default BackgroundItem;
