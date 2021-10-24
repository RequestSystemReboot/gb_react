import { CHATS_ADD_ITEM, CHATS_ADD_LIST, CHATS_POP_ITEM } from "./actions";

const initialState = {
  chats: [],
};
export const chatsReducer = (state = initialState, action) => {
  switch (action?.type) {
    case CHATS_ADD_ITEM: {
      return {
        ...state,
        chats: [...state.chats, action.payload],
      };
    }
    case CHATS_POP_ITEM: {
      const newChats = state.chats.filter((item) => item.id !== action.payload);

      return {
        ...state,
        chats: newChats,
      };
    }
    case CHATS_ADD_LIST: {
      return {
        ...state,
        chats: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
