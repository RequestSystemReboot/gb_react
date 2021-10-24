import { messagesRef } from "../../firebase";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_MESSAGES_OBJ = "ADD_MESSAGES_OBJ";

export const createAddMessage = (chat_id, message) => ({
  type: ADD_MESSAGE,
  chat_id: chat_id,
  payload: message,
});

export const messagesAddObj = (messages) => ({
  type: ADD_MESSAGES_OBJ,
  payload: messages,
});

export const createAddMessageRequest = (username, chatId, messageText) => async () => {
  const date = new Date().getTime();
  const HumanMessage = {
    id: date + username,
    text: messageText,
    author: username,
    date: date,
    color: "blue",
  };
  messagesRef.child(chatId).push(HumanMessage);

  const RobotMessage = {
    id: date + "Robot",
    text: messageText + " Got it "+ username + "!",
    author: "Robot",
    date: date,
    color: "red",
  };
  setTimeout(() => {
    messagesRef.child(chatId).push(RobotMessage);
  }, 2000);
};

export const fetchMessages = () => {
  return function (dispatch) {
    messagesRef.on("value", (snapshot) => {
      if (snapshot.exists()) {
        let result = {};
        Object.entries(snapshot.val()).forEach(([chat_id, messages]) => {
          result[chat_id] = [];
          Object.entries(messages).forEach(([key, message]) => {
            result[chat_id].push(message);
          });
        });
        dispatch(messagesAddObj(result));
      }
    });
  };
};
