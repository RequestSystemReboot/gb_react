import React from "react";
import {List} from "@material-ui/core";
import { Message } from "../Message";

export const Messages = ({ messages }) => {
  return (
    <List sx={{ width: "100%", height: "85vh", overflow: "auto" }}>
      {messages.map((message) => (
        <Message
          text={message.text}
          author={message.author}
          color={message.color}
          date={message.date}
          key={message.id}
        />
      ))}
    </List>
  );
};
