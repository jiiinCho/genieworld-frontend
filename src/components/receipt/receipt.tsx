import React, { useState, useEffect } from "react";
import styles from "./receipt.module.css";
import DotoriIcon from "../icons/dotoriIcon";
import ReceiptItem from "../reciepItem/receiptItem";
import { ReceiptProps } from "../../interface";

const Receipt = ({
  currDotori,
  ownedCharacters,
  list,
  onCheckout,
}: ReceiptProps) => {
  const [discount, setDiscount] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [sum, setSum] = useState(0);
  const [payment, setPayment] = useState(0);
  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    setQuantity(list.length);
    const total = list.reduce((sum, { price }) => sum + price, 0);
    setSum(total);
    const paid = currDotori - total;
    if (paid < 0) {
      setPayment(Math.floor(paid));
      setAlertMsg("please charge your dotori");
    } else {
      setPayment(paid);
      setAlertMsg("");
    }
  }, [list, currDotori]);

  useEffect(() => {
    if (ownedCharacters) {
      const foundItem = ownedCharacters.filter((char) =>
        list.find((item) => item.type === char.type)
      );
      if (foundItem.length !== 0) {
        const msg = foundItem.map((item) => item.type);
        const alertMessage = `You already owned ${msg.join(", ")}`;
        setAlertMsg(alertMessage);
      }
    }
  }, [list, ownedCharacters]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };

  const willCheckout = () => {
    if (alertMsg) {
      const currMsg = alertMsg;
      setAlertMsg("");
      setTimeout(() => {
        setAlertMsg(currMsg);
      }, 100);
    }
    !alertMsg && onCheckout(payment);
  };

  const onDiscountSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (discountCode !== "HappyGenie") {
      setAlertMsg("Invalid discount code");
      setTimeout(() => {
        setAlertMsg("");
      }, 2000);
    }
    setDiscount(false);
  };

  return (
    <>
      <form className={styles.receiptContainer} onSubmit={onDiscountSubmit}>
        <p className={styles.title}>Discount</p>
        <button
          type="button"
          className={styles.discount}
          onClick={() => {
            discount ? setDiscount(false) : setDiscount(true);
          }}
        >
          Use discount
        </button>
        <div
          className={`${styles.discountContainer} ${discount && styles.active}`}
        >
          <input
            type="text"
            placeholder="Enter code"
            onChange={onInputChange}
            value={discountCode}
            className={styles.discountInput}
          />
          <button className={styles.discountSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>

      <ul className={styles.receiptContainer}>
        {list.length === 0 && (
          <p className={styles.alert}>Your cart is empty</p>
        )}
        {list.map((product) => (
          <ReceiptItem key={product.id} product={product} />
        ))}
      </ul>

      <ul className={styles.receiptContainer}>
        <li className={styles.recieptItem}>
          <p className={styles.sum}>
            Total <span className={styles.quantity}>({quantity} item)</span>
          </p>
          <p className={styles.sum}>
            <DotoriIcon />
            {sum}
          </p>
        </li>
        <li className={styles.recieptItem}>
          <p className={styles.title}>Current dotori</p>
          <p className={styles.price}>
            <DotoriIcon /> {currDotori}
          </p>
        </li>
      </ul>

      <div className={styles.sumContainer}>
        <div className={styles.recieptItem}>
          <p className={styles.sum}>After purchase</p>
          <p className={`${styles.sum} ${alertMsg && styles.minus}`}>
            <DotoriIcon />
            {payment}
          </p>
        </div>

        <div className={styles.sumButtons}>
          <button className={styles.charge}>Charge dotori</button>
          <button className={styles.checkout} onClick={willCheckout}>
            Checkout
          </button>
        </div>
        {alertMsg && <p className={styles.alertCharge}>{alertMsg}</p>}
      </div>
    </>
  );
};
export default Receipt;
