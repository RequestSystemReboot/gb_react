import { SET_USERNAME } from "./actions";

const initialState = {
  ticked: false,
  username: ''
};

export const profileReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_USERNAME: {
      return {
        username: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
