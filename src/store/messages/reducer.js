import { MESSAGES_ADD_ITEM } from "./actionTypes";

const initialState = {
  messages: {},
};
export const messagesReducer = (state = initialState, action) => {
  switch (action?.type) {
    case MESSAGES_ADD_ITEM: {
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
