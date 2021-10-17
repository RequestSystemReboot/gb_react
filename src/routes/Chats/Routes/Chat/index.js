import React, { useEffect } from "react";
import { Messages } from "./Messages";
import { Container, Grid } from "@material-ui/core";
import { MessageInput } from "./MessageInput";
import { messagesConnect } from "../../../../connects/messagesConnect";

const ChatRender = ({ chat_id, name, messagesAddItem, messages }) => {
  const MessageList = messages.messages[chat_id] || [];

  function SendMessage(text, author, color) {
    const date = new Date().getTime();
    messagesAddItem(chat_id, {
      text: text,
      author: author,
      date: date,
      id: author + date,
      color: color,
    });
  }

  function Robot(text) {
    SendMessage("'" + text + "' - Got it, bro!", "Robot", "darkred");
  }

  useEffect(() => {
    if (MessageList.length > 0) {
      const last_message = MessageList[MessageList.length - 1];
      if (last_message.author === "Human") {
        Robot(last_message.text);
      }
    }
  }, [MessageList]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          {name}
          <Messages messages={MessageList} SendMessage={SendMessage} />
        </Grid>
        <Grid item xs={12}>
          <MessageInput onSend={SendMessage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export const Chat = messagesConnect(ChatRender);
