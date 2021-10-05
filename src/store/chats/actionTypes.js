export const CHATS_ADD_ITEM = "CHATS_ADD_ITEM";

export const CHATS_ADD_LIST = "CHATS_ADD_LIST";

export const CHATS_POP_ITEM = "CHATS_POP_ITEM";

export const chatsAddItem = (chat) => ({
  type: CHATS_ADD_ITEM,
  payload: chat,
});

export const chatsAddList = (chats) => ({
  type: CHATS_ADD_LIST,
  payload: chats,
});

export const chatsPopItem = (chatId) => ({
  type: CHATS_POP_ITEM,
  payload: chatId,
});
