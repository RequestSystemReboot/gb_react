import React from "react";
import {
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
} from "@material-ui/core";
import { getChatByIdPath, getProfilePath } from "../../navigation";
import { Link as RouterLink } from "react-router-dom";
import {useSelector} from "react-redux";
import {chatsListSelector} from "../../store/chats/selectors";

export const Home = () => {

  const chatsList = useSelector(chatsListSelector)

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List sx={{ width: "100%" }}>
            <ListItem>
              <Link component={RouterLink} to={getProfilePath()}>
                Profile
              </Link>
            </ListItem>
            <Divider />
            {chatsList.map((chat) => (
              <ListItem key={chat.id}>
                <Link component={RouterLink} to={getChatByIdPath(chat.id)}>
                  {chat.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};
