import React, {useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import {
  getChatsPath,
  getChatByIdPath,
  getProfilePath,
  getCovidPath,
  getLoginPath,
  getSignUpPath,
} from "../navigation";
import { Chats } from "./Chats";
import { NotFound } from "./NotFound";
import { Covid } from "./Covid";
import { Login } from "./Auth/Login";
import { SignUp } from "./Auth/SignUp";
import {PrivateRoute, PublicRoute} from "../hocs";
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth, initAuthAction} from "../store/user/reducer";

export const Routes = (props) => {

    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initAuthAction);
    }, []);

  return (
    <Switch>
      <Route exact path="/" component={() => <Home {...props} />} />
      <Route path={getLoginPath()} component={Login} />
      <Route path={getSignUpPath()} component={SignUp} />
      <Route path={getProfilePath()} component={Profile} />
      <Route path={getCovidPath()} component={Covid} />
      <Route
        exact
        path={getChatsPath()}
        component={() => <Chats {...props} />}
      />
      <Route path={getChatByIdPath()} render={() => <Chats {...props} />} />
      <Route path="*" component={NotFound} />
        <PublicRoute
            auth={isAuth}
            path={"/login"}
            component={() => <Login />}
        />

        <PublicRoute auth={isAuth} path={"/signup"} component={SignUp} />
        <PrivateRoute auth={isAuth} path={"/profile"} component={Profile} />


    </Switch>
  );
};
