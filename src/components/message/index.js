import React from "react";
import styles from "./message.module.css";

export const Message = (props) => {

    return <p className={styles.letters}>{props.children}</p>

}