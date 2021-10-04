import React, { useEffect, useState } from "react";
import { Messages } from "./Messages";
import { Container, Grid } from "@material-ui/core";
import { MessageInput } from "./MessageInput";

export const Chat = ({ name }) => {
  const [MessageList, setMessageList] = useState([]);

  function SendMessage(text, author, color) {
    const date = new Date().getTime();
    let message_list = [...MessageList];
    message_list.push({
      text: text,
      author: author,
      date: date,
      id: author + date, // no key error
      color: color,
    });
    setMessageList(message_list);
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
