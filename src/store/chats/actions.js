import {chatsRef, messagesRef} from "../../firebase";
import faker from "faker";

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

export const createAddChatRequest = () => async () => {
  await chatsRef.child(faker.datatype.uuid()).set(faker.vehicle.manufacturer());
};

export const createPopChatRequest = (chat_id) => async () => {
  await chatsRef.child(chat_id).remove();
  await messagesRef.child(chat_id).remove();
};

export const fetchChats = () => {
  return function (dispatch) {
    chatsRef.on("value", (snapshot) => {
      if (snapshot.exists()) {
        let chats = [];
        Object.entries(snapshot.val()).forEach(([key, value]) => {
          chats.push({ id: key, name: value });
        });
        dispatch(chatsAddList(chats));
      }
    });
  };
};
