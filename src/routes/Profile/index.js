import React, {useCallback, useEffect, useState} from "react";
import { Button, Grid } from "@material-ui/core";
import {auth, profileRef} from "../../firebase";

export const Profile = () => {

  const [Name, setName] = useState('Unknown')

    const onProfileChange = useCallback((snapshot) => {
        if (auth.currentUser) {
            setName(snapshot.val()[auth.currentUser.uid])
        }
    }, []);

    useEffect(() => {
        profileRef.on("value", onProfileChange);
    }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <h2>Profile</h2>
      </Grid>
      <Grid item xs={12}>
        Your name: {Name}
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
    </Grid>
  );
};
