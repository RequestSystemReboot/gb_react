import { SET_ERROR_COVID, SET_DATA_COVID, SET_LOADING_COVID } from "./action";

const initialState = {
  isError: false,
  isLoading: false,
  data: null,
};

export const COVIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_COVID: {
      return { ...state, isLoading: action.payload };
    }

    case SET_ERROR_COVID: {
      return { ...state, isError: action.payload };
    }

    case SET_DATA_COVID: {
      return { ...state, data: action.payload };
    }

    default: {
      return state;
    }
  }
};
