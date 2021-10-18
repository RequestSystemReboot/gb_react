export const ADD_MESSAGE = "ADD_MESSAGE";

export const createAddMessage = (chat_id, message) => ({
  type: ADD_MESSAGE,
  chat_id: chat_id,
  payload: message,
});

export const createAddMessageRequest =
  (chatId, messageText) => async (dispatch) => {
    const date = new Date().getTime();
    const HumanMessage = {
      id: date + "Human",
      text: messageText,
      author: "Human",
      date: date,
      color: "blue",
    };
    dispatch(createAddMessage(chatId, HumanMessage));
    const RobotMessage = {
      id: date + "Robot",
      text: messageText + " Got it Bro!",
      author: "Robot",
      date: date,
      color: "red",
    };
    setTimeout(() => {
      dispatch(createAddMessage(chatId, RobotMessage));
    }, 2000);
  };
