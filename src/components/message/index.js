import React from "react";
import styles from "./message.module.css";

export const Message = ({ text, author, date, color }) => {
  return (
    <div className={styles.MessageDiv} style={{ color: color }}>
      <p className={styles.Text}>{text}</p>
      <p className={styles.Attrs}>
        {author} {new Date(date).toLocaleTimeString("ru-Ru")}
      </p>
    </div>
  );
};
