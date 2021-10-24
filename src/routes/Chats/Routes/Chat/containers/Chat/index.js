import React, { useEffect } from "react";
import { Messages } from "../../components/Messages";
import { Container, Grid } from "@material-ui/core";
import { MessageInput } from "../../components/MessageInput";
import { useSendMessageForm } from "../../hooks/useSendMessageForm";
import { useDispatch, useSelector } from "react-redux";
import { messagesSelector } from "../../../../../../store/messages/selectors";
import {fetchUsername, getUserName} from "../../../../../../store/profile/actions";
import {
  createAddMessageRequest,
  fetchMessages,
} from "../../../../../../store/messages/actions";
import {auth} from "../../../../../../firebase";

export const Chat = ({ chat_id, name }) => {
  const MessagesObj = useSelector(messagesSelector);
  const MessageList = MessagesObj[chat_id] || [];
  const username = useSelector(getUserName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
    dispatch(fetchUsername(auth.currentUser.uid));
  }, []);


  const onSendMessage = (messageText) => {
    dispatch(createAddMessageRequest(username, chat_id, messageText));
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
