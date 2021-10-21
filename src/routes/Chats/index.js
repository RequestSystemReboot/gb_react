import React, { useCallback, useEffect, useState } from "react";
import styles from "./Chats.module.css";
import {
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch as UISwitch,
} from "@material-ui/core";
import { Chat } from "./Routes/Chat/containers/Chat";
import { getChatByIdPath } from "../../navigation";
import { Link, Route, Switch, useParams } from "react-router-dom";
import { createChat, popChat } from "../../App";
import {auth, chatsRef, messagesRef, profileRef} from "../../firebase";

export const Chats = ({ setDarkTheme, DarkTheme }) => {
  const [Chats, setChats] = useState({});
  const [Messages, setMessages] = useState({});
  const [UserName, setUserName] = useState('Human');

  const onChatsChange = useCallback((snapshot) => {
    setChats(snapshot.val());
  }, []);

  const onMessagesChange = useCallback((snapshot) => {
    if (snapshot.exists()) {
      setMessages(snapshot.val());
    }
  }, []);

  useEffect(() => {
    chatsRef.on("value", onChatsChange);
  }, []);

  useEffect(() => {
    messagesRef.on("value", onMessagesChange);
  }, []);

  const onProfileChange = useCallback((snapshot) => {
    if (auth.currentUser) {
      setUserName(snapshot.val()[auth.currentUser.uid])
    }
  }, []);

  useEffect(() => {
    profileRef.on("value", onProfileChange);
  }, []);

  const onSendMessage = async (messageText, chat_id) => {
    const date = new Date().getTime();
    const Message = {
      id: date + UserName,
      text: messageText,
      author: UserName,
      date: date,
      color: "blue",
    };
    messagesRef.child(chat_id).push(Message);
    const RobotMessage = {
      id: date + "Robot",
      text: messageText + " Got it " + UserName + "!",
      author: "Robot",
      date: date,
      color: "red",
    };
    setTimeout(() => {
      messagesRef.child(chat_id).push(RobotMessage);
    }, 2000);

  };

  const { chatId } = useParams();

  const ChatMessages = () => {
    if (Messages[chatId]) {
      let messages = [];
      Object.entries(Messages[chatId]).forEach(([key, value]) => {
        messages.push(value);
      });
      return messages;
    } else {
      return [];
    }
  };

  return (
    <Container fixed>
      <Grid container spacing={1} className={styles.App}>
        <Grid item xs={3} className={styles.ChatList}>
          <List sx={{ width: "100%", height: "85vh", overflow: "auto" }}>
            {Object.keys(Chats).map((chat_id) => (
              <ListItem key={chat_id}>
                <ListItemButton>
                  <Button onClick={() => popChat(chat_id)}>Pop</Button>
                  <ListItemText>
                    <Link to={getChatByIdPath(chat_id)}>{Chats[chat_id]}</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button onClick={() => createChat()}>Add</Button>
        </Grid>
        <Grid item xs={9} className={styles.Messages}>
          <Switch>
            <Route
              path={getChatByIdPath()}
              render={() => (
                <Chat
                  name={Chats[chatId]}
                  chat_id={chatId}
                  onSend = {onSendMessage}
                  messages={ChatMessages()}
                />
              )}
            />
          </Switch>
        </Grid>
        <Grid item xs={2}>
          <FormGroup>
            <FormControlLabel
              control={
                <UISwitch
                  checked={DarkTheme}
                  onChange={() => {
                    setDarkTheme(!DarkTheme);
                  }}
                />
              }
              label="Theme"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Container>
  );
};
