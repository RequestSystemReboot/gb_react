import { initialState, chatsReducer } from "../reducer";
import { chatsAddItem, chatsPopItem } from "../actions";

describe("chatsReducer", () => {
  it("вызов редьюсера без экшена вернет initialState", () => {
    const result = chatsReducer();
    expect(result).toEqual(initialState);
  });

  it("Чат добавляется", () => {
    const result = chatsReducer(
      undefined,
      chatsAddItem({
        id: `TestId`,
        name: "TestChat",
      })
    );

    expect(result).toEqual({
      chats: [
        {
          id: `TestId`,
          name: "TestChat",
        },
      ],
    });
  });

  it("чат удаляется из списка", () => {
    const chats = Array.from({
      length: 10,
    }).map((_, index) => ({
      id: `TestChatId-${index + 1}`,
      name: `TestChat-${index + 1}`,
    }));

    const chatsResult = Array.from({
      length: 9,
    }).map((_, index) => ({
      id: `TestChatId-${index + 1}`,
      name: `TestChat-${index + 1}`,
    }));

    const result = chatsReducer(
      {
        chats,
      },
      chatsPopItem("TestChatId-10")
    );

    expect(result).toEqual({
      chats: chatsResult,
    });
  });
});
