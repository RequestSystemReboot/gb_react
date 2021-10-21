import React from "react";
import {
  Container,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
} from "@material-ui/core";
import {
  getChatsPath,
  getCovidPath,
  getLoginPath,
  getProfilePath,
  getSignUpPath,
} from "../../navigation";
import { Link as RouterLink } from "react-router-dom";

export const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List sx={{ width: "100%" }}>
            <ListItem>
              <Link component={RouterLink} to={getLoginPath()}>
                Login
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to={getSignUpPath()}>
                Sign Up
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link component={RouterLink} to={getProfilePath()}>
                Profile
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to={getCovidPath()}>
                Covid
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to={getChatsPath()}>
                Chats
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};
