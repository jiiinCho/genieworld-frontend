import React, { useState, useEffect } from "react";
import styles from "./promotion.module.css";

const Promotion = () => {
  const [message, setMessage] = useState("FREE SHIPPING AROUND THE WORLD");
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (count === 0) {
      timeId = setTimeout(() => {
        setMessage("LIVE IN YOUR DREAMS AND NEVER WAKE UP");
        setCount(1);
      }, 5000);
    } else {
      timeId = setTimeout(() => {
        setMessage("FREE SHIPPING AROUND THE WORLD");
        setCount(0);
      }, 5000);
    }

    return () => clearTimeout(timeId);
  }, [count]);
  return (
    <article className={styles.banner}>
      <div className={styles.message}>{message}</div>
    </article>
  );
};

export default Promotion;
