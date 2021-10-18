import React from "react";
import styles from "./message_input.module.css";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

export const MessageInput = ({ value, onSubmit, onChange }) => {
  const TextInputRef = React.useRef(null);

  React.useEffect(() => {
    TextInputRef.current.focus();
  }, []);



  return (
    <div className={styles.Container}>
      <TextField
        inputRef={TextInputRef}
        id="outlined-basic"
        label="Write message"
        variant="outlined"
        size="small"
        value={value}
        onChange={onChange}
        className={styles.Input}
      />
      <Button
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


export const SendMessageForm = ({value, isLoading, isError, onSubmit, onChange}) => {
    return (<div>
        <input value={value} onChange={onChange} type="text"/>
        <button onClick={onSubmit}>send</button>
        {
            isLoading && <div>
                loading...
            </div>
        }
        {
            isError && <div>
                error
            </div>
        }
    </div>)
}
