export const MESSAGES_ADD_ITEM = "MESSAGES_ADD_ITEM";

export const messagesAddItem = (chat_id, message) => ({
  type: MESSAGES_ADD_ITEM,
  chat_id: chat_id,
  payload: message,
});
