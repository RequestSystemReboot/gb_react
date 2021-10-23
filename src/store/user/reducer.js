import {auth, profileRef} from "../../firebase";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUserAction = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logoutUserAction = () => ({
    type: LOGOUT_USER
});

export const initAuthAction = (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch(loginUserAction(user));
            profileRef.child(user.uid).get().then((snapshot) => {
                if (snapshot.exists()) {
                    console.log('User exists, name: ', snapshot.val());
                } else {
                    profileRef.child(user.uid).set(user.email.split("@")[0])
                }
            })
        } else {
            dispatch(logoutUserAction());
        }
    });
};

const initialState = {
    user: null
};

export const getUser = (state) => state.user.user;
export const getIsAuth = (state) => state.user.user !== null;

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                user: action.payload
            };
        }
        case LOGOUT_USER: {
            return {
                user: null
            };
        }
        default: {
            return state;
        }
    }
};
