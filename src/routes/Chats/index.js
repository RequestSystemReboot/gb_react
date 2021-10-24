import React, { useEffect } from "react";
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
import { getChatByIdPath, getChatsPath } from "../../navigation";
import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";
import { chatsConnect } from "../../connects/chatsConnect";

const ChatsRender = ({
  chatsList,
  createAddChatRequest,
  createPopChatRequest,
  fetchChats,
  setDarkTheme,
  DarkTheme,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    fetchChats();
  }, []);

  const chat = chatsList.find(({ id }) => id === chatId);

  if (chatId && !chat) {
    return <Redirect to={getChatsPath()} />;
  }

  return (
    <Container fixed>
      <Grid container spacing={1} className={styles.App}>
        <Grid item xs={3} className={styles.ChatList}>
          <List sx={{ width: "100%", height: "85vh", overflow: "auto" }}>
            {chatsList.map((chat) => (
              <ListItem key={chat.id}>
                <ListItemButton>
                  <Button onClick={() => createPopChatRequest(chat.id)}>
                    Pop
                  </Button>
                  <ListItemText>
                    <Link to={getChatByIdPath(chat.id)}>{chat.name}</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button onClick={() => createAddChatRequest()}>Add</Button>
        </Grid>
        <Grid item xs={9} className={styles.Messages}>
          <Switch>
            <Route
              path={getChatByIdPath()}
              render={() => <Chat name={chat.name} chat_id={chat.id} />}
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

export const Chats = chatsConnect(ChatsRender);
