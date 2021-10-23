import React from "react";
import { Messages } from "../../components/Messages";
import { Container, Grid } from "@material-ui/core";
import { MessageInput } from "../../components/MessageInput";
import { useSendMessageForm } from "../../hooks/useSendMessageForm";

export const Chat = ({ chat_id, name, messages, onSend }) => {
  const [inputValue, { onChange, onSubmit }] = useSendMessageForm({
    onSend: onSend,
    chat_id: chat_id,
  });

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          {name}
          <Messages messages={messages} />
        </Grid>
        <Grid item xs={12}>
          <MessageInput
            value={inputValue}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
