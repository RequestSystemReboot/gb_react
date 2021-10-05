import { SAMPLE_CHECK } from "./actionTypes";

const initialState = {
  ticked: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SAMPLE_CHECK: {
      return {
        ticked: !state.ticked,
      };
    }
    default: {
      return state;
    }
  }
};
