import React, { useState } from "react";
import styles from "./message_input.module.css";

export const MessageInput = ({ onSend }) => {
  const [InputText, setInputText] = useState("");

  function ChangeText(e) {
    setInputText(e.target.value);
  }

  return (
    <div className={styles.Container}>
      <input type={"text"} onChange={ChangeText} className={styles.Input} />
      <button
        onClick={() => onSend(InputText, "Human", "blue")}
        className={styles.Button}
      >
        Send
      </button>
    </div>
  );
};
