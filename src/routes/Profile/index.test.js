import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Profile, ProfileTestIDs } from "./index";
import {Provider, useDispatch} from "react-redux";
import {setUsername} from "../../store/profile/actions";
import {store} from "../../store/store";


const FakeUserName = ({username}) => {
  const dispatch = useDispatch();
  dispatch(setUsername(username))
  return <div/>
}

describe("Profile", () => {
  it("корректный заголовок", () => {
    const component = render(<Provider store={store}><Profile/></Provider>);

    expect(
        component.queryByTestId(ProfileTestIDs.title)
    ).toHaveTextContent("Profile");
  });

  it("отображение UserName", () => {

    let username = 'TestUser'

    const component = render(<Provider store={store}><FakeUserName username={username}/><Profile/></Provider>);
    expect(
        component.queryByTestId(ProfileTestIDs.userGreet)
    ).toHaveTextContent(username);

  });

})


