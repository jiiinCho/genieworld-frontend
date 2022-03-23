import React, { useState, useEffect } from "react";
import { AttributeProps } from "../../interface";
import styles from "./attribute.module.css";

const Attribute = ({
  src,
  message,
  editable,
  onAlert,
  onMsgUpdate,
}: AttributeProps) => {
  const [edit, setEdit] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg(message.toString());
  }, [message]);

  const onItemClick = () => {
    setEdit(true);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMessage = e.target.value;
    if (newMessage.length > 40) {
      onAlert && onAlert("Message cannot excceed 40 characters", true);
      return;
    }
    setMsg(newMessage);
  };

  const onTextSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setEdit(false);
      onMsgUpdate && onMsgUpdate(msg);
    }
  };
  return (
    <li
      onClick={onItemClick}
      className={editable ? `${styles.edit}` : `${styles.attr}`}
    >
      <img className={styles.icon} src={src} />
      {edit ? (
        <input
          type="textarea"
          onChange={onInputChange}
          value={msg}
          className={styles.messageInput}
          onKeyPress={onTextSubmit}
        />
      ) : (
        <p className={styles.message}>{msg}</p>
      )}
    </li>
  );
};

export default Attribute;
