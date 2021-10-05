export const chatsSelector = (state) => state.chats || {};
export const chatsListSelector = (state) => chatsSelector(state).chats;
