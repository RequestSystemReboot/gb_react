import React from "react";
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
import { Chat } from "./Routes/Chat";
import { getChatByIdPath, getChatsPath } from "../../navigation";
import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";

export const Chats = ({
  ChatItems,
  setDarkTheme,
  DarkTheme,
  AddChat,
  DeleteChat,
}) => {
  const { chatId } = useParams();

  const chat = ChatItems.find(({ id }) => id === chatId);

  if (chatId && !chat) {
    return <Redirect to={getChatsPath()} />;
  }

  return (
    <Container fixed>
      <Grid container spacing={1} className={styles.App}>
        <Grid item xs={3} className={styles.ChatList}>
          <List sx={{ width: "100%", height: "85vh", overflow: "auto" }}>
            {ChatItems.map((chat) => (
              <ListItem key={chat.id}>
                <ListItemButton>
                  <ListItemText>
                    <Link to={getChatByIdPath(chat.id)}>{chat.name}</Link>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button onClick={() => AddChat()}>Add</Button>
          <Button onClick={() => DeleteChat()}>Pop</Button>
        </Grid>
        <Grid item xs={9} className={styles.Messages}>
          <Switch>
            <Route
              path={getChatByIdPath()}
              render={() => <Chat key={chatId} name={chat.name} />}
            />
          </Switch>
        </Grid>
        <Grid item xs={2}>
          <FormGroup>
            <FormControlLabel
              control={
                <UISwitch
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
