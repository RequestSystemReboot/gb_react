import React from "react";
import { Checkbox, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { SAMPLE_CHECK } from "../../store/profile/actionTypes";

export const Profile = () => {
  const dispatch = useDispatch();
  const ticked = useSelector((state) => {
    return state.ticked;
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <h2>Profile</h2>
      </Grid>
      <Grid item xs={12}>
        <Checkbox
          checked={ticked}
          onChange={() => {
            dispatch({
              type: SAMPLE_CHECK,
            });
          }}
        >
          Sample
        </Checkbox>
      </Grid>
    </Grid>
  );
};
