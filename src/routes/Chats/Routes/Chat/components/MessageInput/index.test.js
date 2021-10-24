import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MessageInput, MessageInputTestIds } from "./index";

describe("MessageInput", () => {
  it("вызов метода onSubmit по клику на кнопку", () => {
    const onSubmit = jest.fn();
    const onChange = jest.fn();

    const component = render(
      <MessageInput
        value={'test'}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    );

    const button = component.queryByTestId(MessageInputTestIds.submit);

    act(() => {
      fireEvent.click(button);
    });

    expect(onSubmit).toBeCalled();
  });

  it("ввод данных в поле сообщения", () => {
    const message = "Hello World!";
    const onSubmit = jest.fn();
    const onChange = jest.fn();

    const component = render(
      <MessageInput
          value={'test'}
          onSubmit={onSubmit}
          onChange={onChange}
      />
    );

    const field = component.queryByTestId(MessageInputTestIds.messageField).querySelector('input');

    act(() => {
      fireEvent.change(field, {
        target: {
          value: message,
        },
      });
    });

    expect(onChange).toHaveBeenLastCalledWith(message);
  });
});
