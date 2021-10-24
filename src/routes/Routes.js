import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import {
  getChatsPath,
  getChatByIdPath,
  getProfilePath,
  getCovidPath,
  getSignUpPath,
  getLoginPath,
} from "../navigation";
import { Chats } from "./Chats";
import { NotFound } from "./NotFound";
import { Covid } from "./Covid";
import { PublicRoute } from "../hocs/PublicRoute";
import { PrivateRoute } from "../hocs/PrivateRoute";
import { SignUp } from "./Auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth, initAuthAction } from "../store/user/reducer";
import { Login } from "./Auth/Login";

export const Routes = (props) => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthAction);
  }, []);

  return (
    <Switch>
      <PublicRoute
        auth={isAuth}
        path={getLoginPath()}
        component={() => <Login />}
      />

      <PublicRoute auth={isAuth} path={getSignUpPath()} component={SignUp} />
      <PrivateRoute auth={isAuth} path={getProfilePath()} component={Profile} />
      <Route exact path="/" component={() => <Home {...props} />} />

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
