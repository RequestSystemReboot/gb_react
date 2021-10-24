import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import ReactJson from "react-json-view";
import { auth } from "../../firebase";
import Button from "@material-ui/core/Button";
import { getUser } from "../../store/user/reducer";
import {
  fetchUsername,
  getUserName,
  setUsernameRequest,
} from "../../store/profile/actions";

export const ProfileTestIDs = {
  title: "Profile-title",
  userGreet: "Profile-userGreet",
  UserChangeField: "Profile-UserChangeField",
  SubmitBtn: "SubmitBtn",
};

export const Profile = () => {
  const user = useSelector(getUser);
  const username = useSelector(getUserName);
  const currentUserId = auth.currentUser?.uid || null;
  const [NewUserName, setNewUserName] = useState(username);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsername(currentUserId));
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <h2 data-testid={ProfileTestIDs.title}>Profile</h2>
      </Grid>
      {user ? (
        <ReactJson src={user.toJSON()} name="User" collapsed={true} />
      ) : null}
      <Grid item xs={12}>
        <h4 data-testid={ProfileTestIDs.userGreet}>Welcome {username}!</h4>
        <TextField
          data-testid={ProfileTestIDs.UserChangeField}
          label="UserName"
          variant="outlined"
          onChange={(e) => setNewUserName(e.target.value)}
        />

        <Button
          data-testid={ProfileTestIDs.SubmitBtn}
          onClick={() => dispatch(setUsernameRequest(currentUserId, NewUserName))}
        >
          Submit
        </Button>
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
