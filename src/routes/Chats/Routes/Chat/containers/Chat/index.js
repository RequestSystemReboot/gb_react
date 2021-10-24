import React from "react";
import { Messages } from "../../components/Messages";
import { Container, Grid } from "@material-ui/core";
import { MessageInput } from "../../components/MessageInput";
import { messagesConnect } from "../../../../../../connects/messagesConnect";
import { createAddMessageRequest } from "../../../../../../store/messages/actions";
import { useDispatch } from "react-redux";
import { useSendMessageForm } from "../../hooks/useSendMessageForm";

const ChatRender = ({ chat_id, name, messages }) => {
  const MessageList = messages.messages[chat_id] || [];
  const dispatch = useDispatch();

  const onSendMessage = async (messageText) => {
    dispatch(createAddMessageRequest(chat_id, messageText));
  };

  const [inputValue, { onChange, onSubmit }] = useSendMessageForm({
    onSend: onSendMessage,
  });

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          {name}
          <Messages messages={MessageList} />
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

export const Chat = messagesConnect(ChatRender);
