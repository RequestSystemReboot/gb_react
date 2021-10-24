import { profileRef } from "../../firebase";
import auth from "firebase";

export const SET_USERNAME = "SET_USERNAME";

export const setUsername = (name) => ({
  type: SET_USERNAME,
  payload: name,
});

export const setUsernameRequest = (id, name) => async () => {
  await profileRef.child(id).set(name);
};

export const getUserName = (state) => state.profile.username;

export const fetchUsername = (user_id) => {
  return function (dispatch) {
    profileRef.on("value", (snapshot) => {
      if (snapshot.exists()) {
        if (user_id in snapshot.val()) {
          dispatch(setUsername(snapshot.val()[user_id]));
        }
        else {
          dispatch(setUsernameRequest(user_id, auth.currentUser.email.split("@")[0]))
        }
      }
    });
  };
};
