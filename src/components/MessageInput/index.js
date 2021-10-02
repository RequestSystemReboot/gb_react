import React, { useState } from "react";
import styles from "./message_input.module.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

export const MessageInput = ({ onSend }) => {
  const [InputText, setInputText] = useState("");
  const [Sent, setSent] = useState(true);

  const TextInputRef = React.useRef(null);

  React.useEffect(() => {
    TextInputRef.current.focus();
  }, [Sent]);

  function ChangeText(e) {
    setInputText(e.target.value);
  }

  function Send() {
    onSend(InputText, "Human", "blue");
    setSent(!Sent);
    setInputText("");
  }

  return (
    <div className={styles.Container}>
      <TextField
        inputRef={TextInputRef}
        id="outlined-basic"
        label="Write message"
        variant="outlined"
        size="small"
        value={InputText}
        onChange={ChangeText}
        className={styles.Input}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => Send()}
        className={styles.Button}
      >
        Send
      </Button>
    </div>
  );
};
