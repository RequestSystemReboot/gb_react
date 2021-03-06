import React, {useEffect, useState} from "react";
import {Grid, TextField} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ReactJson from "react-json-view";
import { auth } from "../../firebase";
import Button from "@material-ui/core/Button";
import { getUser } from "../../store/user/reducer";
import {fetchUsername, getUserName, setUsernameRequest} from "../../store/profile/actions";

export const Profile = () => {
  const user = useSelector(getUser);
  const username = useSelector(getUserName);
  const [NewUserName, setNewUserName] = useState(username)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsername(auth.currentUser.uid));
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <h2>Profile</h2>
      </Grid>
      <ReactJson src={user.toJSON()} name="User" collapsed={true} />
      <Grid item xs={12}>
        <h4>Welcome {username}!</h4>
          <TextField
              label="UserName"
              variant="outlined"
              onChange={(e) => setNewUserName(e.target.value)}
          />

          <Button onClick={() => dispatch(setUsernameRequest(auth.currentUser.uid, NewUserName))}>Submit</Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={() => {
            auth.signOut();
          }}
        >
          Logout
        </Button>
      </Grid>
    </Grid>
  );
};
