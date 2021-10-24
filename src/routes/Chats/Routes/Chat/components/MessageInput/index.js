import React from "react";
import styles from "./message_input.module.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

export const MessageInputTestIds = {
  submit: "MessageInput-submit",
  messageField: "MessageInput-messageField"
};

export const MessageInput = ({ value, onSubmit, onChange }) => {
  const TextInputRef = React.useRef(null);

  React.useEffect(() => {
    TextInputRef.current.focus();
  }, []);

  return (
    <div className={styles.Container}>
      <TextField
        data-testid={MessageInputTestIds.messageField}
        inputRef={TextInputRef}
        id="outlined-basic"
        label="Write message"
        variant="outlined"
        size="small"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.Input}
      />
      <Button
        data-testid={MessageInputTestIds.submit}
        variant="contained"
        color="primary"
        onClick={onSubmit}
        className={styles.Button}
      >
        Send
      </Button>
    </div>
  );
};
