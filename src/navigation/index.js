const composePath = (...args) =>
  args
    .map((item) => (typeof item === "function" ? item() : item.toString()))
    .join("/");

export const getHomePath = () => "";

export const getProfilePath = () => "/profile";

export const getCovidPath = () => "/covid";

export const getChatsPath = () => composePath(getHomePath(), "chats");

export const getChatByIdPath = (chatId = ":chatId") =>
  composePath(getChatsPath(), chatId);
