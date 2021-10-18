import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import {
  getChatsPath,
  getChatByIdPath,
  getProfilePath,
  getCovidPath,
} from "../navigation";
import { Chats } from "./Chats";
import { NotFound } from "./NotFound";
import { Covid } from "./Covid";

export const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home {...props} />} />
      <Route path={getProfilePath()} component={Profile} />
      <Route path={getCovidPath()} component={Covid} />
      <Route
        exact
        path={getChatsPath()}
        component={() => <Chats {...props} />}
      />
      <Route path={getChatByIdPath()} render={() => <Chats {...props} />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
