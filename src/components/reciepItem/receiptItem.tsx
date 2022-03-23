import React from "react";
import styles from "./receiptItem.module.css";
import DotoriIcon from "../icons/dotoriIcon";
import { ReceiptItemProps } from "../../interface";

const ReceiptItem = ({ product }: ReceiptItemProps) => (
  <li className={styles.recieptItem}>
    <p className={styles.title}>
      {product.productName} <span className={styles.quantity}>(1 item)</span>
    </p>
    <p className={styles.price}>
      <DotoriIcon /> {product.price}
    </p>
  </li>
);

export default ReceiptItem;
