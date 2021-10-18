import { ADD_MESSAGE } from "./actions";

const initialState = {
  messages: {},
};
export const messagesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_MESSAGE: {
      const chat_id = action.chat_id;
      let newMessages = { ...state.messages };
      newMessages[chat_id] = [...(newMessages[chat_id] || []), action.payload];
      return {
        ...state,
        messages: newMessages,
      };
    }
    default: {
      return state;
    }
  }
};
